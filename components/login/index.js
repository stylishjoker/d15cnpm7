import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  Alert,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ForgotPassword from "../forgotPassword";
import axios from "axios";
import HomePanes from "../Home";
const baseUrl = "https://catfact.ninja/fact";

const Login = () => {
  const Stack = createNativeStackNavigator();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [datas, setDatas] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      url: baseUrl,
      user: {},
    }).then((response) => {
      setDatas(response.data);
    });
    // getData();
  }, []);

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
  function displayHome() {
    return <HomePanes />;
  }
  const LoginScreen = ({ navigation }) => {
    return (
      <SafeAreaView>
        <View style={styles.spacer}></View>
        <View style={styles.container}>
          <Text style={styles.text}>T??i kho???n</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setAccount(e)}
            value={account}
            placeholder="T??i kho???n"
            returnKeyType="go"
            secureTextEntry="false"
            autoCorrect="true"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>M???t kh???u</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setPassword(e)}
            value={password}
            placeholder="M???t kh???u"
            returnKeyType="go"
            secureTextEntry="true"
            autoCorrect="true"
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate("HomePanes")}
          style={styles.container_button}
        >
          <Text
            style={[styles.button, { backgroundColor: "red", color: "white" }]}
            title="????ng nh???p"
          >
            ????ng nh???p
          </Text>
        </Pressable>
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
      <Stack.Screen
        name="HomePanes"
        options={{ headerShown: false }}
        component={displayHome}
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
