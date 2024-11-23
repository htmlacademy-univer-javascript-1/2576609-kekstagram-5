function checkStringLength(string, length) {
  return string.length <= length;
}

function isPalindrome(string) {
  string = string.replaceAll(' ', '');
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string.toLowerCase() === reversedString.toLowerCase();
}
