const lanches = [
    {
        nome : "X frango",
        preco : 22.50 , 
        imagem : "images/Xfrango.jpg"
    },
    {
        nome : "X tudo",
        preco : 25.00,
        imagem : "images/Xtudo.jpg"
    }
];

const listaLanches = document.getElementById("lista-lanches");

    lanches.forEach(lanche => {
    listaLanches.innerHTML += `
    <div class="catao-lanche">
        <img src="${lanche.imagem}" alt="${lanche.nome}">
        <h2>${lanche.nome}</h2>
        <p class="preco">${lanche.preco.toFixed(2)}</p>
    </div>
    `;
});