import {get,post,baseURL} from "@/axios/axios.js";
//获取baseURL
export const windowBaseURL=function(){return baseURL()}
//判断访问URL对应业主是否是代理类型
export const isOwnerProxy=(params)=>{return get("/owner/isProxy",params)};
//登录
export const login=(params)=>{return post("/login",params)};