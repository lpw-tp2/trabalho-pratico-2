const btnEnviarEl = document.querySelector('.btnEnviar');
const inputNomeEl = document.querySelector('.inputNome');
const inputNomeUsuarioEl = document.querySelector('.inputNomeUsuario');
const inputSenhaEl = document.querySelector('.inputSenha');
const erroNomeEl = document.querySelector('.erroNome');
const erroNomeUsuarioEl = document.querySelector('.erroNomeUsuario');
const erroSenhaEl = document.querySelector('.erroSenha');

localStorage.setItem('cadastrou', 0);

function validarNome() {
    const regex = /[^0-9][a-zA=Z]/;
    const inputVazio = inputNomeEl.value.length === 0;
    const inputMenorQueTres = inputNomeEl.value.length < 3;
    const ExpReg = regex.test(inputNomeEl.value);

    if (inputVazio) {
        erroNomeEl.innerText = 'Digite seu nome';
    }
    else if (inputMenorQueTres) {
        erroNomeEl.innerText = 'Esse nome é muito pequeno';
    }
    else if (!ExpReg) {
        erroNomeEl.innerText = 'Digite apenas letras';
    }
    else {
        erroNomeEl.innerText = '';
        return true;
    }
    return false;
}

function validarNomeUsuario() {
    const regex = /[a-z.\-d]/;
    const inputVazio = inputNomeUsuarioEl.value.length === 0;
    const inputMenorQueTres = inputNomeUsuarioEl.value.length < 3;
    const ExpReg = regex.test(inputNomeUsuarioEl.value);

    if (inputVazio) {
        erroNomeUsuarioEl.innerText = 'Digite seu nome de usuario';
    }
    else if (inputMenorQueTres) {
        erroNomeUsuarioEl.innerText = 'Esse nome de usuario é muito pequeno';
    }
    else if (!ExpReg) {
        erroNomeUsuarioEl.innerText = 'Digite caracteres validos';
    }
    else {
        erroNomeUsuarioEl.innerText = '';
        return true;
    }
    return false;
}

function validarSenha () {
    const inputVazio = inputSenhaEl.value.length === 0;
    const inputMenorQueTres = inputSenhaEl.value.length < 6;

    if (inputVazio) {
        erroSenhaEl.innerText = 'Digite sua senha';
    }
    else if (inputMenorQueTres) {
        erroSenhaEl.innerText = 'Digitre uma senha maior';
    }
    else {
        erroSenhaEl.innerText = '';
        return true;
    }
    return false;
}

function cadastro() {
    validarNome();
    validarNomeUsuario();
    validarSenha();

    if (validarNome() && validarNomeUsuario() && validarSenha()) {
        fazerCadastro();
    }
}

function fazerCadastro() {
    localStorage.setItem('nome', inputNomeEl.value);
    localStorage.setItem('nome de usuario', inputNomeUsuarioEl.value);
    localStorage.setItem('senha', inputSenhaEl.value);
    localStorage.setItem('cadastrou', 1);
    document.location.href='page.html';
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        cadastro();
    }
});

btnEnviarEl.addEventListener('click', function () {
    cadastro();
});