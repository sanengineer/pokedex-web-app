import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native-web";

const _buttonLG = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 150,
    height: 30,
  },
});

const Buttons = {
  LG: (props) => {
    return (
      <TouchableOpacity onPress={props.onPress} style={_buttonLG.container}>
        {props.label}
      </TouchableOpacity>
    );
  },
  Icon: (props) => {
    return (
      <TouchableOpacity onPress={props.onPress}>
        {React.createElement(props.children)}
      </TouchableOpacity>
    );
  },
};

export default Buttons;
