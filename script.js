const button = document.getElementById('reload-btn');
let quoteId = document.getElementById('p-id');
let quote = document.getElementById('p-quote');

async function fetchData() {
    const apiUrl = "https://api.adviceslip.com/advice";

    try {
        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        console.log(data);

        quoteId.innerHTML = `Advice #${data.slip.id}`;
        quote.innerHTML = `${data.slip.advice}`;

    } catch (error) {
        console.log('Fetch error: ', error);
    }
}

fetchData();

button.addEventListener('click', fetchData);

