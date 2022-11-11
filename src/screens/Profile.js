import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const Profile = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: width / 2,
          backgroundColor: "lightblue",
        }}
      >
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: "white",
            marginTop: 30,
            borderWidth: 2,
          }}
        ></View>
        <View>
          <Text style={{ fontSize: 20 }}>Raj Singh</Text>
        </View>
      </View>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
      >
        <Text style={{ fontSize: 20 }}>COMMING SOON</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
