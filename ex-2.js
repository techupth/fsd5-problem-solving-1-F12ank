//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  let setString = s.replace(/\s|:|,/g, "");
  console.log(setString);
  let word = setString.split("");
  console.log(word);
  let reverseText = word.reverse();
  console.log(reverseText);
  let joinText = reverseText.join("");
  console.log(joinText);
  let lowerText = joinText.toLowerCase();
  console.log(lowerText);

  let defaultWord = word;
  let joinDefaultText = defaultWord.join("");
  console.log(joinDefaultText);
  let lowerDefaultText = joinDefaultText.toLowerCase();

  if (lowerText === lowerDefaultText) {
    return true;
  } else {
    return false;
  }
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
