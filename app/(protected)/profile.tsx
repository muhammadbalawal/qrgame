import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Sample QR badge data
const sampleBadges = [
  { id: 1, name: "Coffee Break", description: "Found near the coffee machine", date: "2024-01-15", owned: true, rarity: "common" },
  { id: 2, name: "Library Explorer", description: "Discovered in the library", date: "2024-01-20", owned: true, rarity: "rare" },
  { id: 3, name: "Gym Warrior", description: "Scanned at the fitness center", date: "2024-01-10", owned: false, rarity: "epic" },
  { id: 4, name: "Cafeteria Hunter", description: "Located in the dining area", date: "2024-01-25", owned: true, rarity: "common" },
  { id: 5, name: "Parking Master", description: "Found in the parking garage", date: "2024-01-05", owned: false, rarity: "legendary" },
  { id: 6, name: "Reception Treasure", description: "Hidden behind the reception desk", date: "2024-01-30", owned: true, rarity: "rare" },
];

type FilterType = "all" | "owned" | "newest" | "oldest";

export default function Profile() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  
  const handleSettings = () => {
    router.push("/(protected)/settings" as any);
  };

  const getFilteredBadges = () => {
    let filtered = [...sampleBadges];
    
    switch (activeFilter) {
      case "owned":
        filtered = filtered.filter(badge => badge.owned);
        break;
      case "newest":
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      default:
        break;
    }
    
    return filtered;
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "#cccccc";
      case "rare": return "#FFCB05";
      case "epic": return "#9C27B0";
      case "legendary": return "#FF9800";
      default: return "#cccccc";
    }
  };

  const getRarityText = (rarity: string) => {
    return rarity.charAt(0).toUpperCase() + rarity.slice(1);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/wavy-background-yellow.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Header with Settings Button */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
            <Ionicons name="settings-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Stats Section */}
          <View style={styles.statsSection}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>QR Codes Scanned</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>850</Text>
              <Text style={styles.statLabel}>Total Points</Text>
            </View>
          </View>

          {/* Recent Activity */}
          <View style={styles.activitySection}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            
            <View style={styles.activityCard}>
              <View style={styles.activityItem}>
                <View style={styles.activityIcon}>
                  <Ionicons name="qr-code-outline" size={16} color="#FFCB05" />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityText}>Scanned "Library Explorer" QR code</Text>
                  <Text style={styles.activityTime}>2 hours ago</Text>
                </View>
              </View>
              
              <View style={styles.activityItem}>
                <View style={styles.activityIcon}>
                  <Ionicons name="trophy-outline" size={16} color="#FFCB05" />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityText}>Earned "Coffee Break" badge</Text>
                  <Text style={styles.activityTime}>1 day ago</Text>
                </View>
              </View>
              
              <View style={styles.activityItem}>
                <View style={styles.activityIcon}>
                  <Ionicons name="qr-code-outline" size={16} color="#FFCB05" />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityText}>Scanned "Cafeteria Hunter" QR code</Text>
                  <Text style={styles.activityTime}>3 days ago</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Collection Section */}
          <View style={styles.collectionSection}>
            <Text style={styles.sectionTitle}>My Collection</Text>
            
            {/* Filter Buttons */}
            <View style={styles.filterContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity 
                  style={[styles.filterButton, activeFilter === "all" && styles.activeFilter]}
                  onPress={() => setActiveFilter("all")}
                >
                  <Text style={[styles.filterText, activeFilter === "all" && styles.activeFilterText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.filterButton, activeFilter === "owned" && styles.activeFilter]}
                  onPress={() => setActiveFilter("owned")}
                >
                  <Text style={[styles.filterText, activeFilter === "owned" && styles.activeFilterText]}>Owned</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.filterButton, activeFilter === "newest" && styles.activeFilter]}
                  onPress={() => setActiveFilter("newest")}
                >
                  <Text style={[styles.filterText, activeFilter === "newest" && styles.activeFilterText]}>Newest</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.filterButton, activeFilter === "oldest" && styles.activeFilter]}
                  onPress={() => setActiveFilter("oldest")}
                >
                  <Text style={[styles.filterText, activeFilter === "oldest" && styles.activeFilterText]}>Oldest</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>

            {/* Badges Grid */}
            <View style={styles.badgesGrid}>
              {getFilteredBadges().map((badge) => (
                <View key={badge.id} style={[styles.badgeCard, !badge.owned && styles.unownedBadge]}>
                  <View style={[styles.badgeIcon, { backgroundColor: getRarityColor(badge.rarity) }]}>
                    <Text style={styles.badgeIconText}>QR</Text>
                  </View>
                  <Text style={styles.badgeName}>{badge.name}</Text>
                  <Text style={styles.badgeDescription}>{badge.description}</Text>
                  <View style={styles.badgeFooter}>
                    <Text style={[styles.rarityText, { color: getRarityColor(badge.rarity) }]}>
                      {getRarityText(badge.rarity)}
                    </Text>
                    <Text style={styles.dateText}>{badge.date}</Text>
                  </View>
                  {!badge.owned && (
                    <View style={styles.lockedOverlay}>
                      <Text style={styles.lockedText}>🔒</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
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
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  settingsButton: {
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#333333",
    textAlign: "center",
  },
  activitySection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 16,
  },
  activityCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    padding: 20,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: "#666666",
  },
  collectionSection: {
    marginBottom: 30,
  },
  filterContainer: {
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  activeFilter: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  filterText: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "500",
  },
  activeFilterText: {
    color: "#FFCB05",
  },
  badgesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  badgeCard: {
    width: "48%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    position: "relative",
  },
  unownedBadge: {
    opacity: 0.6,
  },
  badgeIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  badgeIconText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  badgeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 6,
  },
  badgeDescription: {
    fontSize: 12,
    color: "#333333",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 16,
  },
  badgeFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  rarityText: {
    fontSize: 10,
    fontWeight: "600",
  },
  dateText: {
    fontSize: 10,
    color: "#666666",
  },
  lockedOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  lockedText: {
    fontSize: 24,
  },
}); 