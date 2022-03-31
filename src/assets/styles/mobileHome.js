import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../theme";

export const _homeMobile = StyleSheet.compose({
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
    padding: SIZES.pagePadding - 10,
    zIndex: _zIndexBase,
  }),
});
