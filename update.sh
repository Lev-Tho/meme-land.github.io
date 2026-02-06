#!/bin/bash

# Script ultra-simple pour mettre à jour le site
# Usage: ./update.sh

clear
echo "=========================================="
echo "🎭 MEME COLLECTION - UPDATE"
echo "=========================================="
echo ""

REPO_PATH="/Users/mal/Documents/GitHub/Lev-Tho.github.io"

# Vérifie que le repo existe
if [ ! -d "$REPO_PATH" ]; then
    echo "❌ Repository non trouvé: $REPO_PATH"
    echo ""
    echo "Vérifiez que le chemin est correct!"
    exit 1
fi

cd "$REPO_PATH" || exit 1

echo "📁 Dossier: $REPO_PATH"
echo ""

# Génère memes.json
echo "📸 Génération de memes.json..."
python3 generate_json.py

# Vérifie si la génération a réussi
if [ $? -ne 0 ]; then
    echo ""
    echo "⚠️  Ajoutez d'abord des memes dans les dossiers!"
    exit 1
fi

echo ""
echo "=========================================="
echo "📤 PUBLICATION SUR GITHUB"
echo "=========================================="
echo ""

# Compte les fichiers modifiés
echo "📊 Fichiers modifiés:"
git status --short

echo ""
read -p "🚀 Voulez-vous publier maintenant? (o/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[OoYy]$ ]]; then
    echo ""
    echo "📤 Publication en cours..."
    
    # Add, commit, push
    git add .
    
    # Demande un message de commit
    read -p "💬 Message de commit (ou Entrée pour 'Update memes'): " commit_msg
    
    if [ -z "$commit_msg" ]; then
        commit_msg="Update memes"
    fi
    
    git commit -m "$commit_msg"
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "=========================================="
        echo "✅ PUBLICATION RÉUSSIE!"
        echo "=========================================="
        echo ""
        echo "🌐 Votre site sera mis à jour dans 1-2 minutes:"
        echo "   https://lev-tho.github.io"
        echo ""
    else
        echo ""
        echo "❌ Erreur lors du push"
        echo "Vérifiez votre connexion et vos permissions GitHub"
    fi
else
    echo ""
    echo "⏸️  Publication annulée"
    echo ""
    echo "Pour publier plus tard:"
    echo "  cd $REPO_PATH"
    echo "  git add ."
    echo "  git commit -m 'Update memes'"
    echo "  git push origin main"
fi

echo ""
echo "=========================================="
