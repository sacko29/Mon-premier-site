// ==================== 🎨 FONCTION FIESTA ====================
function changeBackground() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = randomColor;
    console.log("🎨 Couleur changée : " + randomColor);
}

// ==================== 🎵 LECTEUR MUSIQUE ====================
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

// ==================== 🖼️ SLIDER IMAGES ====================
let currentImage = 1;

function changeImage() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => img.style.display = 'none');
    
    currentImage = currentImage === 1 ? 2 : 1;
    document.querySelector(`.gallery img:nth-child(${currentImage})`).style.display = 'block';
    
    console.log(`🖼️ Image ${currentImage} affichée`);
}

// ==================== 🎮 EFFET SPECIAL TITRE ====================
const contactTitle = document.querySelector('#contact h2');
if(contactTitle) {
    contactTitle.addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? '' : 'red';
        console.log("🔴 Titre cliqué !");
    });
}

// ==================== 🚀 INITIALISATION ====================
console.log("🔥 Site otaku activé !");
console.log("🎮 Mode Marionnette : ON");
console.log("👨‍💻 Chef : connecté");
