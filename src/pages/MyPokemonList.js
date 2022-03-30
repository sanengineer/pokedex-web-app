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
import { useLiveQuery } from "dexie-react-hooks";
import { COLORS, FONTS, SIZES } from "../assets";
import {
  Buttons,
  CardItem,
  Header,
  IconText,
  LoadingIndicator,
  SearchBar,
  Spacer,
  Toaster,
} from "../components";
import {
  deleteCollectionFailedType,
  getAllPokemonAction,
} from "../redux/actions";
import { getAllPokemonActionMore } from "../redux/actions/getAllPokemon";
import { db } from "../db";

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
    const mine_collection_redux = useSelector((state) => state.mine_collection);
    const mine_collection = useLiveQuery(() => db.mine_collection.toArray());

    useEffect(() => {
      const onScroll = () => setOffset(window.scrollY);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      if (mine_collection_redux.success.delete === true) {
        toast.error("success delete from collection", options);
      }
    }, [mine_collection_redux.success.delete]);

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
    // console.log("LOCATION: ", match);
    // console.log("DEVICE:", isMobile);
    console.log("DB:", mine_collection);

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
        <Spacer height={240} />
        <View style={_homeDesktop.containerCards(_zIndexBase)}>
          {mine_collection === undefined ? (
            <LoadingIndicator />
          ) : (
            mine_collection.map((item, index) => (
              <View
                key={`${item.name}_${item.id}`}
                style={{
                  flexShrink: 1,
                  flexGrow: 1,
                  flexBasis: 120,
                  flexDirection: "row",
                }}
              >
                <CardItem
                  name={item.name}
                  id={item.id_pokemon}
                  id_obj={item.id}
                  height={130}
                  fontSize={10}
                  widthImg={70}
                  isNickname={true}
                  nickname={item.nickname}
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
    maxWidth: SIZES.maxWidthContentInt,
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
