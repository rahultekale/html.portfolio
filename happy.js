//Grab Variables 
let contel = document.getElementById("rahul")
let saveel = document.getElementById("saveel")
//normal variable 
let count = 0;

function increment() {
    count += 1;
    contel.innerText = count;
}

function decremnet() {
    count -= 1;
    contel.innerText = count;
}

function reset() {
    count = 0;
    contel.innerText = count;

}
