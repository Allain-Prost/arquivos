const path = require('path');

const searchFileData = {
  fileName: 'AEJ_VAN_ASS_V8H51.txt',
  lineToSearch: '05|3208690|2023-03-20T08:01:38-0300|100000001|E|001|O|PADRÃO COMERCIAL|',
  filePath: path.join(__dirname, '../arquivos/AEJ_VAN_ASS_V8H51.txt'),
  encoding: 'utf-8',
}

module.exports = {
  searchFileData
}