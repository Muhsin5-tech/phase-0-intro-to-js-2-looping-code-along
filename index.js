function writeCards(names, event) {
    // Create a new, empty array to hold the messages
    const messages = [];
    
    // Iterate through the input array
    for (let i = 0; i < names.length; i++) {
        // Build the 'thank you' message for each name
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        // Add the message to the messages array
        messages.push(message);
    }
    
    // Return the new array of messages
    return messages;
}

// Example usage:
const namesArray = ["Alice", "Bob", "Charlie"];
const eventName = "birthday";
console.log(writeCards(namesArray, eventName));

function countDown() {
    let count = 10; 
    while (count >= 0) { 
      console.log(count--);
    }
  }
  countDown()