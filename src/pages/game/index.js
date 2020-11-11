const game = (function () {
    const $root = document.querySelector('#root');
    const $cardsWrapper = createCardsWrapper();
    const createMemoryCard = memoryCard.create();
    const $pointBar = pointBar.create();
    const $layerStart = layerStart.render("start");

    const $memoryCard = createMemoryCard({
        src: "./img/icon-collabcode.png", 
        alt: "Mascote gueio"
    });

    const $memoryCardC = createMemoryCard({
        src: "./img/icon-c.png",
        alt: "Ícone livro C++"
    });

    const $memoryCardJs = createMemoryCard({
        src: "./img/-icon-js.png",
        alt: "Ícone livro JavaScript"
    });

    const $memoryCardJava = createMemoryCard({
        src: "./img/icon-java.png",
        alt: "Ícone livro Java"
    });

    const $memoryCardWoman = createMemoryCard({
        src: "./img/icon-woman.png",
        alt: "Mulher na frente do notebook"
    });

    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

    $root.insertAdjacentHTML("afterbegin", $pointBar);
    $root.insertAdjacentElement("beforeend", $cardsWrapper);
    $root.insertAdjacentHTML("beforeend", $layerStart)
});