import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  const handleBackToIndex = () => {
    router.push("/" as any);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/wavy-background-yellow.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToIndex}>
          <Text style={styles.backButtonText}>← Back to Welcome</Text>
        </TouchableOpacity>
        
        <View style={styles.content}>
          <Text style={styles.title}>Weekly Hint</Text>
          <Text style={styles.hintText}>Look for the QR code near the coffee machine in the break room</Text>
        </View>
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
    backgroundColor: "rgba(255, 203, 5, 0.85)",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    zIndex: 1,
  },
  backButtonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  hintText: {
    fontSize: 18,
    color: "#333333",
    textAlign: "center",
    lineHeight: 28,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 12,
  },
}); 