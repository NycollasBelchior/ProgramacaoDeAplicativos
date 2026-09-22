let botao = document.getElementById("botaoCadastro");

botao.addEventListener("click", function () {

    let nome = document.getElementById("nome").value;
    let password = document.getElementById("password").value;
    let gmail = document.getElementById("gmail").value;
    let select = document.getElementById("seletorLanguage");
    let escolhido = select.value;

    let cadastrado = false
    
    if (
        nome.trim() !== "" &&
        password.trim() !== "" &&
        gmail.trim() !== ""
    ) {
        alert(
            "nome: " + nome +
            "\nsenha: " + password +
            "\ndata: " + gmail +
            "\nlinguagem escolhida: " + escolhido
        );
        cadastrado = true
    } else {
        alert("Preencha todos os campos!");
    }

    
});

