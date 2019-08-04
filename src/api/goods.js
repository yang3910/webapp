import http from "utils/http.js";
export const goods_api = ()=>http("get","/homefis/getNews?pageSize=20&param_str=&type=&channel_type=")