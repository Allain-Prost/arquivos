const { findAndSplitLine, readFileAndSeparateByLine } = require('../utils/funcitonFiles'),
  { searchFileData } = require('../data/searchFile.data'),
  { assert } = require('chai')

describe('Teste em arquivos de ponto', () => {
  it(`Deve encontrar e validar uma batida de ponto no arquivo ${searchFileData.fileName} com sucesso`, () => {
    const listOfLines = readFileAndSeparateByLine(searchFileData.filePath, searchFileData.encoding, '\n')
    const line = findAndSplitLine(searchFileData.lineToSearch, listOfLines, '|', searchFileData.fileName)

    assert.equal(line[0], '05', 'O valor da entrada é diferente do esperado!')
    assert.equal(line[1], '3208690', 'O XX é diferente do esperado!')
    assert.equal(line[2], '2023-03-20T08:01:38-0300', 'A data é diferente do esperado!')
    assert.equal(line[3], '100000001', 'O YYY é diferente do esperado!')
    assert.equal(line[4], 'E', 'O valor do tipo da entrada é diferente do esperado!')
    assert.equal(line[5], '001', 'O valor tal é diferente do esperado!')
    assert.equal(line[6], 'O', 'O valor 6 é diferente do esperado!')
    assert.equal(line[7], 'PADRÃO COMERCIAL', 'O valor do padrão é diferente do esperado!')
  })
})