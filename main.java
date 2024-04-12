/*
 * Given a string, returns the length
 * of the largest run in the string.
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-03-30
 */

import java.util.Scanner;

public class ReverseWords {
    public static void main(String[] args) {
        // Create a Scanner object to read user input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter a string
        System.out.print("Enter a string: ");
        // Read the user input as a string
        String inputString = scanner.nextLine();

        // Check if the input string is empty
        if (inputString.isEmpty()) {
            // Display an error message if the input string is empty
            System.out.println("Invalid input.");
        } else {
            // Call the reverseString method to reverse the input string
            String reversed = reverseString(inputString);
            // Display the reversed string
            System.out.println("Reversed string: " + reversed);
        }

        // Close the Scanner object to release system resources
        scanner.close();
    }

    // Method to reverse a given string
    public static String reverseString(String string) {
        // Create a StringBuilder to store the reversed string
        StringBuilder reversedString = new StringBuilder();
        
        // Iterate over the characters of the input string in reverse order
        for (int counter = string.length() - 1; counter >= 0; counter--) {
            // Append each character to the StringBuilder in reverse order
            reversedString.append(string.charAt(counter));
        }
        
        // Return the reversed string as a String
        return reversedString.toString();
    }
}
