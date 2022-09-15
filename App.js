import React from "react";
import { useState } from "react";
import { ImageBackground, StyleSheet, Alert, View, Text,Button } from "react-native";
import Title from "./components/Title";
import BackButton from "./components/BackButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/login/index";
const App = () => {
  function HomeScreen({navigation}) {
    return (
      <ImageBackground
        source={require("./assets/background/Background001.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Title content = "Welcome to Style ITer"/>
          <BackButton
            title="Login"
            callback={() => navigation.navigate("Login")}
            color="red"
          />
          <BackButton
            title="Regist"
            callback={() => navigation.navigate("Details")}
            color = "#333"
          />
        </View>
      </ImageBackground>
    );
  }
  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  function PanelLogin() {
    return (
      <Login/>
    );
  }
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Login" component={PanelLogin} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
