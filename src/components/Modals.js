import { Modal } from "antd";
import React from "react";
import { TextInput, View } from "react-native-web";
import { COLORS, FONTS } from "../assets";
import { CardItem } from "./CardItem";
import Spacer from "./Spacer";

const Modals = ({
  visible,
  onOk,
  onCancel,
  card_id,
  card_name,
  bgColor,
  onChange,
  disabled = false,
}) => {
  return (
    <Modal
      width={250}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okButtonProps={{ disabled: disabled }}
      bodyStyle={{ width: 250, backgroundColor: bgColor }}
      style={{ width: 200, backgroundColor: "green" }}
      centered
    >
      <View
        style={{
          // backgroundColor: "red",
          paddingVertical: 20,
        }}
      >
        <CardItem id={card_id} name={card_name} disabled={true} />
        <Spacer height={10} />
        <View style={{ paddingHorizontal: 10 }}>
          <TextInput
            placeholder="Add Nickname Here..."
            onChange={onChange}
            placeholderTextColor={COLORS.grey100}
            style={{
              fontFamily: FONTS.bold,
              height: 40,
              borderRadius: 8,
              paddingHorizontal: 10,
              backgroundColor: COLORS.white,
              borderColor: COLORS.grey,
              borderWidth: 1,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Modals;
