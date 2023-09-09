const path = require('path');

const searchFileData = {
  fileName: 'AEJ_VAN_ASS_V8H51.txt',
  lineToSearch: '05|3208690|2023-03-17T13:30:00-0300|100000001|E|003|I|PADRÃO COMERCIAL|Ponto inserido manualmente',
  filePath: path.join(__dirname, '../arquivos/AEJ_VAN_ASS_V8H51.txt'),
  encoding: 'utf-8',
},

  dataTC001 = {
    inputTypeNumber: '05',
    valueXX: '3208690',
    inputDate: '2023-03-17T13:30:00-0300',
    valueYYY: '100000001',
    inputType: 'E',
    valueTal: '003',
    value6: 'I',
    standardValue: 'PADRÃO COMERCIAL',
    pointInsertion: 'Ponto inserido manualmente'
  }

module.exports = {
  searchFileData,
  dataTC001
}