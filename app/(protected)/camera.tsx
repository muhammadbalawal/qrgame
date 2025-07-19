import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");
const scanAreaSize = Math.min(width, height) * 0.6;

export default function CameraScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/wavy-background-yellow.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Camera placeholder - will be replaced with actual camera */}
        <View style={styles.cameraPlaceholder} />
        
        {/* QR Code scanning overlay */}
        <View style={styles.scanOverlay}>
          {/* Top overlay */}
          <View style={styles.topOverlay} />
          
          {/* Middle section with scan area */}
          <View style={styles.middleSection}>
            <View style={styles.leftOverlay} />
            <View style={styles.scanArea}>
              <View style={styles.cornerTL} />
              <View style={styles.cornerTR} />
              <View style={styles.cornerBL} />
              <View style={styles.cornerBR} />
            </View>
            <View style={styles.rightOverlay} />
          </View>
          
          {/* Bottom overlay */}
          <View style={styles.bottomOverlay}>
            <Text style={styles.scanText}>Position QR code within the frame</Text>
          </View>
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
  cameraPlaceholder: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  scanOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  topOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  middleSection: {
    flexDirection: "row",
    height: scanAreaSize,
  },
  leftOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  scanArea: {
    width: scanAreaSize,
    height: scanAreaSize,
    justifyContent: "center",
    alignItems: "center",
  },
  rightOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  scanText: {
    color: "#FFCB05",
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    fontWeight: "600",
  },
  cornerTL: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#FFCB05",
  },
  cornerTR: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: "#FFCB05",
  },
  cornerBL: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#FFCB05",
  },
  cornerBR: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: "#FFCB05",
  },
}); 