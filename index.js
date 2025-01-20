let code1 = 7 + 3;

let code2 = (100 - 20) / 2;

let code3 = 100 % 61;

let codeA = code1 + '-' + code2 + '-' + code3

let codeB = `${code1}-${code2}-${code3}`;

let message = 'The vault has been secured. The combination is: ' + codeA;

console.log(message);

message = `The vault has been secured. The combination is: ${codeB}`;

console.log(message);
