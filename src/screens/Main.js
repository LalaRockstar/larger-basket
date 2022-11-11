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
import Hari from '../assets/images/hari.png'
import Belsor from '../assets/images/belsor.png'
import Pranita from '../assets/images/pranita.png'
import Balilecha from '../assets/images/balilecha.png'
import Ganga from '../assets/images/ganga.png'
import Mnc from '../assets/images/mnc.png'


let { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const Main = ({ navigation }) => {
  const isDarkMode = useColorScheme() === "dark";
  const dataTopProducts = [
    {
      name: "Shri Hari Mandir",
      icon: Hari,
      bgColor: "rgba(227,206,243,0.5)",
      category: "Temple",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Belsor Dewaloi",
      icon: Belsor,
      bgColor: "rgba(255, 234, 232, 0.5)",
      category: "Temple",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Pranita",
      icon: Pranita,
      bgColor: "rgba(187, 208, 136, 0.5)",
      category: "Restaurant",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Balilecha",
      icon: Balilecha,
      bgColor: "rgba(140, 250, 145,0.5)",
      category: "Temple",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Ganga & Jammuna",
      icon: Ganga,
      bgColor: "rgba(227,206,243,0.5)",
      category: "Resort",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "MNC",
      icon: Mnc,
      bgColor: "rgba(255, 234, 232, 0.5)",
      category: "College",
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
                icon={<Temple />}
                color="rgba(169, 178, 169, 0.5)"
                text="Temple"
                onPress={() => navigation.navigate("Category", "Temples")}
                // onPress={() => navigation.navigate(demoNavigate)}
              />
              <CategoriesBox
                icon={<Restaurant />}
                color="rgba(233, 255, 210, 0.5)"
                text="Restaurant"
                onPress={() => navigation.navigate("Category", "Restaurants")}
                // onPress={() => navigation.navigate(demoNavigate)}
              />
              <CategoriesBox
                icon={<Resort />}
                color="rgba(140, 175, 53, 0.5)"
                text="Resort"
                onPress={() => navigation.navigate("Category", "Resorts")}
                // onPress={() => navigation.navigate(demoNavigate)}
              />
              <CategoriesBox
                icon={<Hotel />}
                color="rgba(214, 255, 218, 0.5)"
                text="Hotel"
                onPress={() => navigation.navigate("Category", "Hotels")}
              />
              <CategoriesBox
                icon={<College />}
                color="rgba(255, 250, 204, 0.5)"
                text="College"
                onPress={() => navigation.navigate("Category", "Colleges")}
              />
              <CategoriesBox
                icon={<School />}
                color="rgba(255, 250, 204, 0.5)"
                text="School"
                onPress={() => navigation.navigate("Category", "Schools")}
              />
            </ScrollView>
          </View>
          <Gap height={24} />
          {/* top products */}
          <View>
            <View style={styles.wrapperHeadTopProducts}>
              <Text style={styles.tittleTopProducts}>Top Visted</Text>
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
                    category={item.category}
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
