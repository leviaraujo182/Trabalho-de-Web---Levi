function coramarela(){
	document.body.style.backgroundColor = 'Yellow';
}

function corazul(){
	document.body.style.backgroundColor = "Blue";
}

function corverde(){
	document.body.style.backgroundColor = "Green";
}

function creditos(){
	alert(" Desenvolvimento de Software para Web \n Desenvolvido por: Levi Carneiro Araujo - 421994");
}

function enviar(){
    var Nome ="";
    var Mensagem = "";
    Nome = document.getElementById('nome').value
    Mensagem = document.getElementById('Mensagem').value;
    resultado = Nome + ' - ' + Mensagem;
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "Excluir";                   
    btn.style.background = 'white';
    btn.style.marginLeft= '20px';
    btn.style.padding = "10px"
    btn.style.border = '2px solid #d9d9d9'
    
    var li = document.createElement("li");
    var t = document.createTextNode(resultado);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("nome").value = "";
    document.getElementById("Mensagem").value = "";

    var span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(btn);
    li.appendChild(span);
    btn.onclick = function(){
        li.style.display = 'none';
    }

}