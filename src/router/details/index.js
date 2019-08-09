export default{
    path:"/details/:id",
    component:()=>import("views/details"),
    name:"Details",
    meta:{
            tabBar:true,
            auth:false
         },
         props:true
}