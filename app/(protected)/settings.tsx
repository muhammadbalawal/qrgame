import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleBack = () => {
    router.push("/(protected)/profile" as any);
  };

  const handleLogout = () => {
    // Logout functionality will be implemented here
    router.push("/" as any);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/wavy-background-yellow.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* User Information Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>User Information</Text>
            <View style={styles.sectionCard}>
              <View style={styles.userInfoRow}>
                <View style={styles.profilePicture}>
                  <Text style={styles.profileInitials}>JD</Text>
                </View>
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>John Doe</Text>
                  <Text style={styles.userEmail}>john.doe@example.com</Text>
                </View>
              </View>
              
              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="person-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Full Name</Text>
                </View>
                <Text style={styles.valueText}>John Doe</Text>
              </View>
              
              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="mail-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Email</Text>
                </View>
                <Text style={styles.valueText}>john.doe@example.com</Text>
              </View>
              
              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="calendar-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Member Since</Text>
                </View>
                <Text style={styles.valueText}>January 2024</Text>
              </View>
            </View>
          </View>

          {/* Notifications Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notifications</Text>
            <View style={styles.sectionCard}>
              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="notifications-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Push Notifications</Text>
                </View>
                <Switch
                  value={notifications}
                  onValueChange={setNotifications}
                  trackColor={{ false: "rgba(0, 0, 0, 0.2)", true: "#000" }}
                  thumbColor={notifications ? "#FFCB05" : "#cccccc"}
                />
              </View>
              
              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="volume-high-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Sound</Text>
                </View>
                <Switch
                  value={soundEnabled}
                  onValueChange={setSoundEnabled}
                  trackColor={{ false: "rgba(0, 0, 0, 0.2)", true: "#000" }}
                  thumbColor={soundEnabled ? "#FFCB05" : "#cccccc"}
                />
              </View>
              
              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="phone-portrait-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Vibration</Text>
                </View>
                <Switch
                  value={vibrationEnabled}
                  onValueChange={setVibrationEnabled}
                  trackColor={{ false: "rgba(0, 0, 0, 0.2)", true: "#000" }}
                  thumbColor={vibrationEnabled ? "#FFCB05" : "#cccccc"}
                />
              </View>
            </View>
          </View>

          {/* App Preferences Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>App Preferences</Text>
            <View style={styles.sectionCard}>
              <View style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="moon-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Dark Mode</Text>
                </View>
                <Switch
                  value={darkMode}
                  onValueChange={setDarkMode}
                  trackColor={{ false: "rgba(0, 0, 0, 0.2)", true: "#000" }}
                  thumbColor={darkMode ? "#FFCB05" : "#cccccc"}
                />
              </View>
              
              <TouchableOpacity style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="language-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Language</Text>
                </View>
                <View style={styles.settingValue}>
                  <Text style={styles.valueText}>English</Text>
                  <Ionicons name="chevron-forward" size={16} color="#666666" />
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="help-circle-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Help & Support</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#666666" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Account Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>
            <View style={styles.sectionCard}>
              <TouchableOpacity style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="person-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Edit Profile</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#666666" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="lock-closed-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Privacy & Security</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#666666" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="shield-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Data & Storage</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#666666" />
              </TouchableOpacity>
            </View>
          </View>

          {/* About Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <View style={styles.sectionCard}>
              <TouchableOpacity style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="information-circle-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>App Version</Text>
                </View>
                <Text style={styles.valueText}>1.0.0</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="document-text-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Terms of Service</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#666666" />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.settingRow}>
                <View style={styles.settingInfo}>
                  <Ionicons name="shield-checkmark-outline" size={20} color="#000" />
                  <Text style={styles.settingLabel}>Privacy Policy</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#666666" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={20} color="#ff4444" />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  sectionCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    overflow: "hidden",
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  settingInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    color: "#000",
    marginLeft: 12,
  },
  settingValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  valueText: {
    fontSize: 16,
    color: "#333333",
    marginRight: 8,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 20,
    marginBottom: 40,
  },
  logoutText: {
    fontSize: 16,
    color: "#ff4444",
    fontWeight: "600",
    marginLeft: 8,
  },
  userInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  profileInitials: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFCB05",
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#333333",
  },
}); 