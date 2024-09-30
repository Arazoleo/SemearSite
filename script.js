document.getElementById("but").addEventListener("click", function() {
    // Adiciona a classe de animação de saída
    document.getElementById("content").classList.add("exiting");
    document.getElementById("but").classList.add("exiting");
    document.body.classList.add("exiting");

    // Após 1s, ativa o novo fundo amarelo e esconde os elementos antigos
    setTimeout(() => {
        document.getElementById("newBackground").classList.add("active");
    }, 1000); // Correspondente ao tempo de animação
});

function AtivaImagem(id){
    let imagem = document.getElementById(id);
    imagem.classList.add("ativo");
}