// usuario escolhe uma opcao -> computador tmb -> a opcao do computador fica salva pro jogador usar outra
// posso pegar cada uma das três opções
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let score1 = document.querySelector(".myScore");
let score2 = document.querySelector(".cpuScore");

let myScore = 0;
let cpuScore = 0;

var myOption = 0;
var cpuOption = 0;

// talvez criar uma unica funcao e adicionar no html ficasse bacana
rock.addEventListener("click", () => {
    // definir um valor pra cada botao e pegar ele pra comparar
    myOption = rock.value;
    console.log(myOption)
    let options = [1, 2, 3]
    let index = Math.floor(Math.random() * options.length); // transforma o número
    cpuOption = options[index];
    console.log(cpuOption)
    if (myOption > cpuOption) {
        myScore += 1;
        score1.textContent = `Your Score: ${myScore}`;
    } else if (myOption < cpuOption) {
        cpuScore += 1;
        score2.textContent = `CPU Score: ${cpuScore}`;
    } else {
        console.log("Tie!");
    }
})

// cada opcao tem q lembrar da decisao anterior
// var vai ajudar

paper.addEventListener("click", () => {
    // definir um valor pra cada botao e pegar ele pra comparar
    myOption = paper.value;
    console.log(myOption)
    let options = [1, 2, 3]
    let index = Math.floor(Math.random() * options.length); // transforma o número
    cpuOption = options[index];
    console.log(cpuOption)
    if (myOption > cpuOption) {
        myScore += 1;
        score1.textContent = `Your Score: ${myScore}`;
    } else if (myOption < cpuOption) {
        cpuScore += 1;
        score2.textContent = `CPU Score: ${cpuScore}`;
    } else {
        console.log("Tie!");
    }
})

scissor.addEventListener("click", () => {
    // definir um valor pra cada botao e pegar ele pra comparar
    myOption = scissor.value;
    console.log(myOption)
    let options = [1, 2, 3]
    let index = Math.floor(Math.random() * options.length); // transforma o número
    cpuOption = options[index];
    console.log(cpuOption)
    if (myOption > cpuOption) {
        myScore += 1;
        score1.textContent = `Your Score: ${myScore}`;
    } else if (myOption < cpuOption) {
        cpuScore += 1;
        score2.textContent = `CPU Score: ${cpuScore}`;
    } else {
        console.log("Tie!");
    }
})