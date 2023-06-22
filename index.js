const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantResultat = document.getElementById('resultat');


const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur;
let choixOrdinateur;
let resultat;

//Evenements 'Click sur les boutons' 
choixPossibles.forEach(choixPossible=>choixPossible.addEventListener('click', (e)=>{
    //Récuperation de l'ID du bouton cliqué
    choixUtilisateur = e.target.id;

    //On ajoute l'image correspondant au bouton cliqué
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`;

    genererChoixOrdinateur();

    verification();

}));

//Fonction pour générer le choix de l'odinateur
function genererChoixOrdinateur(){

    //Générer des nombres compris entre 1 et 3 
    random = Math.floor(Math.random() * 3 ) + 1 ;

    if(random === 1){

        choixOrdinateur = 'pierre';

    }else if(random === 2){

        choixOrdinateur = 'papier';

    }else{

        choixOrdinateur = 'ciseaux';

    }

     //On ajoute l'image correspondant au bouton cliqué
     contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`;
}

function verification(){

    if(choixUtilisateur == choixOrdinateur)
    {
        resultat = "Egalité !";
    }

    //Le cas où l'utilisateur perd
    if(choixUtilisateur == "pierre" && choixOrdinateur == "papier")
    {
        resultat = "Ouff Perdu !";
    }

    if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux")
    {
        resultat = "Ouff Perdu !";
    }

    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre")
    {
        resultat = "Ouff Perdu !";
    }


    //Le cas où l'utilisateur gagne
    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux")
    {
        resultat = "Joliiii !";
    }

    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier")
    {
        resultat = "Joliiii !";
    }

    if(choixUtilisateur == "papier" && choixOrdinateur == "pierre")
    {
        resultat = "Joliiii !";
    }

    contenantResultat.innerHTML = resultat;
}