import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CategoriesBox from "./CategoriesBox";
import {
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IC_Search,
  IC_Vegetables,
} from "../../assets/icons/index";
const CategoryRender = ({ onPress }) => {
  return (
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
  );
};
const styles=StyleSheet.create({
    scrollViewCategories: {
        paddingLeft: 20,
      },
})

export default CategoryRender;
