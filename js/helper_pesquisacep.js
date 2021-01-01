/**
 * Esta função limpa os campos de rua, bairro, cidade e uf
 * 
 * @param {string} id_rua       id do elemento HTML para mostrar a rua
 * @param {string} id_bairro    id do elemento HTML para mostrar o bairro 
 * @param {string} id_cidade    id do elemento HTML para mostrar a cidade
 * @param {string} id_estado    id do elemento HTML para mostrar o estado 
 */
function limparDadosCep(id_rua, id_bairro, id_cidade, id_estado) {
    document.getElementById(id_rua).value = "";
    document.getElementById(id_bairro).value = "";
    document.getElementById(id_cidade).value = "";
    document.getElementById(id_estado).value = "";
}

/**
 * Esta função mostra a mensagem de erro em um elemento HTML
 * 
 * @param {string} mensagem mensagem de erro para mostrar
 * @param {string} id_msg_erro id do elemento para aparecer a mensagem
 */
function mostrarMsgErro(mensagem, id_msg_erro){
    document.getElementById(id_msg_erro).innerHTML = mensagem;
}

/**
 * Esta função apaga a mensagem de erro em um elemento HTML
 * 
 * @param {string} id_msg_erro id do elemento com a mensagem de erro
 */
function apagarMsgErro(id_msg_erro){
    document.getElementById(id_msg_erro).innerHTML = "";
}

/**
 * Esta função verifica se o formato do cep é válido. Um formato de cep 
 * válido consistem em 8 caracteres com apenas números.
 *  
 * @param {string} cep  Número do CEP como cadeia de caracteres.
 * @returns {boolean}
 */
function isFormatoCepValido(cep){
    let formatoValido = /^[0-9]{8}$/;
    
    return formatoValido.test(cep);
}

function processarCepValido(dados_cep, id_rua, id_bairro, id_cidade, id_estado){    
    document.getElementById(id_rua).value = dados_cep.logradouro;
    document.getElementById(id_bairro).value = dados_cep.bairro;
    document.getElementById(id_cidade).value = dados_cep.localidade;
    document.getElementById(id_estado).value = dados_cep.uf;
}

/**
 * Esta função é responsável por procurar um CEP e preencher os campos
 * O algoritmo consiste nos seguintes passos
 * 
 * 1. Armazenar o valor do CEP em uma variável
 * 2. Verificar se o formato do CEP é inválido. 
 *  1. Se for mostrar mensagem de erro e retorna
 *  2. Senão continua a execução da função
 * 3. Criar uma requisição HTTP
 *  1. Se a requisição for bem sucedida armazenar o resultado em uma variável
 *  2. Verificar se o resultado contém a string 'erro' (caso CEP inexistente)
 *   1. Se tiver erro mostrar a mensagem de 'CEP Inexistente'
 *   2. Senão processa o CEP válido
 * 4. Executar a requisição 
 * 
 * @param {string} id_cep       id do elemento HTML que contém o cep
 * @param {string} id_rua       id do elemento HTML para mostrar a rua
 * @param {string} id_bairro    id do elemento HTML para mostrar o bairro 
 * @param {string} id_cidade    id do elemento HTML para mostrar a cidade
 * @param {string} id_estado    id do elemento HTML para mostrar o estado
 * @param {string} id_msg_erro  id do elemento HTML para mostrar mensagens de erro 
 */
function pesquisarCep(id_cep, id_rua, id_bairro, id_cidade, id_estado, id_msg_erro){
	
    let cep = parseInt(document.getElementById(id_cep).value);    

    if(cep != "" ) {
        limparDadosCep(id_rua, id_bairro, id_cidade, id_estado);

        if( !isFormatoCepValido(cep) ) {
            mostrarMsgErro("Ops! Formato de CEP inválido.", id_msg_erro);
            limparDadosCep(id_rua, id_bairro, id_cidade, id_estado);
            setTimeout(()=> {apagarMsgErro(id_msg_erro)}, 2000);
        } else {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if( xhr.readyState == XMLHttpRequest.DONE ) {
                    let requestedObject = JSON.parse(xhr.responseText);
                    if( 'erro' in requestedObject ) {
                        mostrarMsgErro("CEP inexistente!", id_msg_erro);
                        limparDadosCep(id_rua, id_bairro, id_cidade, id_estado);
                        setTimeout(()=> {apagarMsgErro(id_msg_erro)}, 2000);
                    } else {
                        processarCepValido(requestedObject, id_rua, id_bairro, id_cidade, id_estado);

                    }
                }
            };
            
            let url = 'https://viacep.com.br/ws/'+ cep + '/json/';
            xhr.open('GET', url);
            xhr.send();   
        }
    } else {
        limparDadosCep(id_rua, id_bairro, id_cidade, id_estado);
    }
}