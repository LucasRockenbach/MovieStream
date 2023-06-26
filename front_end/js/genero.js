//const userID = localStorage.getItem("userID");
let userID = "4";
//faz o metodo post em formato json
function Postala(url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    request.onload = function(){
        console.log(this.responseText)
        
    }
    return request.responseText
}
//envair para o banco de dados em formato json
function criar(){
    let url = "http://localhost:8000/genero"
    let genero = document.getElementById('genero').value 
	let descricao = document.getElementById('descricao').value 
    let body = {
        "genero": genero, 
		"descricao": descricao,
        "UserID": 4
    }
    ahhh()
    console.log("ada")
    
    Postala(url, body)
    main()
    
}
//cria a tabela
function ahhh(){
    let tb = document.querySelector('.table');
    let row = tb.insertRow();
    let cel0 = row.insertCell(0);
    let cel1 = row.insertCell(1);
    let cel2 = row.insertCell(2);
    let cel3 = row.insertCell(3);
    let cel4 = row.insertCell(4);
    cel0.innerHTML = document.getElementById('genero').value;
    cel1.innerHTML = document.getElementById('descricao').value;
    let editButton = document.createElement('button');
    editButton.innerHTML = '<i class="bi bi-pencil-square">Editar</i>';
    editButton.classList.add('btn', 'btn-primary', 'btn-sm', 'me-1');
    editButton.onclick = function() {
        // chama a funcao editrow 
        
        editRow(row);
    };

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="bi bi-trash">Excluir</i>';
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteButton.onclick = function() {
        // chama a funcao deleterow que deleta a linha desejada da tabela
        tb.deleteRow(row.rowIndex);
    };

    // adiciona os botoes na celula da tabela
    cel4.appendChild(editButton);
    cel4.appendChild(deleteButton);

    
    
    
    limpar();
}
   
    



function limpar(){
    document.getElementById('genero').value = '';
    document.getElementById('descricao').value = '';
}
//funcao de editar a celula
function editRow(row) {
    let cells = row.cells;

    // joga as celular que voce quer editar em cima novamente 
    let genero = cells[0].innerHTML;
    let descricao = cells[1].innerHTML;

    document.getElementById('genero').value = genero;
    document.getElementById('descricao').value = descricao;

    // usado para remover a linha da tabela para depois ser renserida com as modificacoes do usuario
    row.parentNode.removeChild(row);
}

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    console.log(request);
    return request.responseText
}


function main(){
   
    let dados = fazGet(`http://localhost:8000/genero/${userID}`) 
    let tab = document.getElementById('table')

    let usuario = JSON.parse(dados)
    usuario.forEach(element => {
        let linha = fazLinha(element)
        tab.appendChild(linha)

        console.log(userID);
    });
}
