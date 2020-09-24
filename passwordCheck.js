const secretWord = 'thunder'
let message = 'access denied'

//This for loops below works but the "access denied" message shows even after you have gotten the password correct
/*for (let i = 5 ; i > 0 ; i--) {
  let guess = prompt(`Whats the password? You have ${i} tries left`)
  if ( guess === secretWord) {
    alert('Correct !')
    break;
  }
} 

alert(message)
*/

// since the code is ran prior to the incrementation , it allows us to check for when you are out of tries and only display access denied when that condition is met
let j = 5
while ( j > 0 ) {
  let guess = prompt(`Whats the password? You have ${j} tries left`)
  j--
  if ( j == 0 ) {
    alert(message)
  }
  if ( guess === secretWord) {
    alert('Correct !')
    break;
  }
}

console.log(5)