// Esercizio Lista cognomi :


var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
    console.log("Lista: " + cognomi);
var cognomeInserito = prompt("Inserisci il tuo cognome "); 

//  1. chiedi all’utente il cognome;
cognomi.push(cognomeInserito);

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’;
console.log("Inserisco il cognome richiesto all'utente: " + cognomi);

// 3. stampa la lista ordinata alfabeticamente;

for(var i = 0; i < cognomi.length; i++) {
    cognomi[i] = cognomi[i].toUpperCase();
}

cognomi.sort();
console.log("Ordine alfabetico: " + cognomi);


for(var i = 0; i < cognomi.length; i++) {
    document.getElementById("cognomi").innerHTML += "<li>" + cognomi[i] + "</li>";
}

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova. 

var idx = cognomi.indexOf(cognomeInserito) + 1;
    console.log(idx);

