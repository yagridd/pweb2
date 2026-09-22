let pilhaPessoas = [];

function mostrarLista() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (let i = 0; i < pilhaPessoas.length; i++) {

        lista.innerHTML +=
            `<li>${i} - ${pilhaPessoas[i]}</li>`;

    }
}

function adicionar() {

    let nome = document.getElementById("nome").value;

    if (nome == "") {

        alert("Digite um nome!");

        return;
    }

    pilhaPessoas.push(nome);

    mostrarLista();

    document.getElementById("nome").value = "";
}

function posicao() {

    let pos = prompt("Digite a posição:");

    if (isNaN(pos)) {

        alert("Digite uma posição numérica!");

        return;
    }

    if (pos < 0 || pos >= pilhaPessoas.length) {

        alert("Posição inválida!");

        return;
    }

    alert("Pessoa: " + pilhaPessoas[pos]);
}

function remover() {

    if (pilhaPessoas.length == 0) {

        alert("Lista vazia!");

        return;
    }

    let removida = pilhaPessoas.pop();

    alert("Pessoa removida: " + removida);

    mostrarLista();
}

function limparLista() {

    if (pilhaPessoas.length == 0) {

        alert("Lista vazia!");

        return;
    }

    pilhaPessoas = [];

    mostrarLista();
}