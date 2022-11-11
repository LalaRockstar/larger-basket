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
  Image,
} from "react-native";
import {
  School,
  College,
  Hospital,
  Resort,
  Restaurant,
  Temple,
  Hotel,
  Harimandir
} from "../assets/icons/index";
import {
  fonts,
  IL_Brinjal,
  IL_Brokoli,
  IL_Cauliflawer_PNG,
  IL_Pumpkin,
  IL_RedOnion,
  IL_Tomato_PNG,
} from "../assets/illustrations/index";

import { colors } from "../assets/colors/index";
import Header from "../shared/major/Header";
import CategoriesBox from "../shared/major/CategoriesBox";
import Gap from "../shared/minor/Gap";
import TopProductsBox from "../shared/major/TopProductsBox";
import Banner from "../shared/major/Banner";
import ProductList from "../shared/major/ProductList";
import CategoryRender from "../shared/major/CategoryRender";
import DeliveryLocation from "../shared/minor/DeliveryLocation";
import Search from "../shared/minor/Search";

let { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
import Hari from '../assets/images/hari.png'
import Belsor from '../assets/images/belsor.png'
import Pranita from '../assets/images/pranita.png'
import Balilecha from '../assets/images/balilecha.png'
import Ganga from '../assets/images/ganga.png'
import Mnc from '../assets/images/mnc.png'
const Main = ({ route, navigation }) => {
  const isDarkMode = useColorScheme() === "dark";
  const dataTemples = [
    {
      name: "Hari Mandir",
      icon: Hari,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Belsor",
      icon: Belsor,
      bgColor: "rgba(255, 244, 143, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Balilecha",
      icon: Balilecha,
      bgColor: "rgba(238, 224, 248, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
   
  ];
  const dataRestaurats = [
    {
      name: "Pranita",
      icon: Pranita,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Old Steet Cafe",
      icon: Pranita,
      bgColor: "rgba(255, 244, 143, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Jakoi",
      icon: Pranita,
      bgColor: "rgba(238, 224, 248, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
   
  ];
  const dataHotels = [
    {
      name: "Hotel Grand",
      icon: Hotel,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Belsor",
      icon: Belsor,
      bgColor: "rgba(255, 244, 143, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Balilecha",
      icon: Balilecha,
      bgColor: "rgba(238, 224, 248, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
   
  ];
  const dataResorts = [
    {
      name: "Hari Mandir",
      icon: Hari,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Belsor",
      icon: Belsor,
      bgColor: "rgba(255, 244, 143, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Balilecha",
      icon: Balilecha,
      bgColor: "rgba(238, 224, 248, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
   
  ];
  const dataColleges = [
    {
      name: "Hari Mandir",
      icon: Hari,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Belsor",
      icon: Belsor,
      bgColor: "rgba(255, 244, 143, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Balilecha",
      icon: Balilecha,
      bgColor: "rgba(238, 224, 248, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
   
  ];
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.flex1}>
        {/* Header */}
        <Header back cart onPress={() => navigation.goBack()} />
        {/* search */}
        <Search />
        <ScrollView showsVerticalScrollIndicator={false}>
          <DeliveryLocation />

          {/* categories */}
          <View>
            {/* <Text style={styles.titleCategories}>Categories</Text> */}
            <Gap height={20} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollViewCategories}
            >
              <CategoriesBox
                icon={<Temple/>}
                color="rgba(169, 178, 169, 0.5)"
                text="Temple"
                onPress={() => navigation.navigate("Category", "Temples")}
                // onPress={() => navigation.navigate(demoNavigate)}
              />
              <CategoriesBox
                icon={<Restaurant />}
                color="rgba(233, 255, 210, 0.5)"
                text="Restaurants"
                onPress={() => navigation.navigate("Category", "Restaurants")}
                // onPress={() => navigation.navigate(demoNavigate)}
              />
              <CategoriesBox
                icon={<Hotel />}
                color="rgba(140, 175, 53, 0.5)"
                text="Hotels"
                onPress={() => navigation.navigate("Category", "Hotels")}
                // onPress={() => navigation.navigate(demoNavigate)}
              />
              <CategoriesBox
                icon={<Resort />}
                color="rgba(214, 255, 218, 0.5)"
                text="Resorts"
                onPress={() => navigation.navigate("Category", "Resorts")}
              />
              <CategoriesBox
                icon={<College/>}
                color="rgba(255, 250, 204, 0.5)"
                text="College"
                onPress={() => navigation.navigate("Category", "College")}
              />
            </ScrollView>
          </View>
          <Gap height={24} />
          {/* top products */}
          <View style={styles.wrapperTittle}>
            <Text style={styles.tittle}>{route.params}</Text>
          </View>
          <Gap height={10} />
          {/* Content */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.sectionBoxTopProduct}>
              {route.params==="Temples" && dataTemples.map((item, index) => {
                return (
                  <ProductList
                    key={index}
                    bgColor={item.bgColor}
                    icon={item.icon}
                    text={item.name}
                    price={item.price}
                    onPress={() => navigation.navigate("Detail", item)}
                  />
                );
              })}
              {route.params==="Restaurants" && dataRestaurats.map((item, index) => {
                return (
                  <ProductList
                    key={index}
                    bgColor={item.bgColor}
                    icon={item.icon}
                    text={item.name}
                    price={item.price}
                    onPress={() => navigation.navigate("Detail", item)}
                  />
                );
              })}
              {route.params==="Hotels" && dataHotels.map((item, index) => {
                return (
                  <ProductList
                    key={index}
                    bgColor={item.bgColor}
                    icon={item.icon}
                    text={item.name}
                    price={item.price}
                    onPress={() => navigation.navigate("Detail", item)}
                  />
                );
              })}
              {route.params==="Resorts" && dataResorts.map((item, index) => {
                return (
                  <ProductList
                    key={index}
                    bgColor={item.bgColor}
                    icon={item.icon}
                    text={item.name}
                    price={item.price}
                    onPress={() => navigation.navigate("Detail", item)}
                  />
                );
              })}
              {route.params==="College" && dataColleges.map((item, index) => {
                return (
                  <ProductList
                    key={index}
                    bgColor={item.bgColor}
                    icon={item.icon}
                    text={item.name}
                    price={item.price}
                    onPress={() => navigation.navigate("Detail", item)}
                  />
                );
              })}
            </View>
          </ScrollView>
          <Gap height={20} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flex1: { flex: 1 },
  wrapperSearch: {
    height: 35,
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 5,
  },

  titleCategories: {
    fontSize: 18,
    //   fontFamily: fonts.SemiBold,
    color: colors.primary,
    padding: 20,
  },
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
    width: width,
  },
  wrapperTittle: {
    paddingHorizontal: 20,
  },
  tittle: {
    fontSize: 20,
    // fontFamily: fonts.SemiBold,
    color: colors.primary,
  },
  sectionBoxTopProduct: {
    flex1: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default Main;

