document.getElementById("but").addEventListener("click", function() {
   
    document.getElementById("content").classList.add("exiting");
    document.getElementById("but").classList.add("exiting");
    document.body.classList.add("exiting");

   
    setTimeout(() => {
        document.getElementById("newBackground").classList.add("active");
    }, 1000); 
});

function AtivaImagem(id){
    let imagem = document.getElementById(id);
    imagem.classList.add("ativo");
}
