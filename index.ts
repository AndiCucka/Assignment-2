/*
 * alphabetize whole numbers
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-03-25
 */

import { createPrompt } from 'bun-promptx'


// Function to alphabetize whole numbers up to the given number
function alphabetizeWholeNumbers(num: number): string[] {
    // Check if the input is a non-negative whole number
    if (num < 0 || !Number.isInteger(num)) {
        throw new Error("Input must be a non-negative whole number");
    }

    // Create an array to store whole numbers
    const wholeNumbers: string[] = [];
    // Generate whole numbers from 1 to num and add them to the array
    for (let i = 1; i <= num; i++) {
        wholeNumbers.push(i.toString());
    }

    // Sort the array alphabetically
    wholeNumbers.sort((a, b) => a.localeCompare(b));

    return wholeNumbers; // Return the sorted array
}

// Print message to prompt user for input
console.log("Enter a whole number: ");

// Wait for user input
process.stdin.once('data', (input) => {
    // Convert user input to an integer
    const num = parseInt(input.toString());
    try {
        // Call the function to alphabetize whole numbers and print the result
        const result = alphabetizeWholeNumbers(num);
        console.log("Whole numbers up to", num, "in alphabetical order:", result);
    } catch (error) {
        // Handle any errors and print error message
        console.error(error.message);
    }
});
