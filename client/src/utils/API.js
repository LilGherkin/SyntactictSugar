import axios from "axios";

export default {
  // Gets all users
  getusers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getuser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteuser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveuser: function (userData) {
    return axios.post("/api/users", userData);
  },
  // Gets all projects
  getProjects: function () {
    return axios.get("api/projects");
  },
  getComments: function () {
    return axios.get("/api/comments");
  },
  postComment: function (post) {
    return axios.post("/api/comments", post);
  }
};