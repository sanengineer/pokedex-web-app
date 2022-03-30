import {
  HomeFilled,
  HomeOutlined,
  PlusOutlined,
  DeleteOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native-web";
import { COLORS, FONTS, _detailDesktop } from "../assets";
import IconText from "./IconText";

const _buttonLG = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 80,
    height: 30,
    alignItem: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.grey,
    // backgroundColor: "red",
  },
  label: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: COLORS.grey200,
  },
});

const Buttons = {
  LG: (props) => {
    return (
      <TouchableOpacity onPress={props.onPress} style={_buttonLG.container}>
        <Text style={_buttonLG.label}>{props.label}</Text>
      </TouchableOpacity>
    );
  },
  Icon: (props) => {
    return (
      <TouchableOpacity onPress={props.onPress}>
        {React.createElement(props.children)}
      </TouchableOpacity>
    );
  },
  DesktopSquareHome: ({ onPressHome, match }) => {
    return (
      <TouchableOpacity
        onPress={onPressHome}
        style={_detailDesktop.containerTouch}
      >
        <IconText.V
          fontFamily={match.pathname === "/" ? FONTS.extrabold : FONTS.bold}
          // label="Mine"
          color={match.pathname === "/" ? COLORS.yellowHero : COLORS.grey100}
          fontSize={8}
          spacer={2}
          icon={() =>
            match.pathname === "/" ? (
              <HomeFilled style={_detailDesktop.icon(COLORS.yellowHero)} />
            ) : (
              <HomeOutlined style={_detailDesktop.icon(COLORS.grey100)} />
            )
          }
        />
      </TouchableOpacity>
    );
  },
  DesktopBack: ({ onPressBack, match }) => {
    return (
      <TouchableOpacity
        onPress={onPressBack}
        style={_detailDesktop.containerTouch}
      >
        <IconText.V
          fontFamily={FONTS.bold}
          // label="Mine"
          color={COLORS.grey100}
          fontSize={8}
          spacer={2}
          icon={() =>
            match.pathname === "/" ? (
              <LeftOutlined style={_detailDesktop.icon(COLORS.yellowHero)} />
            ) : (
              <LeftOutlined style={_detailDesktop.icon(COLORS.grey100)} />
            )
          }
        />
      </TouchableOpacity>
    );
  },
  DesktopSquareAdd: ({ onPressAdd, match }) => {
    return (
      <TouchableOpacity
        onPress={onPressAdd}
        style={_detailDesktop.containerTouch}
      >
        <IconText.V
          fontFamily={match.pathname === "/mine" ? FONTS.extrabold : FONTS.bold}
          // label="Mine"
          color={
            match.pathname === "/mine" ? COLORS.yellowHero : COLORS.grey100
          }
          fontSize={8}
          spacer={2}
          icon={() => <PlusOutlined style={_detailDesktop.icon("green")} />}
        />
      </TouchableOpacity>
    );
  },
  DesktopSquareDelete: ({ onPressDelete, match }) => {
    return (
      <TouchableOpacity
        onPress={onPressDelete}
        style={_detailDesktop.containerTouch}
      >
        <IconText.V
          fontFamily={match.pathname === "/mine" ? FONTS.extrabold : FONTS.bold}
          // label="Mine"
          color={
            match.pathname === "/mine" ? COLORS.yellowHero : COLORS.grey100
          }
          fontSize={8}
          spacer={2}
          icon={() => <DeleteOutlined style={_detailDesktop.icon("red")} />}
        />
      </TouchableOpacity>
    );
  },
};

export default Buttons;
