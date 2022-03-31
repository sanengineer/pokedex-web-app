import { Image } from "antd";
import React from "react";
import { View, StyleSheet } from "react-native-web";
import { COLORS } from "../assets";

const _header = StyleSheet.compose({
  container: (bgColor) => ({
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgColor,
    // backgroundColor: "purple",
  }),
});

const Header = ({
  widthHeader = window.screen.width / 2,
  top = 0,
  isImage = true,
  bgColor = COLORS.yellowHero,
  component,
}) => {
  return (
    <View style={_header.container(bgColor)}>
      <View
        style={{
          top: top,
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        {isImage ? (
          <Image
            preview={false}
            width={widthHeader}
            src={`https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png`}
            alt={`Header_Image_Logo`}
          />
        ) : (
          React.createElement(component)
        )}
      </View>
    </View>
  );
};

export default Header;
