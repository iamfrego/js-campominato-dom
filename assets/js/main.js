// selezione elementi
const containerElement = document.querySelector(".container")
const diffSelector = parseInt(prompt("Inserisci un livello di difficoltà compreso tra 1 e 3:"));

let cell_number;

//selezione Difficoltà
if (diffSelector == 1) {
    cell_number = 100;
    containerElement.style.width = "1000px"
} else if (diffSelector == 2) {
    cell_number = 81;
    containerElement.style.width = "900px"

} else if (diffSelector == 3) {
    cell_number = 49;
    containerElement.style.width = "700px"
}

//counter punti vittoria
let winCounter = 0;
//array di bombe
const bombsInGrid = createBomb(cell_number);
//crea griglia
createGrid(cell_number);

console.log(bombsInGrid);

/*
FUNZIONI
*/

function createGrid(cell_number) {
    for (let i = 1; i <= cell_number; i++) {
        //crea elemento
        let gridElement = document.createElement("div");
        gridElement.className = `grid_cell`
        gridElement.innerHTML = parseInt(i);
        containerElement.append(gridElement);

        //Funzione al click
        gridElement.addEventListener("click", function () {

            //cella cliccata
            let cellReader = parseInt(this.innerText);

            //controlla se la cella cliccata è un bomba
            if (isABomb(cellReader, bombsInGrid)) {
                //SE è UNA BOMBA
                //  scan array bombsInGrid e comparazione con cella cliccata
                for (let i = 0; i < 16; i++) {
                    //seleziona tutte le celle della griglia con il valore delle bombe
                    const section = document.getElementsByClassName("grid_cell").item(bombsInGrid[i] - 1);
                    // aggiunge classe red
                    section.classList.add("red");
                    //stampa punteggio vittoria
                    document.querySelector(`.results`).innerHTML = `Il tuo punteggio è di ${winCounter}`;
                }
            } else {
                //SE NON è UNA BOMBA
                this.style.backgroundColor = "#99CBFF";
                winCounter++;
                console.log(winCounter);
            }
        })
    }
}

function createBomb(cell_number) {
    //Array Bombe
    let bombs = [];
    for (let i = 0; i < 16; i++) {
        //genera numero random
        let bomb = Math.floor(Math.random() * cell_number) + 1;
        //anti-duplicati
        if (bombs.includes(bomb)) {
            i--;
        }
        else {
            bombs.push(bomb)
        }
    }
    return bombs;
}

//verifica se la cella selezionata è una bomba
function isABomb(cellReader, bombs) {
    if (bombs.includes(cellReader)) {
        return true;

    } else {
        return false;
    }
}
