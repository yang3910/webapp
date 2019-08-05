export default{
    path:"/discount",
    component:()=>import("views/discount"),
    // redirect:"/discount/choice",
    name:"Discount",
    children:[
        {
            path:"choice",
            component:()=>import("components/choice"),
            name:"Choice",
        },
        {
            path:"clothes",
            component:()=>import("components/clothes"),
            name:"Clothes",
        },
        {
            path:"digital",
            component:()=>import("components/digital"),
            name:"Digital",
        },
        {
            path:"footwear",
            component:()=>import("components/footwear"),
            name:"Footwear",
        },
        {
            path:"interest",
            component:()=>import("components/interest"),
            name:"Interest",
        },
        // {
        //     path:"interest",
        //     component:()=>import("components/interest"),
        //     name:"Interest",
        // },
    ]
}