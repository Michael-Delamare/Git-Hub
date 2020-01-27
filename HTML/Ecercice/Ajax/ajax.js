/*
function loadPage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onloadend = function () {
        if (this.status == 200) {
            console.log(this.response)
            // const data = JSON.parse(this.responseText)
        }
    };
    xhttp.open("GET", "https://reqres.in/api/users?page=3", true);
    xhttp.responseType = 'json'
    xhttp.send();
}
loadPage()


function loadPage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onloadend = function () {
        if (this.status == 200) {
            var response = JSON.parse(this.responseText)
            for (k = 0; k < response.results.length; k++) {
               
                    var p = response.results[k]
                    console.log(p.name,p.birth_year,p.eye_color)
     
                   /* const xhr = new XMLHttpRequest()
                    xhr.onloadend =  function () {
                        console.log(this.responseText)
                    document.getElementById("demo").innerHTML = this.responseText;
                }
                xhr.open('GET', p.name,true)
                xhr.send() 
            }
        }
    };
    xhttp.open("GET", "https://swapi.co/api/people", true);
   // xhttp.responseType = 'json'
    xhttp.send();
}
loadPage()



function loadPage() {
    var xhttp = new XMLHttpRequest();   
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(name)
      }
    }; 
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon", true);  
    xhttp.send();
  }
  */

 var span=document.getElementById("span");
 var div = document.getElementById("div")
function loadPage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onloadend = function () {
        if (this.status == 200) {
            var response = JSON.parse(this.responseText)
            for (k = 0; k < response.results.length; k++) {
               
                    var p = response.results[k]
                    const xhr = new XMLHttpRequest()
                    console.log(p.name,p.url)
                    var nom = document.createElement("div")
                    nom.id= 'div'+k;
                    //nom.className= 'span1';
                    div.classList.add("div1")
                    nom.innerHTML += "Nom : " + p.name + "<br \>" +" URL : " + p.url;
                    div.appendChild(nom);
                    
                    
            }
        }
    };
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon", true);
//  xhttp.responseType = 'json'
    xhttp.send();
}
loadPage()
