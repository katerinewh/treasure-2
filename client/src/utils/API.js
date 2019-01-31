import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', { username: username, email: email, password: password });
  },
  postItem: (body) => {
    console.log(body)
    return axios.post("/api/additem", { itemName: body.itemName, itemDescription: body.itemDescription, userId:body.userId })
  }

};
