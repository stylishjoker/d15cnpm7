import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, SafeAreaView, TextInput, StyleSheet, Text } from "react-native";
const Stack = createNativeStackNavigator();
const ForgotPassword = () => {
  const [account, setAccount] = useState("");
  const handleClick = () => {};
  function MainScreen() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAccount}
            value={account}
            placeholder="Số điện thoại"
            returnKeyType="go"
            secureTextEntry="false"
            autoCorrect="true"
          />
        </View>
        <View style={styles.container_button}>
          <Text
            style={[styles.button, { backgroundColor: "red", color: "white" }]}
            title="Tìm kiếm"
            onPress={handleClick}
          >
            Tìm kiếm
          </Text>
        </View>
      </View>
    );
  }
  return (
    <Stack.Navigator initialRouteName="HomeForgotPassword">
      <Stack.Screen
        name="HomeForgotPassword"
        options={{ headerShown: false }}
        component={MainScreen}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    // height: 40,
    margin: 12,
    // marginTop: 40,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
  },
  text: {
    marginBottom: 10,
    textTransform: "uppercase",
  },
  container_button: {
    justifyContent: "flex-start",
    marginHorizontal: 16,
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
  },
  button: {
    // padding: "100%",
    // backgroundColor: "red",
    width: "100%",
    borderRadius: 24,
    overflow: "hidden",
    textAlign: "center",
    height: 40,
    display: "flex",
    lineHeight: 40,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
  },
  spacer: {
    height: 80,
  },
});
export default ForgotPassword;
