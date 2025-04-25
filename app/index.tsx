import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { Button } from "@/components/Button";

const Index = () => {
  const nav = useNavigation();

  return (
    <View style={[styles.centralized, { gap: 10 }]}>
      <Ionicons name="logo-react" size={100} />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: 700 }}>
          Aulas de ReactNative
        </Text>
        <Text style={{ fontSize: 16 }}> Professor Mário de Jesus </Text>
        <Button onPress={() => nav.dispatch(DrawerActions.openDrawer)}>
          <Text style={{ color: "#fff" }}>Exercícios</Text>
        </Button>
      </View>
    </View>
  );
};
export default Index;
