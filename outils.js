
function sommenombre(tab) {
  let somme = 0;
  for (let compteur = 0; compteur < tab.length; compteur++) {
    somme += tab[compteur];
  }
  return somme;
}
console.log(sommenombre([100, 200, 300, 400, 500]));
 

function filtrenombre(tab) {
    return tab.filter(function(valeur){
        return valeur % 2 === 0;
    })

    // function verification(valeur){
    //     return valeur % 2 === 0;
    // }
    // ici c'est ce que la fonction filter traite derriere son nom
    // const result = []
    // for (let element = 0; element < tab.length; element++) {
    //     if(verification(tab[element])){
    //         result.push(tab[element])
    //     }
    // }
    // return result                  
}
console.log(filtrenombre([2 ,3, 5, 4 , 6 , 8 , 10]));

// function trie d'ordre croissant
function trieordre(nombre){
    return nombre.sort(function(nombre1, nombre2){
        return nombre1 - nombre2
    })
}
console.log(trieordre([1, 4 , 5 , 2 , 8 , 109]));


// function capitalise pour mettre la premiere lettre de chaque phrase en majuscule
function capitalise2 (mot){
   const  mots = mot.trim().toLowerCase().split(" ") // permet de supprimer les espaces avant et apres la chaine de caractere
   // et permet de mettre tout le texte en minuscule pour un premier temps et de separer les mots d'une chaine de caractere et de les mettre dans un tableau*
   
   const motCapitalise = mots.map(function(mot){ // map permet de parcourir le tableau et affiche les valeurs dans un autre tableau
    if(typeof mot !=="string"){ // permet de verifier si la valeur est une chaine de caractere ou pas
        return "ce n'est pas une chaine de caractere" // permet de retourner un message d'erreur si la valeur n'est pas une chaine de caractere
    }else if (mot === ""){ // permet de verifier si la valeur est une chaine de caractere vide ou pas
        return "entrer une chaine de caractere non vide" // permet de retourner un message d'erreur si la valeur est une chaine de caractere vide
    }else{ // permet de mettre la premiere lettre de chaque mot en majuscule et le reste en minuscule
        return mot.at(0).toUpperCase() + mot.slice(1)// permet de mettre la premiere lettre de chaque mot en majuscule et le reste en minuscule
    }
})
   return motCapitalise.join(" ") // permet de joindre les mots du tableau en une chaine de caractere avec un espace entre chaque mot
}
console.log(capitalise2("morgan"));


// jeu de devinette 

    const VALEUR_MINIMAL = 1
    const VALEUR_MAXIAML = 10

const nombreAleatoire = Math.floor(Math.random() * VALEUR_MAXIAML) + VALEUR_MINIMAL;
// alert(nombreAleatoire)

// ici je genere un nombre 
let devinetteNumber = Number(prompt("Devine le nombre " + VALEUR_MINIMAL+ " et " + VALEUR_MAXIAML));

// ici j'initialise le nombre de tentative que l'utilisateur fera
let tentative = 1;

// ici je Compare mon nombre au nombre que l'ordinateur a generer a travers une boucle
while (devinetteNumber !== nombreAleatoire) {

    if (isNaN(devinetteNumber)) {
        alert("Ce n'est pas un nombre entier un nombre valide !");
    } 
    else if (devinetteNumber < nombreAleatoire) {
        alert("Trop bas !");
    } 
    else if (devinetteNumber > nombreAleatoire) {
        alert("Trop haut !");
    }

// ici je donne la possibilite a l'utlisateur de ressayer
    devinetteNumber = Number(prompt("Réessaie : Devine le nombre entre 1 et 10 :"));
    tentative++; // ici je compte le nombre de tentative qu'il fera
}

// ici j'affiche un message si l'utilisateur a trouver et le nombre de tentative 
alert("Bravo ! Trouvé en " + tentative + " tentatives !"); 


// les fonctions sur la tableau


const tableauNombrePair = [ ]
 const tableauNombreImpair = []
 let nombre = 0
 
// function nombrePair (nombre){
//      if ( nombre % 2 == 0){
//          tableauNombrePair.push (nombre)
//          console.table(tableauNombrePair);
        
// }

 while (nombre <= 100){
     if ( nombre % 2 == 0){
         tableauNombrePair.push (nombre)
        //  console.table(tableauNombrePair);
        
     } else{
         tableauNombreImpair.push(nombre);
        //  console.table(tableauNombreImpair);
        
        
     }
     nombre++
     
    
    }
    // forEach
    const liste = [ 2 , 4 , 7, 9 , true , false , 0, 1 ]
    liste.forEach ( function(valeur, index){
         console.log("l'index est " +index + " et la valeur est " + valeur);
        
    })

    // map permet de parcourir le tableu et affiche les valeurs dans un autre tableau  
    // et l'index avec la meme taille defini dans le tableau de base

     
