import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  LeftSquareOutlined,
  PlusCircleOutlined,
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
} from "react-native-web";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useVibrant from "../lib/useVibrant";
import { COLORS, FONTS, SIZES, _detailDesktop, _detailMobile } from "../assets";
import {
  Buttons,
  Header,
  LoadingIndicator,
  Modals,
  Section,
  Spacer,
  StatItem,
  TextTitle,
  Toaster,
} from "../components";
import { db } from "../db";
import history from "../helper/history";
import {
  addCollectionAction,
  deleteCollectionSuccessType,
  setCollectionDefaultType,
} from "../redux/actions";
import pokemonService from "../services/pokemonService";
import { getMatchPrime } from "../helper/primeNumber";

const { TabPane } = Tabs;

const PokemonDetail = {
  Mobile: () => {
    const match = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [resultData, setResultData] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [unableToAdd, setUnableToAdd] = useState(true);
    const [loadingAddDelay, setLoadingAddDelay] = useState(false);
    const [successAddDelay, setSuccessAddDelay] = useState();
    const getName = match.pathname.split("/")[2];
    const getFromPathName = match.state.from_pathname.split("/")[1];
    const [pokemonItem, setPokemonItem] = useState({
      name: "",
      image_url: "",
      id_pokemon: "",
      nickname: "",
    });
    const mine_collection_redux = useSelector((state) => state.mine_collection);

    useEffect(() => {
      pokemonService
        .fetchPokemonDetail(getName)
        .then((res) => {
          setResultData(res.data);
        })
        .catch((err) => {
          console.log("ERROR:" + err);
        });
    }, [getName]);

    const options = {
      onClose: () => setUnableToAdd(true),
    };

    const addItemDelay = async () => {
      try {
        const _second = new Date();
        return getMatchPrime(_second.getSeconds());
      } catch (error) {
        alert(`Error When Add ${error}`);
      }
    };

    const addCollectionItem = async () => {
      try {
        const id = await db.mine_collection.add(pokemonItem);
        toast.success(`${pokemonItem.name} successfully added ${id}`, options);
      } catch (error) {
        toast.error(
          `failed to add ${pokemonItem.name}, please try different nickname`
        );
      }
    };

    const deleteCollectionItemOnDb = async () => {
      try {
        await db.mine_collection
          .where("id")
          .equals(match.state.id_obj)
          .delete();
      } catch (error) {
        alert(`Error ${error}`);
      }
    };

    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleOk = () => {
      setIsModalVisible(false);
      addCollectionItem().then(() => {
        dispatch(setCollectionDefaultType());
      });
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const handleChange = (e) => {
      if (e.nativeEvent.text.length > 0) {
        setPokemonItem({
          nickname: e.nativeEvent.text,
          name: mine_collection_redux.data.name,
          image_url: mine_collection_redux.data.image_url,
          id_pokemon: mine_collection_redux.data.id,
        });
        setUnableToAdd(false);
      } else {
        setUnableToAdd(true);
      }
    };

    const onPressBack = () => {
      history.back();
    };

    const onPressAdd = () => {
      showModal();
      setLoadingAddDelay(true);
      setTimeout(() => {
        addItemDelay()
          .then((res) => {
            if (res === true) {
              setSuccessAddDelay(res);
              dispatch(
                addCollectionAction({
                  id: match.state.id,
                  image_url: resultData.sprites.front_default,
                  name: resultData.species.name,
                })
              );
            } else {
              setSuccessAddDelay(res);
            }
          })
          .then(() => {
            setLoadingAddDelay(false);
          });
      }, 5000);
    };

    const onPressDelete = () => {
      console.log("DELETE");
      Modal.confirm({
        title: "Confirm",
        icon: <ExclamationCircleOutlined />,
        content: "Are you sure for remove this Item ?",
        okText: "Yes",
        cancelText: "No",
        onOk() {
          deleteCollectionItemOnDb()
            .then(() => {
              navigate("../mine");
            })
            .then(() => {
              dispatch(deleteCollectionSuccessType());
            });
        },
      });
    };

    const { colors, done } = useVibrant(`${match.state.link}`);

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
                backgroundColor: done
                  ? colors.LightVibrant.hex
                  : COLORS.yellowHero,
                width: "100%",
                height:
                  window.screen.height / 2 - window.screen.height / 6 + 70,
                zIndex: 0,
              }}
            >
              {match.state.nickname !== undefined && (
                <View
                  style={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    backgroundColor: COLORS.blackTransparent,
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 6,
                  }}
                >
                  <Text
                    style={{
                      textTransform: "capitalize",
                      fontSize: 12,
                      fontFamily: FONTS.bold,
                      color: COLORS.yellowBlack100,
                    }}
                  >
                    {match.state.nickname}
                  </Text>
                </View>
              )}
            </View>

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
        <Modals
          isLoading={loadingAddDelay}
          isSuccess={successAddDelay}
          onCancel={handleCancel}
          onOk={handleOk}
          visible={isModalVisible}
          card_id={mine_collection_redux.data.id}
          card_name={mine_collection_redux.data.name}
          bgColor={COLORS.white}
          disabled={unableToAdd}
          onChange={(e) => handleChange(e)}
        />
      </View>
    );
  },
  Desktop: () => {
    const dispatch = useDispatch();
    const match = useLocation();
    const navigate = useNavigate();
    const [resultData, setResultData] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [unableToAdd, setUnableToAdd] = useState(true);
    const [loadingAddDelay, setLoadingAddDelay] = useState(false);
    const [successAddDelay, setSuccessAddDelay] = useState();
    const [pokemonItem, setPokemonItem] = useState({
      name: "",
      image_url: "",
      id_pokemon: "",
      nickname: "",
    });
    const mine_collection_redux = useSelector((state) => state.mine_collection);
    const getName = match.pathname.split("/")[2];
    const getFromPathName = match.state.from_pathname.split("/")[1];
    const _zIndexBase = 0;
    const _ratio_window = window.screen.width / window.screen.height;
    const _widhtHeader = _ratio_window * 100;
    useEffect(() => {
      pokemonService
        .fetchPokemonDetail(getName)
        .then((res) => {
          setResultData(res.data);
        })
        .catch((err) => {
          console.log("ERROR:" + err);
        });
    }, [getName]);

    const addItemDelay = async () => {
      try {
        const _second = new Date();
        return getMatchPrime(_second.getSeconds());
      } catch (error) {
        alert(`Error When Add ${error}`);
      }
    };

    const addCollectionItem = async () => {
      try {
        const id = await db.mine_collection.add(pokemonItem);
        toast.success(`${pokemonItem.name} successfully added ${id}`);
      } catch (error) {
        toast.error(
          `failed to add ${pokemonItem.name}, please try different nickname`
        );
      }
    };

    const deleteCollectionItemOnDb = async () => {
      try {
        await db.mine_collection
          .where("id")
          .equals(match.state.id_obj)
          .delete();
      } catch (error) {
        alert(`Error ${error}`);
      }
    };

    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleOk = () => {
      setIsModalVisible(false);
      addCollectionItem().then(() => {
        dispatch(setCollectionDefaultType());
      });
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const handleChange = (e) => {
      if (e.nativeEvent.text.length > 0) {
        setPokemonItem({
          nickname: e.nativeEvent.text,
          name: mine_collection_redux.data.name,
          image_url: mine_collection_redux.data.image_url,
          id_pokemon: mine_collection_redux.data.id,
        });
        setUnableToAdd(false);
      } else {
        setUnableToAdd(true);
      }
    };

    const onPressBack = () => {
      history.back();
    };

    const onPressAdd = () => {
      showModal();
      setLoadingAddDelay(true);
      setTimeout(() => {
        addItemDelay()
          .then((res) => {
            if (res === true) {
              setSuccessAddDelay(res);
              dispatch(
                addCollectionAction({
                  id: match.state.id,
                  image_url: resultData.sprites.front_default,
                  name: resultData.species.name,
                })
              );
            } else {
              setSuccessAddDelay(res);
            }
          })
          .then(() => {
            setLoadingAddDelay(false);
          });
      }, 5000);
    };

    const onPressDelete = () => {
      console.log("DELETE");
      Modal.confirm({
        title: "Confirm",
        icon: <ExclamationCircleOutlined />,
        content: "Are you sure for remove this Item ?",
        okText: "Yes",
        cancelText: "No",
        onOk() {
          deleteCollectionItemOnDb()
            .then(() => {
              navigate("../mine");
            })
            .then(() => {
              dispatch(deleteCollectionSuccessType());
            });
        },
      });
    };

    const { colors, done } = useVibrant(`${match.state.link}`);

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
                      style={_detailDesktop.imgHeader()}
                    />
                  ) : (
                    <>
                      <LoadingIndicator color={COLORS.white} />
                    </>
                  )}
                </>
              );
            }}
          />
        </View>
        <Spacer height={240} />
        <>
          {resultData !== undefined ? (
            <div>
              <View style={_detailDesktop.containerBarNonFix(_zIndexBase)}>
                <View style={_detailDesktop.subContainerBarNonFix(_zIndexBase)}>
                  <View style={_detailDesktop.subSubContainerBarNonFix()}>
                    <View style={{ height: 30 }}>
                      <Buttons.DesktopBack
                        match={match}
                        onPressBack={onPressBack}
                      />
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
                    <Spacer width={10} />
                    <View style={_detailDesktop.containerIconTextH()}>
                      <TextTitle
                        title={resultData.species.name}
                        fontSize={12}
                        width={`100%`}
                        textAlign={`center`}
                        textTransform="capitalize"
                      />
                      {match.state.nickname !== undefined && (
                        <TextTitle
                          title={`|`}
                          fontSize={12}
                          width={`100%`}
                          textAlign={`center`}
                          color={COLORS.grey}
                        />
                      )}
                      {match.state.nickname !== undefined && (
                        <TextTitle
                          width={`100%`}
                          title={match.state.nickname}
                          fontSize={10}
                          color={COLORS.grey200}
                        />
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </div>
          ) : (
            <ActivityIndicator size={`large`} color={COLORS.white} />
          )}
        </>
        {resultData !== undefined ? (
          <div>
            <View style={_detailDesktop.containerTabs()}>
              <View style={_detailDesktop.subContainerTabs()}>
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
                            <View style={_detailDesktop.containerCompAbility()}>
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
                            <View style={_detailDesktop.containerCompTypes()}>
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
                    <ScrollView style={_detailDesktop.containerSectionStat()}>
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
                    <ScrollView style={_detailDesktop.containerSectionMove()}>
                      <Section.V
                        // title={`Moves`}
                        component={() => {
                          return (
                            <View style={_detailDesktop.containerCompMove()}>
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
          </div>
        ) : (
          <View style={_detailDesktop.containerLoadingIndicator()}>
            <LoadingIndicator />
          </View>
        )}
        <Toaster.Desktop />
        <Modals
          isLoading={loadingAddDelay}
          isSuccess={successAddDelay}
          onCancel={handleCancel}
          onOk={handleOk}
          visible={isModalVisible}
          card_id={mine_collection_redux.data.id}
          card_name={mine_collection_redux.data.name}
          bgColor={COLORS.white}
          disabled={unableToAdd}
          onChange={(e) => handleChange(e)}
        />
      </View>
    );
  },
};

export default PokemonDetail;
