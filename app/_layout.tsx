import { View, Text } from "react-native";
import Loading from "../src/components/Loading";
import { useFonts } from "expo-font";

export default function Layout() {
  const [fonteCarregada] = useFonts({
    Monoton: require("../assets/fonts/Monoton-Regular.ttf"),
  });

  if (!fonteCarregada) {
    return <Loading />;
  }
  return (
    <View>
      <Text>_layout</Text>
    </View>
  );
}
