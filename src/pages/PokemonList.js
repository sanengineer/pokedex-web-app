import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Buttons, CardItem, Header, SearchBar, Spacer } from "../components";
import { getAllPokemonAction } from "../redux/actions";
import { getAllPokemonActionMore } from "../redux/actions/getAllPokemon";
// import { Grid } from "react-flexbox-grid";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native-web";
import { Row } from "antd";
import { SIZES } from "../assets";

const Item = ({ item }) => {
  return (
    <div style={{ paddingTop: 10, paddingBottom: 10 }}>
      <div>{item.name}</div>
      <a href={`${item.url}`}>link</a>
    </div>
  );
};

console.log(window.screenY);

const PokemonList = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [inset, setInset] = useState(0);
  const _zIndexBase = 0;
  const all_pokemon = useSelector((state) => state.all_pokemon);
  useEffect(() => {
    dispatch(getAllPokemonAction());
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const downScroll = () => setInset(window.he);
    // window.removeEventListener("scroll", downScroll);
    // window.addEventListener("scroll", downScroll, { passive: true });
    // return () => window.removeEventListener("scroll", downScroll);
  }, []);

  const onClickLoadMore = () => {
    // console.log("LOADMORE");
    // alert("LOADMORE");
    dispatch(getAllPokemonActionMore(all_pokemon.params));
  };

  //debug_all
  console.log("ALL_POKEMON: ", all_pokemon.data);
  console.log("OFFSET: ", offset);
  console.log("DOWNSCROLL: ", inset);
  console.log("WINDOWS_SCREEN_X: ", window.screen.width);
  console.log("WINDOWS_SCREEN_Y: ", window.screen.height);

  return (
    <View style={_home.container(_zIndexBase)}>
      <View style={_home.containerHeader(_zIndexBase)}>
        <Header />
      </View>
      {offset > 157.5 ? (
        <View style={_home.containerSearchfix()}>
          <SearchBar />
        </View>
      ) : (
        <View style={_home.containerSearchNonFix(_zIndexBase)}>
          <View style={_home.subContainerSearchNonFix(_zIndexBase)}>
            <SearchBar />
          </View>
        </View>
      )}
      <Spacer height={240} />
      <FlatList
        data={all_pokemon.data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={_home.containerFlatList}
        renderItem={({ item }) => (
          <CardItem
            name={item.name}
            id={item.id}
            key={`${item.name}_${item.id}`}
          />
        )}
      />
      <Spacer height={20} />
      {all_pokemon.params === undefined ? (
        <div>it is all, nothing more 🤐</div>
      ) : (
        <Buttons.LG label={`loadmore`} onPress={onClickLoadMore} />
      )}
      <Spacer height={20} />
    </View>
  );
};

const _home = StyleSheet.compose({
  container: (zIndex) => ({
    zIndex: zIndex,
    overflow: "hidden",
  }),

  containerCards: {
    backgroundColor: "grey",
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
    backgroundColor: "green",
    position: "relative",
    top: 200,
  }),

  subContainerSearchNonFix: () => ({
    paddingHorizontal: SIZES.pagePadding,
    position: "absolute",
    width: "100%",
    top: -30,
  }),

  containerSearchfix: (_zIndexBase) => ({
    backgroundColor: "purple",
    zIndex: _zIndexBase + 2,
    top: 0,
    position: "fixed",
    paddingVertical: 10,
    paddingHorizontal: SIZES.pagePadding,
    width: "100%",
  }),

  containerFlatList: {
    padding: SIZES.pagePadding - 10,
  },
});

export default PokemonList;
