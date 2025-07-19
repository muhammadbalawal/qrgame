import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1); 
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setCode("");
    } else {
      router.back();
    }
  };

  const handleGetCode = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email");
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      Alert.alert("Success", "Code sent to your email!");
    }, 1000);
  };

  const handleGetCodeAgain = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Success", "New code sent to your email!");
    }, 1000);
  };

  const handleVerifyCode = () => {
    if (!code) {
      Alert.alert("Error", "Please enter the code");
      return;
    }
    
    // Here you would typically verify the code
    router.push("/(protected)/home" as any);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/wavy-background-white.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {step === 1 ? (
            <>
              <View style={styles.formSection}>
                <Text style={styles.subtitle}>Enter your email</Text>
                <Text style={styles.description}>
                  We'll send you a verification code
                </Text>

                <View style={styles.form}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#666666"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <TouchableOpacity 
                style={[styles.button, isLoading && styles.buttonDisabled]} 
                onPress={handleGetCode}
                disabled={isLoading}
              >
                <Text style={styles.buttonText}>
                  {isLoading ? "Sending..." : "Get Code →"}
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={styles.formSection}>
                <Text style={styles.subtitle}>Enter verification code</Text>
                <Text style={styles.description}>
                  We sent a code to {email}
                </Text>

                <View style={styles.form}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter 6-digit code"
                    placeholderTextColor="#666666"
                    value={code}
                    onChangeText={setCode}
                    keyboardType="number-pad"
                    maxLength={6}
                  />
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                  style={[styles.button, styles.secondaryButton, isLoading && styles.buttonDisabled]} 
                  onPress={handleGetCodeAgain}
                  disabled={isLoading}
                >
                  <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                    {isLoading ? "Sending..." : "Get Code Again"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.button, isLoading && styles.buttonDisabled]} 
                  onPress={handleVerifyCode}
                >
                  <Text style={styles.buttonText}>Verify Code →</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
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
    backgroundColor: "rgba(255, 255, 255, 0.85)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 8,
  },
  backButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 20,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  formSection: {
    flex: 1,
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
    marginBottom: 40,
  },
  form: {
    width: "100%",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 18,
    paddingHorizontal: 80,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonDisabled: {
    backgroundColor: "#666666",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderWidth: 2,
    borderColor: "#000",
  },
  secondaryButtonText: {
    color: "#000",
  },
});