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
 
  return (
    <Card containerStyle={styles.card}>
      <ImageBackground
        source={AppImages.mainBack}
        style={styles.imgBg}
        borderRadius={10}
        resizeMode='stretch'
      >
        <View style={styles.imgView}>
          <Image source={AppImages.heartInActive} style={styles.ImageStyle} />
          <Text >10.5k</Text>
        </View>
        <View style={styles.avatarView}>
          <Avatar rounded source={AppImages.heartActive} size='large' />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.companyName}>company name</Text>
          <Text style={styles.text}>description fsfks sdfhsf sdfsf kfsjf </Text>
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
    height: 250,
    width: "100%",
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderColor: "#fff",
    position: "relative",
  },
  imgBg: { height: "100%", width: '100%'},
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
  imgView: { alignItems: "flex-end" ,paddingEnd:10},
  avatarView: { justifyContent: "center", alignItems: "center", padding: 10 },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    alignContent: "center",
    padding: 10,
  },
  text: {
    color: "#ababab",
    fontSize: 14,
    textTransform: "capitalize",
    overflow: "hidden",
  },

  companyName: {
    fontSize: 16,

    overflow: "hidden",
  },
});
