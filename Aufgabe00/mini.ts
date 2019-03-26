document.addEventListener("DOMContentLoaded", welcome);
function welcome() {
    let name:string = prompt("Hey sweetie, what's your name?", "");
    document.getElementById("Blub").innerHTML =
        "Willkommen " + name + " :) ";
    console.log("Willkommen " + name +  "! Ich bin eine Konsolenausgabe :)");
}

//# sourceMappingURL=mini.js.map 