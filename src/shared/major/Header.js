import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IC_Back, IC_Cart, IC_Drawer } from "../../assets/icons/index";

const Header = ({ drawer, back, cart, onPress }) => {
  if (drawer) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={onPress}>
          <IC_Drawer />
        </TouchableOpacity>
        <Text
          style={{
            color: "red",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          I ❤️ NALBARI
        </Text>
        <TouchableOpacity onPress={onPress}>
          {/* <IC_Cart /> */}
        </TouchableOpacity>
      </View>
    );
  }
  if (back && cart) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={onPress}>
          <IC_Back />
        </TouchableOpacity>
        <Text style={{ color: "red" }}>Logo</Text>
        <TouchableOpacity onPress={onPress}>
          {/* <IC_Cart /> */}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.wrapperHeader}>
      <TouchableOpacity onPress={onPress}>
        <IC_Back />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapperHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
