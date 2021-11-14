
//let tab = array;
var tab = [[],[]];
let text="";

window.onload = function() {
    let data = document.getElementById("data");
    let imieSearch = document.getElementById("imie");
    LoadNames();
    FindName();
    FindSurname();
    RemoveIndex();
    //----------------------------------
    //              ZAD 1
    //----------------------------------
    function refreshArray()
    {
        data.innerHTML = "";
        for (let i = 0; i < tab[0].length; i++)
        {
            
            const temp = (i+1+" | "+tab[1][i]+" "+tab[0][i]+"<br>");
            data.innerHTML += temp;
        }
    }

    function LoadNames()
    {
        fetch('https://raw.githubusercontent.com/BinaRRR/BazaImionPAI/main/nazwy.txt')
        .then(response => {
            return response.text();
        })
        .then(data => {
            const split = data.split(';'); // Andrzej; Wajda; Marek; Mostowiak; Anna; Zawadzka;
            for (let i = 0; i < split.length / 2 - 1; i++)
            {
                tab[0][i] = split[2*i]; //Andrzej, Marek, Anna
                tab[1][i] = split[2*i+1]; //Wajda, Mostowiak, Zawadzka
            }
            refreshArray();
        });
    }
    //----------------------------------
    //              ZAD 2
    //----------------------------------
    function FindName()
    {
        text = "";
        imieSearch.addEventListener("click", function() {
            text=prompt("Wprowadź imię, które chcesz wyszukać");
            let counter = 0;
            for (let i = 0; i < tab[1].length; i++)
            {
                if (tab[0][i].charAt(0).toUpperCase() == text.charAt(0).toUpperCase())
                    counter++;        
            }
            alert("Znaleziono: "+counter);
        });
    }
    //----------------------------------
    //              ZAD 3
    //----------------------------------
    function FindSurname()
    {
        text = "";
        let nazwiskoSearch = document.getElementById("nazwisko");
        nazwiskoSearch.addEventListener("click", function() {
            let counter = 0;
            text=prompt("Wprowadź nazwisko, które chcesz wyszukać");
            for (let i = 0; i < tab[1].length; i++)
            {
                if(tab[1][i].toUpperCase() === text.toUpperCase())
                {
                    counter++;
                }   
            }
            alert("Znaleziono: "+counter); 
        });
    }
    //----------------------------------
    //              ZAD 4
    //----------------------------------
    function RemoveIndex()
    {
        text = "";
        let usun = document.getElementById("usun");
        usun.addEventListener("click", function() {
            text=prompt("Podaj index");
            if (text <= 0 || text > tab[0].length) {
                alert("Niepoprawny index!");
                return;
            }
            for (let i = 0; i <= 1; i++) {
                tab[i].splice(text-1, 1);
            }
            
            refreshArray();
        });
    }
}