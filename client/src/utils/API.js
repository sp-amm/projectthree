import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/user");
  },
  // Gets the post with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Saves a post to the database
  savePost: function(countData) {
    return axios.post("/api/user", countData);
  }
};
