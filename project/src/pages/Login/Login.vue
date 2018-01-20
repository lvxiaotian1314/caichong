<template>
    <div class="main">
        <ul class="login">
            <li>
                <label for="userName">用户名</label><input id="userName" type="text" v-model="userName">
            </li>
            <li>
                <label for="password">密<span class="c-zhan">占</span>码</label><input id="password" type="password" v-model="password">
            </li>
        </ul>
        <div class="login_btn">
            <a href="" class="register">去注册</a>
            <div class="Login" @click="login">马上登陆</div>
        </div>
    </div>
</template>
<script>
import api from '@/api'
export default {
    data(){
        return{
            userName:"",
            password:""
        }
    },
    methods:{
        login(){
            if(this.userName===""){
                this.$msg("提示","请输入用户名")
            }
            else if(this.password===""){
                this.$msg("提示","请输入密码")
            }
            else{
                let that=this;
                let userObj={
                    userName:this.userName,
                    password:this.password
                }
                async function confirmUserName(){
                    let res=await that.$store.dispatch("submit",userObj);
                    await that.$msg("提示",res.msg);
                    if(res.msg==="用户名无效,请注册"){
                        that.$router.push("/register");
                    }
                }
                confirmUserName()
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .main{
        top:0;
        .login{
            padding:10px;
            padding-bottom:0;
            li{
                height:38px;
                font-size:.426667rem;
                input{
                    height:30px;
                    border:0;
                    outline: none;
                    width:6.826667rem;
                    border:1px solid #ddd;
                    border-radius: 2px;
                    margin-left:.533333rem;
                    box-shadow: inset 1px 1px 1px rgba(0,0,0,0.1);
                    font-size:.426667rem;
                    padding-left:.266667rem;
                }
            }
        }
        .login_btn{
            padding:10px;
            position: relative;
            height:85px;
            .register{
                position: absolute;
                top:10px;
                color:#ffa07a;
                font-size:14px;
            }
            .Login{
                height:38px;
                text-align: center;
                line-height: 38px;
                color:#fff;
                background:#ffa200;
                font-size:.426667rem;
                border-radius: 3px;
                margin-top:30px;
            }
        }
    }
</style>
