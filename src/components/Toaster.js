import React from "react";
import { ToastContainer } from "react-toastify";
import { FONTS, SIZES } from "../assets";

const Toaster = {
  Desktop: () => (
    <ToastContainer
      style={{
        maxWidth: SIZES.maxWidthContentInt,
        width: SIZES.maxWidthContentInt - SIZES.maxWidthContentInt / 3,
      }}
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  ),
  Mobile: () => (
    <ToastContainer
      style={{
        width: window.screen.width - SIZES.pagePadding * 2,
        paddingVertical: 10,
        left: 20,
        top: 10,
        fontFamily: FONTS.bold,
        borderRadius: 10,
        overflow: "hidden",
      }}
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  ),
};

export default Toaster;
