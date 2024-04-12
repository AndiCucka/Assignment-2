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

async function main() {
  const prompt = createPrompt();
  const userInput = await prompt('Enter a word to reverse: ');
  const reversedWord = reverseString(userInput);
  console.log(`Reversed word: ${reversedWord}`);
  prompt.close();
}

main().catch(console.error);
