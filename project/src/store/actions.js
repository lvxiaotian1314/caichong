import http from "axios"
import api from "@/api"
import { Object } from "core-js/library/web/timers";
export default{
    //对登陆用户名密码进行验证
    submit(store,user){
        return http.get(api.host+"/users").then(res=>{
            let tmpResult=res.data;
            let userNameBol=false;
            let psdBol=false;
            if(tmpResult.length>0){
                for(let i=0;i<tmpResult.length;i++){
                    if(tmpResult[i].userName===user.userName){
                        userNameBol=true;
                        if(tmpResult[i].password===user.password){
                            psdBol=true
                        }
                    }
                }
            }
            if(!userNameBol){
                return {"msg":"用户名无效,请注册"}
            }else if(!psdBol){
                return {
                    "msg":"密码错误"
                }
            }
        })
    },
    register(store,obj){
        console.info(obj);
        http.post(api.host+"/users",obj).then(res=>{
            if(res.data.id>0){
                store.commit("GET_USER",obj)
                return {"msg":"注册成功"}
            }
            else{
                return {"msg":"注册失败"}
            }
        })
    }
}