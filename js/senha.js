const btnEntrarEl = document.querySelector('.btnEntrar');
const inputSenhaEl = document.querySelector('.inputSenha');
const erroSenhaEl = document.querySelector('.erroSenha');
const erroNomeUsuarioEl = document.querySelector('.erroNomeUsuario');
const inputNomeUsuarioEl = document.querySelector('.inputNomeUsuario');
const erroEl = document.querySelector('.box-erro-no');

localStorage.setItem('cadastrou', 0);

function validarNomeUsuario() {
    if (inputNomeUsuarioEl.value.length === 0) {
        erroNomeUsuarioEl.innerText = 'Digite seu nome de usuario';
        return false;
    }
    else {
        erroNomeUsuarioEl.innerText = '';
        return true;
    }
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

function atualizarCadastro() {
    localStorage.setItem('senha', inputSenhaEl.value);
    localStorage.setItem('cadastrou', 1);
    window.location.href="page.html";
}

function tabom() {
    validarNomeUsuario();
    validarSenha();
    if (validarSenha()) {
        if (inputNomeUsuarioEl.value === localStorage.getItem('nome de usuario')) {
            atualizarCadastro();
        }
        else {
            erroEl.classList.toggle('sim');
        }
    }
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        tabom();
    }
});

btnEntrarEl.addEventListener('click', function(){
    tabom();
});