import * as actionTypes from "../types";
import { patientLogin, hospitalLogin, patientSignUp } from "../../Network/authentication";

export const Login = (credentials) => (dispatch) => {
  return new Promise((resolve, reject) => {
    patientLogin(credentials)
      .then((res) => {
      window.zipy.identify("1234", {
        customerName: "Pixelphone Inc.",
        phone: "202-555-0112",
        age: "18"
      });
        dispatch({
          type: actionTypes.LOGIN,
          payload: res,
        });
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
};

export const Logout = () => (dispatch) => {
  window.zipy.anonymize();
  dispatch({
    type: actionTypes.LOGOUT,
  });
};

export const LoginHospital = (credentials) => (dispatch) => {
  return new Promise((resolve, reject) => {
    hospitalLogin(credentials)
      .then((res) => {
        dispatch({
          type: actionTypes.LOGIN,
        });
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const SignupPatient = (credentials) => (dispatch) => {
  return new Promise((resolve, reject) => {
    patientSignUp(credentials)
      .then((res) => {
        console.log(res);
        dispatch({
          type: actionTypes.LOGIN,
          payload: res,
        });
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
