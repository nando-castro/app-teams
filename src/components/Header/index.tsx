import logoImg from "@assets/logo.png";
import { CaretLeft } from "phosphor-react-native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.button}>
          <CaretLeft color="#FFFFFF" size={32} />
        </TouchableOpacity>
      )}
      <Image source={logoImg} alt="Logo" style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    width: 46,
    height: 55,
  },
  icon: {},
  button: {
    flex: 1,
  },
});
