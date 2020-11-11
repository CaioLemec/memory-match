const gameButton = (function(){
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style"); 
        $style.textContent=`
            .game-button {
                width: 85px;
                height: 85px;
                border-radius: 50%;
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #2ed573;
                border: 3px solid #fffcee;
                color:  #fffcee;
                font-family: inherit;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 1.05em;
                cursor: pointer;
                text-align: center;
                box-shadow: 0px 4px 8px #3a4042;
                opacity: 1;
                transition: opacity 250ms cubic-bezier(0.58, 0.41, 0.41, 0.58),
                transform 250ms linear;
            }

            .game-button.-disable {
                opacity: 0;
                transform: translate(-50%, -50%) scale(2);
            }

        ` 
        $head.insertBefore($style,null); 
    };

    module.render = content => {
        module._style(); 
        return `
        <button class="game-button">${content}</button>
        `
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };

})();