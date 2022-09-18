import React from "react";
import { View, StyleSheet, Text } from "react-native";
const BackButton = (props) => {
  return (
    <View style={style.container}>
      <Text
        style={[
          style.button,
          { backgroundColor: props.backgroundColor, color: props.color },
        ]}
        title={props.title}
        onPress={props.callback}
      >
        {props.title}
      </Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    // flex:3,
    justifyContent: "flex-start",
    marginHorizontal: 16,
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
  },
  button: {
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
});
export default BackButton;
