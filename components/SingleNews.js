import React from 'react';
import { Dimensions, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index, darkTheme }) => {
  return (
    <View
      style={{
        backgroundColor: darkTheme ? "#303030" : "white",
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{
          height: "45%",
          resizeMode: "cover",
          width: windowWidth - 32,
          alignSelf: "center",
          margin: 16,
          marginBottom: 0,
          borderRadius: 32,
        }}
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? "#303030" : "white",
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? "#c0c0c0" : "black" }}>
          {item.title}
        </Text>
        <Text
          style={{ ...styles.content, color: darkTheme ? "#c0c0c0" : "#707070" }}
        >
          {item.description}
        </Text>
        <Text
          style={{ color: darkTheme ? "#c0c0c0" : "#707070", fontWeight: "bold" }}
        >
          {item.author ?? ""}
        </Text>
      </View>
      <View
        style={{
          ...styles.footer,
          backgroundColor: darkTheme ? "#000" : "black",
        }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: darkTheme ? "#c0c0c0" : "white",
            }}
          >
            Read more
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  description: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  content: { fontSize: 16, paddingBottom: 8, lineHeight: 24 },
  footer: {
    height: 64,
    width: windowWidth / 2,
    position: "absolute",
    bottom: 0,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 16,
    margin: 16,
  },
});
