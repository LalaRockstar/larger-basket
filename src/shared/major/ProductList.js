import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";

import { colors } from "../../assets/colors/index";
import BtnAdd from "../minor/BtnAdd";
import Counter from "./Couner";

const { width } = Dimensions.get("window");
const ProductList = ({ icon, text, price, bgColor }) => {
  const [totalItem, setTotalItem] = useState(1);
  const onCounterChange = (value) => {
    setTotalItem(value);
  };
  return (
    <TouchableOpacity style={styles.container(bgColor)}>
      <View style={styles.wrapperImage}>
        <Image source={icon} style={styles.image} />
      </View>
      <View style={styles.wrapperDetail}>
        <View style={styles.rowDetail}>
          <Text style={{ fontSize: 15 }}>{text}</Text>

          <Text style={styles.textPrice}>Rs:{price}/-</Text>
        </View>
        <View style={{ alignSelf: "flex-end", marginBottom: 5 }}>
          <Counter onValueChange={onCounterChange} />
        </View>
        <View style={{ flexDirection: "column", alignSelf: "flex-end" }}>
          <BtnAdd text="ADD" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
const styles = StyleSheet.create({
  container: (bgColor) => ({
    height: width / 3,
    width: width - 20,
    backgroundColor: bgColor,
    borderRadius: 12,
    padding: 10,
    marginTop: 20,
    flexDirection: "row",
  }),
  //   wrapperImage: { justifyContent: "center", alignItems: "center", flex: 1 },
  image: { height: width / 4, width: width / 3, resizeMode: "contain" },
  wrapperDetail: {
    flex: 1,
    justifyContent: "space-between",
  },
  //   rowDetail: {
  //     backgroundColor: colors.white,
  //     height: 25,
  //     width: "100%",
  //     borderRadius: 20,
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     paddingHorizontal: 10,
  //     alignItems: "center",
  //   },
  textPrice: { fontSize: 15, color: "blue" },
});
