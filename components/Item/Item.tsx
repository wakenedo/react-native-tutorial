import styles from "@/constants/styles";
import { FC } from "react";
import { View, Text, Image } from "react-native";
export interface ItemProps {
  text1: string;
  text2: string;
  path: string;
}
const Item: FC<ItemProps> = ({ text1, text2, path }) => {
  return (
    <View style={styles.centralized}>
      <Text style={styles.first}>{text1}</Text>
      <Text style={styles.second}>{text2}</Text>
      <Image source={{ uri: path }} style={styles.remoteImage} />
    </View>
  );
};

export default Item;
