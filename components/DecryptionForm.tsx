"use client";

import type React from "react";
import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

interface DecryptionFormProps {
	onDecrypt: (text: string, key: string) => void;
	decryptedText: string;
}

const DecryptionForm: React.FC<DecryptionFormProps> = ({ onDecrypt, decryptedText }) => {
	const [text, setText] = useState("");
	const [key, setKey] = useState("");

	const handleDecrypt = () => {
		onDecrypt(text, key);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Decryption</Text>
			<TextInput style={styles.input} placeholder="Enter text to decrypt" value={text} onChangeText={setText} multiline />
			<TextInput style={styles.input} placeholder="Enter decryption key" value={key} onChangeText={setKey} secureTextEntry />
			<TouchableOpacity style={styles.button} onPress={handleDecrypt}>
				<Text style={styles.buttonText}>Decrypt</Text>
			</TouchableOpacity>
			{decryptedText ? (
				<View style={styles.resultContainer}>
					<Text style={styles.resultLabel}>Decrypted Text:</Text>
					<Text style={styles.resultText}>{decryptedText}</Text>
				</View>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 20,
		marginBottom: 20,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 15,
		color: "#2c3e50",
	},
	input: {
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 5,
		padding: 10,
		marginBottom: 15,
		fontSize: 16,
	},
	button: {
		backgroundColor: "#2ecc71",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	resultContainer: {
		marginTop: 20,
		backgroundColor: "#f8f9fa",
		padding: 15,
		borderRadius: 5,
	},
	resultLabel: {
		fontWeight: "bold",
		marginBottom: 5,
		color: "#2c3e50",
	},
	resultText: {
		fontSize: 16,
		color: "#34495e",
	},
});

export default DecryptionForm;
