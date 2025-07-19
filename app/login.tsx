import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [step, setStep] = useState(1); 
  const [isLoading, setIsLoading] = useState(false);
  
  // Create refs for each input
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setCode(["", "", "", "", "", ""]);
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

  const handleCodeChange = (text: string, index: number) => {
    // Only allow numbers and single character
    if (text.length > 1) return;
    if (text && !/^\d$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Handle backspace to go to previous input
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyCode = () => {
    const fullCode = code.join("");
    if (fullCode.length !== 6) {
      Alert.alert("Error", "Please enter the complete 6-digit code");
      return;
    }
    
    // Here you would typically verify the code
    router.push("/(protected)/home" as any);
  };

  // Auto-submit when all digits are filled
  useEffect(() => {
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      // Optional: Auto-submit after a short delay
      // setTimeout(() => handleVerifyCode(), 500);
    }
  }, [code]);

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

                <View style={styles.codeContainer}>
                  {code.map((digit, index) => (
                    <TextInput
                      key={index}
                      ref={(ref) => { inputRefs.current[index] = ref; }}
                      style={[
                        styles.codeInput,
                        digit ? styles.codeInputFilled : null
                      ]}
                      value={digit}
                      onChangeText={(text) => handleCodeChange(text, index)}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                      keyboardType="number-pad"
                      maxLength={1}
                      textAlign="center"
                      selectTextOnFocus
                    />
                  ))}
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                  style={styles.resendButton} 
                  onPress={handleGetCodeAgain}
                  disabled={isLoading}
                >
                  <Text style={styles.resendButtonText}>
                    {isLoading ? "Sending..." : "Get Code Again"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[
                    styles.button, 
                    (isLoading || code.join("").length !== 6) && styles.buttonDisabled
                  ]} 
                  onPress={handleVerifyCode}
                  disabled={isLoading || code.join("").length !== 6}
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
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  codeInput: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    width: 45,
    height: 55,
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  codeInputFilled: {
    borderColor: "#000",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 18,
    paddingHorizontal: 80,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#666666",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  resendButton: {
    backgroundColor: "#000",
    paddingVertical: 18,
    paddingHorizontal: 80,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  resendButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});