console.log("Hello World")


// let captured;

function getValue(){
    captured = document.getElementById("inp").value;
    document.getElementById("parag").innerText = `Hello ${captured}`;
}

