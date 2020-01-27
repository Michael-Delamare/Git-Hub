// Exercice 1 : Appuyer sur un bouton pour qu'une couleur aparaisse,
// puis le faire à partir d'un autre bouton et qu'il fasse aparaitre
// une couleur aléatoire


function chcouleur(color) {
    document.getElementById('carre').className = color;
}

function chrcouleur(color) {
    var color = new Array("green", "yellow", "black", "red", "blue");
    var n = color.length;
    var c;

    c = Math.round(Math.random() * n);
    document.getElementById("carre").style.backgroundColor =
        color[c];
}

var c = document.getElementById("cadre").getElementsByTagName("div");

function col(obj) {
    coul = "rgb(";
    for (i = 0; i != 3; i++) {
        coul += Math.floor(Math.random() * 256) + ",";
    };
    coul = coul.replace(/,$/, ")");
    with (obj.style) {
        backgroundColor = coul;
        visibility = "visible"
    }
}

window.onload = function () {
    for (j = 0; j != c.length; j++) {
        col(c[j])
    }
}

// Exercice 2 : Afficher l'heure dans un document HTML

var time = setInterval(chtime, 1000);

function chtime() {
    var date = new Date;
    chheure = document.getElementById("heure")
    if (date.getSeconds() == 00) {
        chheure.className = "greencolor"
    }
    else {
        chheure.className = "redcolor"
    }
    chheure.innerHTML = date.toLocaleTimeString();
}

/*
Exercice 3 :
Dans une page HTML, ajouter un élément « button ». 
a- Créer une fonction « ajouterParagraphe () » qui va ajouter 
un paragraphe au document HTML. Le texte de ce paragraphe sera :
Au premier click : « paragraphe numéro 1 »
Au deuxième click : « paragraphe numéro 2 »
A troisième click : « paragraphe numéro 3 »
Etc.
b- Créer une fonction « compterParagraphes () » qui compte le 
nombre de paragraphes créés, en manipulant le DOM.
*/
//var cpt = 0;
function addPara() {
    // crée un nouvel élément div
    var newP = document.createElement("p");
    // et lui donne un peu de contenu
    var newContent = document.createTextNode('Paragraphe numeros ' + cpt);
    // ajoute le nœud texte au nouveau div créé
    newP.appendChild(newContent);
    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentP = document.getElementById('div1');
    document.body.insertBefore(newP, currentP);
    console.log(newP.innerHTML)
    // compteur
    comptePara();
    ++cpt;
}
var cpt = 1;
function comptePara() {
    var comptePara = document.getElementById("count");
    comptePara.innerHTML = ("Il y a " + cpt + " paragraphe");
}

// Exercice 4 :
// Le but de cet exercice est de développer une 
// « to do list » en HTML, CSS, JavaScript

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode(" \u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);


function addTodo() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("ul").appendChild(li);
    }
    document.getElementById("input").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode(" \u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  function weightConverter(valNum) {
    document.getElementById("outputGrams").innerHTML = valNum / 0.0022046;
  }