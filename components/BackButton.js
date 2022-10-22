import React from "react";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Button,
  Touchable,
} from "react-native";
const BackButton = (props) => {
  return (
    <View style={[style.container, { backgroundColor: props.backgroundColor }]}>
      <Button
        title={props.title}
        onPress={props.callback}
        color={props.color}
        style={style.button}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: "50%",
    alignSelf: "center",
    borderRadius: 24,
    marginTop: 10,
  },
  button: {
    textTransform: "uppercase",
    height: 50,
  },
});
export default BackButton;
