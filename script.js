function validarEmail(email) {
    const validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validacao.test(email);
}

function validarFormulario(event) {
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem");
    event.preventDefault();

    if (validarEmail(email)) {
        mensagem.textContent = "O endereço de e-mail é válido.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "O endereço de e-mail é inválido.";
        mensagem.style.color = "red";
    }
}