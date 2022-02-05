import React from "react";
import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const sellerlogin = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "http://localhost:8800/sellersauth/sellerslogin",
      user
    );
    dispatch(loginSuccess(res.data));
  

  } catch (err) {
    dispatch(loginFailure());
  }
};

export const buyerlogin = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "http://localhost:8800/buyersauth/buyerslogin",
      user
    );
    dispatch(loginSuccess(res.data));
 
    
  } catch (err) {
    dispatch(loginFailure());
  }
};
