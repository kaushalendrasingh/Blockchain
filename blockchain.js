function Blockchain () {
    this.chain = [];
    this.newTransactions = [];
}
Blockchain.prototype.createNewBlock= function(nonce, previousBlockHash, hash){
    const newBlock= {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransaction,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };
    this.newTransactions = [];
    this.chain.push(newBlock);
    return newBlock;

}

Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1 ]
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = { 
        amount: amount,
        sender: sender,
        recipient: recipient
    }
    this.newTransactions.push(newTransaction);
    
}

const bitcoin = new Blockchain();
bitcoin.createNewBlock(785, 'FYUDU65E65E6TU', 'GF6E54EURFTU57');
bitcoin.createNewBlock(65465, 'FC765EU6V67', '54E5YCEY6RY');
bitcoin.createNewBlock(2432, '65465ERV67', 'Y54W5CUVD65');

console.log(bitcoin);

