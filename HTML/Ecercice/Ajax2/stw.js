
var div = document.getElementById("div")
function loadPage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onloadend = function () {
        if (this.status == 200) {
            var response = JSON.parse(this.responseText)
            for (k = 0; k < response.results.length; k++) {

                var p = response.results[k]
                var nom = document.createElement("h2")
                nom.id = 'div' + k;
                divPrincipal.classList.add("div1")
                nom.innerHTML += p.name;
                divPrincipal.appendChild(nom);

                var repeat = document.createElement("p")
                repeat.id = 'p' + k;
                repeat.innerHTML += "Apparait dans les films suivant : <br \>"
                divPrincipal.appendChild(repeat);
/*
                var liste = document.createElement("ol")
                divPrincipal.appendChild(liste)
                var listeL = document.createElement("li")
                liste.appendChild(listeL)
                liste.innerHTML += p.films
            */
            
           xhttp.onloadend = function () {
                    for (y = 0; y < p.films.length; y++) {
                        xhttp.open("GET", p.films, true);
                        var liste = document.createElement("ol")
                        divPrincipal.appendChild(liste)
                        var listeL = document.createElement("li")
                        liste.appendChild(listeL)
                        liste.innerHTML += p.films
                    }
                
            }
        }
        }
    };
    xhttp.open("GET", "https://swapi.co/api/people", true);
    //  xhttp.responseType = 'json'
    xhttp.send();
}
loadPage()


