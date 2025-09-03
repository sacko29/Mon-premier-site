// Petit message dans la console pour dire que le JS est chargé
console.log("🫵 Le site de la Marionnette est opérationnel !");

// Change la couleur du titre "Contacte-moi !" quand on clique dessus
const contactTitle = document.querySelector('#contact h2');
if(contactTitle) {
    contactTitle.addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? '' : 'red';
    });
}

// Fonction pour changer le fond aléatoirement
function changeBackground() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = randomColor;
    console.log("Couleur changée : " + randomColor);
}
