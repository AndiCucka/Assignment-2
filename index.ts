/*
 * alphabetize whole numbers
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-03-25
 */

import { createPrompt } from 'bun-promptx';

function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

function main() {
  const userString = createPrompt("Enter a string: ");
  userString.then((input: string) => {
    const reversedWord = reverseString(input);
    console.log(`Reversed word: ${reversedWord}`);
  }).catch((err: any) => {
    console.error("Error:", err);
  });
}

main();
