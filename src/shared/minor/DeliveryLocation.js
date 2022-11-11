import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DeliveryLocation = () => {
  return (
    <View>
      <View style={styles.deliveryLocation}>
        <Text style={{ color: "white" ,fontWeight:"bold"}}>Nalbari, Hari Mandir</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  deliveryLocation: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
});

export default DeliveryLocation;
