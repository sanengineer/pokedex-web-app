import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "antd";
import { useNavigate } from "react-router";
import { COLORS, FONTS } from "../assets";
import useVibrant from "useVibrant";

export const CardItem = ({
  id,
  name,
  height = 240,
  fontSize = 18,
  style,
  widthImg,
}) => {
  const navigate = useNavigate();
  const _id = parseInt(id);

  const onPressCard = () => {
    navigate(`/pokemon/${name}`, {
      state: {
        from_pathname: window.location.pathname,
        id: _id,
        link: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${_id}.png`,
      },
    });
  };

  const image_link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${_id}.png`;
  const number_id = _id < 10 ? `00${_id}` : _id < 100 ? `0${_id}` : _id;

  const { colors, done } = useVibrant(`${image_link}`);

  return (
    <TouchableOpacity
      onPress={onPressCard}
      style={{ ..._card.container(done, colors, height), style }}
    >
      {/* <View style={_card.container}> */}
      <View style={{ position: "absolute", right: 0, top: -13 }}>
        <Text
          style={{
            fontSize: 50,
            color: COLORS.white,
            opacity: 0.5,
            fontFamily: FONTS.extrabold,
            letterSpacing: -5,
          }}
        >
          {number_id}
        </Text>
      </View>
      <View style={_img.container}>
        <Image
          preview={false}
          style={_img.subContainer}
          src={`${image_link}`}
          width={widthImg}
        />
      </View>
      <View style={_label.container}>
        <Text style={_label.text(done, colors, fontSize)}>{name}</Text>
      </View>
      {/* </View> */}
    </TouchableOpacity>
  );
};

const _card = StyleSheet.compose({
  container: (done, colors, height) => ({
    height: height,
    // width: "50%",
    borderColor: done ? colors.Vibrant.hex : COLORS.grey,
    borderWidth: done ? 0 : 1,
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 10,
    marginVertical: 10,
    alignItem: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: done ? colors.LightVibrant.hex : COLORS.white,
    overflow: "hidden",
    // zIndex: 0,
    // backgroundColor: "orange",
  }),
});

const _img = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    alignItem: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 8,
    // zIndex: 1,
    // backgroundColor: COLORS.yellow100,
    // backgroundColor: "aqua",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    // backgroundColor: "green",
  },
});

const _label = StyleSheet.compose({
  container: {
    marginHorizontal: 10,
    marginTop: 14,
    marginBottom: 10,
    height: 40,
    alignItem: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: COLORS.blackTransparent,
  },
  text: (done, colors, fontSize) => ({
    textTransform: "capitalize",
    fontSize: fontSize,
    // color: done ? colors.DarkVibrant.hex : COLORS.black,
    color: done ? COLORS.white : COLORS.black,
    fontFamily: FONTS.bold,
    textAlign: "center",
  }),
});
