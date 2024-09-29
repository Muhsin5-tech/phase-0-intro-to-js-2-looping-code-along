function writeCards(names, event) {
  let thankYouMessages = [];
  
  for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  
  return thankYouMessages;
}

function countDown(number) {
  while (number >= 0) {
      console.log(number);
      number--;
  }
}

const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(messages);

countDown(10);