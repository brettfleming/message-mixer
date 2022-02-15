//rewuiring in the right assests
const encryptors = require('./encryptors.js');
const {caesarCipher, symbolCipher, reverseCipher} = encryptors
//encoding the message with all of the cypers
const encodeMessage = (str) => {
    return reverseCipher(symbolCipher(caesarCipher(str, 15)))
    
  }
  //decoding the message with all of the cypers but in reverse 
  const decodeMessage = (str) => {
    return caesarCipher(symbolCipher(reverseCipher(str)), -15)
    
  }
  
  // User input / output.
  
  const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
      output = encodeMessage(str);
    } 
    if (process.argv[2] === 'decode') {
      output = decodeMessage(str);
    } 
    
    process.stdout.write(output + '\n');
    process.exit();
  }
  
  // Run the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);