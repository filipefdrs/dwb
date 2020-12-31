/**
 * Esta função limpa os campos de rua, bairro, cidade e uf
 * 
 * @param {string} id_rua       id do elemento HTML para mostrar a rua
 * @param {string} id_bairro    id do elemento HTML para mostrar o bairro 
 * @param {string} id_cidade    id do elemento HTML para mostrar a cidade
 * @param {string} id_estado    id do elemento HTML para mostrar o estado 
 */
function limparDadosCep(id_rua, id_bairro, id_cidade, id_estado) {
    document.getElementById(id_rua).innerHTML = "";
    document.getElementById(id_bairro).innerHTML = "";
    document.getElementById(id_cidade).innerHTML = "";
    document.getElementById(id_estado).innerHTML = "";
    /* TODO */
}

/**
 * Esta função mostra a mensagem de erro em um elemento HTML
 * 
 * @param {string} mensagem mensagem de erro para mostrar
 * @param {string} id_msg_erro id do elemento para aparecer a mensagem
 */
function mostrarMsgErro(mensagem, id_msg_erro){
    /* TODO */
}

/**
 * Esta função apaga a mensagem de erro em um elemento HTML
 * 
 * @param {string} id_msg_erro id do elemento com a mensagem de erro
 */
function apagarMsgErro(id_msg_erro){
    /* TODO */
}

/**
 * Esta função verifica se o formato do cep é válido. Um formato de cep 
 * válido consistem em 8 caracteres com apenas números.
 *  
 * @param {string} cep  Número do CEP como cadeia de caracteres.
 * @returns {boolean}
 */
function isFormatoCepValido(cep){
    /* TODO */
}

function processarCepValido(dados_cep, id_rua, id_bairro, id_cidade, id_estado){    
    /* TODO */
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
    
    console('Pesquisar dados do CEP: ' + cep);
    
    /* TODO */

}