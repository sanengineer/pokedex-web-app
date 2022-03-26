import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { useNavigate, useHref } from "react-router";
import { COLORS } from "../assets";

const height = 50;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "cyan",
    borderRadius: height * 0.2,
    overflow: "hidden",
  },
  constainerSearch: {
    backgroundColor: COLORS.white,
    height: height,
    padding: 10,
  },
  text: {
    backgroundColor: "#fff",
  },
});

const SearchBar = () => {
  const navigation = useNavigate();
  const onSelectionChange = () => {
    navigation("../search", { replace: true });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.constainerSearch}
        onSelectionChange={onSelectionChange}
      />
    </View>
  );
};

export default SearchBar;
