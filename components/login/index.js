import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ForgotPassword from "../forgotPassword";

const Login = () => {
  const Stack = createNativeStackNavigator();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [datas, setDatas] = useState("");
  useEffect(() => {
    // getData();
    fetch("http://localhost:3000/account-mobie")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const innerAccount = () => {
    Array.from(datas).forEach((data) => {
      setAccount(data.account);
      setPassword(data.password);
    });
  };
  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setAccount(user.account);
          setPassword(user.password);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const updateData = async () => {
    if (account.length == 0 || password.length) {
      Alert.alert("Warning!", "Please write your data.");
    } else {
      try {
        var user = {
          account,
          password,
        };
        await AsyncStorage.mergeItem("UserData", JSON.stringify(user));
        Alert.alert("Success!", "Your data has been updated.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const removeData = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     navigation.navigate("Login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleClick = () => {
    updateData();
    console.log(datas);
  };
  function ForgotPanes() {
    return <ForgotPassword />;
  }
  const LoginScreen = ({ navigation }) => {
    return (
      <SafeAreaView>
        <View style={styles.spacer}></View>
        <View style={styles.container}>
          <Text style={styles.text}>Tài khoản</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setAccount(e)}
            value={account}
            placeholder="Tài khoản"
            returnKeyType="go"
            secureTextEntry="false"
            autoCorrect="true"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setPassword(e)}
            value={password}
            placeholder="Mật khẩu"
            returnKeyType="go"
            secureTextEntry="true"
            autoCorrect="true"
          />
        </View>
        <View style={styles.container_button}>
          <Text
            style={[styles.button, { backgroundColor: "red", color: "white" }]}
            title="Đăng nhập"
            onPress={handleClick}
          >
            Đăng nhập
          </Text>
        </View>
        <View style={styles.container_button}>
          <Text
            onPress={() => navigation.navigate("ForgotPassword")}
            style={{ textAlign: "center", fontWeight: "700" }}
          >
            Forgot password ?
          </Text>
        </View>
      </SafeAreaView>
    );
  };
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{ headerShown: false }}
        component={ForgotPanes}
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
export default Login;
