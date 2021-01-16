import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AppImages from "../theme/AppImages";
import VideoPlayer from "react-native-video-player";
import AsyncStorage from "@react-native-async-storage/async-storage";
const deviceWidth = Dimensions.get("window").width;
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  async componentDidMount() {
  
    const token = await AsyncStorage.getItem("TOKEN");
    const id = await AsyncStorage.getItem("RECIPEID");
   
    const fullToken = `Bearer ${token}`;
    
    fetch("https://webapps.iqlance-demo.com/chef/public/api/recipeDetail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: fullToken,
      },
      body: JSON.stringify({
        recipesID: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response && response.data });
      })
      .catch((err) => {
        console.log("error", err);
      });
    // }
  }
  render() {
    const { data } = this.state;
    const recipes = data && data.recipes;
    const ingres = data && data.recipeIngredients;
    const steps = data && data.steps;
    return (
      <ImageBackground
        source={
          recipes && recipes.image ? { uri: recipes.image } : AppImages.mainBack
        }
        style={styles.imgBg}
        resizeMode='stretch'
      >
        <View style={styles.videoView}>
          <View style={styles.topRowView}>
            <Text>arrow</Text>
            <Text>share</Text>
          </View>
          {recipes && recipes.video !== "" && (
            <View style={styles.playerView}>
              <VideoPlayer
                video={{
                  uri: recipes.video,
                }}
                videoWidth={3000}
                videoHeight={1200}
                thumbnail={{
                  uri: "https://i.picsum.photos/id/866/1600/900.jpg",
                }}
              />
              {/* <Image source={AppImages.heartInActive} style={styles.ImageStyle} /> */}
            </View>
          )}
        </View>

        <View style={styles.detailView}>
          <View style={styles.imgView}>
            <Image source={AppImages.heartInActive} style={styles.ImageStyle} />
            <Text>{recipes && recipes.favStatus}</Text>
          </View>
          <View style={styles.serviceView}>
            <Text style={styles.txtService}>
              Searving {recipes && recipes.favorite_recipe}
            </Text>
          </View>
          <Text style={styles.txtCommon}>{recipes && recipes.name}</Text>
          <Text style={styles.txtCommon}>{recipes && recipes.description}</Text>
          {ingres && ingres.length > 0 && (
            <View>
              <View style={{ flexDirection: "row", margin: 5 }}>
                <Text>Ingredients </Text>
                <Text>({ingres && ingres.length})</Text>
              </View>
              <View style={styles.rowView}>
                {ingres &&
                  ingres.map((element, i) => {
                    return (
                      <View key={element.id}>
                        <View style={styles.tabView}>
                          <Text
                            style={styles.txtTab}
                            textBreakStrategy={"simple"}
                          >
                            {element && element.name}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
              </View>
            </View>
          )}
          {steps && steps.length > 0 && (
            <Text style={styles.txtCommon}>Steps</Text>
          )}
          <ScrollView>
            <View>
              {steps &&
                steps.map((item, i) => {
                  return (
                    <View style={styles.stepInnerView} key={item.id}>
                      <View style={styles.indexView}>
                        <Text>{item.stepID}</Text>
                      </View>
                      <View>
                        <Text>{item.title}</Text>
                        {item.image && (
                          <Image
                            source={{ uri: item && item.image }}
                            style={styles.ItemImageStyle}
                          />
                        )}
                      </View>
                    </View>
                  );
                })}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
export default Detail;
const styles = StyleSheet.create({
  imgBg: { height: "100%", width: "100%" },
  videoView: {
    flex: 0.8,
  },
  txtCommon: {
    fontSize: 14,

    padding: 5,
  },
  topRowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  playerView: { justifyContent: "center", flex: 1, alignItems: "center" },
  detailView: {
    flex: 3,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
  },
  imgView: { alignItems: "flex-end", paddingEnd: 10, marginTop: -30 },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 35,
    width: 35,
    resizeMode: "stretch",
    alignItems: "center",
  },
  ItemImageStyle: {
    padding: 10,
    margin: 5,
    height: 100,
    width: 200,
    resizeMode: "stretch",
    alignItems: "center",
  },
  serviceView: { justifyContent: "flex-start", alignItems: "flex-start" },
  txtService: {
    backgroundColor: "gray",
    padding: 8,
    borderRadius: 10,
    textAlign: "center",
  },
  rowView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tabView: {
    backgroundColor: "#F2F2F2",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 10,
    margin: 5,
  },
  txtTab: {
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 14,
    color: "black",
    fontWeight: "600",
  },
  indexView: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: "gray",
    justifyContent: "center",
    marginRight: 20,
    alignItems: "center",
  },
  stepInnerView: { flexDirection: "row", margin: 5 },
});
