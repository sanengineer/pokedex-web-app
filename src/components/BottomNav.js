import React from "react";
import { IconText, Buttons, Spacer } from "../components";
import {
  HomeOutlined,
  FolderOutlined,
  SearchOutlined,
  HomeTwoTone,
  HomeFilled,
  FolderOpenFilled,
  FolderTwoTone,
} from "@ant-design/icons";
// import { Space } from "antd";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useLocation, useNavigate } from "react-router";
import { COLORS, FONTS } from "../assets";

const styles = StyleSheet.compose({
  container: {
    position: "fixed",
    bottom: 0,
    zIndex: 99,
    width: "100%",
    shadowColor: COLORS.grey,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
  },
  subContainer: {
    height: 60,
    justifyContent: "center",
    backgroundColor: COLORS.white,
    // borderTopWidth: 0.5,
    // borderTopColor: COLORS.yellowBlack,
    // backgroundColor: "green",
  },
  iconTextContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  containerTouch: {
    width: 60,
    height: 60,
    // backgroundColor: "green",
    justifyContent: "center",
  },
  icon: (color) => ({
    fontSize: 30,
    color: color,
    // backgroundColor: "red"
  }),
});

const BottomNav = () => {
  const navigate = useNavigate();
  const match = useLocation();

  const onPressHome = () => {
    navigate("..");
  };

  const onPressMine = () => {
    navigate("../mine");
  };

  const hiddenBar =
    match.pathname === "/" || match.pathname === "/mine" ? true : false;

  // const active = window.location.pathname === match.pathname;
  // const color = active ? COLORS.yellowBlack : COLORS.grey;

  //debug_all
  // console.log("MATCH: ", match.pathname);

  return (
    <>
      {hiddenBar ? (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.iconTextContainer}>
              <TouchableOpacity
                onPress={onPressHome}
                style={styles.containerTouch}
              >
                <IconText
                  label="Home"
                  fontFamily={
                    match.pathname === "/" ? FONTS.extrabold : FONTS.regular
                  }
                  color={
                    match.pathname === "/" ? COLORS.yellowHero : COLORS.grey100
                  }
                  icon={() =>
                    match.pathname === "/" ? (
                      <HomeFilled
                        style={styles.icon(COLORS.yellowHero)}
                        // twoToneColor={COLORS.yellowHero}
                      />
                    ) : (
                      <HomeOutlined style={styles.icon(COLORS.grey100)} />
                    )
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPressMine}
                style={styles.containerTouch}
              >
                <IconText
                  fontFamily={
                    match.pathname === "/mine" ? FONTS.extrabold : FONTS.regular
                  }
                  label="Mine"
                  color={
                    match.pathname === "/mine"
                      ? COLORS.yellowHero
                      : COLORS.grey100
                  }
                  icon={() =>
                    match.pathname === "/mine" ? (
                      <FolderOpenFilled
                        style={styles.icon(COLORS.yellowHero)}
                      />
                    ) : (
                      <FolderOutlined style={styles.icon(COLORS.grey100)} />
                    )
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default BottomNav;
