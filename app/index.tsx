"use client";

import { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from "react-native";
import EncryptionForm from "../components/EncryptionForm";
import DecryptionForm from "../components/DecryptionForm";
import { encrypt } from "../utils/encryption";
import { decrypt } from "../utils/decryption";

export default function Index() {
	const [encryptedText, setEncryptedText] = useState("");
	const [decryptedText, setDecryptedText] = useState("");

	const handleEncrypt = (text: string, key: string) => {
		const encrypted = encrypt(text, key);
		setEncryptedText(encrypted);
	};

	const handleDecrypt = (text: string, key: string) => {
		const decrypted = decrypt(text, key);
		setDecryptedText(decrypted);
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Encryption/Decryption App</Text>
				</View>
				<View style={styles.content}>
					<EncryptionForm onEncrypt={handleEncrypt} encryptedText={encryptedText} />
					<DecryptionForm onDecrypt={handleDecrypt} decryptedText={decryptedText} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f0f0f0",
	},
	scrollContent: {
		flexGrow: 1,
	},
	header: {
		backgroundColor: "#3498db",
		padding: 20,
		alignItems: "center",
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#fff",
	},
	content: {
		flex: 1,
		padding: 20,
	},
});
