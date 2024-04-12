/*
 * alphabetize whole numbers
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-03-25
 */

import { createPrompt } from 'bun-promptx'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

function writeUpDown(str: string): string {
    return str.split('').join('\n');
}

rl.question("Enter a word: ", (word) => {
    rl.question("Choose an option:\n1. Reverse the word\n2. Write the word from top to bottom\n", (option) => {
        switch (option) {
            case "1":
                console.log("Reversed word:", reverseString(word));
                break;
            case "2":
                console.log("Word written from top to bottom:\n", writeUpDown(word));
                break;
            default:
                console.log("Invalid option!");
        }
        rl.close();
    });
});
