import Vue from "vue"
import VueRouter from 'vue-router';
import Home from "./home"
import Discount from "./discount"
import Find from "./find"
import Equip from "./equip"
import More from "./more"
import Sports from "./sports";
import Running from "./running";
import Shop from "./shop"
import Search from "./search"
import Details from "./details"
import Ranking from "./ranking"
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        Home,
        Discount,
        Find,
        Equip,
        More,
        Sports,
        Running,
        Shop,
        Search,
        Details,
        Ranking
    ]
})