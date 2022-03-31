import { StyleSheet } from "react-native-web";
import { COLORS, FONTS } from "../theme";

export const _collectionDesktop = StyleSheet.compose({
  containerHeaderTitle: () => ({
    fontFamily: FONTS.extrabold,
    fontSize: 30,
    textAlign: "left",
    color: COLORS.white,
    // backgroundColor: "red",
  }),
  containerCardItem: () => ({
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 120,
    flexDirection: "row",
  }),
});
