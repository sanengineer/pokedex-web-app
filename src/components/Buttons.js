import {
  HomeFilled,
  HomeOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native-web";
import { COLORS, FONTS, _detailDesktop } from "../assets";
import IconText from "./IconText";

const _buttonLG = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 150,
    height: 30,
  },
});

const Buttons = {
  LG: (props) => {
    return (
      <TouchableOpacity onPress={props.onPress} style={_buttonLG.container}>
        {props.label}
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
        <IconText
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
  DesktopSquareAdd: ({ onPressAdd, match }) => {
    return (
      <TouchableOpacity
        onPress={onPressAdd}
        style={_detailDesktop.containerTouch}
      >
        <IconText
          fontFamily={match.pathname === "/mine" ? FONTS.extrabold : FONTS.bold}
          // label="Mine"
          color={
            match.pathname === "/mine" ? COLORS.yellowHero : COLORS.grey100
          }
          fontSize={8}
          spacer={2}
          icon={() => (
            <PlusOutlined style={_detailDesktop.icon(COLORS.grey100)} />
          )}
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
        <IconText
          fontFamily={match.pathname === "/mine" ? FONTS.extrabold : FONTS.bold}
          // label="Mine"
          color={
            match.pathname === "/mine" ? COLORS.yellowHero : COLORS.grey100
          }
          fontSize={8}
          spacer={2}
          icon={() => (
            <DeleteOutlined style={_detailDesktop.icon(COLORS.grey100)} />
          )}
        />
      </TouchableOpacity>
    );
  },
};

export default Buttons;
