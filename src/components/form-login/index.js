const formLogin = (function(){
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent =`
                .form-singup {
                    padding: 0 35px 40px 35px;
                }
            `;
        $head.insertAdjacentElement("beforeend", $style);
    };

    module._children = () => {
        const $userNameLabel = labelCollabCode.render("Username ou e-mail");
        const $userNameInput = inputCollabCode.render({placeholder: "Enter a valid email."});

        const $passwordLabel = labelCollabCode.render("Password");
        const $passwordInput = inputCollabCode.render({id: "password", placeholder: "Enter your password.", type: "password"});

        const $eyeCollabCode = eyeCollabCode.render({attrFor: "password"});

        const $linkCollab = linkCollab.render({href: "#", content:"Forgot Password?"});

        const $btn = btnSignup.render({content:"Login", path:"game"});

        return `
            ${$userNameLabel}
            ${$userNameInput}

            ${$passwordLabel}
            ${$passwordInput}

            ${$eyeCollabCode}

            ${$linkCollab}
            
            ${$btn}
        `
    }

    module.render = () => {
        module._style();
        return `<form class="form-singup" action="" method="POST">${module._children()}</form>`
    };
    return {
        render: module.render
    };
})();

