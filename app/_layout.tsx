import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Início",
            title: "Bem vindo!",
            drawerIcon: () => (
              <Ionicons name="home-outline" size={18} color="#3a98ff" />
            ),
          }}
        />
        <Drawer.Screen
          name="primeiro"
          options={{
            drawerLabel: "Primeiro Componente",
            title: "Nosso primeiro componente da aula",
            drawerIcon: () => (
              <Ionicons name="heart-circle-outline" size={18} color="#3a98ff" />
            ),
          }}
        />
        <Drawer.Screen
          name="contador"
          options={{
            drawerLabel: "Contador",
            title: "Contador",
            drawerIcon: () => <Ionicons name="add" size={18} color="#3a98ff" />,
          }}
        />
        <Drawer.Screen
          name="tabs"
          options={{
            drawerLabel: "Tabs",
            title: "Tabs",
            drawerIcon: () => (
              <Ionicons name="albums-outline" size={18} color="#3a98ff" />
            ),
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "Lista",
            title: "Lista",
            drawerIcon: () => (
              <Ionicons name="list-circle-outline" size={18} color="#3a98ff" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};
export default RootLayout;
