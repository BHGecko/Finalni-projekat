// rukomet.js

var mecevi = [
    { domacin: "THW Kiel", gost: "PSG HB", rezultat: "32 - 28" },
    { domacin: "Pick Szeged", gost: "RK Zagreb", rezultat: "27 - 25" },
    { domacin: "Veszprém", gost: "Barça", rezultat: "24 - 24" }
];

function prikaziRezultate() {
    var kontejner = document.getElementById("rezultati");

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

var slika = document.getElementById("sport-img");

slika.addEventListener("click", function() {
    if (slika.style.opacity === "0.5") {
        slika.style.opacity = "1";
    } else {
        slika.style.opacity = "0.5";
    }
});

prikaziRezultate();
