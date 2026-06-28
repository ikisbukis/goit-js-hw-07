// На елементі input#name-input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім’я для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"


const field = document.querySelector("#name-input");
const out = document.querySelector("#name-output")

field.addEventListener("input", nameFun);

function nameFun(event) {
    const name = field.value.trim();

    if(name === ""){
        out.textContent = "Anonymous";
    } else {
        out.textContent = name;
    }
}

console.log(field);