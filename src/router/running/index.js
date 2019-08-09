export default{
    path:"/running",
    component:()=>import("views/running"),
    name:"Running",
    meta:{
        tabBar:false,
        auth:false
     }
}