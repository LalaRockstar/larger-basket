import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
const ButtonOne = ({ pressOn, name }) => {
  return (
    <TouchableOpacity
      title="Go to Screen2"
      onPress={pressOn}
      style={styles.button}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    backgroundColor: "lightgreen",
    textAlign: "center",

    alignSelf: "center",
    minWidth: "40%",

    minHeight: "9%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
export default ButtonOne;
