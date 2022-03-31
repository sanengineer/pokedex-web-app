import { PictureOutlined } from "@ant-design/icons";
import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native-web";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { COLORS, FONTS, _homeDesktop, _mobileCollection } from "../assets";
import { _collectionDesktop } from "../assets/styles/desktopCollection";
import {
  CardItem,
  Header,
  IconText,
  LoadingIndicator,
  Spacer,
  TextTitle,
  Toaster,
} from "../components";
import { db } from "../db";
import {
  deleteCollectionFailedType,
  setCollectionDefaultType,
} from "../redux/actions";

const MyPokemonList = {
  Mobile: () => {
    const dispatch = useDispatch();
    const [offset, setOffset] = useState(0);
    const _zIndexBase = 0;
    const _ratio_window = window.screen.width / window.screen.height;
    const _widhtHeader = _ratio_window * 100;
    const mine_collection = useLiveQuery(() => db.mine_collection.toArray());
    const mine_collection_redux = useSelector((state) => state.mine_collection);

    useEffect(() => {
      const onScroll = () => setOffset(window.scrollY);
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      const options = {
        onClose: () => dispatch(deleteCollectionFailedType()),
      };
      if (mine_collection_redux.success.delete === true) {
        toast.success("success delete from collection", options);
      }
    }, [mine_collection_redux.success.delete, dispatch]);

    return (
      <View style={_mobileCollection.container(_zIndexBase)}>
        <View style={_homeDesktop.containerHeader(_zIndexBase)}>
          <Header
            widthHeader={_widhtHeader}
            top={-20}
            isImage={false}
            component={() => (
              <Text style={_collectionDesktop.containerHeaderTitle()}>
                Mine Collection
              </Text>
            )}
          />
        </View>
        {offset > 237.5 && (
          <div>
            <View style={_homeDesktop.containerBarFix(_zIndexBase)}>
              <div>
                <View style={_homeDesktop.subContainerBarFix()}>
                  <View style={{ width: "100%" }}>
                    <View style={_homeDesktop.subSubContainerBarFix()}>
                      <TextTitle
                        title={`Mine Collection`}
                        fontSize={12}
                        color={COLORS.yellowHero}
                        fontFamily={FONTS.extrabold}
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
          data={mine_collection === undefined ? [] : mine_collection}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={_mobileCollection.containerFlatList(_zIndexBase)}
          renderItem={({ item }) => (
            <CardItem
              name={item.name}
              id={item.id_pokemon}
              id_obj={item.id}
              key={`${item.name}_${item.id}`}
              nickname={item.nickname}
              isNickname={true}
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
    const [offset, setOffset] = useState(0);
    const _zIndexBase = 0;
    const _ratio_window = window.screen.width / window.screen.height;
    const _widhtHeader = _ratio_window * 100;
    const mine_collection = useLiveQuery(() => db.mine_collection.toArray());
    const mine_collection_redux = useSelector((state) => state.mine_collection);

    useEffect(() => {
      const onScroll = () => setOffset(window.scrollY);
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      const options = {
        onClose: () => dispatch(setCollectionDefaultType()),
      };
      if (mine_collection_redux.success.delete === true) {
        toast.success("success delete from collection", options);
      }
    }, [mine_collection_redux.success.delete, dispatch]);

    return (
      <View style={_homeDesktop.container(_zIndexBase)}>
        <View style={_homeDesktop.containerHeader(_zIndexBase)}>
          <Header
            widthHeader={_widhtHeader}
            top={-20}
            isImage={false}
            component={() => (
              <Text style={_collectionDesktop.containerHeaderTitle()}>
                Mine Collection
              </Text>
            )}
          />
        </View>
        {offset > 237.5 && (
          <div>
            <View style={_homeDesktop.containerBarFix(_zIndexBase)}>
              <div>
                <View style={_homeDesktop.subContainerBarFix()}>
                  <View style={{ width: "100%" }}>
                    <View style={_homeDesktop.subSubContainerBarFix()}>
                      <TextTitle
                        title={`Mine Collection`}
                        fontSize={12}
                        color={COLORS.yellowHero}
                        fontFamily={FONTS.extrabold}
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
        <View style={_homeDesktop.containerCards(_zIndexBase)}>
          {mine_collection === undefined ? (
            <LoadingIndicator />
          ) : (
            mine_collection.map((item, index) => (
              <View
                key={`${item.name}_${item.id}`}
                style={_collectionDesktop.containerCardItem()}
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

export default MyPokemonList;
