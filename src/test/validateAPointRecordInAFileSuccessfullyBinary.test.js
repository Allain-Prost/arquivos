const { expectedMessagesTC001 } = require('../data/messages/auxiliaryMessages'),
  { readFileAndSeparateByLine, findAndSplitLineBinarySearch } = require('../utils/functionFiles'),
  { searchFileData, dataTC001 } = require('../data/searchFile.data'),
  { assert } = require('chai')

describe('Teste em arquivos de ponto com a busca binária', () => {
  it(`[TC-001] - Deve validar um registro de ponto no arquivo ${searchFileData.fileName} com sucesso`, () => {
    const listOfLines = readFileAndSeparateByLine(searchFileData.filePath, searchFileData.encoding, '\n')
    const line = findAndSplitLineBinarySearch(searchFileData.lineToSearch, listOfLines, '|', searchFileData.fileName)

    assert.equal(line[0], dataTC001.inputTypeNumber, expectedMessagesTC001.inputTypeNumber)
    assert.equal(line[1], dataTC001.valueXX, expectedMessagesTC001.valueXX)
    assert.equal(line[2], dataTC001.inputDate, expectedMessagesTC001.inputDate)
    assert.equal(line[3], dataTC001.valueYYY, expectedMessagesTC001.valueYYY)
    assert.equal(line[4], dataTC001.inputType, expectedMessagesTC001.inputType)
    assert.equal(line[5], dataTC001.valueTal, expectedMessagesTC001.valueTal)
    assert.equal(line[6], dataTC001.value6, expectedMessagesTC001.value6)
    assert.equal(line[7], dataTC001.standardValue, expectedMessagesTC001.standardValue)
    assert.equal(line[8] ?? null, dataTC001.pointInsertion, expectedMessagesTC001.pointInsertion)
  })
})