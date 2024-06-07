
const d = document;
const adviceContainer = d.querySelector(".advice-container");
const url = "https://api.adviceslip.com/advice";



async function generateAdvice() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        adviceContainer.innerHTML += `
        <p class="num-advice">Advice #<span id="num-advice">${data.slip.id}</span></p>
        `;
        adviceContainer.innerHTML += `
        <q class="advice">${data.slip.advice}</q>
        `
    })
}

generateAdvice();



