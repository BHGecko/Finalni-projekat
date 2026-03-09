// kosarka.js

var mecevi = [
    { domacin: "Lakers", gost: "Warriors", rezultat: "112 - 108" },
    { domacin: "Celtics", gost: "Bucks", rezultat: "98 - 101" },
    { domacin: "Nuggets", gost: "Suns", rezultat: "120 - 115" }
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

// Klik na sliku mijenja veličinu
var slika = document.getElementById("sport-img");

slika.addEventListener("click", function() {
    if (slika.style.opacity === "0.5") {
        slika.style.opacity = "1";
    } else {
        slika.style.opacity = "0.5";
    }
});

prikaziRezultate();
