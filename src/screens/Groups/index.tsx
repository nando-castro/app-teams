import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import theme from "@theme/index";
import { StyleSheet, View } from "react-native";

export function Groups() {
  return (
    <View style={styles.container}>
      <Header />
      <Highlight title="Turmas" subTitle="Jogue com a sua turma" />
      <GroupCard title="Turma 1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.gray_700,
  },
});
