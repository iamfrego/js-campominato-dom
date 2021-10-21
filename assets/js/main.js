const containerElement = document.querySelector(".container")

const diffSelector = parseInt(prompt("Inserisci un livello di difficoltà compreso tra 1 e 3:"));

let cell_number;
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



function createGrid(cell_number) {
    for (let i = 1; i <= cell_number; i++) {
        let gridElement = document.createElement("div");
        gridElement.className = `grid_cell--${i}`
        gridElement.innerHTML = i
        containerElement.append(gridElement)

        gridElement.addEventListener("click", function () {

            this.classList.add("clicked")

            const cellReader = document.getElementsByClassName(`grid_cell--${i}`);
            console.log(cellReader);

        })
    }
}

function createBomb(cell_number) {
    let bombs = []
    for (let i = 0; i < 16; i++) {
        let bomb = Math.floor(Math.random() * cell_number) + 1
        if (bombs.includes(bomb)) {
            i--;
        }
        else {
            bombs.push(bomb)
        }
    }
    return bombs;
}



function iaABomb(cell_numebers, bombs) {
    if (bombs.includes(cell)) {
        console.log("fine");
    } else {
        console.log("continua a giocare");
    }
}

createGrid(cell_number);

const bombs = createBomb(cell_number);

console.log(bombs);

