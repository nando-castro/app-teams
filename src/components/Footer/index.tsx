import { StyleSheet, Text, View } from "react-native";

export function Footer() {
  return (
    <View style={styles.container}>
      <Text>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
