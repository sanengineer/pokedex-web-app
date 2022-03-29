import React from "react";
import { StyleSheet, View } from "react-native";
import { Spacer, TextTitle } from "../components";

const Section = {
  V: (props) => {
    //debug
    // console.log("PROPS_SECTION: ", props);

    return (
      <View style={sectionV.container}>
        <TextTitle title={props.title} fontSize={props.fontSizeSection} />
        <Spacer height={10} />
        {React.createElement(props.component)}
      </View>
    );
  },

  H: (props) => {
    //debug
    // console.log("PROPS_SECTION: ", props);

    return (
      <View style={sectionH.container}>
        <TextTitle title={props.title} fontSize={props.fontSizeSection} />
        <Spacer width={10} />
        {React.createElement(props.component)}
      </View>
    );
  },
};

const sectionV = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 10,
    justifyContent: "flex-start",
    // backgroundColor: "green",
  },
});

const sectionH = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "green",
  },
});
export default Section;
