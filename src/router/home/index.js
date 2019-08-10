export default{
    path:"/home",
    component:()=>import("views/home"),
    name:"Home",
    redirect:"/home/commend",
    meta:{
        tabBar:true,
        auth:false
     },
    children:[
        {
            path:"commend",
            name:"commend",
            component:()=>import("components/commend"),
            meta:{
                tabBar:true,
            }
        },

        {
            path:"basketball",
            name:"basketball",
            component:()=>import("components/basketball"),meta:{
                tabBar:true,
            }
        },
        {
            path:"fitness",
            name:"fitness",
            component:()=>import("components/fitness"),meta:{
                tabBar:true,
            }
        },
        {
            path:"running",
            name:"running",
            component:()=>import("components/running"),
            meta:{
                tabBar:true,
            }
        },
        {
            path:"trend",
            name:"trend",
            component:()=>import("components/trend"),
            meta:{
                tabBar:true,
            }
        },
      
    ]
       
    
}