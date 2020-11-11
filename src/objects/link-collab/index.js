const linkCollab = (function(){
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent =`
                .link-collab {
                    display: block;
                    color: #3a4042;
                    font-size: 14px
                    opacity: 0.7;
                    text-decoration: none;
                    margin: 40px 0px 50px 0px;
                    text-align: right;
                }
            `;
    $head.insertAdjacentElement("beforeend",$style);
    };
    module.render = ({href, content}) => {
        module._style();
        return `<a class="link-collab" href="${href}">${content}</a>`
    };
    return {
        render: module.render
    };
})();