// Variables globales
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const toast = document.getElementById("toast");
let memes = [];
let currentIndex = 0;
let currentCategory = 'all';

// Titres et emojis par catégorie
const categoryInfo = {
    genants: { emoji: '😳', title: 'Gênant' },
    bete: { emoji: '🤪', title: 'Bête / Absurde' },
    triste: { emoji: '😭', title: 'Triste / Relatable' },
    hilarant: { emoji: '😂', title: 'Hilarant' },
    savage: { emoji: '🔥', title: 'Savage / Roast' },
    dark: { emoji: '💀', title: 'Dark Humor' },
    wholesome: { emoji: '✨', title: 'Wholesome' },
    all: { emoji: '🎲', title: 'Tout Mélangé' }
};

// Récupère la catégorie depuis l'URL
function getCategory() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat') || 'all';
}

// Shuffle
function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Affiche les memes
function displayMemes(memesToDisplay) {
    if (!gallery) return;
    
    gallery.innerHTML = '';
    
    if (!memesToDisplay || memesToDisplay.length === 0) {
        gallery.innerHTML = `
            <div class="loading">
                <p>Aucun meme dans cette catégorie 😢</p>
                <p style="margin-top: 1rem;"><a href="index.html" style="color: var(--accent);">← Retour aux catégories</a></p>
            </div>
        `;
        return;
    }
    
    memesToDisplay.forEach((meme, index) => {
        const container = document.createElement("div");
        container.className = "meme-container";
        container.dataset.index = index;
        
        const img = document.createElement("img");
        img.src = meme.path;
        img.alt = meme.name;
        img.loading = "lazy";
        
        img.onerror = function() {
            console.error(`❌ Meme non trouvé: ${meme.path}`);
            container.style.display = 'none';
        };
        
        container.addEventListener('click', () => openLightbox(index));
        
        container.appendChild(img);
        gallery.appendChild(container);
    });
    
    updateMemeCount(memesToDisplay.length);
}

// Met à jour le compteur
function updateMemeCount(count) {
    const elem = document.getElementById('memeCount');
    if (elem) {
        elem.textContent = `${count} meme${count > 1 ? 's' : ''}`;
    }
}

// Met à jour le titre
function updateTitle() {
    const titleElem = document.getElementById('categoryTitle');
    if (titleElem && categoryInfo[currentCategory]) {
        const info = categoryInfo[currentCategory];
        titleElem.textContent = `${info.emoji} ${info.title}`;
    }
}

// Charge les memes
async function loadMemes() {
    try {
        currentCategory = getCategory();
        updateTitle();
        
        if (gallery) {
            gallery.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                    <p>Chargement des memes...</p>
                </div>
            `;
        }
        
        const response = await fetch('memes.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Filtre par catégorie
        let memesToShow = [];
        if (currentCategory === 'all') {
            // Combine toutes les catégories
            for (const cat in data) {
                if (Array.isArray(data[cat])) {
                    memesToShow = memesToShow.concat(data[cat]);
                }
            }
        } else if (data[currentCategory]) {
            memesToShow = data[currentCategory];
        }
        
        // Mélange
        memes = shuffle(memesToShow);
        displayMemes(memes);
        
        console.log(`✅ ${memes.length} memes chargés`);
        
    } catch (error) {
        console.error('❌ Erreur chargement:', error);
        
        if (gallery) {
            gallery.innerHTML = `
                <div class="loading">
                    <p>Erreur de chargement 😢</p>
                    <p style="margin-top: 1rem;">Le fichier memes.json n'existe pas encore.</p>
                    <p style="margin-top: 0.5rem; font-size: 0.9rem;">Ajoutez des memes et lancez ./update.sh</p>
                </div>
            `;
        }
    }
}

// Bouton mélanger
document.getElementById('shuffleBtn')?.addEventListener('click', () => {
    if (memes.length > 0) {
        memes = shuffle(memes);
        displayMemes(memes);
        
        const btn = document.getElementById('shuffleBtn');
        btn.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            btn.style.transform = 'rotate(0deg)';
        }, 300);
    }
});

// Lightbox
function openLightbox(index) {
    currentIndex = index;
    if (lightbox && lightboxImg && memes[index]) {
        lightboxImg.src = memes[index].path;
        lightboxImg.alt = memes[index].name;
        lightbox.classList.add('active');
        updateLightboxCounter();
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function nextMeme() {
    currentIndex = (currentIndex + 1) % memes.length;
    openLightbox(currentIndex);
}

function prevMeme() {
    currentIndex = (currentIndex - 1 + memes.length) % memes.length;
    openLightbox(currentIndex);
}

function updateLightboxCounter() {
    const counter = document.getElementById('lightboxCounter');
    if (counter) {
        counter.textContent = `${currentIndex + 1} / ${memes.length}`;
    }
}

// Contrôles lightbox
document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
document.querySelector('.lightbox-prev')?.addEventListener('click', prevMeme);
document.querySelector('.lightbox-next')?.addEventListener('click', nextMeme);

lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Clavier
document.addEventListener('keydown', (e) => {
    if (lightbox?.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevMeme();
        if (e.key === 'ArrowRight') nextMeme();
    }
});

// Partage - copie l'URL complète de l'image
document.getElementById('shareBtn')?.addEventListener('click', async () => {
    if (!memes[currentIndex]) return;
    
    // URL complète de l'image sur GitHub Pages
    const imageUrl = window.location.origin + '/' + memes[currentIndex].path;
    
    try {
        await navigator.clipboard.writeText(imageUrl);
        showToast('✅ Lien copié ! Collez-le sur Discord/WhatsApp pour partager le meme');
    } catch (err) {
        // Fallback pour les navigateurs plus anciens
        const textArea = document.createElement('textarea');
        textArea.value = imageUrl;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast('✅ Lien copié !');
        } catch (err2) {
            showToast('❌ Erreur de copie');
        }
        document.body.removeChild(textArea);
    }
});

// Téléchargement
document.getElementById('downloadBtn')?.addEventListener('click', () => {
    if (memes[currentIndex]) {
        const link = document.createElement('a');
        link.href = memes[currentIndex].path;
        link.download = memes[currentIndex].name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('💾 Téléchargement en cours...');
    }
});

// Toast notification
function showToast(message) {
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Init
document.addEventListener('DOMContentLoaded', loadMemes);
