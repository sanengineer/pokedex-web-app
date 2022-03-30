import { COLORS, SIZES, FONTS } from "../theme";
import { StyleSheet } from "react-native";

export const _mobileCollection = StyleSheet.compose({
  container: (zIndex) => ({
    zIndex: zIndex,
    overflow: "hidden",
    backgroundColor: COLORS.white,
    // backgroundColor: "red",
  }),

  containerCards: {
    // backgroundColor: "grey",
    // flexDirection: "row",
    // flexWrap: "wrap",
  },

  containerHeader: (_zIndexBase) => ({
    zIndex: _zIndexBase + 1,
    borderBottomLeftRadius: "100%",
    borderBottomRightRadius: "100%",
    overflow: "hidden",
    position: "absolute",
    transform: [{ translateX: "-25%" }],
    width: "200%",
  }),

  containerHeaderTitle: () => ({
    fontFamily: FONTS.extrabold,
    fontSize: 30,
    textAlign: "left",
    // backgroundColor: "red",
  }),

  containerSearchNonFix: (_zIndexBase) => ({
    zIndex: _zIndexBase + 2,
    position: "relative",
    top: 70,
    // backgroundColor: "green",
  }),

  subContainerSearchNonFix: () => ({
    paddingHorizontal: SIZES.pagePadding,
    position: "absolute",
    width: "100%",
    top: -30,
  }),

  containerSearchfix: (_zIndexBase) => ({
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

  containerFlatList: (_zIndexBase) => ({
    marginTop: 20,
    padding: SIZES.pagePadding - 10,
    zIndex: _zIndexBase,
  }),
});
