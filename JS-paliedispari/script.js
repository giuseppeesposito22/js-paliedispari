// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function isPalindroma(parola) {
  let letteraUguale = false;

  for (let i = 0; i < parola.length / 2 - 1; i++) {
    if (parola[i] === parola[parola.length - 1 - i]) {
      letteraUguale = true;
    } else {
      return false;
    }
  }

  return letteraUguale;
}

isPalindroma(prompt("inserisci una parola..."))
  ? alert("parola palindroma")
  : alert("parola non palindroma");

// console.log(isPalindroma(prompt("inserisci una parola...")));

// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Somiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
