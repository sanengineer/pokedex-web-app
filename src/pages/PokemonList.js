import { PictureOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, FONTS, _homeDesktop, _homeMobile } from "../assets";
import {
  Buttons,
  CardItem,
  Header,
  IconText,
  LoadingIndicator,
  SearchBar,
  Spacer,
} from "../components";
import { db } from "../db";
import { getAllPokemonAction } from "../redux/actions";
import { getAllPokemonActionMore } from "../redux/actions/getAllPokemon";

const PokemonList = {
  Mobile: () => {
    const dispatch = useDispatch();
    const [offset, setOffset] = useState(0);
    const _zIndexBase = 0;
    const all_pokemon = useSelector((state) => state.all_pokemon);
    const mine_collection = useLiveQuery(() => db.mine_collection.toArray());

    useEffect(() => {
      dispatch(getAllPokemonAction());
      const onScroll = () => setOffset(window.scrollY);
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, [dispatch]);

    const onClickLoadMore = () => {
      dispatch(getAllPokemonActionMore(all_pokemon.params));
    };

    return (
      <View style={_homeMobile.container(_zIndexBase)}>
        <View style={_homeMobile.containerHeader(_zIndexBase)}>
          <Header />
        </View>
        {offset > 237.5 && (
          <div>
            <View style={_homeDesktop.containerBarFix(_zIndexBase)}>
              <div>
                <View style={_homeDesktop.subContainerBarFix()}>
                  <View style={{ width: "100%" }}>
                    <View style={_homeDesktop.subSubContainerBarFix()}>
                      <Image
                        preview={false}
                        width={60}
                        src={`https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png`}
                      />
                      <View style={{ flex: 1 }} />
                      <View style={_homeDesktop.containerIconTextH()}>
                        <IconText.H
                          icon={() => (
                            <PictureOutlined
                              style={{ fontSize: 20, color: COLORS.yellowHero }}
                            />
                          )}
                          label={`${
                            mine_collection === undefined
                              ? "..."
                              : mine_collection.length
                          }  Owned Pokemon`}
                          fontFamily={FONTS.extrabold}
                          fontSize={10}
                          color={COLORS.grey500}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </div>
            </View>
          </div>
        )}
        <Spacer height={240} />
        <div>
          <View style={_homeDesktop.containerBarNonFix(_zIndexBase)}>
            <View style={_homeDesktop.subContainerBarNonFix(_zIndexBase)}>
              <View style={_homeDesktop.subSubContainerBarNonFix()}>
                <View style={{ flex: 1 }} />
                <View style={_homeDesktop.containerIconTextH()}>
                  <IconText.H
                    icon={() => (
                      <PictureOutlined
                        style={{ fontSize: 20, color: COLORS.yellowHero }}
                      />
                    )}
                    label={`${
                      mine_collection === undefined
                        ? "..."
                        : mine_collection.length
                    }  Owned Pokemon`}
                    fontFamily={FONTS.extrabold}
                    fontSize={10}
                    color={COLORS.grey500}
                  />
                </View>
              </View>
            </View>
          </View>
        </div>
        <FlatList
          data={all_pokemon.data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={_homeMobile.containerFlatList(_zIndexBase)}
          renderItem={({ item }) => (
            <CardItem
              name={item.name}
              id={item.id}
              key={`${item.name}_${item.id}`}
            />
          )}
        />
        <Spacer height={20} />
        {!all_pokemon.loading && (
          <div>
            {all_pokemon.loading_more ? (
              <ActivityIndicator size={`large`} color={COLORS.yellowHero} />
            ) : (
              <View style={_homeDesktop.containerLoadMore()}>
                <View style={_homeDesktop.subContainerLoadMore()}>
                  {all_pokemon.params === undefined ? (
                    <div>it is all, nothing more 🤐</div>
                  ) : (
                    <Buttons.LG label={`load more`} onPress={onClickLoadMore} />
                  )}
                </View>
                <Spacer height={30} />
              </View>
            )}
            <Spacer height={50} />
          </div>
        )}
        <Spacer height={20} />
      </View>
    );
  },
  Desktop: () => {
    const dispatch = useDispatch();
    const [offset, setOffset] = useState(0);
    const _zIndexBase = 0;
    const _ratio_window = window.screen.width / window.screen.height;
    const _widhtHeader = _ratio_window * 100;
    const all_pokemon = useSelector((state) => state.all_pokemon);
    const mine_collection = useLiveQuery(() => db.mine_collection.toArray());

    useEffect(() => {
      dispatch(getAllPokemonAction());
      const onScroll = () => setOffset(window.scrollY);
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, [dispatch]);

    const onClickLoadMore = () => {
      dispatch(getAllPokemonActionMore(all_pokemon.params));
    };

    console.log("LOADING_MORE:", all_pokemon.loading_more);

    return (
      <View style={_homeDesktop.container(_zIndexBase)}>
        <View style={_homeDesktop.containerHeader(_zIndexBase)}>
          <Header widthHeader={_widhtHeader} top={-20} />
        </View>
        {offset > 237.5 && (
          <div>
            <View style={_homeDesktop.containerBarFix(_zIndexBase)}>
              <div>
                <View style={_homeDesktop.subContainerBarFix()}>
                  <View style={{ width: "100%" }}>
                    <View style={_homeDesktop.subSubContainerBarFix()}>
                      <Image
                        preview={false}
                        width={60}
                        src={`https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png`}
                      />
                      <View style={{ flex: 1 }} />
                      <View style={_homeDesktop.containerIconTextH()}>
                        <IconText.H
                          icon={() => (
                            <PictureOutlined
                              style={{ fontSize: 20, color: COLORS.yellowHero }}
                            />
                          )}
                          label={`${
                            mine_collection === undefined
                              ? "..."
                              : mine_collection.length
                          }  Owned Pokemon`}
                          fontFamily={FONTS.extrabold}
                          fontSize={10}
                          color={COLORS.grey500}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </div>
            </View>
          </div>
        )}
        <Spacer height={240} />
        <div>
          <View style={_homeDesktop.containerBarNonFix(_zIndexBase)}>
            <View style={_homeDesktop.subContainerBarNonFix(_zIndexBase)}>
              <View style={_homeDesktop.subSubContainerBarNonFix()}>
                <View style={{ flex: 1 }} />
                <View style={_homeDesktop.containerIconTextH()}>
                  <IconText.H
                    icon={() => (
                      <PictureOutlined
                        style={{ fontSize: 20, color: COLORS.yellowHero }}
                      />
                    )}
                    label={`${
                      mine_collection === undefined
                        ? "..."
                        : mine_collection.length
                    }  Owned Pokemon`}
                    fontFamily={FONTS.extrabold}
                    fontSize={10}
                    color={COLORS.grey500}
                  />
                </View>
              </View>
            </View>
          </View>
        </div>
        {all_pokemon.loading ? (
          <>
            <Spacer height={40} />
            <LoadingIndicator color={COLORS.yellowHero} />
          </>
        ) : (
          <>
            <View style={_homeDesktop.containerCards(_zIndexBase)}>
              {all_pokemon.data.map((item, index) => (
                <View
                  key={`${item.name}_${item.id}`}
                  style={_homeDesktop.containerCardItem()}
                >
                  <CardItem
                    name={item.name}
                    id={item.id}
                    height={130}
                    fontSize={10}
                    widthImg={70}
                  />
                </View>
              ))}
            </View>
            <Spacer height={20} />
            <div>
              {all_pokemon.loading_more ? (
                <ActivityIndicator size={`large`} color={COLORS.yellowHero} />
              ) : (
                <View style={_homeDesktop.containerLoadMore()}>
                  <View style={_homeDesktop.subContainerLoadMore()}>
                    {all_pokemon.params === undefined ? (
                      <div>it is all, nothing more 🤐</div>
                    ) : (
                      <Buttons.LG
                        label={`load more`}
                        onPress={onClickLoadMore}
                      />
                    )}
                  </View>
                  <Spacer height={30} />
                </View>
              )}
              <Spacer height={50} />
            </div>
          </>
        )}
        <Spacer height={20} />
      </View>
    );
  },
};

export default PokemonList;
