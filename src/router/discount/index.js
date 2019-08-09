export default{
    path:"/discount",
    component:()=>import("views/discount"),
    name:"Discount",
    meta:{
            tabBar:true,
            auth:false
         }
}