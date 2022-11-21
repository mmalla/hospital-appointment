import * as actionTypes from "../types";
import { patientLogin, hospitalLogin, patientSignUp } from "../../Network/authentication";

export const Login = (credentials) => (dispatch) => {
  return new Promise((resolve, reject) => {
    patientLogin(credentials)
      .then((res) => {
      window.zipy.identify("test_enduserinfo", {
        customerName: "Pixelphone Inc.",
        phone: "202-555-0112",
        firstName: "Jack",
        lastName: "Mark",
        age: "30"
      });
      
     const circularReference = {};
    circularReference.myself = circularReference;
    console.log(circularReference);
      
      try {
      console.log('Hello here');
      let a= null;
      let myObj = {
        hello: 'This is hello',
        test: 'This is test',
        keysfs: 'safsafdsfs'
      }
      let myObj1 = {
        hello: 'This is hello',
        test: 'This is test',
        keysfs: 'safsafdsfs'
      }
      console.log('My Obj');
      console.log(myObj);

      // const map1 = new Map();

      // map1.set('a', 1);
      // map1.set('b', 2);
      // map1.set('c', 3);

      // console.log('Testing Map');
      // console.log(map1);

      const circularReference = { myself: {}};
      circularReference.myself = circularReference;

      console.log('Circular Reference: ', circularReference);


      console.log(myObj, myObj1);
      a.split(',');
      
    } catch (err) {
      console.error('ERROR ', new Error(err));
      console.error('Test error');
      encodeURI('\uD800');  //URI Error
    }
      /* GraphQL testing */
      const data = JSON.stringify({
          query: ` {
            users  {
                id
                email
                name
            }
        }`
        });
      
      const response =   fetch(
          'https://api.mocki.io/v2/c4d7a195/graphql',
          {
            method: 'post',
            body: data,
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': data.length
            },
          }
        );
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
