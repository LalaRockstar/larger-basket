import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import Gap from "../minor/Gap";
import { IC_Love } from "../../assets/icons/index";

const { width } = Dimensions.get("window");
const TopProductsBox = ({ bgColor, icon, text, category, onPress }) => {
  return (
    <TouchableOpacity style={styles.container(bgColor)} onPress={onPress}>
      <View style={{ top: -40 }}>
        <View>
          <Image source={icon} style={styles.image} />
          <Gap height={30} />
          <Text style={styles.text}>{text}</Text>
        </View>
        <Gap height={10} />
        <View style={styles.category}>
          <Text style={styles.wrapperButtom}>{category}</Text>
          <TouchableOpacity>
            <IC_Love />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TopProductsBox;

const styles = StyleSheet.create({
  container: (bgColor) => ({
    height: 140,
    width: width / 2 - 20,
    backgroundColor: bgColor,
    borderRadius: 12,
    marginHorizontal: 8,
    marginVertical: 30,
  }),
  text: {
    paddingLeft: 10,
    fontSize: 17,
    // fontFamily: fonts.Medium,
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  wrapperButtom: {
    fontSize: 16,
    color:"blue",
    fontWeight:"bold"
    // fontFamily: fonts.Medium,
  },
  image: {
    height: 80,
    width: 110,
    resizeMode: "contain",
    marginLeft: 15,
  },
});
