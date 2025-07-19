import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Leaderboard() {
  // Mock leaderboard data
  const leaderboardData = [
    { id: 1, name: "Alex Chen", score: 2840, badges: 12, rank: 1 },
    { id: 2, name: "Sarah Kim", score: 2720, badges: 11, rank: 2 },
    { id: 3, name: "Mike Johnson", score: 2650, badges: 10, rank: 3 },
    { id: 4, name: "Emma Wilson", score: 2480, badges: 9, rank: 4 },
    { id: 5, name: "David Lee", score: 2350, badges: 8, rank: 5 },
    { id: 6, name: "Lisa Park", score: 2220, badges: 7, rank: 6 },
    { id: 7, name: "Tom Brown", score: 2100, badges: 6, rank: 7 },
    { id: 8, name: "Anna Davis", score: 1980, badges: 5, rank: 8 },
    { id: 9, name: "Chris Miller", score: 1850, badges: 4, rank: 9 },
    { id: 10, name: "Rachel Green", score: 1720, badges: 3, rank: 10 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Ionicons name="trophy" size={24} color="#FFD700" />;
      case 2:
        return <Ionicons name="medal" size={24} color="#C0C0C0" />;
      case 3:
        return <Ionicons name="medal" size={24} color="#CD7F32" />;
      default:
        return <Text style={styles.rankNumber}>{rank}</Text>;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return styles.firstPlace;
      case 2:
        return styles.secondPlace;
      case 3:
        return styles.thirdPlace;
      default:
        return styles.regularPlace;
    }
  };

  return (
    <ImageBackground
      source={require("@/assets/images/wavy-background-white.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.title}>Leaderboard</Text>
          <Text style={styles.subtitle}>Top QR Hunters</Text>
        </View>

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>2840</Text>
              <Text style={styles.statLabel}>Your Score</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Badges</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>#1</Text>
              <Text style={styles.statLabel}>Rank</Text>
            </View>
          </View>

          <View style={styles.leaderboardContainer}>
            {leaderboardData.map((user) => (
              <View key={user.id} style={[styles.userRow, getRankStyle(user.rank)]}>
                <View style={styles.rankContainer}>
                  {getRankIcon(user.rank)}
                </View>
                
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{user.name}</Text>
                  <Text style={styles.userBadges}>{user.badges} badges</Text>
                </View>
                
                <View style={styles.scoreContainer}>
                  <Text style={styles.userScore}>{user.score}</Text>
                  <Text style={styles.scoreLabel}>points</Text>
                </View>
              </View>
            ))}
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
    backgroundColor: "rgba(255, 255, 255, 0.85)",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    fontWeight: "500",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666666",
    fontWeight: "500",
  },
  leaderboardContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  firstPlace: {
    backgroundColor: "rgba(255, 215, 0, 0.1)",
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  secondPlace: {
    backgroundColor: "rgba(192, 192, 192, 0.1)",
    borderWidth: 2,
    borderColor: "#C0C0C0",
  },
  thirdPlace: {
    backgroundColor: "rgba(205, 127, 50, 0.1)",
    borderWidth: 2,
    borderColor: "#CD7F32",
  },
  regularPlace: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  rankContainer: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  rankNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666666",
  },
  userInfo: {
    flex: 1,
    marginLeft: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  userBadges: {
    fontSize: 12,
    color: "#666666",
  },
  scoreContainer: {
    alignItems: "flex-end",
  },
  userScore: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 2,
  },
  scoreLabel: {
    fontSize: 10,
    color: "#666666",
    textTransform: "uppercase",
  },
}); 