import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Welcome() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("login" as any);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/wavy-background-yellow.png")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>QR HEIST</Text>
            <Text style={styles.gameTag}>GAME</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Get Started →</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 30,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 203, 5, 0.85)", // optional yellow overlay for branding
  },
  content: {
    marginTop: 100,
    alignItems: "center",
  },
  titleWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 70,
    fontWeight: "700",
    color: "#000",
    letterSpacing: 1,
    textAlign: "center",
  },
  gameTag: {
    position: "absolute",
    top: 65,
    backgroundColor: "#fff",
    color: "#000",
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 999,
    fontWeight: "bold",
    fontSize: 24,
    transform: [{ rotate: "-5deg" }],
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 18,
    paddingHorizontal: 105,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
