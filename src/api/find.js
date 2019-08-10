import http from 'utils/http.js';

export const find_tuijian_api = () => http("get","/abc/find/mobileList?tag_id=283&param_str=")
export const find_lanqiu_api = () => http("get","/abc/find/mobileList?tag_id=347&param_str=")
export const find_shipin_api = () => http("get","/abc/find/mobileList?tag_id=281&param_str=")
export const find_zuixin_api = () => http("get","/abc/find/mobileList?tag_id=270&param_str=")
export const find_chaoliu_api = () => http("get","/abc/find/mobileList?tag_id=318&param_str=")