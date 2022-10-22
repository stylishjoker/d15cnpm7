import { TextInput, View, StyleSheet } from "react-native";

const HomePanes = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nhap product"></TextInput>
      <Text>ADD</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
});
export default HomePanes;
