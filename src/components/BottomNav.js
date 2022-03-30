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

const _desktopNav = StyleSheet.compose({
  precontainer: {
    position: "fixed",
    width: "100%",
    zIndex: 99,
    bottom: 20,
    justifyContent: "center",
    alignItem: "center",
    // backgroundColor: "green",
  },
  container: {
    // position: "relative",
    overflow: "hidden",
    borderRadius: 6,
    margin: "auto",
    width: 200,
    shadowColor: COLORS.grey,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    // transform: [{ translateX: window.screen.width / 2 }],
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
    width: 40,
    height: 40,
    // backgroundColor: "green",
    justifyContent: "center",
  },
  icon: (color) => ({
    fontSize: 26,
    color: color,
    // backgroundColor: "red"
  }),
});

const BottomNav = {
  Mobile: () => {
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
                  <IconText.V
                    label="Home"
                    fontFamily={
                      match.pathname === "/" ? FONTS.extrabold : FONTS.regular
                    }
                    color={
                      match.pathname === "/"
                        ? COLORS.yellowHero
                        : COLORS.grey100
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
                  <IconText.V
                    fontFamily={
                      match.pathname === "/mine"
                        ? FONTS.extrabold
                        : FONTS.regular
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
  },
  Mobile: () => {
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
                  <IconText.V
                    label="Home"
                    fontFamily={
                      match.pathname === "/" ? FONTS.extrabold : FONTS.regular
                    }
                    color={
                      match.pathname === "/"
                        ? COLORS.yellowHero
                        : COLORS.grey100
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
                  <IconText.V
                    fontFamily={
                      match.pathname === "/mine"
                        ? FONTS.extrabold
                        : FONTS.regular
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
  },
  Desktop: () => {
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
          <View style={_desktopNav.precontainer}>
            <View style={_desktopNav.container}>
              <View style={_desktopNav.subContainer}>
                <View style={_desktopNav.iconTextContainer}>
                  <TouchableOpacity
                    onPress={onPressHome}
                    style={_desktopNav.containerTouch}
                  >
                    <IconText.V
                      label="Home"
                      fontFamily={
                        match.pathname === "/" ? FONTS.extrabold : FONTS.regular
                      }
                      color={
                        match.pathname === "/"
                          ? COLORS.yellowHero
                          : COLORS.grey100
                      }
                      fontSize={10}
                      icon={() =>
                        match.pathname === "/" ? (
                          <HomeFilled
                            style={_desktopNav.icon(COLORS.yellowHero)}
                            // twoToneColor={COLORS.yellowHero}
                          />
                        ) : (
                          <HomeOutlined
                            style={_desktopNav.icon(COLORS.grey100)}
                          />
                        )
                      }
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={onPressMine}
                    style={_desktopNav.containerTouch}
                  >
                    <IconText.V
                      fontFamily={
                        match.pathname === "/mine"
                          ? FONTS.extrabold
                          : FONTS.regular
                      }
                      label="Mine"
                      fontSize={10}
                      color={
                        match.pathname === "/mine"
                          ? COLORS.yellowHero
                          : COLORS.grey100
                      }
                      icon={() =>
                        match.pathname === "/mine" ? (
                          <FolderOpenFilled
                            style={_desktopNav.icon(COLORS.yellowHero)}
                          />
                        ) : (
                          <FolderOutlined
                            style={_desktopNav.icon(COLORS.grey100)}
                          />
                        )
                      }
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ) : null}
      </>
    );
  },
};

export default BottomNav;
