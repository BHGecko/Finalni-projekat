// forma.js

var btn = document.getElementById("btn-pošalji");
var porukаGreska = document.getElementById("poruka-greska");
var porukaUspjeh = document.getElementById("poruka-uspjeh");

function isValidEmail(email) {
    return email.indexOf("@") > 0 && email.indexOf(".") > 0;
}

btn.addEventListener("click", function() {
    var ime = document.getElementById("ime").value.trim();
    var email = document.getElementById("email").value.trim();
    var tekst = document.getElementById("tekst").value.trim();

    // Sakrij stare poruke
    porukаGreska.style.display = "none";
    porukaUspjeh.style.display = "none";

    // Validacija - if/else
    if (ime === "") {
        porukаGreska.textContent = "Greška: Ime je obavezno!";
        porukаGreska.style.display = "block";
        return;
    }

    if (email === "") {
        porukаGreska.textContent = "Greška: Email je obavezan!";
        porukаGreska.style.display = "block";
        return;
    }

    if (!isValidEmail(email)) {
        porukаGreska.textContent = "Greška: Email adresa nije ispravna!";
        porukаGreska.style.display = "block";
        return;
    }

    if (tekst === "") {
        porukаGreska.textContent = "Greška: Poruka ne može biti prazna!";
        porukаGreska.style.display = "block";
        return;
    }

    // Sve je OK - prikaz uspjeha i reset forme
    porukaUspjeh.textContent = "Poruka je uspješno poslana! Hvala, " + ime + "!";
    porukaUspjeh.style.display = "block";

    document.getElementById("ime").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tekst").value = "";
});
