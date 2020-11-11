// Muitas responsabilidades, clicks, animações, variações = components
// Poucas responsabilidades, simples, contexto, estrutural = object 

// Criando Regex :
// const regex = /caio lemec/;
// const regex = /^caio/; Buscando palavra que inicia com...
// const regex = /lemec$/; Buscando palavra que Finaliza com...
// const resultado = regex.test(texto);
// console.log("resultado:", resultado);
// REGEX EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// REGEX EMAIL = /^[0-9]{4,5}$-[0-9]{4}/

// const AAA = (function(){
//     const module = {};
//     module._style = () => {
//         const $head = document.querySelector("head");
//         const $style = document.createElement("style");
//         $style.textContent =`
//                 . {
//                 }
//             `;
//     $head.insertAdjacentElement("beforeend",$style);
//     };
//     module.render = () => {
//         module._style();
//         return `<></>`
//     };
//     return {
//         render: module.render
//     };
// })();

// O node é uma plataforma com motor e recursos (API's) para rodar o backend
// sem precisar de um browser.

// O NPM = Node Package Manager - gerenciador de pacotes é ele que usamos
// para começar a instalar as dependencias com comandos via terminal.
// melhor usado em projetos grandes.
// Site para verificar as dependencias = nodejs.com

// Yarn é o concorrente do npm, tambem como package manager, gerencia pacotes
// para instalar dependencias. melhor usado em projetor pequenos.

// para criar um package.json basta você usar o comando npm init na pasta do
// projeto e seguir os passos descrevendo o .json

// versão 1.0.(0) = pequenas alteração, troca variável, alteram o último zero, 
// chamado de patch.

// versão 1.(0).0 = novas funcionalidade sem alterar a usabilidade do usuário,
// chamado de miner.

// versão (1).0.0 = chamado de major, é alterado quando ocorre uma grande alteração,
// alteram a forma de usar.

// licenças: MIT é usado quando não importa a obtenção de todos itens 
// a terceiros sem direitos autorais.

// licenças: apache2.0 ou mlp2.0 deixar o código aberto mais deixa a detenção
// da marca para o criador.