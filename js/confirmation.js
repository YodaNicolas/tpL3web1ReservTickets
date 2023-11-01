document.addEventListener("DOMContentLoaded", function () {
    var Validation = document.getElementById("Validation");
    var Rejet = document.getElementById("Rejet");
    var suppression = document.getElementById("SuprimerEvent");

    Validation.addEventListener("submit", function (event) {
        // Annule la soumission du formulaire par défaut
        event.preventDefault();
        alert('Voulez-vous vraiment valider cette reservation ?')
    });
    Rejet.addEventListener("submit", function (event) {
        // Annule la soumission du formulaire par défaut
        event.preventDefault();
        alert('Voulez-vous vraiment rejeter cette reservation ?')
    });
    suppression.addEventListener("submit", function (event) {
        // Annule la soumission du formulaire par défaut
        event.preventDefault();
        alert('Voulez-vous vraiment supprimer cet évenement ?')
    });
});
