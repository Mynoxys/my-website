let bcolor = document.querySelector("body");

let button = document.getElementById("DL");

let img = document.getElementById("m");

function changeb() {
    if(bcolor.style.backgroundColor  === "white"){
        bcolor.style.backgroundColor = "black";
        button.textContent = "TURN ON light Mode";
        img.src = "n.jpg"
    }
    else{
        bcolor.style.backgroundColor = "white";
        button.textContent = "Turn On dark Mode";
        img.src = "image.jpg"
        img.style.width = "550px"
        img.style.height = "550px"
    }
}

button.addEventListener("click", changeb);
console.log("test")