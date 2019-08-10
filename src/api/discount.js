import http from 'utils/http.js';

export const discount_choice_api = ()=>http("get","/abc/youhui/list?r=999&page=1&page_size=30&publish_date=")
export const discount_clothes_api = ()=>http("get","/abc/youhui/list?r=1&page=1&page_size=30&publish_date==")
export const discount_digital_api = ()=>http("get","/abc/youhui/list?r=2&page=1&page_size=30&publish_date=")
export const discount_footwear_api = ()=>http("get","/abc/youhui/list?r=3&page=1&page_size=30&publish_date=")
export const discount_interest_api = ()=>http("get","/abc/youhui/list?r=4&page=1&page_size=30&publish_date=")