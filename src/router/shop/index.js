export default{
    path:"/shop",
    component:()=>import("views/shop"),
    meta:{
        tabBar:false,
        auth:false
     },

    name:"Shop",
    children:[
        {
            path:"list",
            name:"list",
            component:()=>import("components/list")
        },]
}