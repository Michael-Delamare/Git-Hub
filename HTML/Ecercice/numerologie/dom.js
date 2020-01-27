/*var titre1= document.getElementById('titre1');
alert(titre1);

var lis= document.getElementsByTagName('li'); 
//on a tous les li de la page dans lis sous la forme d’un tableau
//puis on parcours le tableau**

for (var i = 0, c = lis .length ; i < c ; i++) {
    alert('Element n° ' + (i + 1) + ' : ' + lis[i]);
}
var lien1 = document.getElementById('lien1');
var href1 = lien1.getAttribute('href'); // ou encore href1 = lien1.href;
alert(href1);
lien1.setAttribute('href', 'http://www.developpez.com');
*/
/*
document.getElementById('titre1').className = 'red';

var lien1= document.getElementById('lien1');
alert(lien1.innerHTML);
var lien1= document.getElementById('lien1');
lien1.innerHTML = 'lien1 modifié';
alert(lien1.innerHTML);
*/
/*
lien1.innerHTML = '<strong>lien1 modifié</strong>';


var ul = document.getElementById('titre1');
alert(ul.innerHTML);
alert(ul.textContent);
*/
/*
var li = document.getElementById('liste1');
var ul = li.parentNode;
//lert(ul.nodeName.toLowerCase());
//alert(ul.firstChild);
var ul = document.getElementById('liste1');
alert(ul.firstElementChild);
*/
/*
// creer un element 
var ul = document.getElementById('liste1');
alert(ul.firstChild);
var newLi = document.createElement('li');
newLi.id ='quatriemePuce';
ul.appendChild(newLi);
ul.lastChild.textContent = 'texte4';
var newLi = document.createElement('li');
newLi.id = 'quatriemePuce';
//ul.lastChild.textContent = 'texte4'; 

// creer un lien
var link = document.createElement('a');
link.href ='http://www.msn.com';
link.id = 'lien4';
link.title = 'Allez sur msn';
//var li4 = document.getElementById('quatriemePuce'); marche aussi
newLi.appendChild(link);
var text4 = document.createTextNode("texte4");
link.appendChild(text4);
ul.appendChild(newLi);


// clonage
var ul2 = ul.cloneNode(true); //on récupère ul et tous ses enfants que l'on cloneNode
ul.parentNode.appendChild(ul2);//on recherche le parent et on ajoute les enfants.

// remplacer
var link = document.getElementsByTagName('a')[1];
var newLabel= document.createTextNode('texte2 bis remplacé');
link.replaceChild(newLabel, link.firstChild);
*/


/*
Exercice: remplacer la deuxième liste non ordonnée par une liste ordonnée. On garde les mêmes textes. On créera la liste ordonnée avec les outils du DOM. 
On aura quelque chose de similaire à ceci:
*/

/*
var newOl = document.createElement('ol');
newOl.id = 'liste3';
newOl.className = 'red';
var newli1 = document.createElement('li');
newli1.id = "premierePuceOl";
var textOl1 = document.createTextNode("texte Ol 1");
var linkOl1 = document.createElement('a');
linkOl1.href ='http://www.msn.com';
linkOl1.id = 'lienOl1';
linkOl1.title = "Allez sur msn";
linkOl1.appendChild(textOl1);
newli1.appendChild(linkOl1);
var newli2 = document.createElement('li');
newli1.id = "deuxiemePuceOl";
var textOl2 = document.createTextNode("texte Ol 2");
var linkOl2 = document.createElement('a');
linkOl2.href ='http://www.msn.com';
linkOl2.id = 'lienOl2';
linkOl2.title = 'Allez sur msn';
linkOl2.appendChild(textOl2);
newli2.appendChild(linkOl2);
var newli3 = document.createElement('li');
newli1.id = "troisiemePuceOl";
var textOl3 = document.createTextNode("texte Ol 3");
var linkOl3 = document.createElement('a');
linkOl3.href ='http://www.msn.com';
linkOl3.id = 'lienOl3';
linkOl3.title = 'Allez sur msn';
linkOl3.appendChild(textOl3);
newli3.appendChild(linkOl3);
newOl.appendChild(newli1);
newOl.appendChild(newli2);
newOl.appendChild(newli3);
ul.parentNode.replaceChild(newOl,ul2);
*/


//suppression de la troisième ligne de la liste ordonnée
var liUl3= document.getElementsByTagName('li')[5];
var oldLi = liUl3.parentNode.removeChild(liUl3);
//si l’on veut rajouter l’élément enlever ou faire un traitement dessus:
document.body.appendChild(oldLi);
//alert(ul.haschildNodes());

/*
//insérer avant la deuxième puce
var liUl2= document.getElementsByTagName('li')[1];
var newli2Bis = document.createElement('li');
newli2Bis.id = "deuxiemePuceInsert";
var textUl2Bis = document.createTextNode("texte 2 bis inséré");
newli2Bis.appendChild(textUl2Bis);
ul.insertBefore(newli2Bis,liUl2);
*/

//var x = documentGetElementById("mabalise");
//x.onclick = function(evt);
/*
var div= document.getElementById('testclick');
div.onclick = function() {
alert("click effectué !");
};

var element = document.getElementById('testclick2');
element.addEventListener('click', function() {
alert(" click effectué 2!");
}, false);
*/

function action(){ alert("action idevement"); } 
var monElement = document.getElementById("idevement"); 
monElement.onclick = action; 
function action2(){ alert("action monimage"); } 
var ImgElement = document.getElementById("monimage"); 
ImgElement.onclick = action2;

function action(){alert("action idevement"); } 
var monElement = document.getElementById("idevement"); 
monElement.onclick = action; 
function action2(){alert("action monimage"); 
if (event.stopPropagation) { event.stopPropagation();} 
event.cancelBubble = true; 
} 
var ImgElement = document.getElementById("monimage"); 
ImgElement.onclick = action2;

var clickme = document.getElementById('clickme');
clickme.addEventListener('click', function(e) {
e.target.innerHTML = 'Vous avez cliqué !';
}, false);

var parent1 = document.getElementById('parent1'),
result = document.getElementById('result');
parent1.addEventListener('mouseover', function(e) {
result.innerHTML = "L'élément déclencheur de l'événement\"mouseover\" possède l'ID : " + e.target.id;
}, false);

var position = document.getElementById('position');
document.addEventListener('mousemove', function(e) {
position.innerHTML = 'Position X : ' + e.clientX + 'px<br/>Position Y : ' + e.clientY + 'px';
}, false);

var field = document.getElementById('field'),
down = document.getElementById('down'),
press = document.getElementById('press'),
up = document.getElementById('up');

document.addEventListener('keydown', function(e) {
down.innerHTML = e.keyCode;
}, false);

document.addEventListener('keypress', function(e) {
press.innerHTML = e.keyCode;
}, false);

document.addEventListener('keyup', function(e) {
up.innerHTML = e.keyCode;
}, false);

var link = document.getElementById('link');
link.addEventListener('click', function(e) {
e.preventDefault(); // On bloque l'action par défaut de cet événement
alert('Vous avez cliqué !');
}, false);

