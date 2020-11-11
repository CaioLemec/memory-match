const signUp = (function(){
    
    const $root = document.querySelector("#root");
    const $signUpButton = flatButton.render("log in", false, "login");
    const $loginButton = flatButton.render("sign up", true, "signup");

    const $logoCollabCode = logoCollabCode.render();
    const $titleCollabCode = titleCollabCode.render("welcome!");
    const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);
    const $formSingup = formSingUp.render();
        // Adicionando os dois botões e logo na tela.
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
        // Adicionando o Formulário Singup e botão na tela.
    $root.insertAdjacentHTML("beforeend", $formSingup);
});