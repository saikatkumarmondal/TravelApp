import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFavorites } from "../context/FavoritesContext";
import { destinations } from "../data/destination";

export default function FavoritesScreen({ navigation }) {
  const { favoriteIds } = useFavorites();

  const favorites = destinations.filter((d) => favoriteIds.includes(d.id));
  if (favorites.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>No favorites yet 💔</Text>
        <Text style={styles.emptyHint}>
          Tap ❤️ on the Details screen to add favorites
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <Pressable
          style={styles.row}
          onPress={() => {
            navigation.navigate("HomeTab", {
              screen: "Details",
              params: { id: item.id, title: item.title },
            });
          }}>
          <Image source={{ uri: item.heroImage }} style={styles.thumb} />
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.region}>{item.region}</Text>
          </View>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  empty: { flex: 1, alignItems: "center", justifyContent: "center" },
  emptyText: { fontSize: 18, fontWeight: "600" },
  emptyHint: { marginTop: 6, color: "#777" },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    gap: 12,
  },
  thumb: { width: 70, height: 70, borderRadius: 10 },
  title: { fontSize: 17, fontWeight: "700" },
  region: { color: "#666", marginTop: 2 },
});
