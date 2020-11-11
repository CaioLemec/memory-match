const flatButton = (function(){

    const module = {};

    module._id= 0;

    module._style = (active) => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent =`
                .flat-button-${module._id} {
                    display: inline-flex;
                    justify-content: center;
                    background-color: ${active ? "#f25a70" : "#eae6da"};
                    color: ${active ? "#ffffff" : "#fffcee"};
                    font-size: 24px;
                    font-weight: bold;
                    text-transform: uppercase;
                    width: 50%;
                    box-sizing: border-box;
                    padding-top: 60px;
                    height: 176px;
                }
            `;
        $head.insertBefore($style,null);
    };

    module.handleClick = path => {
        window.location.hash = `#/${path}`;
        window.location.reload(true);
    }

    module.render = (content = "", active = false, path = "") => {
        module._id++;
        module._style(active);

        return `<button 
        class="flat-button-${module._id}" 
        onclick="flatButton.handleClick('${path}')"
        >${content}</button>`
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };


})();


















