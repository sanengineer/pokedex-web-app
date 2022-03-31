import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useNavigate } from "react-router";
import { COLORS, FONTS } from "../assets";

const styles = StyleSheet.compose({
  container: (color, height) => ({
    borderRadius: height * 0.2,
    overflow: "hidden",
    borderColor: color,
    borderWidth: 1,
    // backgroundColor: "cyan",
  }),
  containerSearch: (height, fontSize) => ({
    backgroundColor: COLORS.white,
    height: height,
    padding: 10,
    fontFamily: FONTS.bold,
    borderRadius: height * 0.2,
    fontSize: fontSize,
  }),
  text: (fontSize) => ({
    backgroundColor: "#fff",
    fontFamily: FONTS.regular,
    fontSize: fontSize,
  }),
});

const SearchBar = ({ color = COLORS.white, height = 30, fontSize = 10 }) => {
  const navigation = useNavigate();
  const onSelectionChange = () => {
    navigation("../search", { replace: true });
  };
  return (
    <View style={styles.container(color, height)}>
      <TextInput
        placeholder="Search Pokemon Here.."
        style={styles.containerSearch(height, fontSize)}
        onSelectionChange={onSelectionChange}
        placeholderTextColor={COLORS.grey100}
      />
    </View>
  );
};

export default SearchBar;
