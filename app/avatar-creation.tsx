import React, { useState } from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import { Button, Text, ActivityIndicator } from "react-native-paper";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function AvatarCreationScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    try {
      // Request permissions
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
      alert("Error picking image. Please try again.");
    }
  };

  const generateAvatar = async () => {
    if (!image) return;

    setLoading(true);
    try {
      // TODO: Implement D-ID API call here
      // For now, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push("/voice-cloning");
    } catch (error) {
      console.error("Error generating avatar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Create Your Avatar
      </Text>

      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Text>No image selected</Text>
          </View>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={pickImage} style={styles.button}>
          Upload Photo
        </Button>

        <Button
          mode="contained"
          onPress={generateAvatar}
          style={styles.button}
          disabled={!image || loading}
        >
          {loading ? <ActivityIndicator color="white" /> : "Generate Avatar"}
        </Button>
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
  imageContainer: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 300,
  },
  button: {
    marginVertical: 10,
  },
});
