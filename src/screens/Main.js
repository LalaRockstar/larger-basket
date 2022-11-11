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
import DeliveryLocation from "../shared/minor/DeliveryLocation";
import Search from "../shared/minor/Search";

let { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const Main = ({ navigation }) => {
  const isDarkMode = useColorScheme() === "dark";
  const dataTopProducts = [
    {
      name: "Grapes",
      icon: IL_Grapes_PNG,
      bgColor: "rgba(227,206,243,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Tometo",
      icon: IL_Tomato_PNG,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Drinks",
      icon: IL_Greentea_PNG,
      bgColor: "rgba(187, 208, 136, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Cauliflower",
      icon: IL_Cauliflawer_PNG,
      bgColor: "rgba(140, 250, 145,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Grapes",
      icon: IL_Grapes_PNG,
      bgColor: "rgba(227,206,243,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Tometo",
      icon: IL_Tomato_PNG,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Drinks",
      icon: IL_Greentea_PNG,
      bgColor: "rgba(187, 208, 136, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Cauliflower",
      icon: IL_Cauliflawer_PNG,
      bgColor: "rgba(140, 250, 145,0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.flex1}>
        {/* Header */}
        <Header drawer />
        {/* search */}
        <Search />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* location */}
          <DeliveryLocation />
          {/* banner */}
          <Banner />
          {/* categories */}
          <View>
            <Text style={styles.titleCategories}>Categories</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollViewCategories}
            >
              <CategoriesBox
                icon={<IC_Fruits />}
                color="rgba(169, 178, 169, 0.5)"
                text="Fruits"
                onPress={() => navigation.navigate("Category", "Fruits")}
                // onPress={() => navigation.navigate(demoNavigate)}
              />
              <CategoriesBox
                icon={<IC_Vegetables />}
                color="rgba(233, 255, 210, 0.5)"
                text="Vegetables"
                onPress={() => navigation.navigate("Category", "Vegetables")}
                // onPress={() => navigation.navigate(demoNavigate)}
              />
              <CategoriesBox
                icon={<IC_Drinks />}
                color="rgba(140, 175, 53, 0.5)"
                text="Drinks"
                onPress={() => navigation.navigate("Category", "Drinks")}
                // onPress={() => navigation.navigate(demoNavigate)}
              />
              <CategoriesBox
                icon={<IC_Bakery />}
                color="rgba(214, 255, 218, 0.5)"
                text="Bakery"
                onPress={() => navigation.navigate("Category", "Bakery")}
              />
              <CategoriesBox
                icon={<IC_Bakery2 />}
                color="rgba(255, 250, 204, 0.5)"
                text="Bakery"
                onPress={() => navigation.navigate("Category", "Bakery")}
              />
            </ScrollView>
          </View>
          <Gap height={24} />
          {/* top products */}
          <View>
            <View style={styles.wrapperHeadTopProducts}>
              <Text style={styles.tittleTopProducts}>Top Products</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionBoxTopProduct}>
              {dataTopProducts.map((item, index) => {
                return (
                  <TopProductsBox
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
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flex1: { flex: 1 },

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
});

export default Main;
