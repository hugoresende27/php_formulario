const form = document.querySelector("form"),
statusTxt = form.querySelector(".btn-campo span");

form.onsubmit = (e)=>{
    e.preventDefault();                     //evitar que envie
    statusTxt.style.display="block";

    let var1 = new XMLHttpRequest();         //criar um novo objeto xml
    var1.open("POST","mensagem.php",true);  //envia o POST request para o ficheiro mensagem.php
    var1.onload = ()=>{                     //depois de carregamento ajax
        if (var1.readyState == 4 && var1.status==200){//ajax responde 200 e ready status 4 significa q não há erros
            let resposta = var1.resposta;//guarda resposta ajax na var resposta
            console.log(resposta);
        }
    }
    var1.send();
}