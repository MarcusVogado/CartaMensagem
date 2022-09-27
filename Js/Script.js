// JavaScript source code
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('_userName').addEventListener('keyup', function () {

        this.value = this.value.replace(/[0-9]*/g, '');

    });
    document.getElementById('_userSobrenome').addEventListener('keyup', function () {

        this.value = this.value.replace(/[0-9]*/g, '');

    });

});



window.oninput = function Atualizar (event) {

    var campo = event.target.id; 

    if (campo == "_userName") {
        
        document.querySelector('#_userNamePre').innerHTML = document.getElementById('_userName').value;
    } else if (campo == "_userSobrenome") {
        document.querySelector('#_userSobrePre').innerHTML = document.getElementById('_userSobrenome').value;
    }
    else if (campo == "_titulo") {
        document.querySelector('#_tituloPre').innerHTML = document.getElementById('_titulo').value;
    }
    else if (campo == "_msg") {
        document.querySelector('#_msgPre').innerHTML = document.getElementById('_msg').value;
    }

    else if (campo == "_userSexo") {
        var sexoSelect = document.querySelector('input[name="_selectSexo"]:checked').value;

        if (sexoSelect == "MASCULINO") {

            document.getElementById("_userSexoPre").innerHTML = "PREZADO"
        }
        else {
            document.getElementById("_userSexoPre").innerHTML = "PREZADA"
        }
    }

    else if (campo == "_imgSelect") {

        var imgSelect = document.querySelector('input[name="_imgSelect"]:checked').value;

        if (imgSelect == "_fundoAzul") {

            document.getElementById("_userNamePre").style.color = "red";
            document.getElementById("_imgFundo").style.backgroundImage = "url('Img/FundoAzul-Madeira.jpg')";
        }
        else if (imgSelect == "_fundoBranco") {
            document.getElementById("_msgPre").style.color = "blue";
            document.getElementById("_imgFundo").style.backgroundImage = "url('Img/FundoBranco-Red.jpg')";
        }
        else if (imgSelect == "_garrafa") {
            document.getElementById("_imgFundo").style.backgroundImage = "url('Img/garrafa-fundo.jpg')";
        }
        else if (imgSelect == "_textura") {
            document.getElementById("_imgFundo").style.backgroundImage = "url('Img/textura.jpg')";
        }
    }

};

