import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, fonts } from "../../assets/colors/index";

const { width } = Dimensions.get("window");
const BtnBottom = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BtnBottom;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    // backgroundColor: "lightgreen",
    height: 50,
    width: width / 2 - 5,
    borderRadius: 10,
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    // fontFamily: fonts.Medium,
    color: "red",
    textAlign: "center",
  },
});
