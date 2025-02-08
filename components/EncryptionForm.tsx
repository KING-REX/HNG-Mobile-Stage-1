"use client";

import type React from "react";
import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

interface EncryptionFormProps {
	onEncrypt: (text: string, key: string) => void;
	encryptedText: string;
}

const EncryptionForm: React.FC<EncryptionFormProps> = ({ onEncrypt, encryptedText }) => {
	const [text, setText] = useState("");
	const [key, setKey] = useState("");

	const handleEncrypt = () => {
		onEncrypt(text, key);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Encryption</Text>
			<TextInput style={styles.input} placeholder="Enter text to encrypt" value={text} onChangeText={setText} multiline />
			<TextInput style={styles.input} placeholder="Enter encryption key" value={key} onChangeText={setKey} secureTextEntry />
			<TouchableOpacity style={styles.button} onPress={handleEncrypt}>
				<Text style={styles.buttonText}>Encrypt</Text>
			</TouchableOpacity>
			{encryptedText ? (
				<View style={styles.resultContainer}>
					<Text style={styles.resultLabel}>Encrypted Text:</Text>
					<Text style={styles.resultText}>{encryptedText}</Text>
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
		backgroundColor: "#3498db",
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

export default EncryptionForm;
