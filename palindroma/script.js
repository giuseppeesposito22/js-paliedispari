// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function isPalindroma(parola) {
  let letteraUguale = false;

  for (let i = 0; i < parola.length / 2; i++) {
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
