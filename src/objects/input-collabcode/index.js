const inputCollabCode = (function(){
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent =`
                .input-collabcode {
                    display: block;
                    width: 100%;
                    font-size: 18px;
                    color: #3a4042;
                    font-weight: bold;
                    padding: 12px 0 12px 0;
                    border-bottom: 1.5px solid rgba(58, 64, 66, .5);
                }
            `;
        $head.insertBefore($style,null);
    };

    module.render = ({id ="", placeholder = "", type= "text"}) => {
        module._style();

        return `<input
        id="${id}"
        class="input-collabcode" 
        type="${type}" 
        placeholder="${placeholder}">`
    };

    return {
        render: module.render
    };


})();

