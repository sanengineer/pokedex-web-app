import { COLORS, SIZES, FONTS } from "../theme";
import { StyleSheet } from "react-native";

export const _detailDesktop = StyleSheet.compose({
  container: (zIndex) => ({
    zIndex: zIndex,
    flex: 1,
    overflow: "hidden",
    backgroundColor: COLORS.red,
    // paddingHorizontal: SIZES.pageContentDesktop,
    // backgroundColor: "red",
  }),

  containerHeader: (_zIndexBase) => ({
    zIndex: _zIndexBase + 1,
    borderBottomLeftRadius: "100%",
    borderBottomRightRadius: "100%",
    overflow: "hidden",
    position: "absolute",
    transform: [{ translateX: -window.screen.width / 2 }],
    width: window.screen.width * 2,
  }),

  containerBarNonFix: (_zIndexBase) => ({
    zIndex: _zIndexBase + 2,
    position: "relative",
    top: 200,
    // backgroundColor: "green",
  }),

  subContainerBarNonFix: () => ({
    paddingHorizontal: SIZES.pagePadding,
    position: "absolute",
    width: "100%",
    top: -20,
    // backgroundColor: "aqua",
  }),

  containerBarFix: (_zIndexBase) => ({
    zIndex: _zIndexBase + 6,
    top: 0,
    position: "fixed",
    paddingVertical: 10,
    paddingHorizontal: SIZES.pagePadding,
    width: "100%",
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    // backgroundColor: "purple",
  }),

  containerTitleDetail: {
    flex: 1,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.grey,
    backgroundColor: COLORS.white,
  },

  containerTitleDetailText: (done, colors) => ({
    fontSize: 14,
    fontFamily: FONTS.extrabold,
    letterSpacing: 2,
    textTransform: "capitalize",
    color: done ? colors.LightVibrant.hex : COLORS.yellowHero,
  }),

  containerCards: (_zIndexBase) => ({
    padding: SIZES.pagePadding - 10,
    zIndex: _zIndexBase,
    maxWidth: SIZES.maxWidthContent,
    margin: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    // backgroundColor: "red",
  }),

  containerTouch: {
    paddingHorizontal: 6,
    borderRadius: 6,
    height: 30,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.grey,
    backgroundColor: COLORS.white,
    // backgroundColor: "green",
  },

  icon: (color) => ({
    fontSize: 16,
    color: color,
    // backgroundColor: "red"
  }),
});
