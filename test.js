const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(234, '','YTG7G7896')


bitcoin.createNewTransaction(23,'686F78JIB','786F7F8O');
bitcoin.createNewTransaction(21,'512DE511D','2D23E123D');
bitcoin.createNewTransaction(100,'3D23D22D','ASD123E123');

bitcoin.createNewBlock(1234, 'YTG7G7896','325F3GT54')
bitcoin.createNewBlock(124, '325F3GT54','324F34F5')
bitcoin.createNewBlock(1354, '324F34F5','32F235G32F')

console.log(bitcoin.chain[1]);
