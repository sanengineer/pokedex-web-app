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
    transform: [{ translateX: "-25%" }],
    width: "200%",
  }),

  imgHeader: () => ({
    height: 120,
    width: 120,
    // backgroundColor: "red",
  }),

  containerBarNonFix: (_zIndexBase) => ({
    zIndex: _zIndexBase + 2,
    position: "relative",
    maxWidth: SIZES.maxWidthContentDetailInt,
    padding: SIZES.pagePadding - 10,
    margin: "auto",
    // backgroundColor: "green",
  }),

  subContainerBarNonFix: () => ({
    paddingHorizontal: SIZES.pagePadding - 10,
  }),

  subSubContainerBarNonFix: () => ({
    flexDirection: "row",
    alignItems: "center",
  }),

  containerIconTextH: () => ({
    height: 30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.grey,
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // maxWidth: 300,
    flex: 1,
    // backgroundColor: "red",
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

  containerTabs: () => ({
    maxWidth: SIZES.maxWidthContentDetailInt,
    paddingHorizontal: 20,
    margin: "auto",
  }),

  subContainerTabs: () => ({
    // backgroundColor: "red",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.grey,
  }),

  containerCompAbility: () => ({
    flexDirection: "row",
    width: window.screen.width - 50,
    flexWrap: "wrap",
  }),

  containerCompTypes: () => ({
    flexDirection: "row",
    width: window.screen.width - 50,
    flexWrap: "wrap",
  }),

  containerSectionStat: () => ({
    paddingHorizontal: 10,
  }),

  containerSectionMove: () => ({
    height: window.screen.height / 2.5 - window.screen.height / 10,
    paddingHorizontal: 20,
  }),

  containerCompMove: () => ({
    flexDirection: "row",
    minWidth: 200,
    flexWrap: "wrap",
  }),

  containerLoadingIndicator: () => ({
    alignItems: "center",
    justifyContent: "center",
    height: window.screen.height / 2 - window.screen.height / 6 + 70,
  }),

  icon: (color) => ({
    fontSize: 16,
    color: color,
    // backgroundColor: "red"
  }),
});
