import React from "react";
import { View, StyleSheet } from "react-native";
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import { Stack } from "expo-router";

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#6200ee",
    secondary: "#03dac6",
    error: "#B00020",
  },
};

export default function Layout() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
