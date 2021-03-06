import Vue from "vue"
import VueRouter from 'vue-router';
import Home from "./home"
import Discount from "./discount"
import Find from "./find"
import Equip from "./equip"
import More from "./more"

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
        More
    ]
})