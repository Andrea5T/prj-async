const productsRequest = await fetch('./data/prodotti.json');
const prodotti = await productsRequest.json();
export default prodotti;


export const getCategorieProdotti = () => {
    const categorie = prodotti.map(prodotto => prodotto.categoria);
    return [...new Set(categorie)];
};

