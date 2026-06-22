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
    },
    {
        nome: "X bacon",
        preco: 21.00,
        imagem : "images/Xbacon.png"
    }
];

const listaLanches = document.getElementById("lista-lanches");

    lanches.forEach(lanche => {
    listaLanches.innerHTML += `
    <div class="cartao-lanche">
        <img src="${lanche.imagem}" alt="${lanche.nome}">
        <h2>${lanche.nome}</h2>
        <p class="preco">${lanche.preco.toFixed(2)}</p>
    </div>
    `;
});