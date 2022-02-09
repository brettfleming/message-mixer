const encryptors = require('./encryptors.js');
const {caesarCipher, symbolCipher, reverseCipher} = encryptors
// User Input / Output Logic
/////////////////////////////////////////////

const encryptionMethod = getEncryptionMethod();
process.stdin.on('data', (userInput) => {
  displayEncryptedMessage(encryptionMethod, userInput);
});

function getEncryptionMethod() {
    let encryptionMethod;
    
    const encryptionType = process.argv[2];  
    if (encryptionType === 'symbol') {
      encryptionMethod = symbolCipher;
    } else if (encryptionType === 'reverse') {
      encryptionMethod = reverseCipher;
    } else if (encryptionType === 'caesar') {
      let amount = Number(process.argv[3]);
      if (Number.isNaN(amount)) {
        process.stdout.write(`Try again with a valid amount argument. \n`)
        process.exit();  
      }
      encryptionMethod = (str) => caesarCipher(str, amount);
    } 
    else {
      process.stdout.write(`Try again with a valid encryption type. \n`)
      process.exit();
    }
  
    process.stdout.write('Enter the message you would like to encrypt...\n> ');
    return encryptionMethod;
  }