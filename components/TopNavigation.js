import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { NewsContext } from "../API/Context";

const TopNavigation = ({ index, setIndex }) => {
  const { darkTheme, setDarkTheme, fetchNews } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#303030" : "white",
      }}
    >
      {index === 0 ? (
        <TouchableOpacity
          onPress={() => setDarkTheme(!darkTheme)}
          style={styles.left}
        >
          <MaterialIcons
            name="brightness-6"
            size={28}
            color={darkTheme ? "#c0c0c0" : "black"}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <MaterialIcons
            name="language"
            size={28}
            color={darkTheme ? "#c0c0c0" : "black"}
          />
        </TouchableOpacity>
      )}

      <Text style={{ ...styles.center, color: darkTheme ? "#c0c0c0" : "black" }}>
        {index ? "All News" : "Discover"}
      </Text>
      {index ? (
        <TouchableOpacity
          style={styles.right}
          onPress={() => fetchNews("general")}
        >
          <MaterialIcons
            name="refresh"
            size={28}
            color={darkTheme ? "#c0c0c0" : "black"}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.right}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <MaterialIcons
            name="notes"
            size={28}
            color={darkTheme ? "#c0c0c0" : "black"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  center: {
    fontSize: 20,
    fontWeight: "bold",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  right: {
    width: 80,
    alignItems: "flex-end",
  },
});
