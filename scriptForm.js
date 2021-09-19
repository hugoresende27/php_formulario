const form = document.querySelector("form"),
statusTxt = form.querySelector(".btn-campo span");

form.onsubmit = (e)=>{
  /*  e.preventDefault();                     //evitar que envie
    statusTxt.style.display="block";

    let var1 = new XMLHttpRequest();         //criar um novo objeto xml
    var1.open("POST","mensagem.php",true);  //envia o POST request para o ficheiro mensagem.php
    var1.onload = ()=>{                     //depois de carregamento ajax
        if (var1.readyState == 4 && var1.status==200){//ajax responde 200 e ready status 4 significa q não há erros
            let resposta = var1.resposta;//guarda resposta ajax na var resposta
            console.log(resposta);
        }
    }
    var1.send();*/

 e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("Email and message field is required!") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}