import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
        flag:false,
        val:"",
        list:JSON.parse(sessionStorage.getItem("list"))||[]
}
const actions = {}
const mutations = {
    changeHandle(state,e){
        state.val=e.target.value;
        state.list.push(state.val)
    },
    handleMore(state){
         state.flag=!state.flag
    }
}


export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {}
})