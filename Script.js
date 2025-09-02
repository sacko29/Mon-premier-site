// Petit message dans la console pour dire que le JS est chargé
console.log("🫵 Le site de la Marionnette est opérationnel !");

// Change la couleur du titre "Contacte-moi !" quand on clique dessus
const contactTitle = document.querySelector('#contact h2');
if(contactTitle) {
    contactTitle.addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? '' : 'red';
    });
}
