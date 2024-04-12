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
  // reverse string
  for (let counter = string.length - 1; counter >= 0; counter--) {
    reversedString += string[counter];
  }
  return reversedString;
}

const userString = createPrompt("Enter a string: ");
const inputString = userString.value;
// error check
if (inputString.length === 0) {
  console.log("Invalid input.");
} else {
  const reversed = reversedString(inputString);
  console.log("Reversed string:", reversed);
}
