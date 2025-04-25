import { Counter } from "@/components/Counter";
import styles from "@/constants/styles";
import { View } from "react-native";

const Contador = () => {
  return (
    <View style={styles.centralized}>
      <Counter initialValue={100} />
    </View>
  );
};
export default Contador;
