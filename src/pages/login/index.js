const login = (function(){
    const $root = document.querySelector("#root");

    // inserindo botões
    const $signUpButton = flatButton.render("log in", true, "login");
    const $loginButton = flatButton.render("sign up", false, "signup");
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $loginButton);

    // inserindo wrapper, logo e title
    const $logoCollabCode = logoCollabCode.render();
    const $titleCollabCode = titleCollabCode.render("welcome!");
    const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);

    // inserindo formulário login e botão.
    const $formLogin = formLogin.render();
    $root.insertAdjacentHTML("beforeend", $formLogin);

});