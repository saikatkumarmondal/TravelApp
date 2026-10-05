import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screen/HomeScreen";
import DetailsScreen from "./screen/DetailsScreen";
import GalleryScreen from "./screen/GalleryScreen";
import FavoritesScreen from "./screen/FavoritesScreen";
import ProfileScreen from "./screen/ProfileScreen";
import { FavoritesProvider } from "./context/FavoritesContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Explore" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{ title: "Photo Gallery" }}
      />
    </Stack.Navigator>
  );
}

const icons = {
  HomeTab: ["home", "home-outline"],
  Favorites: ["heart", "heart-outline"],
  Profile: ["person", "person-outline"],
};

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              const [active, inactive] = icons[route.name];
              return (
                <Ionicons
                  name={focused ? active : inactive}
                  size={size}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: "#0a7ea4",
          })}
        >
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{ headerShown: false, title: "Home" }}
          />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}