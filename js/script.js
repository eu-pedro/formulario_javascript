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
        alert("Obrigado por informar seu endereço!")
    }


})

// VALIDAR ESTADO

var estado = document.querySelector("#estado")
var msgEstado = document.querySelector("#validarEstado")
estado.addEventListener("click", ()=>{
    if(estado.value == ""){
        msgEstado.textContent = "Escolha um Estado"
        msgEstado.classList.remove("text-success")
        
        cidade.classList.add("border", "border-danger")
    }
    else{
        msgEstado.textContent = "Campo Selecionado!"
        msgEstado.classList.remove("text-danger")
        estado.classList.remove("border-danger")
        msgEstado.classList.add("text-success")
        estado.classList.add("border", "border-success")
    }

})

// VALIDAR CIDADE
var cidade = document.querySelector("#cidade")
var msgCidade = document.querySelector("#msgCidade")
cidade.addEventListener("click", ()=>{
    if(cidade.value == ""){
        msgCidade.textContent = "Escolha uma Cidade"
        cidade.classList.remove("text-success")
        cidade.classList.add("border", "border-danger")
    }
    else{
        msgCidade.textContent = "Campo Selecionado!"
        cidade.classList.add("border", "border-success")
        msgCidade.classList.remove("text-danger")
        cidade.classList.remove("border-danger")
        msgCidade.classList.add("text-success")
    }
})
// VALIDAR CEP 
var cep = document.querySelector("#cep")
var validarCep = document.querySelector("#validarCep")
cep.addEventListener("click", ()=>{
    if(cep.value == ""){
        validarCep.textContent = "Escolha o CEP"
        cep.classList.remove("text-success")
        cep.classList.add("border", "border-danger")
    }
    else{
        validarCep.textContent = "Campo Selecionado"
        cep.classList.add("border", "border-success")
        validarCep.classList.remove("text-danger")
        cep.classList.remove("border-danger")
        validarCep.classList.add("text-success")     
    }
})







//CAMPO CHECK BOX DE SALVAR ENDEREÇO
var confirmaEndereco = document.querySelector("#confirmaEndereco")

confirmaEndereco.addEventListener('change', ()=>{
    if(confirmaEndereco.value){
        window.confirm("Está certo disso?")
    }
    
})

// VALIDAR CAMPO DE "SALVAR ESTAS INFORMAÇÕES"

var salvarInfo = document.querySelector("#salvarInfo")

salvarInfo.addEventListener('change', ()=>{
    if(salvarInfo.value){
        alert("Suas informações foram salvas com sucesso!")
    }
    
})
//CAMPO DE FORMA DE PAGAMENTO E SOMENTE LEITURA

var radio = document.querySelectorAll("input[name=pagamento]")
var bntVerificar = document.querySelector("#verificarPagamento")
var msgPagamento = document.querySelector("#tipoPagamento")
var cartao = document.querySelector("#cartao")
cartao.classList.add("d-none")
bntVerificar.addEventListener("click", (evento)=>{
    evento.preventDefault()
    var cont = 0
    for(elementos of pagamento){
    if(elementos.checked){
     msgPagamento.value = elemento.value
    }
    else{
        cont++
    }
    }
    if(cont == 5){
        alert("É obrigatório escolher a forma de pagamento!")
    }
    if(msgPagamento.value == "Cartão de Crédito" || msgPagamento.value == "Cartão de Débito"){
        cartao.classList.remove("d-none")
        cartao.classList.add("d-block")
    }
    else{
        cartao.classList.remove("d-block")
        cartao.classList.add("d-none")
    }
    
})

