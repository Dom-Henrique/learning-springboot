const button = document.getElementsByTagName("button")[0];
const date = document.querySelector("#birthDate").value;

let div = document.createElement("div");
document.body.appendChild(div);

button.addEventListener("click", () => {
    // pegar o ano
    let yearNow = new Date().getFullYear();
    let age = yearNow - parseInt(date.split("-")[0]);
    div.textContent = `You have ${age}'s old!`;
})