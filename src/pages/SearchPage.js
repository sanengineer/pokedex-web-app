import { LeftSquareOutlined } from "@ant-design/icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useNavigate } from "react-router";
import { COLORS } from "../assets";
import { SearchBar, Spacer } from "../components";

const SearchPage = {
  Mobile: () => {
    const navigate = useNavigate();
    const onPressBack = () => {
      navigate("../");
    };
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.containerBack}>
            <TouchableOpacity onPress={onPressBack} style={{ padding: 10 }}>
              <LeftSquareOutlined style={styles.iconBack} />
            </TouchableOpacity>
          </View>
          <Spacer width={10} />
          <View style={styles.containerSearch}>
            <SearchBar color={COLORS.grey} />
          </View>
        </View>
        <Spacer height={30} />
        <div>Search</div>
      </View>
    );
  },
  Desktop: () => {
    return (
      <View>
        <Text>Halo</Text>
      </View>
    );
  },
};

const styles = StyleSheet.compose({
  container: { flex: 1 },
  subContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: "fixed",
    width: "100%",
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    // backgroundColor: "green",
  },
  containerSearch: {
    flex: 1,
    // backgroundColor: "red",
  },
  containerBack: {
    // backgroundColor: "purple"
  },
  iconBack: { fontSize: 30, color: COLORS.grey200 },
});

export default SearchPage;
