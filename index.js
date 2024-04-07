
// for loop
function writeCards(namesArray, eventName) {
    let thankYouMessages = [];
  
    for (let i = 0; i < namesArray.length; i++) { 
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }

  function countDown(num) {
    while (num >= 0) { 
      console.log(num);
      num--; 
    }
  }