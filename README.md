# 🌍 Travel Explorer

A simple multi-screen React Native (Expo) app built to learn **React Navigation**. It uses dummy data to show popular travel destinations, with a Stack navigator nested inside a Bottom Tab navigator.

## ✨ Features

- Browse a list of destinations (Cox's Bazar, Santorini, Bali, Swiss Alps, Kyoto, Dubai)
- View details: summary, highlights, travel tips, best time, and climate
- Photo gallery in a 2-column grid
- Add or remove favorites with a ❤️ button in the header
- Favorites tab with a shortcut back to the details screen
- Profile tab showing the favorites count

## 🧭 Navigation Structure

```
Tab Navigator (bottom bar)
├── HomeTab      → Stack Navigator
│                    ├── Home
│                    ├── Details
│                    └── Gallery
├── Favorites    → FavoritesScreen
└── Profile      → ProfileScreen
```

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [Expo](https://expo.dev) (blank template) | App framework and tooling |
| [React Navigation](https://reactnavigation.org) | Native Stack and Bottom Tabs |
| React Context API | Sharing favorites across screens |
| `@expo/vector-icons` | Tab and header icons |

## 📁 Project Structure

```
TravelApp/
├── App.js                      # Navigation setup (Tab + Stack)
├── context/
│   └── FavoritesContext.js     # Favorites state (Context + Provider)
├── data/
│   └── destinations.js         # Dummy destination data
└── screen/
    ├── HomeScreen.js           # Destination list
    ├── DetailsScreen.js        # Destination details + favorite button
    ├── GalleryScreen.js        # Photo grid
    ├── FavoritesScreen.js      # Saved destinations
    └── ProfileScreen.js        # Simple profile with stats
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS version)
- The **Expo Go** app on your phone, or an Android/iOS emulator

### Installation

```bash
# 1. Create the project (skip if you already have it)
npx create-expo-app@latest TravelApp --template blank
cd TravelApp

# 2. Install navigation packages
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
```

### Run the app

```bash
npx expo start
```

Then scan the QR code with Expo Go, or press `a` (Android) / `i` (iOS).

If something looks stale, clear the cache:

```bash
npx expo start -c
```

## 📚 Concepts Covered

| Concept | Where to look |
|---|---|
| `NavigationContainer` (once, at the root) | `App.js` |
| Stack navigation | `HomeStack` in `App.js` |
| Bottom Tab navigation | `Tab.Navigator` in `App.js` |
| Nested navigators | `HomeStack` used as a Tab screen |
| Passing params | `navigation.navigate("Details", { id, title })` |
| Reading params | `route.params` in `DetailsScreen` / `GalleryScreen` |
| Dynamic header title | `options={({ route }) => ...}` |
| Header button | `navigation.setOptions()` in `DetailsScreen` |
| Navigating into a nested screen | `navigate("HomeTab", { screen: "Details", params })` in `FavoritesScreen` |
| Shared state | `FavoritesContext` |

## 🐞 Common Problems

| Problem | Likely cause |
|---|---|
| Blank screen, no error | A component is missing `return` |
| "Nested NavigationContainers" error | `NavigationContainer` used in more than one place |
| App crashes on `FavoritesProvider` | Default vs named export mismatch between `FavoritesContext.js` and `App.js` |
| `Cannot find variable ...` | Typo in a variable or import name |
| Double header on Home tab | Missing `headerShown: false` on the `HomeTab` screen |

## 📝 Practice Ideas

- [ ] Add a search box on Home to filter by title
- [ ] Add a remove button in the Favorites list
- [ ] Show the favorites count as a badge using `tabBarBadge`
- [ ] Open gallery photos in full screen on tap
- [ ] Add a Settings screen with its own Stack under Profile
- [ ] Try Drawer navigation or an Authentication flow (Login → Main App)

## 📄 Notes

- All data is dummy data stored locally in `data/destinations.js`.
- Images are loaded from Unsplash URLs, so an internet connection is required.
- Favorites are kept in memory only and reset when the app restarts.