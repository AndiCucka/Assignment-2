/*
 * alphabetize whole numbers
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-03-25
 */

import { createPrompt } from 'bun-promptx';

function reverseWordPrompt(): void {
  createPrompt("Enter a word: ").then((word: string) => {
    const reversedWord = word.split('').reverse().join('');
    console.log(`Reversed word: ${reversedWord}`);
  }).catch((error: any) => {
    console.error("Error:", error);
  });
}

reverseWordPrompt();
