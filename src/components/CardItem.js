import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { Image, Card, Text, Avatar } from "react-native-elements";
import AppImages from "../theme/AppImages";

const CardItem = (props) => {
  const { item } = props;
  console.log("item in card", item);
  return (
    <Card containerStyle={styles.card}>
      <ImageBackground
        // source={item && item.image ? { uri: item.image } : AppImages.mainBack}
        source={{ uri: item && item.image }}
        style={styles.imgBg}
        borderRadius={10}
        resizeMode='stretch'
      >
        <View style={styles.imgView}>
          <Image source={AppImages.heartInActive} style={styles.ImageStyle} />
          <Text>10.5k</Text>
        </View>
        {/* <View style={styles.avatarView}>
          <Avatar rounded source={AppImages.heartActive} size='large' />
        </View> */}
        <View style={styles.textContainer}>
          <Text style={styles.companyName}>{item && item.name}</Text>
          <Text style={styles.text}>{item && item.description} </Text>
        </View>
      </ImageBackground>
    </Card>
  );
};
export default CardItem;

const styles = StyleSheet.create({
  card: {
    padding: -5,
    marginLeft: 0,
    height: 280,
    width: "100%",
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderColor: "#fff",
    position: "relative",
    opacity:0.8
  },
  imgBg: { height: "100%", width: "100%" },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
  imgView: { alignItems: "flex-end", paddingEnd: 10 },
  avatarView: { justifyContent: "center", alignItems: "center", padding: 10 },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    alignContent: "center",
    padding: 10,
  },
  text: {
    color: "#fff",
    fontSize: 12,
    textTransform: "capitalize",
    fontFamily:'OpenSans-Regular',
    overflow: "hidden",
  },

  companyName: {
    fontSize: 16,
    color: "#fff",
    fontFamily:'OpenSans-Bold',
    overflow: "hidden",
  },
});
