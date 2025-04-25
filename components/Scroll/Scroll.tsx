import { Item } from "@/components/Item";
import { ScrollView } from "react-native";

const Scroll = () => {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", paddingVertical: 10 }}
    >
      <Item
        text1="Titulo 1"
        text2="Subtitulo 1"
        path="https://placehold.co/600x400/png?text=Primeira+Imagem"
      />
      <Item
        text1="Titulo 2"
        text2="Subtitulo 2"
        path="https://placehold.co/600x400/png?text=Segunda+Imagem"
      />
      <Item
        text1="Titulo 3"
        text2="SUbtitulo 3"
        path="https://placehold.co/600x400/png?text=Terceira+Imagem"
      />
      <Item
        text1="Titulo 4"
        text2="Subtitulo 4"
        path="https://placehold.co/600x400/png?text=Quarta+Imagem"
      />
    </ScrollView>
  );
};
export default Scroll;
