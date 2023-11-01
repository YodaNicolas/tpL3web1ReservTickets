document.addEventListener("DOMContentLoaded", function () {

    var suppression = document.getElementById("SuprimerEvent");


    suppression.addEventListener("submit", function (event) {
        // Annule la soumission du formulaire par défaut
        event.preventDefault();
        alert('Voulez-vous vraiment supprimer cet évenement ?')
    });
});
