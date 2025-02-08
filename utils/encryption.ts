//Custom algorithm to encrypt string based on key
// Would've loved to play around some more with the encryption, but there's no time

/**
 * Encryption algorithm that iterates through characters of a given text, and if iteration count is even, does an xor encryption on the character code, converts the encrypted character code back to a string and appends that to the encrypted string. Then if it is odd, adds the character itself along with two random characters (gotten by running & and | bitwise operations on the current character and the current key character).
 * @param text text to be encrypted
 * @param key secret key
 * @returns encrypted string
 */
export function encrypt(text: string, key: string): string {
	let encryptedText = "";

	for (let i = 0; i <= text.length - 1; i++) {
		const currentChar = text.charAt(i);
		const equivKeyChar = key.charAt(i % key.length);

		// console.log(i);
		if (i % 2 === 0) {
			encryptedText += String.fromCharCode(currentChar.charCodeAt(0) ^ equivKeyChar.charCodeAt(0));
			// console.log(`Enc: ${String.fromCharCode(currentChar.charCodeAt(0) ^ equivKeyChar.charCodeAt(0))}`);
			console.log(currentChar.charCodeAt(0));
		} else {
			// console.log(`Enc: ${currentChar.charCodeAt(0) ^ equivKeyChar.charCodeAt(0)}`);
			encryptedText += currentChar;
			encryptedText += String.fromCharCode(currentChar.charCodeAt(0) & equivKeyChar.charCodeAt(0));
			encryptedText += String.fromCharCode(currentChar.charCodeAt(0) | equivKeyChar.charCodeAt(0));
		}
	}

	// console.log(encryptedText);

	return encryptedText;
}
