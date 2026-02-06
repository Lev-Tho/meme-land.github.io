// Charge le nombre de memes par catégorie
async function loadMemeCounts() {
    try {
        const response = await fetch('memes.json');
        if (!response.ok) {
            console.log('memes.json pas encore généré');
            return;
        }
        
        const data = await response.json();
        
        // Compte les memes par catégorie
        const counts = {
            genants: data.genants?.length || 0,
            bete: data.bete?.length || 0,
            triste: data.triste?.length || 0,
            hilarant: data.hilarant?.length || 0,
            savage: data.savage?.length || 0,
            dark: data.dark?.length || 0,
            wholesome: data.wholesome?.length || 0
        };
        
        // Total
        const total = Object.values(counts).reduce((a, b) => a + b, 0);
        counts.all = total;
        
        // Met à jour les compteurs
        for (const [cat, count] of Object.entries(counts)) {
            const elem = document.getElementById(`count-${cat}`);
            if (elem) {
                elem.textContent = `${count} meme${count > 1 ? 's' : ''}`;
            }
        }
        
    } catch (error) {
        console.error('Erreur chargement memes.json:', error);
    }
}

// Charge au démarrage
document.addEventListener('DOMContentLoaded', loadMemeCounts);
