import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

import Swiper from "react-native-swiper";
import Gap from "../minor/Gap";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
const { width } = Dimensions.get("window");
const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    setBannerData([banner1, banner2]);
    return () => {
      setBannerData([]);
    };
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper autoplay={true} showsButtons={true} autoplayTimeout={3}>
            {bannerData.map((img) => {
              return (
                <Image
                  key={img}
                  resizeMode="contain"
                  source={img}
                  style={styles.imageBanner}
                />
              );
            })}
          </Swiper>
          <Gap height={20} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
    height: width / 2 - 20,

    alignItems: "center",
    justifyContent: "center",
  },
  imageBanner: {
    height: width / 2 - 30,
    width: width - 50,
    borderRadius: 10,
    marginHorizontal: 30,
  },
});

export default Banner;
