let livros = [];

function limpaCampos() {

    document.getElementById("nome").value = "";

    document.getElementById("autor").value = "";
}

function mostrarLista() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (let i = 0; i < livros.length; i++) {

        lista.innerHTML +=
            `<li>
                ${i} - ${livros[i].nome} - ${livros[i].autor}
            </li>`;
    }
}

function adicionar() {

    let nome = document.getElementById("nome").value;

    let autor = document.getElementById("autor").value;

    if (nome == "" || autor == "") {

        alert("Preencha todos os campos!");

        return;
    }

    let livro = {

        nome: nome,

        autor: autor
    };

    livros.push(livro);

    mostrarLista();

    limpaCampos();
}

function posicao() {

    let pos = prompt("Digite a posição do livro:");

    if (isNaN(pos)) {

        alert("Digite uma posição numérica!");

        return;
    }

    if (pos < 0 || pos >= livros.length) {

        alert("Posição inválida!");

        return;
    }

    alert(
        "Livro: " + livros[pos].nome +
        "\nAutor: " + livros[pos].autor
    );
}

function remover() {

    if (livros.length == 0) {

        alert("Lista vazia!");

        return;
    }

    let removido = livros.pop();

    alert("Livro removido: " + removido.nome);

    mostrarLista();
}

function inserirPosicao() {

    let nome = document.getElementById("nome").value;

    let autor = document.getElementById("autor").value;

    let pos = prompt(
        "Digite a posição onde deseja inserir:"
    );

    if (nome == "" || autor == "") {

        alert("Preencha todos os campos!");

        return;
    }

    if (isNaN(pos)) {

        alert("Digite uma posição numérica!");

        return;
    }

    let livro = {

        nome: nome,

        autor: autor
    };

    livros.splice(pos, 0, livro);

    mostrarLista();

    limpaCampos();
}