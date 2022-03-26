import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web";
import { Image } from "antd";
import { useNavigate } from "react-router";

export const CardItem = (props) => {
  const navigate = useNavigate();

  const onPressCard = () => {
    navigate(`/pokemon/${props.name}`);
  };

  return (
    <TouchableOpacity onPress={onPressCard} style={_card.container}>
      {/* <View style={_card.container}> */}
      <View style={_img.container}>
        <Image
          preview={false}
          style={{
            backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        />
        {/* <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        /> */}
      </View>
      <View style={_label.container}>
        <Text>{props.name}</Text>
      </View>
      {/* </View> */}
    </TouchableOpacity>
  );
};

const _card = StyleSheet.create({
  container: {
    height: 220,
    width: "50%",
    borderColor: "green",
    borderWidth: 1,
    flex: 1,
    flexDirection: "column",
    margin: 10,
    alignItem: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 8,
  },
});

const _img = StyleSheet.create({
  container: {
    margin: 10,
    alignItem: "center",
    justifyContent: "center",
    backgroundColor: "aqua",
    flex: 1,
  },
});

const _label = StyleSheet.create({
  container: {
    margin: 10,
    height: 20,
    alignItem: "center",
    justifyContent: "center",
    backgroundColor: "aqua",
    // flex: 1,
  },
});
