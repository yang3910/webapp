export default{
    path:"/detail/:goodsid",
    component:()=>import("views/detail"),
    name:"Detail",
    props:true,
    meta:{
        tabBar:false
    }
}