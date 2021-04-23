import Vue from "vue";
import Vuex from "vuex";
import posts from "./moduels/posts";
import post from "./moduels/post";
import customers from "./moduels/customers";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    post,
    customers
  },
});
