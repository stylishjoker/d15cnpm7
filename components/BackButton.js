import React from "react";
import { View, Button, StyleSheet } from "react-native";
const BackButton = (props) => {
  return (
    <View style = {style.container}>
      <Button title={props.title} onPress = {props.callback} color = {props.color}/>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    // flex:3,
    justifyContent: "flex-start",
    marginHorizontal: 16,
    backgroundColor: "white",
    width: "50%",
    alignSelf: "center",
    marginTop: 24,
  },
});
export default BackButton;
