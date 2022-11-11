import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  Image,
} from "react-native";

import ScreenImg2 from "../assets/images/db.png";
import ButtonOne from "../shared/minor/ButtonOne";
import Gap from "../shared/minor/Gap";

//___Dimensions__//
const { width } = Dimensions.get("window");
// const windowHeight = Dimensions.get("window").height;
const StarterTwo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={ScreenImg2} style={styles.image} />
      <Gap height={20} />
      <View style={styles.WrapperText}>
        <Text style={styles.textOne}>PRIDE OF ASSAM</Text>
        <Text style={styles.textTwo}>Dimpu Boruah is from Nalbari</Text>
        <Gap height={20} />
        <ButtonOne pressOn={() => navigation.navigate("MainApp")} name="Skip" />
      </View>
    </View>
  );
};
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
  WrapperText: {
    marginTop: 30,
  },
  textOne: {
    fontSize: 30,
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
  },
  textTwo: {
    fontSize: 20,
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default StarterTwo;
