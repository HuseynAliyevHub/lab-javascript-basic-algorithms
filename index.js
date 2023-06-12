//Iteration 1: Names and Input

const hacker1 = "Jonathan"
console.log(`The driver's name is ${hacker1}.`)


const hacker2 = "Christopher"
console.log(`The navigator's name is ${hacker2}.`)


//Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


//Iteration3: Loops

console.log(hacker1.toUpperCase().split('').join(' '))

console.log(hacker2.split('').reverse().join(''))

function strcmp(hacker1, hacker2) {
  if (hacker1 < hacker2) {
    return "The driver's name goes first."
  } 
  if (hacker1 > hacker2) {
    return "Yo, the navigator goes first, definitely."
  } 
  return "What?! You both have the same name?"
}

console.log(strcmp("Jonathan", "Christopher"))


//Bonus 1

const longTest = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales laoreet lectus semper scelerisque. Vestibulum malesuada semper nisl, vel consectetur est facilisis nec. Pellentesque egestas eu nunc ut aliquet. Ut sit amet ante interdum, malesuada orci vel, dapibus est. Donec aliquet, risus sit amet molestie condimentum, nisi lectus imperdiet neque, et vulputate nibh arcu eget tortor. Nullam bibendum sapien commodo, ullamcorper tortor a, iaculis ex. Cras hendrerit vulputate elit, et venenatis odio tempor ut. Fusce metus urna, scelerisque nec magna vitae, efficitur faucibus mauris. Fusce luctus, diam a laoreet hendrerit, ex nisi vehicula massa, ac egestas dui ligula sed nulla. Suspendisse felis turpis, faucibus sed elit eget, euismod tincidunt nisl. Quisque aliquet purus sit amet nisi viverra, ut elementum eros lobortis. Vestibulum vitae tellus ligula. Duis ut dui eu urna ultricies venenatis eget sit amet dui. Donec fermentum lacus ut ipsum sagittis, id ultrices mauris elementum. In varius scelerisque sem non tincidunt. Etiam eros augue, vehicula imperdiet nulla in, blandit vestibulum ante. Vestibulum id mi sem. Quisque pretium mi sit amet vestibulum interdum. Ut nulla erat, volutpat a faucibus eu, sodales consequat eros. Maecenas tincidunt rutrum urna, ut maximus dolor pulvinar in. Mauris sed nibh vel diam aliquet egestas. Nunc ultrices magna et mauris lobortis consequat. Curabitur id justo vulputate, aliquet nunc eu, gravida libero. Morbi at arcu dui. Ut ullamcorper tortor sit amet dui dictum aliquet ut at nulla.'


function wordCount(longTest) { 
  return longTest.split(" ").length;
}
console.log(wordCount(longTest))

const myLongTest = 'et'

let count = longTest.split(myLongTest).length - 1;
console.log(count);


//Bonus 2


function checkPalindrome(string) {
const stringReverse = string.split('').reverse().join('')

 if(string == stringReverse) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

console.log(checkPalindrome("madam"))
console.log(checkPalindrome("banana"))
