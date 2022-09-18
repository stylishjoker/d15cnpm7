import React from "react";
import { View, SafeAreaView, TextInput, StyleSheet, Text, Alert } from "react-native";
// import{userState} from "react"
import BackButton from "../BackButton";
const Inputvalue = (props) => {
  const [input, setInput] = React.useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>{props.name}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setInput}
          value={input}
          placeholder={props.placeholder}
          returnKeyType="go"
          secureTextEntry = {props.type}
          autoCorrect={props.autoCorrect}
        />
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
    borderRadius:25,
  },
  text: {
    marginBottom: 10,
    textTransform: "uppercase",
  },
});
export default Inputvalue;
