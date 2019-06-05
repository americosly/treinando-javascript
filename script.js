let formulario = document.querySelector('#form-cadastro');
let erros = document.querySelector('#erros');

formulario.onsubmit = function(evento){
    evento.preventDefault(); //interrompe o envio do form
    let inputNome = document.querySelector('#nome');
    let inputSenha = document.querySelector('#senha');
    let inputEmail = document.querySelector('#email');
    let  listaErros = document.querySelector('#erros');
    let erros = [];
    
    if (inputNome.value == "") {
        erros.push('Preencha o campo Nome');
    }
    if (inputEmail.value == "") {
        erros.push('Preencha o campo E-mail');
    }
    if (inputSenha.value == "") {
        erros.push('Preencha o campo Senha');
    } 
    if (inputSenha.value < 5 ) {
        erros.push('O campo de senha precisa ter ao menos 5 caracteres');
    }
    console.log(erros);

    listaErros.innerHTML = ""; // limpa a lista de erro
    if (erros.length > 0){
        listaErros.classList.add('alert', 'alert-danger');
        erros.forEach(function(valor){
            let erro = document.createElement('li'); // cria elemento html
            erro.innerHTML = valor; // adiciona mensagem de erro no <li>
            listaErros.appendChild(erro); // adciona li no DOM html
        });
    }

    // if (inputNome.value == "") {
    //     erros.innerHTML = "<li>Preencha o campo Nome</li>";
    // } else if (inputEmail.value == ""){
    //     erros.innerHTML = "<li>Preencha o campo E-mail</li>";
    // } else if (inputSenha.value == ""){
    //     erros.innerHTML = "<li>Preencha o campo Senha</li>";
    // }else{
    //     erros.remove();
    // }
}