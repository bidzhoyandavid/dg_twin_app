import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { router } from "expo-router";
import { supabase } from "./lib/supabase";

export default function WelcomeScreen() {
  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
      router.replace("/avatar-creation");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleGuestMode = () => {
    router.replace("/avatar-creation");
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Digital Twin
      </Text>
      <Text variant="bodyLarge" style={styles.subtitle}>
        Create your AI-powered digital twin
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleGoogleSignIn}
          style={styles.button}
        >
          Sign in with Google
        </Button>

        <Button mode="outlined" onPress={handleGuestMode} style={styles.button}>
          Continue as Guest
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    marginBottom: 30,
    textAlign: "center",
    opacity: 0.7,
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 300,
  },
  button: {
    marginVertical: 10,
  },
});
