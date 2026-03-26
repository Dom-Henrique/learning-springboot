// usuario escolhe uma opcao -> computador tmb -> a opcao do computador fica salva pro jogador usar outra
// posso pegar cada uma das três opções
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let score1 = document.querySelector(".myScore");
let score2 = document.querySelector(".cpuScore");
let you = document.querySelector("#you");
let cpu = document.querySelector("#cpu")

let myScore = 0;
let cpuScore = 0;
let cont = 0;

var myOption, cpuOption;

function playGame(option) {
    myOption = option;
    you.textContent = `You: ${myOption}`;
    let gameOptions = ["rock", "paper", "scissor"]
    let index = Math.floor(Math.random() * gameOptions.length); // transforma o número
    cpuOption = gameOptions[index];
    cpu.textContent = `CPU: ${cpuOption}`;
    if (myOption == "rock" && cpuOption == "scissor") {
        myScore += 1;
        score1.textContent = `Your Score: ${myScore}`;
    } else if (myOption == "scissor" && cpuOption == "rock") {
        cpuScore += 1;
        score2.textContent = `CPU Score: ${cpuScore}`;
    } else if (myOption == "paper" && cpuOption == "rock"){
        myScore += 1;
        score1.textContent = `Your Score: ${myScore}`;
    } else if (myOption == "rock" && cpuOption == "paper"){
        cpuScore += 1;
        score2.textContent = `CPU Score: ${cpuScore}`;
    } else if (myOption == "scissor" && cpuOption == "paper"){
        myScore += 1;
        score1.textContent = `Your Score: ${myScore}`;
    } else if (myOption == "paper" && cpuOption == "scissor"){
        cpuScore += 1;
        score2.textContent = `CPU Score: ${cpuScore}`;
    }
    cont++;
    if (cont == 10){
        stop;
    }
}

/*
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
*/