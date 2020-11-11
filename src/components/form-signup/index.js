const formSingUp = (function(){
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
        const $userNameLabel = labelCollabCode.render("Username");
        const $userNameInput = inputCollabCode.render({placeholder: "example"});

        const $emailLabel = labelCollabCode.render("E-mail");
        const $emailInput = inputCollabCode.render({placeholder: "Enter a valid email.", type: "email"});

        const $passwordLabel = labelCollabCode.render("Password");
        const $passwordInput = inputCollabCode.render({placeholder: "Enter your password.", type: "password"});

        const $confirmPasswordLabel = labelCollabCode.render("Confirm Password");
        const $confirmPasswordInput = inputCollabCode.render({placeholder: "Confirm your password.", type: "password"});

        const $btn = btnSignup.render({content:"Signup", path:"login"});

        return `
            ${$userNameLabel}
            ${$userNameInput}
            ${$emailLabel}
            ${$emailInput}
            ${$passwordLabel}
            ${$passwordInput}
            ${$confirmPasswordLabel}
            ${$confirmPasswordInput}
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

