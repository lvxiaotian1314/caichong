<template>
   <div class="main">
        <ul class="register">
            <li>
                <label for="userName">用<span class="e-zhan">e</span>户<span class="e-zhan">e</span>名</label><input id="userName" type="text" v-model="userName">
            </li>
            <li>
                <label for="password">密<span class="c-zhan">占</span><span class="c-zhan">占</span>码</label><input id="password" type="password" v-model="password">
            </li>
             <li>
                <label for="confirmPassword">确认密码</label><input id="confirmPassword" type="password" v-model="confirmPassword">
            </li>
             <li>
                <label for="email">邮箱地址</label><input id="email" type="text" v-model="email">
            </li>
        </ul>
        <div class="register_btn">
            <div class="register" @click="register">立即注册</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userName:"",
            password:"",
            confirmPassword:"",
            email:"",
            msg:""
        }
    },
    methods:{
        //注册
        register(){
            let userNameReg=/^[a-z0-9_-]{3,16}$/;
            let passwordReg=/^[a-z0-9_-]{6,18}$/;
            let emailReg=/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
            //用户名不能为空
            if(this.userName===""){
                this.msg="请输入用户名";
                this.$msg("提示",this.msg);
                return;
            }
            //用户名输入不合法
            if(!userNameReg.test(this.userName)){
                this.msg="用户名输入不符合规则,请重新输入";
                this.$msg("提示",this.msg);
                return;
            }
            //密码输入不能为空
            if(this.password===""){
                this.msg="请输入密码";
                this.$msg("提示",this.msg);
                return;
            }
            //密码输入不合法
            if(!passwordReg.test(this.password)){
                this.msg="密码输入不符合规则,请重新输入";
                this.$msg("提示",this.msg);
                return;
            }
            //重复输入密码
            if(this.confirmPassword===""){
                this.msg="请再次输入密码";
                this.$msg("提示",this.msg);
                return;
            }
            //判断两次密码输入是否一致
            if(this.password!==this.confirmPassword){
                this.msg="两次密码输入不一致";
                this.$msg("提示",this.msg);
                return;
            }
            //验证邮箱
            if(!emailReg.test(this.email)){
                this.msg="邮箱输入不正确,请重新输入";
                this.$msg("提示",this.msg);
                return;
            }
            //跳转首页
            let that=this;
            async function register() {
                let obj={
                    userName:that.userName,
                    password:that.password,
                    email:that.email
                }
                await that.$store.dispatch("register",obj);
                 that.$router.push("/");
            }
            register();
        }
    }
}
</script>
<style lang="less" scoped>
  .main{
        top:0;
        .register{
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
        .register_btn{
            padding:10px;
            position: relative;
            height:85px;
            .register{
                padding:0;
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
