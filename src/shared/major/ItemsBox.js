import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../assets/colors/index";

const ItemsBox = ({ image, name, price, bgColor }) => {
  return (
    <TouchableOpacity style={styles.container(bgColor)}>
      <View style={styles.wrapperImage}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.wrapperDetail}>
        <View style={styles.rowDetail}>
          <Text>{name}</Text>
          <Text style={styles.textPrice}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemsBox;

const styles = StyleSheet.create({
  container: (bgColor) => ({
    height: 100,
    width: 70,
    backgroundColor: bgColor,
    borderRadius: 12,
    padding: 5,
    marginRight: 15,
  }),
  wrapperImage: { justifyContent: "center", alignItems: "center", flex: 1 },
  image: { height: 30, width: 20, resizeMode: "contain" },
  wrapperDetail: { justifyContent: "flex-end" },
  rowDetail: {
    backgroundColor: colors.white,
    height: 25,
    width: "100%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  textPrice: { fontSize: 12 },
});
