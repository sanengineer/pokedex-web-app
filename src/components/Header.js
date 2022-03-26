import React from "react";
import { View, StyleSheet } from "react-native-web";

const _header = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    height: 200,
  },
});

const Header = () => {
  return (
    <View style={_header.container}>
      <View>Header</View>
    </View>
  );
};

export default Header;
