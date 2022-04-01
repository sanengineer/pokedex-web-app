import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "antd";
import { useNavigate } from "react-router";
import { COLORS, FONTS } from "../assets";

export const CardItem = ({
  id,
  name,
  height = 240,
  fontSize = 18,
  style,
  widthImg,
  isNickname = false,
  disabled = false,
  nickname,
  id_obj,
}) => {
  const navigate = useNavigate();
  const _id = parseInt(id);

  const onPressCard = () => {
    navigate(`/pokemon/${name}`, {
      state: {
        from_pathname: window.location.pathname,
        id: _id,
        link: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${_id}.png`,
        nickname: nickname,
        id_obj: id_obj,
      },
    });
  };

  const image_link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${_id}.png`;
  const number_id = _id < 10 ? `00${_id}` : _id < 100 ? `0${_id}` : _id;

  return (
    <TouchableOpacity
      onPress={onPressCard}
      style={{ ..._card.container(height), style }}
      disabled={disabled}
    >
      <View style={{ position: "absolute", right: 0, top: -13 }}>
        <Text
          style={{
            fontSize: 50,
            color: COLORS.grey,
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
          alt={`image_of_${number_id}`}
        />
      </View>
      <View style={_label.container}>
        <Text style={_label.text(fontSize)}>{name}</Text>
        {isNickname && <Text style={_label.subtext(8)}>({nickname})</Text>}
      </View>
    </TouchableOpacity>
  );
};

const _card = StyleSheet.compose({
  container: (height) => ({
    height: height,
    borderColor: COLORS.grey,
    borderWidth: 1,
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 10,
    marginVertical: 10,
    alignItem: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: COLORS.white,
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
  text: (fontSize) => ({
    textTransform: "capitalize",
    fontSize: fontSize,
    color: COLORS.black,
    fontFamily: FONTS.extrabold,
    textAlign: "center",
  }),
  subtext: (fontSize) => ({
    marginTop: 4,
    textTransform: "capitalize",
    fontSize: fontSize,
    color: COLORS.black,
    fontFamily: FONTS.medium,
    textAlign: "center",
  }),
});
