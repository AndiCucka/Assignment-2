/*
 * alphabetize whole numbers
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-03-25
 */

import { createPrompt } from 'bun-promptx'

// Function to convert a string to its Unicode binary representation
function stringToUnicodeBinary(input: string): string {
    let unicodeBinary = ''; // Initialize an empty string to store the Unicode binary representation
    for (let counter = 0; counter < input.length; counter++) { // Loop through each character of the input string
        const unicodeValue = input.charCodeAt(counter); // Get the Unicode value of the current character
        const binaryRepresentation = unicodeValue.toString(2); // Convert the Unicode value to binary representation
        const paddedBinary = '0000000000000000'.slice(binaryRepresentation.length) + binaryRepresentation; // Pad the binary representation with leading zeros
        unicodeBinary += paddedBinary + ' '; // Add the padded binary representation to the output string, separated by a space
    }
    return unicodeBinary.trim(); // Trim any trailing space and return the Unicode binary representation
}

// Input string interactively
const prompt = createPrompt(); // Create a prompt instance
prompt.ask('Enter a string:', (inputString: string) => { // Prompt the user to enter a string
    const unicodeBinary = stringToUnicodeBinary(inputString); // Convert the input string to Unicode binary
    console.log('Unicode Binary:', unicodeBinary); // Print the Unicode binary representation
});
