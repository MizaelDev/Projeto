var contato=[];

function cadastro(){
    
    let nomeproduto = document.getElementById("nome");
    let listarprod = document.getElementById("listarprod");
    //let codigo= document.getElementById("codigo");
    // let tipe = document.getElementById("tipe");
    // let preco = document.getElementById("preco");
    // let estoque = document.getElementById("estoque");
    // let nomeFuncio = document.getElementById("nomeFuncio");
    //let codFuncio = document.getElementById("codFuncio");
    
    contato.push(nome);
    alert("Cadastro realizado com sucesso!"+nome.value);
    nome.value="";

    for(cont=0;cont<contato.length;cont++){
        listacontato.value += "\n"+contato[cont]
    }

}
