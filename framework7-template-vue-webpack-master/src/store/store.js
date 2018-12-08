import Vue from "vue";
// Import Vuex
import Vuex from 'vuex'
// Init Vuex Plugin
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cid: 'testc',
    infoCard:{

    }
  },
  getters:{
    getCid(state){
      return state.cid;
    }
  },
  mutations: {
    setCid(state, cid){
      state.cid = cid;
    },
    setInfoCard(state, infoCard){
      state.infoCard = infoCard;
    }
  }
});
export default store;
