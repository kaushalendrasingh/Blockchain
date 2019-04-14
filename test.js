const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
// bitcoin.createNewBlock(234, '','YTG7G7896')


// bitcoin.createNewTransaction(23,'686F78JIB','786F7F8O');
// bitcoin.createNewTransaction(21,'512DE511D','2D23E123D');
// bitcoin.createNewTransaction(100,'3D23D22D','ASD123E123');

// bitcoin.createNewBlock(1234, 'YTG7G7896','325F3GT54')
// bitcoin.createNewBlock(124, '325F3GT54','324F34F5')
// bitcoin.createNewBlock(1354, '324F34F5','32F235G32F')

const currentBlockData = [
    {
        amount: 100,
        sender: '672GD7WGOD8',
        recipient: '78WGF8WEGF'
    },
    {
        amount: 70,
        sender:'7S5465SD6',
        recipient: '67F76F7I'
    },
    {
        amount:300,
        sender: 'F76F786I',
        recipient: 'G67FGI7'
    }
]

previousBlockHash = '7D6F378G87E';
//console.log(bitcoin.hashBlock('324F34F6', currentBlockData, 100)); //To run Hash function sha256

//console.log(bitcoin.chain[1]);

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData)); // proof of Work 
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 183564)); // checking prrof of work nonce value
