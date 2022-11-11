import React from "react";
import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IC_Search,
  IC_Vegetables,
} from "../assets/icons/index";
import {
  IL_Cauliflawer_PNG,
  IL_Grapes_PNG,
  IL_Greentea_PNG,
  IL_Tomato_PNG,
} from "../assets/illustrations/index";
import { colors } from "../assets/colors/index";
import Header from "../shared/major/Header";
import CategoriesBox from "../shared/major/CategoriesBox";
import Gap from "../shared/minor/Gap";
import TopProductsBox from "../shared/major/TopProductsBox";
import Banner from "../shared/major/Banner";
import Search from "../shared/minor/Search";
import DeliveryLocation from "../shared/minor/DeliveryLocation";
import ProductList from "../shared/major/ProductList";
import BtnBottom from "../shared/minor/BtnBottom";

let { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const Order = ({ navigation }) => {
  const isDarkMode = useColorScheme() === "dark";
  
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>Activity</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  flex1: { flex: 1 },

  scrollViewCategories: {
    paddingLeft: 20,
  },
  wrapperHeadTopProducts: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tittleTopProducts: {
    color: colors.primary,
    //   fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  textSeeAll: {
    color: colors.black,
    //   fontFamily: fonts.Medium,
    fontSize: 12,
  },
  sectionBoxTopProduct: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  titleHeading: {
    fontSize: 18,
    //   fontFamily: fonts.SemiBold,
    color: "black",
    padding: 5,
  },
  priceDetails: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    borderBottomColor: "red",
    marginHorizontal: 20,
  },
});

export default Order;
