let x = 5;
let y = 7;
let z = x + y;

console.log(z); 
let A = "Hello ";
let B = "world!";
let C = A + B;

console.log(C); 

function SumNPrint(x1, x2) {

    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y); 
SumNPrint(A, B); 

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}


let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr, arrayName) {
    arr.forEach((item) => {
        if (item === "Banana") {
            alert(`We found a banana in ${arrayName}`);
        }
    });
}

findTheBanana(L1, "the first array");
findTheBanana(L2, "the second array");

function greetingFunc() {
    let d = new Date(); 
    let h = d.getHours(); 
    let greetingMessage = "";

    if (h < 12) {
        console.log("Good morning");
        greetingMessage = "Good morning, I am Charlie. ";
    } else if (h < 18) {
        console.log("Good afternoon");
        greetingMessage = "Good afternoon, I am Charlie. ";
    } else if (h < 20) {
        console.log("Good evening");
        greetingMessage = "Good evening, I am Charlie. ";
    } else if ((h < 24 && h >= 20) || (h < 5 && h >= 0)) {
        console.log("Good night");
        greetingMessage = "Good night, I am Charlie. ";
    }


    let E = document.getElementById("greeting");
    if (E) {
        E.innerHTML = greetingMessage;
    }
}

greetingFunc();