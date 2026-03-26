let passBt = document.querySelector(".showPass");
let copyBt = document.querySelector(".copy");
let generatePasw = document.querySelector(".generatePasw");
let paswInput = document.querySelector("#pasw");

// pra isso, ele vai ter que selecionar uma propriedade e modificar.
passBt.addEventListener("click", () => {
    if (paswInput.type === 'password') {
        paswInput.type = 'text'; // o tipo de todo input pode ser modificado aqui
    }
    else {
        paswInput.type = 'password';
    }
})

copyBt.addEventListener("click", () => {
    if (paswInput.value.length != 0) {
        navigator.clipboard.writeText(paswInput.value);
        alert("senha copiada pro teclado");
    }
})

generatePasw.addEventListener("click", () => {
    let newPasw = "";
    const characters = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    for (let i = 0; i < 8; i++) {
        newPasw += characters[Math.floor(Math.random() * characters.length)];
    }
    // o input deve escrever automaticamente a nova senha
    navigator.clipboard.writeText(newPasw);
    alert("senha copiada pro teu teclado!\nCola aí chefe")
})