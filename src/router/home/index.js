export default{
    path:"/home",
    component:()=>import("views/home"),
    name:"Home",
    redirect:"/home/commend",
    children:[
        {
            path:"commend",
            name:"commend",
            component:()=>import("components/commend")
        },

        {
            path:"basketball",
            name:"basketball",
            component:()=>import("components/basketball")
        },
        {
            path:"fitness",
            name:"fitness",
            component:()=>import("components/fitness")
        },
        {
            path:"running",
            name:"running",
            component:()=>import("components/running")
        },
        {
            path:"trend",
            name:"trend",
            component:()=>import("components/trend")
        },
      
    ]
       
    
}