import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Card, Button, List, Divider } from "react-native-paper";
import { router } from "expo-router";

export default function DashboardScreen() {
  const capabilities = [
    "Text-based conversations",
    "Voice interaction",
    "Task delegation",
    "Personal assistance",
  ];

  const recentInteractions = [
    { id: 1, type: "Chat", timestamp: "2 minutes ago" },
    { id: 2, type: "Voice", timestamp: "1 hour ago" },
    { id: 3, type: "Task", timestamp: "3 hours ago" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Your Digital Twin Dashboard
      </Text>

      {/* Capabilities Section */}
      <Card style={styles.card}>
        <Card.Title title="Capabilities" />
        <Card.Content>
          {capabilities.map((capability, index) => (
            <List.Item
              key={index}
              title={capability}
              left={(props) => <List.Icon {...props} icon="check-circle" />}
            />
          ))}
        </Card.Content>
      </Card>

      {/* Recent Interactions */}
      <Card style={styles.card}>
        <Card.Title title="Recent Interactions" />
        <Card.Content>
          {recentInteractions.map((interaction) => (
            <React.Fragment key={interaction.id}>
              <List.Item
                title={interaction.type}
                description={interaction.timestamp}
                left={(props) => <List.Icon {...props} icon="history" />}
              />
              <Divider />
            </React.Fragment>
          ))}
        </Card.Content>
      </Card>

      {/* Quick Actions */}
      <Card style={styles.card}>
        <Card.Title title="Quick Actions" />
        <Card.Content>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={() => router.push("/chat")}
              style={styles.button}
            >
              Start Chat
            </Button>
            <Button
              mode="outlined"
              onPress={() => router.push("/settings")}
              style={styles.button}
            >
              Settings
            </Button>
          </View>
        </Card.Content>
      </Card>

      {/* AI Settings */}
      <Card style={styles.card}>
        <Card.Title title="AI Settings" />
        <Card.Content>
          <List.Item
            title="Personality"
            description="Professional, Concise"
            left={(props) => <List.Icon {...props} icon="account-cog" />}
            onPress={() => router.push("/ai-setup")}
          />
          <Divider />
          <List.Item
            title="Voice Settings"
            description="Your cloned voice"
            left={(props) => <List.Icon {...props} icon="microphone" />}
            onPress={() => router.push("/voice-cloning")}
          />
          <Divider />
          <List.Item
            title="Avatar Settings"
            description="Your digital appearance"
            left={(props) => <List.Icon {...props} icon="face-man" />}
            onPress={() => router.push("/avatar-creation")}
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});
