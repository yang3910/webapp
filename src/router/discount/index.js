export default{
    path:"/discount",
    component:()=>import("views/discount"),
    redirect:"/discount/choice",
    name:"Discount",
    meta:{
        tabBar:true,
    },
    children:[
        {
            path:"choice",
            component:()=>import("components/discount/choice"),
            name:"Choice",
            props:true,
            meta:{
                tabBar:true,
            },
        },
        {
            path:"clothes",
            component:()=>import("components/discount/clothes"),
            name:"Clothes",
            meta:{
                tabBar:true,
            },
        },
        {
            path:"digital",
            component:()=>import("components/discount/digital"),
            name:"Digital",
            meta:{
                tabBar:true,
            },
        },
        {
            path:"footwear",
            component:()=>import("components/discount/footwear"),
            name:"Footwear",
            meta:{
                tabBar:true,
            },
        },
        {
            path:"interest",
            component:()=>import("components/discount/interest"),
            name:"Interest",
            meta:{
                tabBar:true,
            },
        },
        // {
        //     path:"interest",
        //     component:()=>import("components/discount/interest"),
        //     name:"Interest",
        // },
    ]
}