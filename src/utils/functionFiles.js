const fs = require('fs')

/**
 * Lê um arquivo, divide seu conteúdo em linhas usando um divisor específico
 * e remove linhas em branco.
 *
 * @param {string} file - O caminho para o arquivo a ser lido.
 * @param {string} encoding - A codificação do arquivo (por exemplo, 'utf-8').
 * @param {string} divider - O caractere ou sequência de caracteres usado para dividir o conteúdo em linhas.
 * @returns {string[]} Um array contendo as linhas do arquivo, sem linhas em branco.
 */
function readFileAndSeparateByLine(file, encoding, divider) {
  const fileRead = fs.readFileSync(file, encoding)
  return fileRead.split(divider).filter(Boolean)
}

/**
 * Procura por uma linha específica em uma lista.
 *
 * @param {string} line - A linha a ser procurada.
 * @param {string[]} list - A lista de linhas onde a busca será realizada.
 * @returns {string|undefined} A linha encontrada ou undefined se não for encontrada.
 */
function searchLine(line, list) {
  for(const element of list){
    if(line === element) {
      return element
    }
  }

  return undefined
}

/**
 * Procura por uma linha específica em uma lista, a divide usando um divisor específico
 * e remove linhas em branco.
 *
 * @param {string} line - A linha a ser procurada.
 * @param {string[]} list - A lista de linhas onde a busca será realizada.
 * @param {string} divider - O caractere ou sequência de caracteres usado para dividir a linha.
 * @param {string} name - O nome do arquivo ou origem das linhas.
 * @returns {string[]|string} Um array contendo as partes da linha encontrada ou uma mensagem de erro.
 */
function findAndSplitLine(line, list, divider, name) {
  let search = searchLine(line, list)
  if(search != undefined) {
    return search.split(divider).filter(Boolean)
  }

  return `Linha não encontrada dentro do arquivo ${name}`
}

module.exports = {
  readFileAndSeparateByLine,
  searchLine,
  findAndSplitLine
}