
var div = document.getElementById("divImage");
var img = [];
for (var i = 0; i < 6; i++) {
    var image = new Image();
    image.src = "image/" + i + ".jpg";
    image.width = 550
    img.push(image);
}
div.appendChild(img[0]);

var i=0;
function changement(){
        i++
        if(i==img.length){
            i=0;
        }
        div.removeChild(div.childNodes[1])
        div.appendChild(img[i])
}
var myvar = setInterval
function play() {
    setInterval(changement,1000)
    clearInterval(myvar);
}

function pause() {
    clearInterval(myvar);
}

function next(){
    changement()
}
function previous(){
    
}
function first(){
    div.removeChild(div.childNodes[1])
    div.appendChild(img[0])
}
function last(){
    div.removeChild(div.childNodes[1])
    div.appendChild(img[5])
}


