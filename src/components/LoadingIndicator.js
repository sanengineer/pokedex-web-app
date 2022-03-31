import React from "react";
import { ActivityIndicator, View } from "react-native-web";
import { TextTitle, Spacer } from "../components";
import { COLORS, SIZES } from "../assets";

const LoadingIndicator = ({ color = COLORS.grey500 }) => {
  return (
    <div>
      <View
        style={{
          maxWidth: SIZES.maxWidthContentInt,
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={`large`} color={color} />
        <Spacer height={10} />
        <TextTitle
          fontSize={12}
          title={`Loading...`}
          color={color}
          textAlign={`center`}
        />
      </View>
    </div>
  );
};

export default LoadingIndicator;
