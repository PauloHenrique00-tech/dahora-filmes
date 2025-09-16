import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={100} />
    </View>
  );
}

const estilos = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});
