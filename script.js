// ==================== 🎨 FONCTIONS COULEUR ====================

// Change la couleur de fond aléatoirement
function changeBackground() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = randomColor;
    console.log("🎨 Couleur changée : " + randomColor);
}

// ==================== 🎵 FONCTIONS MUSIQUE ====================

// Active ou désactive la musique
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.play();
        console.log("🎵 Musique activée");
    } else {
        audio.pause();
        console.log("⏸️ Musique pause");
    }
}

// ==================== 🖼️ FONCTIONS GALERIE ====================

let currentImage = 1;

// Change l'image de la galerie
function changeImage() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => img.style.display = 'none');
    
    currentImage = currentImage === 1 ? 2 : 1;
    document.querySelector(`.gallery img:nth-child(${currentImage})`).style.display = 'block';
    
    console.log(`🖼️ Image ${currentImage} affichée`);
}

// ==================== 🎮 FONCTIONS JEU ====================

// Initialise le jeu Ashira Eater
function initGame() {
    console.log("🎮 Initialisation du jeu Ashira Eater");
    // Code d'initialisation du jeu à ajouter ici
}

// ==================== ✨ EFFETS SPÉCIAUX ====================

// Ajoute un effet au clic sur le titre de contact
const contactTitle = document.querySelector('#contact h2');
if (contactTitle) {
    contactTitle.addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? '' : 'red';
        console.log("🔴 Titre cliqué !");
    });
}

// ==================== 🚀 INITIALISATION ====================

// Fonction exécutée au chargement de la page
function init() {
    console.log("🔥 Site otaku activé !");
    console.log("🎮 Mode Marionnette : ON");
    console.log("👨‍💻 Chef : connecté");
    
    // Initialise le jeu si on est sur la page jeu.html
    if (window.location.pathname.includes('jeu.html')) {
        initGame();
    }
}

// Lance l'initialisation quand la page est chargée
document.addEventListener('DOMContentLoaded', init);
