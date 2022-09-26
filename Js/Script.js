// JavaScript source code
document.addEventListener("DOMContentLoaded", () => {

    


});


window.oninput = function(event){
   
   var campo = event.target.id; // pega o id do campo que chamou o evento
   
   if(campo == "_userName"){
      document.querySelector('#a-1').value = document.getElementById('_userName').value;
   }else if(campo == "_userSobrenome"){
      document.querySelector('#a').value = document.getElementById('_userSobrenome').value;
   }
};


function preVizualizar(){

    var box = document.getElementById('imgSelect');
    conceptName = box.options[box.selectedIndex].text;

    document.getElementById("_imgFundo").innerHTML ="Img/garrafa-fundo.jpg"


}


