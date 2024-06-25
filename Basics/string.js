const name = "Kaushik"
const attedance = "100%"

// console.log(name + attendace);  //old syntax

// console.log(`Hello my name is ${name} and my attendace is ${attendace}`);

const siteName = new String('kaushik')

// console.log(siteName[0]);
// console.log(siteName.__proto__);


// console.log(siteName.length);
// console.log(siteName.toUpperCase());
// console.log(siteName.charAt(2));
// console.log(siteName.indexOf('t'));

const newString = siteName.substring(0, 4)
// console.log(newString);

const anotherString = siteName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   kaushik    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(siteName.split('-'));


const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;  //'u'
// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);

const sentence2 = 'The quick brown fox jumps over the lazy dog.';
const index2 = 4;
/* console.log(
  `Character code ${sentence2.charCodeAt(index2)} is equal to ${sentence2.charAt(
    index2,
  )}`,
); */

// In total nearly 48 strings types are there but some are not in use.