import http from "utils/http.js"
// export const introduce_api = () => http("get", "/homefis/getNews?pageSize=20&param_str=&type=&channel_type=")
export const goods_api = () => http("get", "/abc/zhuangbei/getHomeNews")

export const rank_api = () => http("get", "/abc/zhuangbei/getSalesRankInfo")