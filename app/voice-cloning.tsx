import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, ActivityIndicator } from "react-native-paper";
import { router } from "expo-router";
import { Audio } from "expo-av";

export default function VoiceCloningScreen() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (recording) {
        recording.stopAndUnloadAsync();
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);
      await recording.startAsync();
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = async () => {
    if (!recording) return;

    try {
      setIsRecording(false);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);

      if (uri) {
        await processVoice(uri);
      }
    } catch (error) {
      console.error("Error stopping recording:", error);
    }
  };

  const processVoice = async (uri: string) => {
    setLoading(true);
    try {
      // TODO: Implement ElevenLabs API call here
      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push("/ai-setup");
    } catch (error) {
      console.error("Error processing voice:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Clone Your Voice
      </Text>

      <Text variant="bodyLarge" style={styles.instructions}>
        Please read this sentence: {"\n"}
        "Hello, I am your digital twin. How can I help you today?"
      </Text>

      <View style={styles.buttonContainer}>
        {!isRecording ? (
          <Button
            mode="contained"
            onPress={startRecording}
            style={styles.button}
            disabled={loading}
          >
            Start Recording
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={stopRecording}
            style={styles.button}
            buttonColor="#ff4444"
          >
            Stop Recording
          </Button>
        )}

        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Processing your voice...</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  instructions: {
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
  },
  button: {
    marginVertical: 10,
    width: "100%",
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
  },
});
