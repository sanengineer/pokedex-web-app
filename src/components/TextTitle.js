import React from "react";
import { COLORS, FONTS } from "../assets";
import { Text, StyleSheet } from "react-native";

const TextTitle = ({
  title,
  fontSize = 18,
  color = COLORS.black,
  width = 80,
  fontFamily = FONTS.bold,
  textAlign = "left",
  textTransform,
}) => {
  return (
    <Text
      style={textTitle.text(
        fontSize,
        color,
        width,
        fontFamily,
        textAlign,
        textTransform
      )}
    >
      {title}
    </Text>
  );
};

const textTitle = StyleSheet.compose({
  text: (fontSize, color, width, fontFamily, textAlign, textTransform) => ({
    fontSize: fontSize,
    textAlign: textAlign,
    fontFamily: fontFamily,
    color: color,
    width: width,
    textTransform: textTransform,
    // backgroundColor: "cyan",
  }),
});

export default TextTitle;
