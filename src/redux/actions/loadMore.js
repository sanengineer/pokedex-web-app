import * as actionTypes from "../constants";

export const loadMoreStart = () => ({
  type: actionTypes.LOAD_MORE_START,
});

export const loadMoreFail = () => ({
  type: actionTypes.LOAD_MORE_FAIL,
});
