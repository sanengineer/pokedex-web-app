import {
  FolderOpenFilled,
  FolderOutlined,
  HomeOutlined,
  HomeFilled,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { COLORS, FONTS, SIZES } from "../assets";
import {
  Buttons,
  CardItem,
  Header,
  IconText,
  SearchBar,
  Spacer,
  Toaster,
} from "../components";
import {
  deleteCollectionFailedType,
  getAllPokemonAction,
} from "../redux/actions";
import { getAllPokemonActionMore } from "../redux/actions/getAllPokemon";

const MyPokemonList = {
  Mobile: () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [offset, setOffset] = useState(0);
    const [inset, setInset] = useState(0);
    const _zIndexBase = 0;
    const mine_collection = useSelector((state) => state.mine_collection);

    const options = {
      onClose: () => dispatch(deleteCollectionFailedType()),
    };

    useEffect(() => {
      const onScroll = () => setOffset(window.scrollY);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      if (mine_collection.success.delete === true) {
        toast.error("success delete from collection", options);
      }
    }, [mine_collection.success.delete]);

    //debug_all
    // console.log("MY_COLLECTION_ALL_POKEMON: ", mine_collection.success.delete);
    // console.log("OFFSET: ", offset);
    // console.log("LOCATION: ", location);
    // console.log("DOWNSCROLL: ", inset);
    // console.log("WINDOWS_SCREEN_X: ", window.screen.width);
    // console.log("WINDOWS_SCREEN_Y: ", window.screen.height);

    return (
      <View style={_home.container(_zIndexBase)}>
        {offset > 30 ? (
          <View style={_home.containerSearchfix(_zIndexBase)}>
            <Text
              style={{
                fontFamily: FONTS.extrabold,
                fontSize: 30,
                textAlign: "left",
                // backgroundColor: "red",
              }}
            >
              Mine Collection
            </Text>
          </View>
        ) : (
          <View style={_home.containerSearchNonFix(_zIndexBase)}>
            <View style={_home.subContainerSearchNonFix(_zIndexBase)}>
              <Text
                style={{
                  fontFamily: FONTS.extrabold,
                  fontSize: 30,
                  textAlign: "left",
                  // backgroundColor: "red",
                }}
              >
                Mine Collection
              </Text>
            </View>
          </View>
        )}
        <Spacer height={70} />
        <FlatList
          data={mine_collection.data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={_home.containerFlatList(_zIndexBase)}
          renderItem={({ item }) => (
            <CardItem
              name={item.name}
              id={item.id}
              key={`${item.name}_${item.id}`}
            />
          )}
        />
        <Spacer height={20} />
        <Toaster.Mobile />
      </View>
    );
  },
  Desktop: () => {
    const dispatch = useDispatch();
    const match = useLocation();
    const navigate = useNavigate();
    const [offset, setOffset] = useState(0);
    const _zIndexBase = 0;
    const _ratio_window = window.screen.width / window.screen.height;
    const _widhtHeader = _ratio_window * 100;
    const maxWidthMainNav = SIZES.maxWidthBar;
    const mine_collection = useSelector((state) => state.mine_collection);

    useEffect(() => {
      const onScroll = () => setOffset(window.scrollY);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      if (mine_collection.success.delete === true) {
        toast.error("success delete from collection", options);
      }
    }, [mine_collection.success.delete]);

    const onPressMine = () => {
      navigate("../mine");
    };

    const onPressHome = () => {
      navigate("..");
    };

    const options = {
      onClose: () => dispatch(deleteCollectionFailedType()),
    };

    //debug_all
    // console.log("ALL_POKEMON: ", all_pokemon.data);
    // console.log("OFFSET: ", offset);
    // console.log("WINDOWS_SCREEN_X: ", window.screen.width);
    // console.log("WINDOWS_SCREEN_Y: ", window.screen.height);
    console.log("LOCATION: ", match);
    // console.log("DEVICE:", isMobile);

    return (
      <View style={_homeDesktop.container(_zIndexBase)}>
        {/**
         *
         * debug_ui
         */}
        {/* <View style={{ position: "fixed", zIndex: 9999 }}>
        <Text>{isMobile ? `Mobile` : `Desktop`}</Text>
      </View> */}
        <View style={_homeDesktop.containerHeader(_zIndexBase)}>
          <Header
            widthHeader={_widhtHeader}
            top={-20}
            isImage={false}
            component={() => (
              <Text
                style={{
                  fontFamily: FONTS.extrabold,
                  fontSize: 30,
                  textAlign: "left",
                  color: COLORS.white,
                  // backgroundColor: "red",
                }}
              >
                Mine Collection
              </Text>
            )}
          />
        </View>
        {offset > 157.5 ? (
          <View style={_homeDesktop.containerSearchfix(_zIndexBase)}>
            <View
              style={{
                flexDirection: "row",
                maxWidth: `${maxWidthMainNav}px`,
                margin: "auto",
              }}
            >
              <View style={{ width: maxWidthMainNav - maxWidthMainNav / 3 }}>
                <SearchBar color={COLORS.grey} />
              </View>
              <Spacer width={30} />
              <View style={{ flex: 1, backgroundColor: "red" }}>
                <TouchableOpacity
                  onPress={onPressMine}
                  style={_homeDesktop.containerTouch}
                >
                  <IconText
                    fontFamily={
                      match.pathname === "/mine"
                        ? FONTS.extrabold
                        : FONTS.regular
                    }
                    label="Mine"
                    color={
                      match.pathname === "/mine"
                        ? COLORS.yellowHero
                        : COLORS.grey100
                    }
                    icon={() =>
                      match.pathname === "/mine" ? (
                        <FolderOpenFilled
                          style={_homeDesktop.icon(COLORS.yellowHero)}
                        />
                      ) : (
                        <FolderOutlined
                          style={_homeDesktop.icon(COLORS.grey100)}
                        />
                      )
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View style={_homeDesktop.containerSearchNonFix(_zIndexBase)}>
            <View style={_homeDesktop.subContainerSearchNonFix(_zIndexBase)}>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: maxWidthMainNav / 10,
                  alignItems: "center",
                  // height: 30,
                  // justifyContent: "center",
                }}
              >
                <View
                  style={{
                    // backgroundColor: "red",
                    height: 30,
                  }}
                >
                  <TouchableOpacity
                    onPress={onPressHome}
                    style={_homeDesktop.containerTouch}
                  >
                    <IconText
                      fontFamily={
                        match.pathname === "/" ? FONTS.extrabold : FONTS.bold
                      }
                      // label="Mine"
                      color={
                        match.pathname === "/"
                          ? COLORS.yellowHero
                          : COLORS.grey100
                      }
                      fontSize={8}
                      spacer={2}
                      icon={() =>
                        match.pathname === "/" ? (
                          <HomeFilled
                            style={_homeDesktop.icon(COLORS.yellowHero)}
                          />
                        ) : (
                          <HomeOutlined
                            style={_homeDesktop.icon(COLORS.grey100)}
                          />
                        )
                      }
                    />
                  </TouchableOpacity>
                </View>
                <Spacer width={10} />
                <View style={{ flex: 1 }}>
                  <SearchBar color={COLORS.grey} height={30} />
                </View>
                <Spacer width={10} />
                <View
                  style={{
                    // backgroundColor: "red",
                    height: 30,
                  }}
                >
                  <TouchableOpacity
                    onPress={onPressMine}
                    style={_homeDesktop.containerTouch}
                  >
                    <IconText
                      fontFamily={
                        match.pathname === "/mine"
                          ? FONTS.extrabold
                          : FONTS.bold
                      }
                      // label="Mine"
                      color={
                        match.pathname === "/mine"
                          ? COLORS.yellowHero
                          : COLORS.grey100
                      }
                      fontSize={8}
                      spacer={2}
                      icon={() =>
                        match.pathname === "/mine" ? (
                          <FolderOpenFilled
                            style={_homeDesktop.icon(COLORS.yellowHero)}
                          />
                        ) : (
                          <FolderOutlined
                            style={_homeDesktop.icon(COLORS.grey100)}
                          />
                        )
                      }
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
        <Spacer height={240} />
        <View style={_homeDesktop.containerCards(_zIndexBase)}>
          {mine_collection.loading ? (
            <ActivityIndicator size={`large`} color={COLORS.yellowHero} />
          ) : (
            mine_collection.data.map((item, index) => (
              <View
                key={`${item.name}_${item.id}`}
                style={{
                  flexShrink: 1,
                  flexGrow: 1,
                  flexBasis: 110,
                  flexDirection: "row",
                }}
              >
                <CardItem
                  name={item.name}
                  id={item.id}
                  height={130}
                  fontSize={10}
                  widthImg={70}
                />
              </View>
            ))
          )}
        </View>
        <Toaster.Desktop />
      </View>
    );
  },
};

const _home = StyleSheet.compose({
  container: (zIndex) => ({
    zIndex: zIndex,
    overflow: "hidden",
    backgroundColor: COLORS.white,
    // backgroundColor: "red",
  }),

  containerCards: {
    // backgroundColor: "grey",
    // flexDirection: "row",
    // flexWrap: "wrap",
  },

  containerHeader: (_zIndexBase) => ({
    zIndex: _zIndexBase + 1,
    borderBottomLeftRadius: "100%",
    borderBottomRightRadius: "100%",
    overflow: "hidden",
    position: "absolute",
    // left: -500,
    transform: [{ translateX: -window.screen.width / 2 }],
    width: window.screen.width * 2,
  }),

  containerSearchNonFix: (_zIndexBase) => ({
    zIndex: _zIndexBase + 2,
    position: "relative",
    top: 70,
    // backgroundColor: "green",
  }),

  subContainerSearchNonFix: () => ({
    paddingHorizontal: SIZES.pagePadding,
    position: "absolute",
    width: "100%",
    top: -30,
  }),

  containerSearchfix: (_zIndexBase) => ({
    zIndex: _zIndexBase + 6,
    top: 0,
    position: "fixed",
    paddingVertical: 10,
    paddingHorizontal: SIZES.pagePadding,
    width: "100%",
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    // backgroundColor: "purple",
  }),

  containerFlatList: (_zIndexBase) => ({
    marginTop: 20,
    padding: SIZES.pagePadding - 10,
    zIndex: _zIndexBase,
  }),
});

const _homeDesktop = StyleSheet.compose({
  container: (zIndex) => ({
    zIndex: zIndex,
    overflow: "hidden",
    backgroundColor: COLORS.white,
    // paddingHorizontal: SIZES.pageContentDesktop,
    // backgroundColor: "red",
  }),

  containerHeader: (_zIndexBase) => ({
    zIndex: _zIndexBase + 1,
    borderBottomLeftRadius: "100%",
    borderBottomRightRadius: "100%",
    overflow: "hidden",
    position: "absolute",
    transform: [{ translateX: -window.screen.width / 2 }],
    width: window.screen.width * 2,
  }),

  containerSearchNonFix: (_zIndexBase) => ({
    zIndex: _zIndexBase + 2,
    position: "relative",
    top: 200,
    // backgroundColor: "green",
  }),

  subContainerSearchNonFix: () => ({
    paddingHorizontal: SIZES.pagePadding,
    position: "absolute",
    width: "100%",
    top: -30,
    // backgroundColor: "aqua",
  }),

  containerSearchfix: (_zIndexBase) => ({
    zIndex: _zIndexBase + 6,
    top: 0,
    position: "fixed",
    paddingVertical: 10,
    paddingHorizontal: SIZES.pagePadding,
    width: "100%",
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    // backgroundColor: "purple",
  }),

  containerCards: (_zIndexBase) => ({
    padding: SIZES.pagePadding - 10,
    zIndex: _zIndexBase,
    maxWidth: SIZES.maxWidthContent,
    margin: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    // backgroundColor: "red",
  }),

  containerTouch: {
    paddingHorizontal: 6,
    borderRadius: 6,
    height: 30,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.grey,
    backgroundColor: COLORS.white,
    // backgroundColor: "green",
  },

  icon: (color) => ({
    fontSize: 16,
    color: color,
    // backgroundColor: "red"
  }),
});

export default MyPokemonList;
