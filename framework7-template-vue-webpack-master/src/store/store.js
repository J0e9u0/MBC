import Vue from "vue";
// Import Vuex
import Vuex from 'vuex'
// Init Vuex Plugin
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cid: 'testc',
    card:{}
  },
  getters:{
    getCid(state){
      return state.cid;
    }
  },
  mutations: {
    setCid(state, cid){
      state.cid = cid;
    }
  }
});
export default store;
