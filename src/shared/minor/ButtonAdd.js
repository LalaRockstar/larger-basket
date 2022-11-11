import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fonts } from "../../assets/colors/index";

const ButtonAdd = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAdd;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: 259,
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    // fontFamily: fonts.Medium,
    color: colors.white,
    textAlign: "center",
  },
});
