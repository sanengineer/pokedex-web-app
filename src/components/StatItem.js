import React from "react";
import { Text, View } from "react-native-web";
import { COLORS, FONTS } from "../assets";

const StatItem = ({ leftText = "Left Text", rightText = "Right Text" }) => {
  const _leftText = leftText.replace(/-/g, " ");
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        height: 60,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 10,
        shadowColor: COLORS.grey100,
        shadowOpacity: 0.6,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 10,
        backgroundColor: COLORS.white,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.bold,
          width: 80,
          textAlign: "left",
          color: COLORS.grey500,
          // backgroundColor: "green",
        }}
      >
        {_leftText}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.extrabold,
          fontSize: 22,
          // backgroundColor: "green",
        }}
      >
        {rightText}
      </Text>
    </View>
  );
};

export default StatItem;
