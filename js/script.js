// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// **NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// Consigli del giorno:
// >
// > - Pensate prima in italiano.<
// > - Dividete in piccoli problemi la consegna.
// > - Individuate gli elementi di cui avete bisogno per realizzare il programma.
// > - Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"


// creare 5 math random da attribuire ad un elemento dell'html
// creare un timer che, allo scadere del tempo, renda display none i numeri random e display block gli input in cui inserire i numeri
// creare una condizione che permetta l'individuazione dei numeri inseriti negli input, magari utilizzando un ciclo for che faccia una comparazione tra due array

let j = Math.floor((Math.random() * 50) + 1);
let k = Math.floor((Math.random() * 50) + 1);
let w = Math.floor((Math.random() * 50) + 1);
let x = Math.floor((Math.random() * 50) + 1);
let y = Math.floor((Math.random() * 50) + 1);

const randomNumbers = [j, k, w, x, y];
const userNumbers = [];
console.log(userNumbers)
const randomNumbersList = document.getElementById("numbers-list");
const inputGroup = document.getElementById("input-group");
const form = document.getElementById("answers-form");
const formNumbersField = document.querySelectorAll(".form-control");
const btn = document.getElementById("button");


randomNumbersList.innerHTML = randomNumbers

let seconds = 2;
const timer = setInterval(countdown, 1000);

function countdown() {
    seconds--;

if (seconds === 0){
    clearTimeout(timer);
    randomNumbersList.remove();
    form.classList.remove("d-none");
}

}


button.addEventListener("click", function(event){
event.preventDefault()

formNumbersField.innerHTML = formNumbersField.value

console.log(formNumbersField.innerHTML)

    



}
)











// **BONUS:**
// - Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// - Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.