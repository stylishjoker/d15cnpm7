import React from "react";
import { View, SafeAreaView, TextInput, StyleSheet, Text, Alert } from "react-native";
// import{userState} from "react"
import BackButton from "../BackButton";
const Inputvalue = () => {
  const [account, setAccount] = React.useState("");
  const [password, setPassword] = React.useState("");

  const hanldeClick = ()=>{
    console.log({account : account,
        password:password,
    })  
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>account</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAccount}
          value={account}
          placeholder="Enter account"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter password"
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
        />
      </View>
      <View style={styles.container}>
        <BackButton title="Login" color="white" backgroundColor="red" callback = {hanldeClick}/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 40,
    margin: 12,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    padding: 10,
  },
  text: {
    marginBottom: 10,
    textTransform: "uppercase",
  },
});
export default Inputvalue;
