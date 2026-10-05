// src/screens/ProfileScreen.js
import { StyleSheet, Text, View } from "react-native";
import { useFavorites } from "../context/FavoritesContext";

export default function ProfileScreen() {
  const { favoriteIds } = useFavorites();

  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>🧳</Text>
      <Text style={styles.name}>Travel Lover</Text>
      <Text style={styles.sub}>Dhaka, Bangladesh</Text>

      <View style={styles.statBox}>
        <Text style={styles.statNumber}>{favoriteIds.length}</Text>
        <Text style={styles.statLabel}>Favorite Places</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 50 },
  avatar: { fontSize: 64 },
  name: { fontSize: 22, fontWeight: "700", marginTop: 8 },
  sub: { color: "#777", marginTop: 2 },
  statBox: {
    marginTop: 30,
    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 14,
    alignItems: "center",
  },
  statNumber: { fontSize: 32, fontWeight: "800", color: "#0a7ea4" },
  statLabel: { color: "#555" },
});