import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  HomeFilled,
  HomeOutlined,
  LeftSquareOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Modal, Tabs, Tag } from "antd";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import useVibrant from "useVibrant";
import { COLORS, FONTS, SIZES, _detailDesktop, _detailMobile } from "../assets";
import {
  Buttons,
  Header,
  IconText,
  LoadingIndicator,
  SearchBar,
  Section,
  Spacer,
  StatItem,
  TextTitle,
  Toaster,
} from "../components";
import history from "../helper/history";
import { addCollectionAction, deleteCollectionAction } from "../redux/actions";
import pokemonService from "../services/pokemonService";

const { TabPane } = Tabs;

const PokemonDetail = {
  Mobile: () => {
    const match = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [resultData, setResultData] = useState();
    const [objectData, setObjectData] = useState([]);
    const getName = match.pathname.split("/")[2];
    const getFromPathName = match.state.from_pathname.split("/")[1];
    const [visibleModal, setVisibleModal] = useState(false);
    const mine_collection = useSelector((state) => state.mine_collection);

    useEffect(() => {
      pokemonService
        .fetchPokemonDetail(getName)
        .then((res) => {
          setResultData(res.data);
          setObjectData(Object.keys(res.data));
        })
        .catch((err) => {
          console.log("ERROR:" + err);
        });

      // return () => {
      //   second
      // }
    }, []);

    const toggleModal = () => {
      setVisibleModal(!visibleModal);
    };

    const onPressBack = () => {
      history.back();
    };

    const onPressAdd = () => {
      dispatch(
        addCollectionAction({
          id: match.state.id,
          image_url: resultData.sprites.front_default,
          name: resultData.species.name,
        })
      );
    };

    const onPressDelete = () => {
      console.log("DELETE");
      Modal.confirm({
        title: "Confirm",
        icon: <ExclamationCircleOutlined />,
        content: "Bla bla ...",
        okText: "OK",
        cancelText: "Cancel",
        onOk() {
          console.log("OK");
          dispatch(
            deleteCollectionAction({
              id: match.state.id,
              image_url: resultData.sprites.front_default,
              name: resultData.species.name,
            })
          );
          navigate("../mine");
        },
      });
    };

    const { colors, done } = useVibrant(`${match.state.link}`);

    //debug_all
    // console.log("PROPS: ", props);
    // console.log("MATCH: ", match);
    // console.log("DATA: ", resultData);
    // console.log("COLOR: ", colors);
    // console.log("DONE: ", done);
    // console.log("MINE_COLLECTION: ", mine_collection.success);
    console.log("WINDOW:", window.location.pathname);
    // console.log("GET_FROM_PATHNAME:", getFromPathName);

    return (
      <View style={_detailMobile.container}>
        <View style={_detailMobile.subContainer(done, colors)}>
          <View style={_detailMobile.containerBack}>
            <TouchableOpacity onPress={onPressBack} style={{ padding: 10 }}>
              <LeftSquareOutlined
                style={_detailMobile.iconBack(done, colors)}
              />
            </TouchableOpacity>
          </View>
          <Spacer width={10} />
          <View style={_detailMobile.containerSearch}>
            <View style={_detailMobile.containerTitlePage}>
              <Text style={_detailMobile.titlePage(done, colors)}>
                {getName}
              </Text>
            </View>
          </View>
          <View style={_detailMobile.containerBack}>
            {resultData !== undefined ? (
              getFromPathName === "mine" ? (
                <TouchableOpacity
                  onPress={onPressDelete}
                  style={{ padding: 10 }}
                >
                  <DeleteOutlined
                    style={_detailMobile.iconBack(done, colors)}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onPressAdd} style={{ padding: 10 }}>
                  <PlusCircleOutlined
                    style={_detailMobile.iconBack(done, colors)}
                  />
                </TouchableOpacity>
              )
            ) : (
              <View style={{ padding: 10 }}>
                <Spacer width={30} />
              </View>
            )}
          </View>
        </View>

        {resultData !== undefined ? (
          <View>
            {done && (
              <>
                <Image
                  source={resultData.sprites.front_default}
                  style={{
                    height: 200,
                    width: 200,
                    zIndex: 3,
                    top: 70 + 70 / 2,
                    transform: [{ translateX: window.screen.width / 2 / 2 }],
                    position: "absolute",
                    // backgroundColor: "white",
                  }}
                />
                <View
                  style={{
                    // backgroundColor: colors.DarkMuted.hex,
                    backgroundColor: colors.LightVibrant.hex,
                    // backgroundColor: colors.DarkVibrant,,
                    // backgroundColor: colors.LightMuted.hex,
                    // backgroundColor: colors.Muted.hex,
                    // backgroundColor:colors.Vibrant.hex,
                    width: "100%",
                    height:
                      window.screen.height / 2 - window.screen.height / 6 + 70,
                    // opacity: 0.3,
                    zIndex: 0,
                  }}
                >
                  {/* <Image
                source={resultData.sprites.front_default}
                style={{ height: 80, width: 80, zIndex: 3 }}
              /> */}
                </View>
              </>
            )}
            <View style={{ paddingHorizontal: SIZES.pagePadding }}>
              <Tabs
                defaultActiveKey="1"
                centered={false}
                style={{ fontFamily: FONTS.bold }}
              >
                <TabPane tab="About" key="1">
                  <ScrollView>
                    {/* <Section.
                    title={`Species`}
                    component={() => {
                      return <Text>{resultData.species.name}</Text>;
                    }}
                  /> */}
                    <Section.H
                      title={`Height`}
                      fontSizeSection={14}
                      component={() => {
                        return (
                          <View style={{ flexDirection: "row" }}>
                            <TextTitle
                              title={resultData.height}
                              width={40}
                              fontSize={14}
                              color={COLORS.grey200}
                            />
                            <TextTitle
                              title={`inch`}
                              width={40}
                              fontSize={14}
                              color={COLORS.grey200}
                            />
                          </View>
                        );
                      }}
                    />
                    <Section.H
                      title={`Weight`}
                      fontSizeSection={14}
                      component={() => {
                        return (
                          <View style={{ flexDirection: "row" }}>
                            <TextTitle
                              title={resultData.weight}
                              width={40}
                              fontSize={14}
                              color={COLORS.grey200}
                            />
                            <TextTitle
                              title={`lbs`}
                              width={40}
                              fontSize={14}
                              color={COLORS.grey200}
                            />
                          </View>
                        );
                      }}
                    />
                    <Section.H
                      fontSizeSection={14}
                      title={`Base Exp`}
                      component={() => {
                        return (
                          <TextTitle
                            title={resultData.base_experience}
                            fontSize={14}
                            color={COLORS.grey200}
                          />
                        );
                      }}
                    />
                    <Section.V
                      title={`Ability`}
                      fontSizeSection={14}
                      component={() => {
                        return (
                          <View
                            style={{
                              flexDirection: "row",
                              width: window.screen.width - 50,
                              flexWrap: "wrap",
                            }}
                          >
                            {resultData.abilities.map((item, index) => (
                              <Tag color={`warning`}>{item.ability.name}</Tag>
                            ))}
                          </View>
                        );
                      }}
                    />
                    <Section.V
                      title={`Types`}
                      fontSizeSection={14}
                      component={() => {
                        return (
                          <View
                            style={{
                              flexDirection: "row",
                              width: window.screen.width - 50,
                              flexWrap: "wrap",
                            }}
                          >
                            {resultData.types.map((item, index) => (
                              <Tag color={`warning`}>{item.type.name}</Tag>
                            ))}
                          </View>
                        );
                      }}
                    />
                  </ScrollView>
                </TabPane>
                <TabPane tab="Stats" key="2">
                  <Section.V
                    fontSizeSection={14}
                    component={() => {
                      return (
                        <FlatList
                          numColumns={2}
                          keyExtractor={(item, index) => index.toString()}
                          data={resultData.stats}
                          renderItem={({ item, index }) => (
                            <StatItem
                              leftText={item.stat.name}
                              rightText={item.base_stat}
                            />
                          )}
                        />
                      );
                    }}
                  />
                </TabPane>
                <TabPane tab="Moves" key="3">
                  <ScrollView style={{ height: window.screen.height / 2 }}>
                    <Section.V
                      // title={`Moves`}
                      component={() => {
                        return (
                          <View
                            style={{
                              flexDirection: "row",
                              width: window.screen.width - 50,
                              flexWrap: "wrap",
                            }}
                          >
                            {resultData.moves.map((item, index) => {
                              const _move_name = item.move.name.replace(
                                /-/g,
                                " "
                              );

                              return (
                                <View style={{ paddingVertical: 5 }}>
                                  <Tag key={index} color={`warning`}>
                                    {_move_name}
                                  </Tag>
                                </View>
                              );
                            })}
                          </View>
                        );
                      }}
                    />
                  </ScrollView>
                </TabPane>
              </Tabs>
            </View>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: COLORS.grey,
              alignItems: "center",
              justifyContent: "center",
              height: window.screen.height / 2 - window.screen.height / 6 + 70,
            }}
          >
            <ActivityIndicator size={`large`} color={COLORS.grey500} />
            <Spacer height={10} />
            <TextTitle
              fontSize={12}
              title={`Loading...`}
              color={COLORS.grey500}
            />
          </View>
        )}
        <Toaster.Mobile />
      </View>
    );
  },
  Desktop: () => {
    const dispatch = useDispatch();
    const match = useLocation();
    const navigate = useNavigate();
    const [offset, setOffset] = useState(0);
    const [resultData, setResultData] = useState();
    const getName = match.pathname.split("/")[2];
    const getFromPathName = match.state.from_pathname.split("/")[1];
    const _zIndexBase = 0;
    const _ratio_window = window.screen.width / window.screen.height;
    const _widhtHeader = _ratio_window * 100;
    const maxWidthMainNav = 900;
    useEffect(() => {
      pokemonService
        .fetchPokemonDetail(getName)
        .then((res) => {
          setResultData(res.data);
        })
        .catch((err) => {
          console.log("ERROR:" + err);
        });
      const onScroll = () => setOffset(window.scrollY);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onPressMine = () => {
      navigate("../mine");
    };

    const onPressHome = () => {
      navigate("..");
    };

    const onPressAdd = () => {
      dispatch(
        addCollectionAction({
          id: match.state.id,
          image_url: resultData.sprites.front_default,
          name: resultData.species.name,
        })
      );
    };

    const onPressDelete = () => {
      console.log("DELETE");
      Modal.confirm({
        title: "Confirm",
        icon: <ExclamationCircleOutlined />,
        content: "Bla bla ...",
        okText: "OK",
        cancelText: "Cancel",
        onOk() {
          console.log("OK");
          dispatch(
            deleteCollectionAction({
              id: match.state.id,
              image_url: resultData.sprites.front_default,
              name: resultData.species.name,
            })
          );
          navigate("../mine");
        },
      });
    };

    const { colors, done } = useVibrant(`${match.state.link}`);

    //debug_all
    // console.log("ALL_POKEMON: ", all_pokemon.data);
    // console.log("OFFSET: ", offset);
    // console.log("WINDOWS_SCREEN_X: ", window.screen.width);
    // console.log("WINDOWS_SCREEN_Y: ", window.screen.height);
    console.log("LOCATION: ", match);
    // console.log("DEVICE:", isMobile);

    return (
      <View style={_detailDesktop.container(_zIndexBase)}>
        <View style={_detailDesktop.containerHeader(_zIndexBase)}>
          <Header
            widthHeader={_widhtHeader}
            top={-10}
            bgColor={done ? colors.LightVibrant.hex : COLORS.yellowHero}
            isImage={false}
            component={() => {
              return (
                <>
                  {resultData !== undefined ? (
                    <Image
                      source={resultData.sprites.front_default}
                      style={{
                        height: 120,
                        width: 120,
                        // backgroundColor: "red",
                      }}
                    />
                  ) : (
                    <>
                      <LoadingIndicator />
                    </>
                  )}
                </>
              );
            }}
          />
        </View>
        <>
          {resultData !== undefined ? (
            <>
              {offset > 157.5 ? (
                <View style={_detailDesktop.containerBarFix(_zIndexBase)}>
                  <View
                    style={{
                      flexDirection: "row",
                      maxWidth: `${maxWidthMainNav}px`,
                      margin: "auto",
                    }}
                  >
                    <View
                      style={{ width: maxWidthMainNav - maxWidthMainNav / 2 }}
                    >
                      <SearchBar color={COLORS.grey} />
                    </View>
                    <Spacer width={30} />
                    <View style={{ flex: 1, backgroundColor: "red" }}>
                      <TouchableOpacity
                        onPress={onPressMine}
                        style={_detailDesktop.containerTouch}
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
                          icon={() => (
                            <DeleteOutlined
                              style={_detailDesktop.icon(COLORS.grey100)}
                            />
                          )}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={_detailDesktop.containerBarNonFix(_zIndexBase)}>
                  <View
                    style={_detailDesktop.subContainerBarNonFix(_zIndexBase)}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        paddingHorizontal: maxWidthMainNav / 2.5,
                        alignItems: "center",
                      }}
                    >
                      <View style={{ height: 30 }}>
                        <Buttons.DesktopSquareHome
                          match={match}
                          onPressHome={onPressHome}
                        />
                      </View>
                      <Spacer width={10} />
                      <View style={_detailDesktop.containerTitleDetail}>
                        <View>
                          <Text
                            style={_detailDesktop.containerTitleDetailText(
                              done,
                              colors
                            )}
                          >
                            {resultData.species.name}
                          </Text>
                        </View>
                      </View>
                      <Spacer width={10} />
                      <View style={{ height: 30 }}>
                        {resultData !== undefined &&
                        getFromPathName === "mine" ? (
                          <Buttons.DesktopSquareDelete
                            match={match}
                            onPressDelete={onPressDelete}
                          />
                        ) : (
                          <Buttons.DesktopSquareAdd
                            match={match}
                            onPressAdd={onPressAdd}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </>
          ) : (
            <ActivityIndicator size={`large`} color={COLORS.white} />
          )}
        </>
        {resultData !== undefined ? (
          <View
            style={{
              maxWidth: maxWidthMainNav,
              paddingHorizontal: 200,
              margin: "auto",
            }}
          >
            <Spacer height={220} />
            <View
              style={{
                // backgroundColor: "red",
                borderRadius: 6,
                borderWidth: 1,
                borderColor: COLORS.grey,
              }}
            >
              <Tabs
                defaultActiveKey="1"
                centered={true}
                style={{ fontFamily: FONTS.bold }}
              >
                <TabPane tab="About" key="1">
                  <ScrollView style={{ paddingHorizontal: 20 }}>
                    <Section.H
                      title={`Height`}
                      fontSizeSection={14}
                      component={() => {
                        return (
                          <View style={{ flexDirection: "row" }}>
                            <TextTitle
                              title={resultData.height}
                              width={40}
                              fontSize={14}
                              color={COLORS.grey200}
                            />
                            <TextTitle
                              title={`inch`}
                              width={40}
                              fontSize={14}
                              color={COLORS.grey200}
                            />
                          </View>
                        );
                      }}
                    />
                    <Section.H
                      title={`Weight`}
                      fontSizeSection={14}
                      component={() => {
                        return (
                          <View style={{ flexDirection: "row" }}>
                            <TextTitle
                              title={resultData.weight}
                              width={40}
                              fontSize={14}
                              color={COLORS.grey200}
                            />
                            <TextTitle
                              title={`lbs`}
                              width={40}
                              fontSize={14}
                              color={COLORS.grey200}
                            />
                          </View>
                        );
                      }}
                    />
                    <Section.H
                      fontSizeSection={14}
                      title={`Base Exp`}
                      component={() => {
                        return (
                          <TextTitle
                            title={resultData.base_experience}
                            fontSize={14}
                            color={COLORS.grey200}
                          />
                        );
                      }}
                    />
                    <Section.V
                      title={`Ability`}
                      fontSizeSection={14}
                      component={() => {
                        return (
                          <View
                            style={{
                              flexDirection: "row",
                              width: window.screen.width - 50,
                              flexWrap: "wrap",
                            }}
                          >
                            {resultData.abilities.map((item, index) => (
                              <Tag color={`warning`}>{item.ability.name}</Tag>
                            ))}
                          </View>
                        );
                      }}
                    />
                    <Section.V
                      title={`Types`}
                      fontSizeSection={14}
                      component={() => {
                        return (
                          <View
                            style={{
                              flexDirection: "row",
                              width: window.screen.width - 50,
                              flexWrap: "wrap",
                            }}
                          >
                            {resultData.types.map((item, index) => (
                              <Tag color={`warning`}>{item.type.name}</Tag>
                            ))}
                          </View>
                        );
                      }}
                    />
                  </ScrollView>
                </TabPane>
                <TabPane tab="Stats" key="2">
                  <ScrollView
                    style={{
                      paddingHorizontal: 20,
                    }}
                  >
                    <Section.V
                      fontSizeSection={14}
                      component={() => {
                        return (
                          <FlatList
                            numColumns={3}
                            keyExtractor={(item, index) => index.toString()}
                            data={resultData.stats}
                            renderItem={({ item, index }) => (
                              <StatItem
                                leftText={item.stat.name}
                                rightText={item.base_stat}
                              />
                            )}
                          />
                        );
                      }}
                    />
                  </ScrollView>
                </TabPane>
                <TabPane tab="Moves" key="3">
                  <ScrollView
                    style={{
                      height: 500,
                      paddingHorizontal: 20,
                    }}
                  >
                    <Section.V
                      // title={`Moves`}
                      component={() => {
                        return (
                          <View
                            style={{
                              flexDirection: "row",
                              minWidth: 200,
                              flexWrap: "wrap",
                            }}
                          >
                            {resultData.moves.map((item, index) => {
                              const _move_name = item.move.name.replace(
                                /-/g,
                                " "
                              );

                              return (
                                <View style={{ paddingVertical: 5 }}>
                                  <Tag key={index} color={`warning`}>
                                    {_move_name}
                                  </Tag>
                                </View>
                              );
                            })}
                          </View>
                        );
                      }}
                    />
                  </ScrollView>
                </TabPane>
              </Tabs>
            </View>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: COLORS.grey,
              alignItems: "center",
              justifyContent: "center",
              height: window.screen.height / 2 - window.screen.height / 6 + 70,
            }}
          >
            <LoadingIndicator />
          </View>
        )}
        <Spacer height={240} />
        <Toaster.Desktop />
      </View>
    );
  },
};

export default PokemonDetail;
