import React from "react";
import { COLORS, FONTS } from "../assets";
import { Text, StyleSheet } from "react-native";

const TextTitle = ({
  title,
  fontSize = 18,
  color = COLORS.black,
  width = 80,
  fontFamily = FONTS.bold,
}) => {
  return (
    <Text style={textTitle.text(fontSize, color, width, fontFamily)}>
      {title}
    </Text>
  );
};

const textTitle = StyleSheet.compose({
  text: (fontSize, color, width, fontFamily) => ({
    fontSize: fontSize,
    textAlign: "left",
    fontFamily: fontFamily,
    color: color,
    width: width,
    // backgroundColor: "cyan",
  }),
});

export default TextTitle;
