import http from "utils/http.js";
export const goods_api = ()=>http("get","/homefis/getNews?pageSize=20&param_str=&type=&channel_type=")
export const goods_api_basketball = ()=>http("get","/homefis/getNews?pageSize=20&param_str=&type=basketball&channel_type=")
export const goods_api_running = ()=>http("get","/homefis/getNews?pageSize=20&param_str=&type=running&channel_type=")
export const goods_api_fitness = ()=>http("get","/homefis/getNews?pageSize=20&param_str=&type=fitness&channel_type=")
export const goods_api_trend = ()=>http("get","/homefis/getNews?pageSize=20&param_str=&type=freestyle&channel_type=")
export const sports_api_basketball = ()=>http("get","/sports/getNews?pageSize=20&param_str=1564945214_1564993449_2&type=basketball&newsId=&channel_type=")

//http://m.shihuo.cn/sports/getNews?pageSize=20&param_str=&type=running&newsId=&channel_type=