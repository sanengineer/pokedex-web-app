import React from "react";
import { Space } from "antd";
import { Text, StyleSheet, View } from "react-native-web";

const _label = StyleSheet.create({
  container: {
    fontSize: 12,
  },
});

const IconText = ({ icon, label }) => {
  return (
    <Space direction={`vertical`} align={`center`}>
      {React.createElement(icon)}
      <Text style={_label.container}>{label}</Text>
    </Space>
  );
};

export default IconText;
