// Exercice 1
let valeur = prompt("Veuillez entrer une valeur : ");
let k= Number(prompt("Entrez un nombre : "));
let x="150";
let y=150;
let z=true;
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
x=Number(x);
console.log(typeof x);
// Exercice 2
let prenom = "Sarah";
let age = 22;
let phrase = "Je m'appelle" + prenom + "et j'ai" +age+ " ans";
console.log(phrase);
age =23;
phrase = "Je m'appelle" + prenom + "et j'ai" + age + " ans";
console.log(phrase);
// Exercice 3
let n = Number(prompt("Entrez un nombre : "));
if (n<0) {
    console.log("Le nombre est négatif");
}else{
    if (n<=10){
        console.log("Le nombre est petit");
    }
    else{
        if (n<=50){
            console.log("Le nombre est moyen");
        }else{
            if (n<100){
                console.log("Le nombre est grand");
            }else{
                console.log("Le nombre est très grand");
            }
        }
    }
}
// Exercice 4
let max= Number(prompt("Entrez le nombre maximale: "));
let min= Number(prompt("Entrez le nombre minimale: "));

for (let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Five&Three");
    }
    if (i % 3 === 0 ) {
        console.log("Three");
    }
    if (i % 5 === 0) {
        console.log("Five");
    }
}
// Exercice 5
let s= Number(prompt("Entrez un nombre : "));
for(let i=1; i<=10; i++){
    console.log(s*i);
}
// Exercice 6
let spaire=0;
let simpaire=0;
for(let i=1; i<=50; i++){
    if(i%2!==0){
        simpaire+=i;
    }
    else{
        spaire+=i;
    }
}
console.log(spaire);
console.log(simpaire);
// Exercice 7
function verifierMotDePasse(mdp){
    if(mdp.length>8 && mdp.includes("@")){
        return true;
    }else{
        return false;
    }
};
let mdp= prompt("Entrez votre mot de passe : ");
if(verifierMotDePasse(mdp)){
    console.log("Mot de passe valide");
}else{
    console.log("Mot de passe invalide");
}
// Exercice 8
function totalAvecRemise(total, remise){
    let totalFinal = total - (total * remise / 100);
    return totalFinal;
}
let total = Number(prompt("Entrez le total de l'achat : "));
let remise = Number(prompt("Entrez le pourcentage de remise : "));
let totalFinal= totalAvecRemise(total, remise);
console.log("Le total final est : " + totalFinal);
// Exercice 9
function factorielle(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return n * factorielle(n-1);
    }
}
let nombre= Number(prompt("Entrez un nombre pour calculer sa factorielle : "));
let resultat= factorielle(nombre);
console.log("La factorielle de " + nombre + " est : " + resultat);
// Exercice 10
function sommeIterative(n){
    let somme = 0;
    for(let i=1; i<=n; i++){
        somme += i;
    }
    return somme;
}

function sommeRecursive(n){
    if(n===1){
        return 1;
    }else{
        return n + sommeRecursive(n-1);
    }
}

let nbr= Number(prompt("Entrez un nombre pour calculer la somme de 1 à n : "));
let resultatIteratif= sommeIterative(nbr);
let resultatRecursif= sommeRecursive(nbr);
console.log("La somme itérative de 1 à " + nbr+ " est : " + resultatIteratif);
console.log("La somme récursive de 1 à " + nbr + " est : " + resultatRecursif);
// le code la plus lisible est la version itérative
// le code la plus performante est la version recursive 
//La récursion peut poser des problèmes de dépassement de pile pour de grandes valeurs de n
//privilégier une boucle dans les cas où la performance et la gestion de la mémoire sont critiques