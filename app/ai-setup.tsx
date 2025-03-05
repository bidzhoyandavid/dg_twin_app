import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Button,
  Text,
  TextInput,
  SegmentedButtons,
  ActivityIndicator,
} from "react-native-paper";
import { router } from "expo-router";

export default function AISetupScreen() {
  const [loading, setLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    tone: "professional",
    responseStyle: "concise",
    interests: "",
  });

  const handleSave = async () => {
    setLoading(true);
    try {
      // TODO: Save preferences to Supabase
      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Test ChatGPT connection
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content: `You are a digital twin with the following preferences:
                Tone: ${preferences.tone}
                Response Style: ${preferences.responseStyle}
                Interests: ${preferences.interests}`,
              },
              {
                role: "user",
                content: "Hello, how are you?",
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to connect to ChatGPT");
      }

      router.push("/chat");
    } catch (error) {
      console.error("Error setting up AI:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        AI Personality Setup
      </Text>

      <View style={styles.section}>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Communication Tone
        </Text>
        <SegmentedButtons
          value={preferences.tone}
          onValueChange={(value) =>
            setPreferences((prev) => ({ ...prev, tone: value }))
          }
          buttons={[
            { value: "professional", label: "Professional" },
            { value: "casual", label: "Casual" },
            { value: "friendly", label: "Friendly" },
          ]}
          style={styles.segmentedButtons}
        />
      </View>

      <View style={styles.section}>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Response Style
        </Text>
        <SegmentedButtons
          value={preferences.responseStyle}
          onValueChange={(value) =>
            setPreferences((prev) => ({ ...prev, responseStyle: value }))
          }
          buttons={[
            { value: "concise", label: "Concise" },
            { value: "detailed", label: "Detailed" },
            { value: "balanced", label: "Balanced" },
          ]}
          style={styles.segmentedButtons}
        />
      </View>

      <View style={styles.section}>
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Interests & Topics
        </Text>
        <TextInput
          mode="outlined"
          value={preferences.interests}
          onChangeText={(text) =>
            setPreferences((prev) => ({ ...prev, interests: text }))
          }
          placeholder="e.g., Technology, Science, Art, Music"
          multiline
          numberOfLines={3}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleSave}
          style={styles.button}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="white" /> : "Complete Setup"}
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 30,
    textAlign: "center",
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    marginBottom: 10,
  },
  segmentedButtons: {
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    marginVertical: 10,
  },
});
