import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function VoiceCloningScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Voice Cloning</Text>
      <Text variant="bodyLarge">Coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
