import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQ3OWFjMGVmNTAwNDZmYTVkZTk4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODk4NjIxMiwiZXhwIjoxNjQ5MjQ1NDEyfQ.ZiTWe8Svu6hT1VdtUBB7ufF1HBLysDEvtmGc2tdw0j0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
