import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Title = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/favicon.png')}></Image>
      <Text style={styles.text}>{props.content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    // flex: 2,
    textAlign: "center",
    // backgroundColor: "red",
  },
  text: {
    lineHeight: 50,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "blue",
  },
});
export default Title;
