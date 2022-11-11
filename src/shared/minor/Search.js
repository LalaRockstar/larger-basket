import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IC_Search,
  IC_Vegetables,
} from "../../assets/icons/index";

import { colors } from "../../assets/colors/index";
const Search = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={styles.wrapperSearch}>
        <TextInput placeholder="Search" style={styles.textInputSearch} />
        <IC_Search />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
});

export default Search;
