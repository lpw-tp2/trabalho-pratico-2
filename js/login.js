const btnLogarEl = document.querySelector('.btnLogar');
const inputNomeUsuarioEl = document.querySelector('.inputNomeUsuario');
const inputSenhaEl = document.querySelector('.inputSenha');
const erroEl = document.querySelector('.box-erro-no');
const erroNomeUsuarioEl = document.querySelector('.erroNomeUsuario');
const erroSenhaEl = document.querySelector('.erroSenha');

localStorage.setItem('cadastrou', 0);

function um () {    
    if (inputSenhaEl.value.length === 0) {
        erroSenhaEl.innerText = 'Digite sua senha';
        return false;
    }
    else {
        erroSenhaEl.innerText = '';
        return true;
    }
}

function dois() {
    if (inputNomeUsuarioEl.value.length === 0) {
        erroNomeUsuarioEl.innerText = 'Digite seu nome de usuario';
        return false;
    }
    else {
        erroNomeUsuarioEl.innerText = '';
        return true;
    }
}

function login() {
    const usuarioCorreto = localStorage.getItem('nome de usuario') === inputNomeUsuarioEl.value;
    const senhaCorreta = localStorage.getItem('senha') === inputSenhaEl.value;
    const condicao = usuarioCorreto && senhaCorreta === true;
    if (condicao) {
        localStorage.setItem('cadastrou', 1);
        window.location.href="page.html";
    }
    else {
        um();
        dois();

        if (um() && dois()) {
            erroEl.classList.remove('sim');
        }
    }   
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        login();
    }
});

btnLogarEl.addEventListener('click', function(){
    login()
;});