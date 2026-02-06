#!/usr/bin/env python3
"""
Générateur automatique de memes.json
Scanne tous les dossiers de memes et crée le fichier JSON
"""

import os
import json
from pathlib import Path

# Configuration
REPO_PATH = "/Users/mal/Documents/GitHub/Lev-Tho.github.io"
MEMES_FOLDER = os.path.join(REPO_PATH, "memes")

# Catégories
CATEGORIES = ['genants', 'bete', 'triste', 'hilarant', 'savage', 'dark', 'wholesome']

# Extensions supportées
IMAGE_EXTENSIONS = ('.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.JPG', '.JPEG', '.PNG', '.GIF')

def scan_category(category):
    """Scanne une catégorie et retourne la liste des memes"""
    cat_path = os.path.join(MEMES_FOLDER, category)
    
    if not os.path.exists(cat_path):
        return []
    
    memes = []
    
    try:
        files = os.listdir(cat_path)
        files = [f for f in files if f.endswith(IMAGE_EXTENSIONS) and not f.startswith('.')]
        files.sort()
        
        for filename in files:
            memes.append({
                'name': filename,
                'path': f'memes/{category}/{filename}',
                'category': category
            })
    
    except Exception as e:
        print(f"⚠️  Erreur lecture {category}: {e}")
    
    return memes

def generate_json():
    """Génère le fichier memes.json"""
    
    print("=" * 60)
    print("🎭 GÉNÉRATEUR MEMES.JSON")
    print("=" * 60)
    
    # Vérifie que le repo existe
    if not os.path.exists(REPO_PATH):
        print(f"\n❌ Repository non trouvé: {REPO_PATH}")
        return False
    
    # Vérifie/crée le dossier memes
    if not os.path.exists(MEMES_FOLDER):
        print(f"\n📁 Création du dossier memes...")
        os.makedirs(MEMES_FOLDER)
        for cat in CATEGORIES:
            os.makedirs(os.path.join(MEMES_FOLDER, cat), exist_ok=True)
        print(f"✅ Dossiers créés!")
        print(f"\n💡 Ajoutez vos memes dans les dossiers:")
        for cat in CATEGORIES:
            print(f"   - memes/{cat}/")
        return False
    
    # Scanne toutes les catégories
    data = {}
    total = 0
    
    print(f"\n📸 Scan des memes...")
    for category in CATEGORIES:
        memes = scan_category(category)
        data[category] = memes
        count = len(memes)
        total += count
        
        emoji_map = {
            'genants': '😳',
            'bete': '🤪',
            'triste': '😭',
            'hilarant': '😂',
            'savage': '🔥',
            'dark': '💀',
            'wholesome': '✨'
        }
        
        emoji = emoji_map.get(category, '📁')
        print(f"  {emoji} {category:12} : {count:3} meme{'s' if count > 1 else ''}")
    
    if total == 0:
        print("\n⚠️  Aucun meme trouvé!")
        print("\n💡 Ajoutez des images dans les dossiers:")
        for cat in CATEGORIES:
            print(f"   - memes/{cat}/")
        return False
    
    # Écrit le JSON
    json_path = os.path.join(REPO_PATH, 'memes.json')
    
    try:
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print(f"\n✅ memes.json généré avec succès!")
        print(f"📁 Emplacement: {json_path}")
        print(f"📊 Total: {total} memes")
        
        return True
        
    except Exception as e:
        print(f"\n❌ Erreur écriture JSON: {e}")
        return False

if __name__ == "__main__":
    generate_json()
