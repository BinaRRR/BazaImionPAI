var n = prompt("Podaj liczbę imion: ");
var tab = [];
for (let i = 0; i < n; i++)
    tab[i] = prompt("Podaj imię numer " +  (i + 1));
for (let i = 0; i < n; i++)
    document.write(tab[i] + "<br>");