import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Switch, List, Divider, Button } from "react-native-paper";
import { router } from "expo-router";

export default function SettingsScreen() {
  const [settings, setSettings] = useState({
    notifications: true,
    dataSharing: false,
    darkMode: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Settings
      </Text>

      {/* Privacy Settings */}
      <List.Section>
        <List.Subheader>Privacy & Security</List.Subheader>
        <List.Item
          title="Data Sharing"
          description="Allow data collection for improvement"
          left={(props) => <List.Icon {...props} icon="shield-lock" />}
          right={() => (
            <Switch
              value={settings.dataSharing}
              onValueChange={() => toggleSetting("dataSharing")}
            />
          )}
        />
        <Divider />
      </List.Section>

      {/* Notification Settings */}
      <List.Section>
        <List.Subheader>Notifications</List.Subheader>
        <List.Item
          title="Push Notifications"
          description="Receive updates and reminders"
          left={(props) => <List.Icon {...props} icon="bell" />}
          right={() => (
            <Switch
              value={settings.notifications}
              onValueChange={() => toggleSetting("notifications")}
            />
          )}
        />
        <Divider />
      </List.Section>

      {/* Appearance Settings */}
      <List.Section>
        <List.Subheader>Appearance</List.Subheader>
        <List.Item
          title="Dark Mode"
          description="Use dark theme"
          left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
          right={() => (
            <Switch
              value={settings.darkMode}
              onValueChange={() => toggleSetting("darkMode")}
            />
          )}
        />
        <Divider />
      </List.Section>

      {/* Account Actions */}
      <List.Section>
        <List.Subheader>Account</List.Subheader>
        <List.Item
          title="Delete Account"
          description="Permanently delete your account and data"
          left={(props) => (
            <List.Icon {...props} icon="delete" color="#ff4444" />
          )}
          onPress={() => {
            // TODO: Implement account deletion
          }}
        />
      </List.Section>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => router.back()}
          style={styles.button}
        >
          Save Changes
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
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    marginVertical: 10,
  },
});
