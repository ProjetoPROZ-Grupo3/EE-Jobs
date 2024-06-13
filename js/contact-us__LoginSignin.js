/**
Essa função funciona de maneira muito simples, ela recebe um parametro, faz
uma chamada e zera o valor do parametro, para não deixar as informações na tela

Entrada na função:
- @param {string} input - "#id"/".class"/"structure"

Processamento da função:
- O input chamado é zerado com ""
*/
function cleanInputs(input){
    document.querySelector(input).value = '';
}

/** 
Essa seria a função de validação do login, daria display block em um span
e aplicaria duas classes reservadas para essa situação, sendo elas as seguintes:
"invalid invalid-placeholder"

Recebimento dentro da função:
- input id='#user-email'
- input id='#user-password'

Processamento da função:
- span id='#invalid-text-box'
- condicional

O processamento da função ainda esta em desenvolvimento
*/
function userLogin(){
    let userEmail = document.getElementById('user-email').value;
    let userPassword = document.getElementById('user-password').value;
    let invalidBox = document.getElementById("invalid-text-box");

    if (userEmail == "" && userPassword == ""){
    } else {
    }
}

/** 
Essa função serve para registrar o "encaminhamento" do usuário em caso
dele não ter o currículo em arquivo, ai um "email seria enviado" pedindo
as experiências e coisas do gênero.

Recebimento dentro da função:
- input id='#new-user-name'
- input id='#new-user-email'
- input id='#new-user-introduction'

Processamento da função:
- Interação com SQL (relacional de escolha)
- Apaga os campos depois (pode haver tela de login!)

Avaliando necessidade da função RETORNAR true
*/
function userRegister(){
    let newUserName = document.getElementById('new-user-name').value;
    let newUserEmail = document.getElementById('new-user-email').value;
    let newUserIntroduction = document.getElementById("new-user-introduction").value;

    // Deixar esses espaços para fazer o vínculo com MySQL

    cleanInputs('#new-user-name');
    cleanInputs('#new-user-email');
    cleanInputs('#new-user-introduction');
}

/** 
Essa função, assim como a "userRegister", serve para fazer o cadastro da empresa
que deseja patrocinar/virar parceira do projeto.

Recebimento dentro da função:
- input id='#company-name'
- input id='#company-email'
- form id='#form-company'
- form id='#form-intention'

Processamento da função:
- Interação com SQL (relacional de escolha)
- Apaga os campos depois (pode haver tela de login para empresas!)

Avaliando necessidade da função RETORNAR true
*/
function companyRegister(){
    let companyName = document.getElementById('company-name').value;
    let companyEmail = document.getElementById('company-email').value;
    let companyType = document.getElementById("form-company").value;
    let companyIntention = document.getElementById("form-intention").value;

    // Deixar esses espaços para fazer o vínculo com MySQL

    cleanInputs('#company-name');
    cleanInputs('#company-email');
    cleanInputs('#form-company');
    cleanInputs('#form-intention');
}