import theme from "@theme/index";
import { UsersThree } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacityProps, View } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <View style={styles.container} >
      <UsersThree
        style={styles.icon}
        color={theme.colors.green_700}
        size={32}
        weight="fill"
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    marginBottom: 12,
    backgroundColor: theme.colors.gray_500,
  },
  title: {
    fontSize: theme.fonts.sizes.regular,
    color: theme.colors.gray_200,
  },

  icon: {
    marginRight: 20,
  },
});
