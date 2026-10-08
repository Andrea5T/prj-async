import prodotti from './prodotti.js';
import { getCategorieProdotti } from './prodotti.js';

const root = document.getElementById('cards-container');
const loader = document.querySelector('.loader');
const filtersContainer = document.querySelector('.filters');

//
// Crea i pulsanti per filtrare i prodotti per categoria
//
const createFilterButtons = () => {

    const btnTutti = document.createElement('button');
    btnTutti.textContent = 'Tutti';
    btnTutti.classList.add('filter-button');
    btnTutti.setAttribute('title', 'Mostra tutti i prodotti');
    filtersContainer.appendChild(btnTutti);

    getCategorieProdotti().forEach(categoria => {
        const button = document.createElement('button');
        button.textContent = categoria;
        button.classList.add('filter-button');
        button.setAttribute('title', `Filtra per ${categoria}`);
        filtersContainer.appendChild(button);
    });
};


//
// Crea le schede dei prodotti
//
const createCards = (category = 'Tutti') => {

    if (category === 'Tutti') {
    
        prodotti.forEach((prodotto, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.id = `card-${index + 1}`;
            card.innerHTML = `
                <h3>${prodotto.nome}</h3>
                <h5>${prodotto.categoria}</h5>
                <div class="prezzo">€ ${prodotto.prezzo}</div>
            `;

            root.appendChild(card);
        });
    } else {
        prodotti.filter(prodotto => prodotto.categoria === category)
                .forEach((prodotto, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.id = `card-${index + 1}`;
            card.innerHTML = `
                <h3>${prodotto.nome}<span>${index + 1}</span></h3>
                <h5>${prodotto.categoria}</h5>
                <div class="prezzo">€ ${prodotto.prezzo}</div>
            `;
            root.appendChild(card);
        });
    }
};


filtersContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('filter-button')) {
        const category = event.target.textContent;
        root.innerHTML = '';
        createCards(category);
    }
});


setTimeout(() => {
    root.style.display = 'none';
    loader.classList.add('hidden');
    root.style.display = 'flex';
}, 2000);

createFilterButtons();
createCards();