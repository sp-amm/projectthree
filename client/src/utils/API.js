import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/count");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/count/" + id);
  },
  // Saves a post to the database
  savePost: function(countData) {
    return axios.post("/api/posts", countData);
  }
};
