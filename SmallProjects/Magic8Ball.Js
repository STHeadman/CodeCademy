let userName = '' || 'Stranger'; // This is faster then a Ternary Operator

/*
Ternary Operator:
 userName ? console.log(`Hello ${userName}`) : console.log('Hello!');
 */ 

console.log(`Hello ${userName}`);

let userQuestion = 'Will it be a good day today?';
console.log(userName + ': ' + userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber){
  case 0:
    eightBall = 'Signs point to yes!';
  break;
    case 2:
    eightBall = 'Outlook not so good';
  break;
    case 3:
    eightBall = 'My sources say no.';
  break;
    case 4:
    eightBall = 'Do not count on it.';
  break;
    case 5:
    eightBall = 'It is certain.';
  break;
    case 6:
    eightBall = ' It is decidedly so!';
  break;
    case 7:
    eightBall = 'Reply hazy try again.';
  break;
    default:
    eightBall = 'Cannot Predict now.';
  break;
}

console.log("8 Ball: " + eightBall);
