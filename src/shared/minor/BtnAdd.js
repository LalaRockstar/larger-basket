import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { colors, fonts } from "../../assets/colors/index";

const { width } = Dimensions.get("window");
const BtnAdd = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BtnAdd;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: width / 10,
    width: width / 5,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    fontSize: 12,
    // fontFamily: fonts.Medium,
    color: colors.white,
    textAlign: "center",
  },
});
