// fudbal.js

// Niz mečeva
var mecevi = [
    { domacin: "Arsenal", gost: "Chelsea", rezultat: "2 - 1" },
    { domacin: "Liverpool", gost: "Man City", rezultat: "1 - 1" },
    { domacin: "Barcelona", gost: "Real Madrid", rezultat: "3 - 0" }
];

// Funkcija za prikaz rezultata
function prikaziRezultate() {
    var kontejner = document.getElementById("rezultati");

    // Petlja kroz niz
    for (var i = 0; i < mecevi.length; i++) {
        var mec = mecevi[i];

        var kartica = document.createElement("div");
        kartica.className = "rezultat-kartica";
        kartica.innerHTML = "<span>" + mec.domacin + "</span>" +
                            "<span class='rezultat'>" + mec.rezultat + "</span>" +
                            "<span>" + mec.gost + "</span>";

        kontejner.appendChild(kartica);
    }
}

// Klik na sliku - mijenja stil elementa
var slika = document.getElementById("sport-img");

slika.addEventListener("click", function() {
    // Uslov if/else
    if (slika.style.opacity === "0.5") {
        slika.style.opacity = "1";
    } else {
        slika.style.opacity = "0.5";
    }
});

// Pokretanje
prikaziRezultate();
