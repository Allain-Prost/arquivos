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
  return fileRead.split(divider).filter(Boolean).map(line => line.trim())
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
 * Realiza uma busca binária em uma lista ordenada.
 *
 * @param {Array} list - O array onde a busca será realizada.
 * @param {*} line - O elemento que você deseja encontrar na lista.
 * @returns {*} O elemento encontrado ou -1 se não encontrado.
 */
function binarySearch(list, line) {
  const listOrd = list.sort();
  let left = 0;
  let right = listOrd.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (listOrd[mid] === line) {
      return listOrd[mid]; // Elemento encontrado, retorna o elemento
    } else if (listOrd[mid] < line) {
      left = mid + 1; // Elemento está na metade direita.
    } else {
      right = mid - 1; // Elemento está na metade esquerda.
    }
  }
  return -1; // Elemento não encontrado na lista.
}

/**
 * Procura através de uma busca binária uma linha em uma lista ordenada e a divide usando um separador.
 *
 * @param {string} line - A linha que você deseja procurar na lista.
 * @param {Array} list - A lista ordenada onde a busca será realizada.
 * @param {string} divider - O separador usado para dividir a linha encontrada.
 * @param {string} name - O nome do arquivo ou contexto para fins de mensagem de erro.
 * @returns {Array|string} Um array das partes da linha encontrada ou uma mensagem de erro.
 */
function findAndSplitLineBinarySearch(line, list, divider, name) {
  let search = binarySearch(list, line)
  if(search != undefined) {
    return search.split(divider).filter(Boolean).map(line => line.trim())
  }
  return `Linha não encontrada dentro do arquivo ${name}`
}

/**
 * Procura por uma linha em uma lista, a divide usando um divisor específico
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
    return search.split(divider).filter(Boolean).map(line => line.trim())
  }
  return `Linha não encontrada dentro do arquivo ${name}`
}

module.exports = {
  readFileAndSeparateByLine,
  searchLine,
  binarySearch,
  findAndSplitLineBinarySearch,
  findAndSplitLine
}