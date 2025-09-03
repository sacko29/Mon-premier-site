let kibutsujiHP = 100;
let pillierHP = 100;

function attack() {
    // Kibutsuji attaque
    const damage = Math.floor(Math.random() * 15) + 10;
    pillierHP = Math.max(0, pillierHP - damage);
    updateHealthBars();
    
    // Pillier contre-attaque
    setTimeout(() => {
        const counterDamage = Math.floor(Math.random() * 12) + 8;
        kibutsujiHP = Math.max(0, kibutsujiHP - counterDamage);
        updateHealthBars();
        checkGameOver();
    }, 500);
}

function special() {
    if (kibutsujiHP > 20) {
        const damage = Math.floor(Math.random() * 25) + 15;
        pillierHP = Math.max(0, pillierHP - damage);
        kibutsujiHP -= 15; // Coût en vie
        updateHealthBars();
        checkGameOver();
    } else {
        alert("Pas assez de vie pour technique spéciale !");
    }
}

function updateHealthBars() {
    document.querySelector('#kibutsuji .health').style.width = kibutsujiHP + '%';
    document.querySelector('#pillier .health').style.width = pillierHP + '%';
}

function checkGameOver() {
    if (kibutsujiHP <= 0) {
        alert("💀 Kibutsuji a été vaincu !");
        resetGame();
    } else if (pillierHP <= 0) {
        alert("🎉 Pillier vaincu ! Prochain défi !");
        resetGame();
    }
}

function resetGame() {
    kibutsujiHP = 100;
    pillierHP = 100;
    updateHealthBars();
}
