// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Somiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// funzione per generare un numero random
function randomNumber(max, min = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// fuzione per verificare se un numero è pari
function isPari(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const userChoice = prompt("scegli tra pari o dispari");
console.log(userChoice);

const userNum = parseInt(prompt("Scegli un numero tra 1 e 5..."));
console.log(userNum);

const pcNum = randomNumber(5);
console.log(pcNum);

const sumNum = pcNum + userNum;
console.log(sumNum);

let esito = "";
if (userChoice === "pari" && isPari(sumNum)) {
  esito += "user win";
} else if (userChoice === "dispari" && !isPari(sumNum)) {
  esito += "user win";
} else {
  esito += "pc win";
}

console.log(esito);
