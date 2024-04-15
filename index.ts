/*
 * reverse words
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-03-25
 */

import { createPrompt } from 'bun-promptx';

function reversedString(string) {
  /*
   * This function just reverses a word
   */
  let reversedString = "";
  let topDownString = "";
  let reversedTopDownString = "";
  // loop through each character in the string
  for (let counter = 0; counter < string.length; counter++) {
    // build the normal top-down string
    topDownString += string[counter] + '\n';
    // build the reversed top-down string
    reversedTopDownString = string[counter] + '\n' + reversedTopDownString;
  }
  // reverse string
  for (let counter = string.length - 1; counter >= 0; counter--) {
    reversedString += string[counter];
  }
  return {
    reversed: reversedString,
    topDown: topDownString,
    reversedTopDown: reversedTopDownString
  };
}

const userString = createPrompt("Enter a string: ");
const inputString = userString.value;
// error check
if (inputString.length === 0) {
  console.log("Invalid input.");
} else {
  const { reversed, topDown, reversedTopDown } = reversedString(inputString);
  console.log("Reversed string:", reversed);
  console.log("Top-down string:", topDown);
  console.log("Reversed top-down string:", reversedTopDown);
}
