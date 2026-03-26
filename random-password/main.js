let passBt = document.querySelector(".showPass");
let copyBt = document.querySelector(".copy");
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
    navigator.clipboard.writeText(paswInput.value);
})