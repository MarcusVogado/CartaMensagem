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