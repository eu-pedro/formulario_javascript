var nome = document.querySelector("#nome")
nome.addEventListener('blur', validarNome)

function validarNome(){
    if(nome.value == ""){
        nome.classList.remove("border-success")
        nome.classList.add("border","border-2", "border-danger")
       
    }
    else{
        nome.classList.remove("border-danger")
        nome.classList.add("border","border-2", "border-success")
    }
}

var sobrenome = document.querySelector("#sobrenome")
sobrenome.addEventListener('blur', validarSobrenome)

function validarSobrenome(){
    //console.log(sobrenome.value)
    if(sobrenome.value == ""){
        sobrenome.classList.remove("border-success")
        sobrenome.classList.add("border", "border-2", "border-danger")
    }
    else{
        sobrenome.classList.remove("border-danger")
        sobrenome.classList.add("border", "border-2", "border-success")
    }
}

var usuario = document.querySelector("#usuario")
usuario.addEventListener('blur', validarUsuario)

function validarUsuario(){
    if(usuario.value == ""){
        usuario.classList.remove("border-success")
        usuario.classList.add("border", "border-2", "border-danger")
    }
    else{
        usuario.classList.remove("border-danger")
        usuario.classList.add("border", "border-2", "border-success")
    }
}

//VALIDAR EMAIL

var email = document.querySelector("#email")
var validaEmail = document.querySelector("#validaEmail")    

email.addEventListener('keyup', ()=>{
    var minusculo = email.value.toLowerCase()

    if(minusculo.indexOf('@') == -1 || minusculo.indexOf(".com") == -1){
        //console.log("Email Inválido")
        validaEmail.textContent = "Infelizmente, seu email está inválido"
    }
    else{
        //console.log("Email Válido")
        validaEmail.textContent = "Parabéns, seu email está válido!" 
    }
})
// VALIDAR ENDEREÇO

var endereco = document.querySelector("#endereco")

endereco.addEventListener('blur', ()=>{
    if(endereco.value == ""){
        alert("Por favor, informe seu endereço!")
    }
    else{
        alert("Obrigado por informar seu email!")
    }


})

// VALIDAR ESTADO

var estado = document.querySelector("#estado")


