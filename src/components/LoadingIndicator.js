import React from "react";
import { ActivityIndicator } from "react-native";
import { TextTitle, Spacer } from "../components";
import { COLORS, SIZES } from "../assets";

const LoadingIndicator = () => {
  return (
    <>
      <ActivityIndicator size={`large`} color={COLORS.grey500} />
      <Spacer height={10} />
      <TextTitle fontSize={12} title={`Loading...`} color={COLORS.grey500} />
    </>
  );
};

export default LoadingIndicator;
