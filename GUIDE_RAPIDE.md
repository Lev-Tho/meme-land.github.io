# 🎭 MEME COLLECTION - Guide Rapide

## 🎯 Concept

Un site de memes organisés par **émotions** avec un système ultra-simple d'ajout automatique.

### 📂 Organisation par émotions

- 😳 **Gênant** - Ces moments où tu veux disparaître
- 🤪 **Bête/Absurde** - Quand le cerveau fait n'importe quoi
- 😭 **Triste/Relatable** - La vie en vrai
- 😂 **Hilarant** - Tu vas pleurer de rire
- 🔥 **Savage/Roast** - Ça brûle sévère
- 💀 **Dark Humor** - Humour noir, très noir
- ✨ **Wholesome** - Memes qui font du bien

---

## 🚀 INSTALLATION (5 minutes)

### Étape 1 : Créer le repository GitHub

1. Allez sur https://github.com
2. Créez un repository public nommé : `Lev-Tho.github.io`
3. Ne cochez rien, créez juste le repository vide

### Étape 2 : Cloner le repository

```bash
cd /Users/mal/Documents/GitHub/
git clone https://github.com/Lev-Tho/Lev-Tho.github.io.git
```

### Étape 3 : Copier tous les fichiers

Copiez **TOUS** les fichiers téléchargés dans :
```
/Users/mal/Documents/GitHub/Lev-Tho.github.io/
```

Vous devez avoir :
- `index.html`
- `gallery.html`
- `style.css`
- `home.js`
- `gallery.js`
- `generate_json.py`
- `update.sh`
- `.gitignore`
- `memes.json`

### Étape 4 : Première publication

```bash
cd /Users/mal/Documents/GitHub/Lev-Tho.github.io
git add .
git commit -m "🎭 Meme Collection - Setup"
git push origin main
```

Votre site de base sera en ligne à : `https://lev-tho.github.io`

---

## 📸 AJOUTER DES MEMES

### Structure des dossiers

Après la première publication, vous aurez cette structure :

```
Lev-Tho.github.io/
├── memes/
│   ├── genants/     ← Memes gênants ici
│   ├── bete/        ← Memes bêtes ici
│   ├── triste/      ← Memes tristes ici
│   ├── hilarant/    ← Memes hilarants ici
│   ├── savage/      ← Memes savage ici
│   ├── dark/        ← Memes dark ici
│   └── wholesome/   ← Memes wholesome ici
└── update.sh
```

### Processus ultra-simple

#### 1. Glissez vos memes dans les bons dossiers

Par exemple :
```bash
# Copiez vos memes dans les catégories appropriées
cp ~/Downloads/meme_drole.jpg memes/hilarant/
cp ~/Downloads/meme_gene.png memes/genants/
cp ~/Downloads/meme_dark.jpg memes/dark/
```

Ou utilisez le Finder : glissez-déposez vos images dans les dossiers.

#### 2. Lancez le script magique

```bash
cd /Users/mal/Documents/GitHub/Lev-Tho.github.io
./update.sh
```

C'est **TOUT** ! Le script va :
1. ✅ Scanner automatiquement tous vos memes
2. ✅ Générer le fichier `memes.json`
3. ✅ Vous demander si vous voulez publier
4. ✅ Publier sur GitHub

#### 3. Attendez 1 minute

Votre site sera mis à jour automatiquement sur `https://lev-tho.github.io`

---

## 🎨 FONCTIONNALITÉS DU SITE

### Navigation
- ✅ Page d'accueil avec toutes les catégories
- ✅ Compteur de memes par catégorie
- ✅ Galerie filtrée par émotion
- ✅ Mode "Tout mélangé" pour voir tous les memes

### Dans la galerie
- ✅ **Mélange aléatoire** à chaque chargement
- ✅ **Bouton "Mélanger"** pour réorganiser sans recharger
- ✅ **Lightbox** - Cliquez sur un meme pour l'agrandir
- ✅ **Navigation** - Flèches gauche/droite ou ← →
- ✅ **Partage** - Copie l'URL directe de l'image
  - Collez sur Discord/WhatsApp/iMessage
  - L'image s'affichera directement !
- ✅ **Téléchargement** - Sauvegardez le meme
- ✅ **Responsive** - Fonctionne sur mobile/tablette/PC

### Navigation clavier
- **Flèche gauche** : Meme précédent
- **Flèche droite** : Meme suivant
- **Échap** : Fermer le lightbox

---

## 📋 WORKFLOW QUOTIDIEN

### Ajouter de nouveaux memes

```bash
# 1. Copiez vos nouveaux memes dans les bons dossiers
cp ~/Downloads/*.jpg memes/hilarant/

# 2. Lancez le script
./update.sh

# 3. Tapez 'o' quand il demande si vous voulez publier

# 4. C'est tout !
```

Le site sera mis à jour en 1 minute.

---

## 💡 ASTUCES

### Renommer vos memes facilement

Vous pouvez garder les noms originaux OU les renommer comme vous voulez :

```bash
# Exemples de noms
memes/hilarant/
  ├── chat_drole.jpg
  ├── reaction_mdr.png
  └── blague_sombre.gif

memes/genants/
  ├── awkward_moment.jpg
  └── cringe_max.png
```

Le script gère n'importe quel nom de fichier !

### Déplacer un meme de catégorie

Utilisez simplement le Finder :
1. Déplacez le fichier d'un dossier à l'autre
2. Lancez `./update.sh`
3. Publier

### Supprimer un meme

1. Supprimez le fichier du dossier
2. Lancez `./update.sh`
3. Publier

---

## 🆘 DÉPANNAGE

### Le script ./update.sh ne fonctionne pas

Rendez-le exécutable :
```bash
chmod +x update.sh
```

### "Permission denied" lors du git push

Configurez Git avec vos identifiants GitHub :
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"
```

### Les images ne s'affichent pas

1. Vérifiez que `memes.json` existe et n'est pas vide
2. Vérifiez que vos images sont bien dans les dossiers `memes/categorie/`
3. Ouvrez la console du navigateur (F12) pour voir les erreurs

### Le site ne se met pas à jour

1. Attendez 2 minutes (GitHub Pages prend du temps)
2. Videz le cache du navigateur (Cmd+Shift+R)
3. Vérifiez sur GitHub que les fichiers sont bien uploadés

---

## 🎯 EXEMPLE COMPLET

```bash
# 1. Téléchargez 5 memes drôles d'Internet

# 2. Copiez-les dans le bon dossier
cd /Users/mal/Documents/GitHub/Lev-Tho.github.io
cp ~/Downloads/meme1.jpg memes/hilarant/
cp ~/Downloads/meme2.png memes/hilarant/
cp ~/Downloads/meme3.gif memes/savage/
cp ~/Downloads/meme4.jpg memes/dark/
cp ~/Downloads/meme5.png memes/wholesome/

# 3. Mettez à jour le site
./update.sh
# Répondez 'o' pour publier

# 4. Attendez 1 minute

# 5. Allez sur https://lev-tho.github.io
# 6. Admirez vos memes organisés par émotion !
```

---

## 📚 STRUCTURE COMPLÈTE

```
Lev-Tho.github.io/
├── index.html           # Page d'accueil avec catégories
├── gallery.html         # Page galerie
├── style.css            # Design dark mode
├── home.js              # JavaScript accueil
├── gallery.js           # JavaScript galerie
├── memes.json           # Généré automatiquement
├── generate_json.py     # Script de génération
├── update.sh            # Script magique ✨
├── .gitignore          # Fichiers à ignorer
└── memes/              # VOS MEMES ICI
    ├── genants/
    ├── bete/
    ├── triste/
    ├── hilarant/
    ├── savage/
    ├── dark/
    └── wholesome/
```

---

## 🌟 PROFITEZ !

Votre collection de memes personnelle est prête !

**URL de votre site :** `https://lev-tho.github.io`

Ajoutez des memes quand vous voulez, lancez `./update.sh`, et c'est tout ! 🚀
