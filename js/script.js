document.getElementById('bigliettoForm').onsubmit = function (event) {
    event.preventDefault();
    calcolaPrezzo();
};

function calcolaPrezzo() {
    var percorrenza = parseInt(document.getElementById('chilometri').value);
    var eta = parseInt(document.getElementById('eta').value);
    var prezzoAlKilometro = 0.21;
    var prezzoBiglietto = prezzoAlKilometro * percorrenza;

    if (eta <= 18) {
        prezzoBiglietto *= 0.80; // 20% di sconto
    } else if (eta >= 65) {
        prezzoBiglietto *= 0.60; // 40% di sconto
    }

    document.getElementById('costo').innerHTML = "Il prezzo del biglietto è " + prezzoBiglietto.toFixed(2) + " Euro";
}