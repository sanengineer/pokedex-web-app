import React from "react";
import { IconText, Buttons } from "../components";
import {
  HomeOutlined,
  FolderOutlined,
  SearchOutlined,
} from "@ant-design/icons";
// import { Space } from "antd";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native-web";
import { useNavigate } from "react-router";

const styles = StyleSheet.create({
  container: { position: "fixed", bottom: 0, zIndex: 20, width: "100%" },
  subContainer: {
    borderTopWidth: 1,
    borderTopColor: "red",
    height: 60,
    backgroundColor: "green",
    justifyContent: "center",
  },
  iconTextContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const BottomNav = () => {
  const navigate = useNavigate();

  const onPressHome = () => {
    navigate("..");
  };

  const onPressMine = () => {
    navigate("../mine");
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconTextContainer}>
          <TouchableOpacity
            onPress={onPressHome}
            style={{ backgroundColor: "red", width: 60 }}
          >
            {/* <View href={`/`} style={{ backgroundColor: "red", width: 60 }}> */}
            <IconText
              label="Home"
              icon={() => <HomeOutlined style={{ fontSize: 30 }} />}
            />
            {/* </View> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressMine}
            style={{ backgroundColor: "red", width: 60 }}
          >
            <IconText
              label="Mine"
              icon={() => <FolderOutlined style={{ fontSize: 30 }} />}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BottomNav;
