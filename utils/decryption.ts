//Algorithm to decrypt encrypted string based on encryption algorithm

/**
 * Decrypts an encrypted string by basically reversing the encryption algorithm. Check it out if you want more details on it.
 * @param encryptedText encrypted string
 * @param key decryption string
 * @returns decrypted text
 */
export function decrypt(encryptedText: string, key: string): string {
	let decryptedText = "";

	for (let i = 0, count = 0; i <= encryptedText.length - 1; i++, count++) {
		const currentChar = encryptedText.charAt(i);
		const equivKeyChar = key.charAt(count % key.length);

		// console.log(i);
		if (i % 2 === 0) {
			decryptedText += String.fromCharCode(currentChar.charCodeAt(0) ^ equivKeyChar.charCodeAt(0));
			// console.log(`Enc: ${String.fromCharCode(currentChar.charCodeAt(0) ^ equivKeyChar.charCodeAt(0))}`);
			console.log(currentChar.charCodeAt(0));
		} else {
			// console.log(`Enc: ${currentChar.charCodeAt(0) ^ equivKeyChar.charCodeAt(0)}`);
			// decryptedText += String.fromCharCode(currentChar.charCodeAt(0) & equivKeyChar.charCodeAt(0));
			decryptedText += currentChar;
			i += 2;
		}
	}

	// console.log(decryptedText);

	return decryptedText;
}
