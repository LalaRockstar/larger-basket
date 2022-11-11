import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import ScreenImg1 from "../assets/images/namskar.jpg";
import ButtonOne from "../shared/minor/ButtonOne";
import Gap from "../shared/minor/Gap";
// import ScreenImg1 from "../assets/images/screen1.jpg";
const { width } = Dimensions.get("window");
// const windowHeight = Dimensions.get("window").height;
const StarterOne = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={ScreenImg1} style={styles.image} />
      <Gap height={10} />
      <View style={styles.WrapperText}>
        <Text style={styles.textOne}>Welcome to NALBARI</Text>
        <Text style={styles.textTwo}>Explore Nalbari with us</Text>
        <Gap height={20} />
        <ButtonOne
          pressOn={() => navigation.navigate("StarterTwo")}
          name="Skip"
        />
      </View>
    </View>
  );
};
export default StarterOne;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // height: windowHeight,
    // width: windowWidth,

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "40%",
    width: width - 30,
    resizeMode: "stretch",
  },
  WrapperText: {},
  textOne: {
    fontSize: 30,
    color: "#00AAF8",
    textAlign: "center",
    fontWeight: "bold",
  },
  textTwo: {
    fontSize: 20,
    color: "#87DCF0",
    fontWeight: "bold",
    textAlign: "center",
  },
});
