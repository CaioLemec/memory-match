const btnSignup = (function(){
    const module = {};
    
    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent =`
                .btn-signup {
                    width: 100%;
                    height: 48px;
                    border-radius: 24px;
                    color: white;
                    font-size: 14px;
                    text-transform: uppercase;
                    background-color: #f25a70;
                    cursor: pointer;
                }
                .input-collabcode + .btn-signup {
                    margin-top: 45px;
                }
            `;
        $head.insertAdjacentElement("beforeend",$style);
    };

    module.handleClick = (event, path) => {
        event.preventDefault();
        window.location.hash = `#/${path}`;
        window.location.reload(true);
    }

    module.render = ({content = "", path =""}) => {
        module._style();
        return `<input 
                class="btn-signup" 
                type="submit"
                value=${content}
                onclick="btnSignup.handleClick(event, '${path}')">`;
    };
    return {
        render: module.render,
        handleClick: module.handleClick
    };
})();