let expressao = '';

function adicionar(valor) {
    if (expressao === '0') expressao = '';
    expressao += valor;
    atualizarDisplay();
}

function limpar() {
    expressao = '';
    atualizarDisplay();
}

function calcular() {
    try {
        expressao = eval(expressao).toString();
    } catch {
        expressao = 'Erro';
    }
    atualizarDisplay();
}

function atualizarDisplay() {
    const display = document.getElementById('display');
    display.innerText = expressao || '0';
}

window.addEventListener('load', atualizarDisplay);