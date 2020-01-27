//alert('Bonjour du fichier externe');
//var nombre1 = prompt('Premier nombre ?');
//var nombre2 = prompt('Deuxieme nombre ?');
// on convertit en nombres decimaux et on calcule
//var resultat = parseFloat(nombre1) + parseFloat(nombre2);
//alert("La somme de ces deux nombres est " + resultat);
//var chaine = "une simple chaîne de caractères"
//var message1 = "une\"simple\" chaîne de caractères. ";
//var message2 = 'Une " simple" chaîne de caractères.';
//alert(message1);
//alert(message2);
//var concat = 'Bonjour'+ ' Michael';
//console.log(concat);
//window.alert("test");
//var x = 200;
//var x = 100;
//var y = 200;
//console.log('x vaut :'+x);
//console.log('y vaut :'+y);
//x = 150;
//console.log( 'x vaut :'+x);
//x = y;
//console.log('y vaut :'+y);
// chaîne de caractères primitive
//x = "Bonjour j’ai changé de nature!";
//console.log( 'x vaut :'+x);
//console.log("x vaut :"+x);
//console.log("x vaut ",x);
//var nombre1 = prompt('choisir le premier nombre');
//var nombre2 = prompt('choisir le deuxième nombre');
//var resultat = parseFloat(nombre1) - parseFloat(nombre2);
//alert("la soustraction des deux nombres est : " + resultat);

function concat(str1, str2) {
    return str1 + str2;
}
//var res = concat("bonjour", " adrien");
//console.log(res);

/* calculIntérêt qui demande le montant du compte et le taux d’intérêt 
sur le compte bancaire. Le calcul des intérêts est effectué pour un 
certain nombre d'années. */

function calculIntérêt(montant_du_compte, taux_interet, nombre_année) {
    montant_du_compte = prompt("montant_du_compte")
    taux_interet = prompt("taux d'interet")
    nombre_année = prompt("nombre d'années")

    res = montant_du_compte * Math.pow(1 + taux_interet / 100, nombre_année)

    return alert(res);
    //Montant du capital (€) * Taux d'intérêt annuel (%) * Temps de valorisation = Intérêt (€).
}
/* conversion euros qui prend en paramètres le nom de la devise de destination, 
la somme à convertir, le taux de conversion et affiche par exemple:«100 euros 
valent 150 dollars américains». */

function conv_euro(nom_devise, somme, taux_conversion) {
    somme = prompt("donnez la somme en euros à convertir")
    res = somme * 1.113
    return alert(somme + " euros valent " + res + "Dollars Américains.");
}

/* une fonction «cube» qui calcule le cube d’un nombre passé en paramètre. */

function cube(nombre) {
    nombre = prompt("Donnez le nombre que vous souhaitez calculez")
    res = nombre * nombre * nombre
    return alert("Le cube du nombre : " + nombre + ' est : ' + res);
}

/* Réaliser une fonction qui affiche vous êtes majeur si l’âge rentré est 
supérieur ou égal à 18 et vous êtes mineur si l’âge est strictement inférieur 
à 18 ans. */

function estMajeur(age) {
    age = prompt("Entrez un age")
    if (age >= 18) {
        return alert("Majeur")
    }
    else {
        return alert("Mineur")
    }
}

/* Demandez à l’utilisateur de rentrer une note entre 0 et 100. Puis afficher 
l’appréciation:

de 0 à 59 points: insuffisant
suffisant: de 60 à 69 points
de 80 à 89 points: très bien
90 points à 100 points: excellent */

function appreciation(points) {
    points = prompt("Entrez votre note")
    if (points >= 0 && points < 60) {
        return alert("Insuffisant !")
    }
    else if (points > 59 && points < 70) {
        return alert("Suffisant !")
    }
    else if (points > 69 && points < 90) {
        return alert("Très bien !")
    }
    else if (points > 89 && points < 101) {
        return alert("Excellent !")
    }
    else if(points < 0)
    {
        return alert("Erreur !")
    }
    else if(points > 100){
        return alert("Erreur !")
    }
}

/* var table = new Array("Pierre", "Paul", "Jacques");
alert(table.length);
table[5] = "Toto";
alert(table.length); */

function affiche(tab)
{
        var chaine = "Le tableau contient :"
        for(var i=0; i<tab.length; i++)
                chaine += "\n" + i + " -> " + tab[i];
        return chaine;
}

/*
tab = new Array("Pierre", "Paul", "Jacques");
var liste = affiche(tab);
alert(liste);
*/

// sommeTab qui effectue la somme de tous les éléments d’un tableau donné en argument

function sommeTab(tab){
    var som = 0;
    for(var y=0;y<tab.length;y++){
    som+=tab[y]
    }
    return som;
}

tab1 = new Array(1,3,2);
console.log(sommeTab(tab1));

function moyenne(tab){
    var moy = 0;
    for(var y=0;y<tab.length;y++){
        moy += tab[y];
    }
    return moy / tab.length;
}

console.log(moyenne(tab1))

function sommeCarre(tab){
    var som = 0;
    for(y=0;y<tab.length;y++){
        som += tab[y] * tab[y];
    }
    return som;
}
/*
console.log(sommeCarre(tab1));
console.timeEnd(tab1)


function dateFr(){
    // les noms de jours / mois
    var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi","samedi");
    
    var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet","août","septembre","octobre","novembre","décembre");
    // on recupere la date
    
    var date = new Date();
    // on construit le message
    var message = jours[date.getDay()] + " "; // nom du jour
    message += date.getDate() + " "; // numero du jour
    message += mois[date.getMonth()] +" "; // mois
    message += date.getFullYear();
    return message;
    }
    alert(dateFr());

     /* Initialiser un tableau associatif qui contient les opérations arithmétiques suivantes:
    +,-,*, /, moyenne, somme des carres. */
/*
    var operation = new Array();
    operation["+"] = function(a,b){return a+b}
    operation["-"] = function(a,b){return a-b} 
    operation["*"] = function(a,b){return a*b}
    operation["/"] = function(a,b){return a/b}
    operation["moyenne"] = function(a,b){var moy = 0; var tab = new Array(a,b);for(var y=0;y<tab.length;y++){moy += tab[y];}return moy / tab.length;}
    operation["sommeCarre"] = function(a,b){var som=0;var tab = new Array(a,b);for(var y=0;y<tab.length;y++){som += tab[y]*tab[y];}return som;}

    var a = parseFloat(prompt("premier nombre"));
    var b = parseFloat(prompt("deuxième nombre"));
    var queloperation = prompt("Quel opération ?");
    var resultat = operation[queloperation](a,b);
    alert("le résultat de votre opératon est : " + resultat);
*/

   /* créer un tableau tab qui contient trois éléments: le, chat, joue, avec, la souris
afficher ce tableau dans le document
afficher la longueur de ce tableau par un pop up
ranger les élément de ce tableau par ordre alphabétique, puis afficher le tableau
supprimer le dernier élément puis afficher le tableau
ajouter en fin de tableau le mot «chien» puis afficher le tableau
supprimer le premier élément puis afficher le tableau
ajouter «lapin» en début puis afficher le tableau
inverser l’ordre du tableau puis afficher le tableau
afficher le tableau sous une forme de chaîne de caractères avec «*»comme séparateur entre les différents mots. utiliser pour cela un pop up alert. */
/*
var tab = new Array("le","chat","joue","avec","la","souris");
console.log(tab)
alert("La longueur du tableau est de : " + tab.length)
tab.sort()
console.log(tab)
console.log(tab.sort())
tab.pop()
console.log(tab)
tab.push("chien")
console.log(tab)
tab.shift()
console.log(tab)
tab.unshift("lapin")
console.log(tab)
tab.reverse()
console.log(tab)
console.log(tab.join("*"))
alert(tab.join("*"))
*/

/* Soit la string:"le chat mange la souris". Donner le longueur de cette chaîne
Afficher le premier caractère et le sixième caractère.
Afficher la position de la chaîne "mange"
mettre la chaîne en minuscules
mettre la chaîne en majuscules
soit la chaîne " , et le loup mange l’agneau". concaténer cette chaîne avec la première
Soit la chaîne «untrèsbeau*jour». récupérer dans un tableau les différents mots qui composent cette chaîne. Les afficher.
Extraire la chaîne comprise entre les positions 3 et 7.
Extraire la chaîne qui a pour longueur 4 et qui commence à la position 3.
*/


var ex2 = "le chat mange la souris"
// alert(ex2.length)
// alert(ex2.charAt(0) + ex2.charAt(6))
// alert(ex2.indexOf("mange"))
// alert(ex2.toLocaleLowerCase())
// alert(ex2.toUpperCase())
var ex3 = " et le loup mange l'agneau"
// alert(ex2 + ex3)
var ex4 = "un*très*beau*jour"
var tab = ex4.split("*")
//alert(tab)
// alert(ex4.substring(3,7))
// alert(ex4.substr(3,4))
