import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { categories, sources } from "../API/api";
import { NewsContext } from "../API/Context";
import Search from "../components/Search";

const DiscoverScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3);

  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  return (
    <View style={styles.discover}>
      <Search />
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "#c0c0c0" : "black", 
        paddingBottom: 16, }}
      >
        Categories
      </Text>
      <Carousel
        layout={"default"}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => setCategory(item.name)}
              style={{...styles.category, backgroundColor: darkTheme ? "#000" : "#f1f1f1",}}
            >
              <Image source={{ uri: item.pic }} style={styles.categoryImage} />
              <Text
                style={{ ...styles.name, color: darkTheme ? "#c0c0c0" : "black" }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "#c0c0c0" : "black" }}
      >
        Sources
      </Text>
      <View style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            style={{...styles.sourceContainer, backgroundColor: darkTheme ? "#000" : "#f1f1f1",}}
          >
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
  },
  category: {
    height: 120,
    width: 120,
    borderRadius: 32,
    paddingBottom: 16,
    marginBottom: 32,
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  categoryImage: {
    height: "50%",
    width: "50%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 32,
    margin: 16,
  },
  sourceImage: {
    height: "100%",
    borderRadius: 32,
    resizeMode: "cover",
  },
});
