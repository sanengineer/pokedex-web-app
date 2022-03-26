import React from "react";
import { SearchBar, Spacer } from "../components";
import { LeftSquareOutlined } from "@ant-design/icons";
import { TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router";

const SearchPage = () => {
  const navigate = useNavigate();
  const onPressBack = () => {
    navigate("../");
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "green",
          paddingVertical: 10,
          paddingHorizontal: 10,
          position: "fixed",
          width: "100%",
        }}
      >
        <View style={{ backgroundColor: "purple" }}>
          <TouchableOpacity onPress={onPressBack} style={{ padding: 10 }}>
            <LeftSquareOutlined style={{ fontSize: 30 }} />
          </TouchableOpacity>
        </View>
        <Spacer width={10} />
        <View style={{ backgroundColor: "red", flex: 1 }}>
          <SearchBar />
        </View>
      </View>
      <Spacer height={30} />
      <div>Search</div>
    </View>
  );
};

export default SearchPage;
