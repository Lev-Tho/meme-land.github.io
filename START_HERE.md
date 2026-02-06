# 🎭 MEME COLLECTION - Installation Ultra-Simple

## ✅ FICHIERS INCLUS

Votre site de memes complet est prêt ! Voici ce que vous avez :

### 📄 Fichiers du site
- ✅ `index.html` - Page d'accueil avec catégories par émotions
- ✅ `gallery.html` - Galerie avec lightbox
- ✅ `style.css` - Design dark mode moderne
- ✅ `home.js` + `gallery.js` - Toutes les fonctionnalités
- ✅ `memes.json` - Base de données (vide pour l'instant)

### 🛠️ Outils magiques
- ✅ `update.sh` - **SCRIPT PRINCIPAL** - Lance ça et tout se fait auto !
- ✅ `generate_json.py` - Scanne vos memes automatiquement
- ✅ `.gitignore` - Configuration Git

### 📚 Documentation
- ✅ `GUIDE_RAPIDE.md` - **À LIRE EN PREMIER** - Guide complet
- ✅ `README.md` - Documentation détaillée

---

## 🚀 INSTALLATION EN 3 ÉTAPES

### 1️⃣ Créez le repository GitHub (2 min)

1. Allez sur https://github.com
2. Cliquez sur "New repository"
3. Nommez-le **exactement** : `Lev-Tho.github.io`
4. Cochez "Public"
5. Ne cochez RIEN d'autre
6. Cliquez "Create repository"

### 2️⃣ Clonez le repository (30 sec)

Ouvrez le Terminal :

```bash
cd /Users/mal/Documents/GitHub/
git clone https://github.com/Lev-Tho/Lev-Tho.github.io.git
```

### 3️⃣ Copiez tous les fichiers téléchargés (1 min)

Copiez **TOUS** les fichiers que vous avez téléchargés dans :

```
/Users/mal/Documents/GitHub/Lev-Tho.github.io/
```

Vous pouvez utiliser le Finder ou le Terminal :

```bash
# Si vos fichiers sont dans ~/Downloads/meme-site/
cp -r ~/Downloads/meme-site/* /Users/mal/Documents/GitHub/Lev-Tho.github.io/
```

---

## 📤 PREMIÈRE PUBLICATION

```bash
cd /Users/mal/Documents/GitHub/Lev-Tho.github.io

git add .
git commit -m "🎭 Setup Meme Collection"
git push origin main
```

**Votre site sera en ligne dans 1-2 minutes à :**
```
https://lev-tho.github.io
```

---

## 📸 AJOUTER VOS PREMIERS MEMES

### Étape 1 : Les dossiers sont déjà créés

Après la première publication, vous avez cette structure :

```
Lev-Tho.github.io/
└── memes/
    ├── genants/     😳 Memes gênants
    ├── bete/        🤪 Memes bêtes/absurdes
    ├── triste/      😭 Memes tristes/relatable
    ├── hilarant/    😂 Memes hilarants
    ├── savage/      🔥 Memes savage/roast
    ├── dark/        💀 Memes dark humor
    └── wholesome/   ✨ Memes wholesome
```

### Étape 2 : Glissez vos memes dans les bons dossiers

Utilisez le Finder ou le Terminal :

```bash
cd /Users/mal/Documents/GitHub/Lev-Tho.github.io

# Exemple : ajoutez des memes
cp ~/Downloads/meme_drole1.jpg memes/hilarant/
cp ~/Downloads/meme_drole2.png memes/hilarant/
cp ~/Downloads/meme_gene.jpg memes/genants/
cp ~/Downloads/meme_dark.gif memes/dark/
```

### Étape 3 : LANCEZ LE SCRIPT MAGIQUE ✨

```bash
./update.sh
```

**C'est TOUT !** Le script va :
1. Scanner tous vos memes
2. Générer automatiquement `memes.json`
3. Vous demander si vous voulez publier
4. Publier sur GitHub si vous dites oui

Tapez `o` quand il demande si vous voulez publier.

**Attendez 1 minute**, puis allez sur `https://lev-tho.github.io` 🎉

---

## 🎯 WORKFLOW QUOTIDIEN (SUPER SIMPLE)

À chaque fois que vous voulez ajouter des memes :

```bash
# 1. Copiez vos nouveaux memes dans les bons dossiers
cp ~/Downloads/*.jpg memes/hilarant/

# 2. Lancez le script
cd /Users/mal/Documents/GitHub/Lev-Tho.github.io
./update.sh

# 3. Tapez 'o' pour publier

# 4. Attendez 1 minute, rechargez votre site
```

**C'EST TOUT !** Pas besoin de toucher au code, pas besoin de modifier le JSON manuellement. Le script fait TOUT automatiquement.

---

## ✨ CE QUE FAIT VOTRE SITE

### Page d'accueil
- 📊 Affiche les 7 catégories d'émotions
- 📈 Compte automatiquement combien de memes par catégorie
- 🎨 Design moderne dark mode

### Galerie
- 🎲 Memes mélangés aléatoirement à chaque visite
- 🔄 Bouton pour remélanger sans recharger
- 🖼️ Lightbox : cliquez sur un meme pour l'agrandir
- 📋 **Partage** : Bouton "Copier le lien"
  - Copie l'URL directe de l'image
  - Collez sur Discord/WhatsApp/iMessage
  - **L'image s'affiche directement !** (pas juste un lien)
- 💾 Bouton télécharger
- ⌨️ Navigation clavier (← → et Échap)

---

## 🆘 AIDE RAPIDE

### Le script ./update.sh ne marche pas

```bash
chmod +x update.sh
```

### Je ne sais pas où mettre mes memes

Mettez-les dans les dossiers `memes/categorie/` selon l'émotion.
Par exemple : un meme drôle va dans `memes/hilarant/`

### Le site ne se met pas à jour

1. Attendez 2 minutes (GitHub prend du temps)
2. Videz le cache : Cmd+Shift+R
3. Vérifiez que vous avez bien fait `git push`

### Les images ne s'affichent pas sur le site

1. Ouvrez la console du navigateur (F12)
2. Vérifiez que `memes.json` existe et n'est pas vide
3. Relancez `./update.sh`

---

## 📚 BESOIN DE PLUS DE DÉTAILS ?

Lisez **GUIDE_RAPIDE.md** pour :
- 📖 Explications complètes
- 💡 Astuces et conseils
- 🔧 Solutions aux problèmes
- 🎨 Personnalisation

---

## 🎉 PROFITEZ !

Votre collection personnelle de memes est prête !

**Votre site :** `https://lev-tho.github.io`

Ajoutez des memes quand vous voulez, lancez `./update.sh`, c'est tout ! 🚀

---

**Questions ? Consultez GUIDE_RAPIDE.md**
