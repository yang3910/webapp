export default{
    path:"/sports",
    component:()=>import("views/sports"),
    name:"Sports",
    meta:{
        tabBar:false,
        auth:false
     }
}
