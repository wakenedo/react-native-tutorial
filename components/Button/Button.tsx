import styles from "@/constants/styles";
import { FC } from "react";
import { Pressable } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, styles.button]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};
export default Button;
