import axios from "axios";
import { SERVER_URL } from "../constants";

export const patientLogin = (credentials) => {
  let user = {
      "name": "Pragati",
      "age": "23"
  }
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':
          'application/json;charset=utf-8',
        'Authorization': 'qabcdefghijkl1232344'
      },
      body: JSON.stringify(user)
    }
    // Fake api for making post requests
    let fetchRes = fetch(
      "http://dummy.restapiexample.com/api/v1/create",
      options);
    fetchRes.then(res =>
      res.json()).then(d => {
        console.log("hello----------------");
      });
  return new Promise((resolve, reject) => {
    axios
      .post(SERVER_URL + "/authentication/login/patient", credentials)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data);
        } else reject();
      });
  });
};

export const hospitalLogin = (credentials) => {
  return new Promise((resolve, reject) => {
    axios
      .post(SERVER_URL + "/authentication/login/hospital", credentials)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const patientSignUp = (credentials) => {
  return new Promise((resolve, reject) => {
    axios
      .post(SERVER_URL + "/authentication/signup/patient", credentials)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
