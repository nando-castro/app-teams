import theme from "@theme/index";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  subTitle: string;
};

export function Highlight({ title, subTitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 64,
    marginBottom: 64,
    marginLeft: 0,
    marginRight: 0,
  },
  title: {
    textAlign: "center",
    fontSize: theme.fonts.sizes.extraLarge,
    fontFamily: theme.fonts.family.BOLD,
    color: theme.colors.white,
  },
  subTitle: {
    textAlign: "center",
    fontSize: theme.fonts.sizes.extraLarge,
    fontFamily: theme.fonts.family.REGULAR,
    color: theme.colors.gray_300,
  },
});
