export default{
    path:"/discount",
    component:()=>import("views/discount"),
    redirect:"/discount/choice",
    name:"Discount",
    children:[
        {
            path:"choice",
            component:()=>import("components/discount/choice"),
            name:"Choice",
        },
        {
            path:"clothes",
            component:()=>import("components/discount/clothes"),
            name:"Clothes",
        },
        {
            path:"digital",
            component:()=>import("components/discount/digital"),
            name:"Digital",
        },
        {
            path:"footwear",
            component:()=>import("components/discount/footwear"),
            name:"Footwear",
        },
        {
            path:"interest",
            component:()=>import("components/discount/interest"),
            name:"Interest",
        },
        // {
        //     path:"interest",
        //     component:()=>import("components/discount/interest"),
        //     name:"Interest",
        // },
    ]
}