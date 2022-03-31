import { Modal } from "antd";
import React from "react";
import { ActivityIndicator, TextInput, View } from "react-native-web";
import { COLORS, FONTS } from "../assets";
import { CardItem } from "./CardItem";
import LoadingIndicator from "./LoadingIndicator";
import Spacer from "./Spacer";
import TextTitle from "./TextTitle";

const Modals = ({
  visible,
  onOk,
  onCancel,
  card_id,
  card_name,
  bgColor,
  onChange,
  disabled = false,
  isLoading,
  isSuccess,
  maskClosable,
}) => {
  return (
    <Modal
      width={250}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      cancelButtonProps={{ disabled: isLoading }}
      okButtonProps={{ disabled: disabled }}
      bodyStyle={{ width: 250, backgroundColor: bgColor }}
      style={{ width: 200, backgroundColor: "green" }}
      centered
      maskClosable={maskClosable}
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div>
          {isSuccess ? (
            <View
              style={{
                // backgroundColor: "red",
                paddingVertical: 20,
              }}
            >
              <TextTitle
                title={`👏🏻 Yeay!, Success! 🎉`}
                textAlign={`center`}
                fontSize={14}
                width={"100%"}
                fontFamily={FONTS.medium}
              />
              <Spacer height={6} />
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
          ) : (
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItem: "center",
              }}
            >
              <TextTitle
                title={`😫`}
                textAlign={`center`}
                fontSize={`9rem`}
                width={"100%"}
              />
              <TextTitle
                title={`Sorry! You not lucky. Please try again!`}
                textAlign={`center`}
                fontSize={12}
                width={"100%"}
                fontFamily={FONTS.medium}
              />
            </View>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Modals;
