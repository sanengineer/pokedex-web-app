import { COLORS, SIZES, FONTS } from "../theme";
import { StyleSheet } from "react-native";

export const _homeDesktop = StyleSheet.compose({
  container: (zIndex) => ({
    zIndex: zIndex,
    overflow: "hidden",
    backgroundColor: COLORS.white,
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

  containerBarNonFix: (_zIndexBase) => ({
    zIndex: _zIndexBase + 2,
    position: "relative",
    maxWidth: SIZES.maxWidthContent,
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

  containerBarFix: (_zIndexBase) => ({
    zIndex: _zIndexBase + 6,
    top: 0,
    position: "fixed",
    paddingVertical: 10,
    width: "100%",
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    // backgroundColor: "purple",
  }),

  subContainerBarFix: () => ({
    maxWidth: SIZES.maxWidthContent,
    paddingHorizontal: SIZES.pagePadding - 10,
    margin: "auto",
  }),

  subSubContainerBarFix: () => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.pagePadding - 10,
    // backgroundColor: "red",
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

  containerCardItem: () => ({
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 110,
    flexDirection: "row",
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

  containerIconTextH: () => ({
    height: 30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.grey,
    paddingHorizontal: 6,
    justifyContent: "center",
    // backgroundColor: "red",
  }),

  containerLoadMore: () => ({
    maxWidth: SIZES.maxWidthContentInt,
    paddingHorizontal: SIZES.pagePadding,
    margin: "auto",
    // backgroundColor: "green",
  }),

  subContainerLoadMore: () => ({
    justifyContent: "center",
    alignItems: "center",
  }),
});
