import store from "../store";
import * as actionTypes from "../constants";
import { toast } from "react-toastify";

const search = (key, arr) => {
  return arr.filter((item) => {
    return item.id === parseInt(key);
  });
};

const removeOne = (arr, obj) => {
  const _array = arr.filter((item) => item.id !== obj.id);
  return _array;
};

export const setCollectionDefaultType = () => ({
  type: actionTypes.SET_COLLECTION_DEFAULT,
});

export const addCollectionAction = (params) => (dispatch) => {
  return dispatch(addCollectionSuccessType(params));
};

export const addCollectionActionV1 = (params) => (dispatch) => {
  const array = store.getState().mine_collection.data;
  if (search(params.id, array).length == 0) {
    // console.log("SUCCESS_ADD_COLLECTION");
    toast.success("success add to collection");
    return dispatch(addCollectionSuccessType(params));
  } else if (search(params.id, array).length > 0) {
    // console.log("FAILED_ADD_COLLECTION");
    toast.error("this item is available on your collection");
    return dispatch(addCollectionFailedType());
  }
};

export const deleteCollectionAction = () => (dispatch) => {
  return dispatch(deleteCollectionSuccessType());
};

export const deleteCollectionActionV1 = (params) => (dispatch) => {
  console.log("DELETE_COLLECTION_SUCCESS_TYPE", params);
  const array = store.getState().mine_collection.data;
  const new_obj = removeOne(array, params);
  return dispatch(deleteCollectionSuccessType(new_obj));
};

export const addCollectionSuccessType = (params) => ({
  type: actionTypes.ADD_COLLECTION_SUCCESS,
  payload: params,
});

export const addCollectionFailedType = () => ({
  type: actionTypes.ADD_COLLECTION_FAILED,
});

export const deleteCollectionSuccessType = () => ({
  type: actionTypes.DELETE_COLLECTION_SUCCESS,
});

export const deleteCollectionSuccessTypeV1 = (params) => ({
  type: actionTypes.DELETE_COLLECTION_SUCCESS,
  payload: params,
});

export const deleteCollectionFailedType = () => ({
  type: actionTypes.DELETE_COLLECTION_FAILED,
});
