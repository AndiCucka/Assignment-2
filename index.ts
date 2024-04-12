/*
 * alphabetize whole numbers
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-03-25
 */

import { createPrompt } from 'bun-promptx'
import { Translate } from '@google-cloud/translate';

const translate = new Translate({ key: 'YOUR_API_KEY' });

async function translateText(text: string, targetLanguage: string): Promise<string> {
  try {
    const [translation] = await translate.translate(text, targetLanguage);
    return translation;
  } catch (error) {
    console.error('Translation error:', error);
    return '';
  }
}

// Example usage:
const inputText = 'Hello, how are you?';
const targetLanguage = 'fr'; // Target language code (e.g., 'fr' for French)
translateText(inputText, targetLanguage)
  .then(translatedText => console.log('Translated text:', translatedText))
  .catch(error => console.error('Error:', error));
