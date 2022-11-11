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
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IC_Search,
  IC_Vegetables,
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
// import {
//   IL_Cauliflawer_PNG,
//   IL_Grapes_PNG,
//   IL_Greentea_PNG,
//   IL_Tomato_PNG,
// } from "../assets/illustrations/index";
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

const Main = ({ route, navigation }) => {
  const isDarkMode = useColorScheme() === "dark";
  const dataCategories = [
    {
      name: "Tometo",
      icon: IL_Tomato_PNG,
      bgColor: "rgba(255, 234, 232, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Pumpkin",
      icon: IL_Pumpkin,
      bgColor: "rgba(255, 244, 143, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Brinjal",
      icon: IL_Brinjal,
      bgColor: "rgba(238, 224, 248, 0.5)",
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
      name: "Red Onion",
      icon: IL_RedOnion,
      bgColor: "rgba(251, 216, 224, 0.5)",
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Brokoli",
      icon: IL_Brokoli,
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
          <View style={styles.wrapperTittle}>
            <Text style={styles.tittle}>{route.params}</Text>
          </View>
          <Gap height={10} />
          {/* Content */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.sectionBoxTopProduct}>
              {dataCategories.map((item, index) => {
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

// import React from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from "react-native";

// import Gap from "../shared/minor/Gap";
// import Header from "../shared/major/Header";
// import { colors } from "../assets/colors/index";
// import {
//   fonts,
//   IL_Brinjal,
//   IL_Brokoli,
//   IL_Cauliflawer_PNG,
//   IL_Pumpkin,
//   IL_RedOnion,
//   IL_Tomato_PNG,
// } from "../assets/illustrations/index";
// import ItemsBox from "../shared/major/ItemsBox";

// const Categories = ({ route, navigation }) => {
//   const isDarkMode = useColorScheme() === "dark";
// const dataCategories = [
//   {
//     name: "Tometo",
//     icon: IL_Tomato_PNG,
//     bgColor: "rgba(255, 234, 232, 0.5)",
//     price: 1.53,
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     name: "Pumpkin",
//     icon: IL_Pumpkin,
//     bgColor: "rgba(255, 244, 143, 0.5)",
//     price: 1.53,
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     name: "Brinjal",
//     icon: IL_Brinjal,
//     bgColor: "rgba(238, 224, 248, 0.5)",
//     price: 1.53,
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     name: "Cauliflower",
//     icon: IL_Cauliflawer_PNG,
//     bgColor: "rgba(140, 250, 145,0.5)",
//     price: 1.53,
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     name: "Red Onion",
//     icon: IL_RedOnion,
//     bgColor: "rgba(251, 216, 224, 0.5)",
//     price: 1.53,
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     name: "Brokoli",
//     icon: IL_Brokoli,
//     bgColor: "rgba(140, 250, 145,0.5)",
//     price: 1.53,
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
// ];

//   return (
//     <SafeAreaView style={styles.flex1}>
//       <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
//       <View style={styles.flex1}>
//         {/* header */}
//         <Header back cart onPress={() => navigation.goBack()} />
//         <View style={styles.wrapperTittle}>
//           <Text style={styles.tittle}>{route.params}</Text>
//         </View>
//         <Gap height={10} />
//         {/* Content */}
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <View style={styles.sectionBoxTopProduct}>
//             {dataCategories.map((item, index) => {
//               return (
//                 <ItemsBox
//                   key={index}
//                   bgColor={item.bgColor}
//                   icon={item.icon}
//                   text={item.name}
//                   price={item.price}
//                   onPress={() => navigation.navigate("Detail", item)}
//                 />
//               );
//             })}
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Categories;

// const styles = StyleSheet.create({
//   flex1: {
//     flex: 1,
//   },
//   wrapperTittle: {
//     paddingHorizontal: 20,
//   },
//   tittle: {
//     fontSize: 20,
//     // fontFamily: fonts.SemiBold,
//     color: colors.primary,
//   },
//   sectionBoxTopProduct: {
//     flex1: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
// });
