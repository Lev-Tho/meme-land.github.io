# 🎭 Meme Collection

Site personnel de collection de memes organisés par émotions, hébergé sur GitHub Pages.

![Meme Collection](https://img.shields.io/badge/Memes-Collection-ff3366)
![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub_Pages-success)
![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red)

## 🎯 Concept

Un site moderne et responsive pour stocker et partager vos memes préférés, organisés par catégories émotionnelles.

### 📂 Catégories

- 😳 **Gênant** - Moments awkward et cringe
- 🤪 **Bête/Absurde** - Humour absurde et random
- 😭 **Triste/Relatable** - Memes qui font mal tellement c'est vrai
- 😂 **Hilarant** - Les plus drôles
- 🔥 **Savage/Roast** - Roasts et punchlines
- 💀 **Dark Humor** - Humour noir
- ✨ **Wholesome** - Memes positifs et réconfortants

## ✨ Fonctionnalités

- 🎲 **Mélange aléatoire** - Ordre différent à chaque visite
- 🔄 **Bouton mélanger** - Réorganise sans recharger
- 🖼️ **Lightbox** - Vue agrandie des memes
- 📋 **Partage facile** - Copie l'URL directe de l'image
- 💾 **Téléchargement** - Sauvegarde des memes
- ⌨️ **Navigation clavier** - Flèches et Échap
- 📱 **Responsive** - Mobile, tablette, desktop
- 🌙 **Dark mode** - Design sombre et moderne

## 🚀 Installation

### Prérequis

- Un compte GitHub
- Git installé
- Python 3

### Setup rapide

1. **Créer le repository**
   ```bash
   # Sur GitHub, créez un repository nommé: votre-username.github.io
   ```

2. **Cloner**
   ```bash
   git clone https://github.com/votre-username/votre-username.github.io.git
   cd votre-username.github.io
   ```

3. **Copier les fichiers**
   - Copiez tous les fichiers du projet dans le repository

4. **Publier**
   ```bash
   git add .
   git commit -m "🎭 Setup Meme Collection"
   git push origin main
   ```

5. **Activer GitHub Pages**
   - Settings → Pages → Source: main branch

Votre site sera disponible à `https://votre-username.github.io`

## 📸 Ajouter des memes

### Méthode simple

1. **Glissez vos memes** dans les dossiers appropriés :
   ```
   memes/
   ├── genants/
   ├── bete/
   ├── triste/
   ├── hilarant/
   ├── savage/
   ├── dark/
   └── wholesome/
   ```

2. **Lancez le script**
   ```bash
   ./update.sh
   ```

3. **Publiez** quand le script vous le demande

C'est tout ! Le script :
- Scanne automatiquement tous les dossiers
- Génère le fichier `memes.json`
- Propose de publier sur GitHub

## 🛠️ Technologies

- **HTML5** - Structure
- **CSS3** - Design moderne avec animations
- **Vanilla JavaScript** - Aucune dépendance
- **Python 3** - Script de génération
- **Bash** - Automatisation
- **GitHub Pages** - Hébergement gratuit

## 📁 Structure du projet

```
.
├── index.html              # Page d'accueil
├── gallery.html            # Page galerie
├── style.css               # Styles
├── home.js                 # JS accueil
├── gallery.js              # JS galerie
├── memes.json              # Base de données (auto-généré)
├── generate_json.py        # Générateur JSON
├── update.sh               # Script de mise à jour
└── memes/                  # Vos memes
    ├── genants/
    ├── bete/
    ├── triste/
    ├── hilarant/
    ├── savage/
    ├── dark/
    └── wholesome/
```

## 🎨 Personnalisation

### Changer les couleurs

Éditez les variables CSS dans `style.css` :

```css
:root {
    --bg-dark: #0d0d0d;
    --accent: #ff3366;
    /* ... */
}
```

### Ajouter une catégorie

1. Créez le dossier : `mkdir memes/nouvelle-categorie`
2. Modifiez `generate_json.py` pour inclure la catégorie
3. Ajoutez la carte dans `index.html`
4. Ajoutez le style dans `style.css`

### Modifier le nombre de colonnes

Dans `style.css` :
```css
.gallery {
    columns: 4; /* Changez ici */
}
```

## 📱 Utilisation

### Page d'accueil
- Affiche toutes les catégories avec compteurs
- Cliquez sur une catégorie pour voir les memes

### Galerie
- Les memes sont mélangés aléatoirement
- Cliquez sur un meme pour l'agrandir
- Utilisez le bouton "Mélanger" pour réorganiser

### Lightbox
- **Clic** sur l'image pour fermer
- **← →** : Navigation
- **Échap** : Fermer
- **📋 Copier** : Copie l'URL directe (partage)
- **💾 Télécharger** : Sauvegarde le meme

## 🔧 Scripts

### update.sh

Script principal pour mettre à jour le site :
```bash
./update.sh
```

Fait tout automatiquement :
1. Génère `memes.json`
2. Affiche les stats
3. Propose de publier sur GitHub

### generate_json.py

Génère le fichier `memes.json` :
```bash
python3 generate_json.py
```

Peut être utilisé seul si vous ne voulez pas publier.

## 🆘 Dépannage

### Le script ne se lance pas
```bash
chmod +x update.sh
```

### Les images ne s'affichent pas
- Vérifiez que `memes.json` existe
- Vérifiez les chemins des images
- Regardez la console (F12)

### Erreur Git
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"
```

## 📊 Formats supportés

- JPG / JPEG
- PNG
- GIF (animés supportés !)
- WebP
- BMP

## 🚀 Optimisations

- Lazy loading des images
- Colonnes CSS pour layout fluide
- Aucune dépendance externe
- Léger et rapide

## 📝 Licence

Projet personnel - Libre d'utilisation

## 🤝 Contribution

C'est un projet personnel, mais n'hésitez pas à fork et adapter !

## 📞 Support

Consultez `GUIDE_RAPIDE.md` pour plus de détails.

---

**Fait avec ❤️ et beaucoup de memes**

Powered by GitHub Pages 🚀
