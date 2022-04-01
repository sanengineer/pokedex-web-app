import { StyleSheet } from "react-native-web";
import { COLORS, FONTS } from "../theme";

export const _detailMobile = StyleSheet.compose({
  container: { flex: 1 },
  subContainer: () => ({
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: "fixed",
    width: "100%",
    zIndex: 1,
    // backgroundColor: "green",
  }),

  containerSearch: {
    flex: 1,
    // backgroundColor: "red",
  },
  containerBack: {
    // backgroundColor: "purple"
  },
  containerTitlePage: {
    height: 30,
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
    // backgroundColor: "red",
  },

  titlePage: () => ({
    fontSize: 20,
    textTransform: "capitalize",
    color: COLORS.black,
    fontFamily: FONTS.bold,
  }),

  iconBack: () => ({
    fontSize: 30,
    color: COLORS.black,
  }),
});
