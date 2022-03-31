import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../theme";

export const _detailMobile = StyleSheet.compose({
  container: { flex: 1 },
  subContainer: (done, colors) => ({
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: "fixed",
    width: "100%",
    backgroundColor: done && colors.LightVibrant.hex,
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

  titlePage: (done, colors) => ({
    fontSize: 20,
    textTransform: "capitalize",
    color: done ? colors.DarkVibrant.hex : COLORS.black,
    fontFamily: FONTS.bold,
  }),

  iconBack: (done, colors) => ({
    fontSize: 30,
    color: done ? colors.DarkVibrant.hex : COLORS.black,
  }),
});
