console.log("Bonjour JavaScript !");

const competences = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python"
];

const bouton = document.getElementById("afficherCompetences");

const liste = document.getElementById("listeCompetences");
if (bouton) {
bouton.addEventListener("click", function() {

    liste.innerHTML = "";

    for (let i = 0; i < competences.length; i++) {

        liste.innerHTML +=
            "<p>• " + competences[i] + "</p>";

    }

});}
const menuBouton = document.getElementById("menuBouton");
const menu = document.getElementById("menu");

if (menuBouton && menu) {

    menuBouton.addEventListener("click", function() {

        menu.classList.toggle("actif");

    });

}