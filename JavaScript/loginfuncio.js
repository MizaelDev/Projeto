function loginFun(){
    let emailcorreto="admin";
    let senhacorreta="admin";

    let email = document.getElementById("typeEmailX");
    let senha = document.getElementById("typePasswordX");

    if(typeEmailX.value==emailcorreto && typePasswordX.value == senhacorreta){
        alert("Sucesso!");
        location.href = "formfuncionario.html";
    }else{
        alert("Usuario ou senha incorreta!");
    }
}