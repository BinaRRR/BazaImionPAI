import {array} from './dane.js';

//let imiona = ["Ryszard","Anon","Hugo","Jacek","Aneta"];
//let nazwiska = ["Trynkiewicz ","Antoński","Jankowski","Wardęga","Kovacs"];

//let tab = [["Ryszard","Anon","Hugo","Jacek","Aneta"], ["Trynkiewicz","Antoński","Jankowski","Wardęga","Kovacs"]];
let tab = array;
let text="";

/*fetch('https://raw.githubusercontent.com/BinaRRR/BazaImionTOO/main/nazwy.txt')
.then(response => {
    return response.text();
})
.then(data => document.write(data));*/

window.onload = function() {
    let data = document.getElementById("data");
    let imieSearch = document.getElementById("imie");
    FindName();
    FindSurname();
    RemoveIndex();
    refreshArray();

    function refreshArray()
    {
        data.innerHTML = "";
        for (let i = 0; i < tab[0].length; i++)
        {
            //document.write(i+1+" | "+nazwiska[i]+" "+imiona[i]+"<br>");
            const temp = (i+1+" | "+tab[1][i]+" "+tab[0][i]+"<br>");
            data.innerHTML += temp;
        }
    }

    function FindName()
    {
        
        imieSearch.addEventListener("click", function() {
            text=prompt("Wprowadź imię, które chcesz wyszukać");
            let counter = 0;
            for (let i = 0; i < tab[1].length; i++)
            {
                if(tab[0][i].toUpperCase().includes(text.toUpperCase()))
                {
                    counter++;
                }   
            }
            alert("Znaleziono: "+counter);
        });
    }

    function FindSurname()
    {
        let nazwiskoSearch = document.getElementById("nazwisko");
        nazwiskoSearch.addEventListener("click", function() {
            let counter = 0;
            text=prompt("Wprowadź nazwisko, które chcesz wyszukać");
            for (let i = 0; i < nazwiska.length; i++)
            {
                if(tab[1].toUpperCase() === text.toUpperCase())
                {
                    counter++;
                }   
            }
            alert("Znaleziono: "+counter); 
        });
    }

    function RemoveIndex()
    {
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
//zad 1


//zad 2

//zad 3

//document.write("-------------------");
//zad 4




/*fetch('data.txt')
.then(response => {
    return response.text();
})
.then(data => document.write(data));*/
//document.close();