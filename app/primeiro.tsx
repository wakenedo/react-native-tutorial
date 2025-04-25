import { Item } from "@/components/Item";
import styles from "@/constants/styles";
import { Text, View } from "react-native";

const primeiro = () => {
  return (
    <View style={styles.centralized}>
      <Text>Primeira aula do professor Mário.</Text>
      <Item
        text1="Primeiro text"
        text2="Segundo text"
        path="https://placehold.co/600x400/png?text=Primeira+Imagem"
      />
    </View>
  );
};
export default primeiro;
