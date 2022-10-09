import { View, SafeAreaView, TextInput, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = () => {
  const Stack = createNativeStackNavigator();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // useEffect(() => {
  //   fetch();
  // }, []);
  const handleClick = () => {};
  function HomeScreen({ navigation }) {
    return (
      <SafeAreaView>
        <View style={styles.spacer}></View>
        <View style={styles.container}>
          <Text style={styles.text}>Tài khoản</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAccount}
            value={account}
            placeholder="Tài khoản"
            returnKeyType="go"
            secureTextEntry="false"
            autoCorrect="true"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
            placeholder="Số điện thoại"
            returnKeyType="go"
            secureTextEntry="false"
            autoCorrect="true"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            returnKeyType="go"
            secureTextEntry="false"
            autoCorrect="true"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Mật khẩu"
            returnKeyType="go"
            secureTextEntry="true"
            autoCorrect="true"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Nhập lại mật khẩu</Text>
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Mật khẩu"
            returnKeyType="go"
            secureTextEntry="true"
            autoCorrect="true"
          />
        </View>
        <View style={styles.container_button}>
          <Text
            style={[styles.button, { backgroundColor: "red" }]}
            title="Đăng ký"
            onPress={handleClick}
          >
            Đăng ký
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Stack.Navigator initialRouteName="HomeRegister">
      <Stack.Screen
        name="HomeRegister"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 12,
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
    color: "white",
  },
  spacer: {
    height: 80,
  },
});
export default Register;
