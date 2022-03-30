import React from "react";
import { Space } from "antd";
import { Text, StyleSheet, View } from "react-native";
import { COLORS, FONTS } from "../assets";
import Spacer from "./Spacer";

const _label = StyleSheet.compose({
  container: {
    // backgroundColor: "aqua",
  },
  text: (color, fontFamily, fontSize) => ({
    fontSize: fontSize,
    color: color,
    fontFamily: fontFamily,
    // backgroundColor: "red",
  }),
});

const IconText = {
  V: ({ icon, label, color, fontFamily, fontSize, spacer = 4 }) => {
    return (
      <View
        style={{
          alignItems: "center",
          flexDirection: "column",
          // backgroundColor: "red",
        }}
      >
        <View
          style={
            {
              // backgroundColor: "green"
            }
          }
        >
          {React.createElement(icon)}
        </View>
        <Spacer height={spacer} />
        <View style={_label.container}>
          <Text style={_label.text(color, fontFamily, fontSize)}>{label}</Text>
        </View>
      </View>
    );
  },
  H: ({ icon, label, color, fontFamily, fontSize, spacer = 4 }) => {
    return (
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          // backgroundColor: "red",
        }}
      >
        <View
          style={
            {
              // backgroundColor: "green"
            }
          }
        >
          {React.createElement(icon)}
        </View>
        <Spacer width={spacer} />
        <View style={_label.container}>
          <Text style={_label.text(color, fontFamily, fontSize)}>{label}</Text>
        </View>
      </View>
    );
  },
};

export default IconText;
