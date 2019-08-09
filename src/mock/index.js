import Mock from 'mockjs';
import url from 'url';

var data =Mock.mock({
    "data|30":[
        {
          "goodsid|+1":0,
          "goodsName":"@ctitle(3, 5)",
          "goodsPrice|1-100.2":1,
          "introduce":"@cparagraph",
          "address":"@county(true)",
          "tel":/^1(3|5|7|8|9)\d{9}$/,
          "goodsImg":"@color",
        }
    ]
})
// console.log(data);
Mock.mock(/\youhui\/goodsList/,"get",function(options){
  let id = url.parse(options.url,true).query.goodsid;
  let goods = data.data.find((item)=>{
    // console.log(item);
    return item.goodsid==id;
  })
  // console.log(id,goods,123);
    
    return goods;
})