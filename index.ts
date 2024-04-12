/*
 * alphabetize whole numbers
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-03-25
 */

import { createPrompt } from 'bun-promptx';

const prompt = createPrompt();

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

function writeUpDown(str: string): string {
    return str.split('').join('\n');
}

async function main() {
    const word = await prompt('Enter a word: ');

    const option = await prompt({
        message: 'Choose an option:',
        choices: ['Reverse the word', 'Write the word from top to bottom']
    });

    switch (option) {
        case 'Reverse the word':
            console.log("Reversed word:", reverseString(word));
            break;
        case 'Write the word from top to bottom':
            console.log("Word written from top to bottom:\n", writeUpDown(word));
            break;
        default:
            console.log("Invalid option!");
    }
}

main().catch(err => console.error(err));
