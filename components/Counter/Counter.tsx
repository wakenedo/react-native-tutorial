import { FC, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "../Button";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";

interface CounterProps {
  initialValue: number;
}
const Counter: FC<CounterProps> = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue ?? 0);
  return (
    <View style={styles.centralized}>
      <Text style={{ fontSize: 50 }}>{count}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button onPress={() => setCount(count + 1)}>
          <Ionicons name="add" size={25} color={"write"} />
        </Button>
        <Button onPress={() => setCount(count - 1)}>
          <Ionicons name="remove" size={25} color={"write"} />
        </Button>
      </View>
    </View>
  );
};
export default Counter;
