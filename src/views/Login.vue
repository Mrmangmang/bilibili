<template>
    <div>
        <login-top middleTop="登录bilibili">
            <div slot="right" @click="$router.push('/register')">切换注册</div>
        </login-top>
        <login-text label="账号" placeholder="请输入账号" type="text" rule="^.{6,16}$"   @inputChange="res=>model.username =  res" ></login-text>
        <login-text label="密码" type="password" placeholder="请输入密码" rule="^.{6,16}$"  @inputChange="res=>model.password = res" ></login-text>
        <login-btn btntext="登录" @registerSubmit="registerSubmit"></login-btn>
    </div>
</template>

<script>
    import LoginBtn from "../components/common/LoginBtn";
    import LoginText from "../components/common/LoginText";
    import LoginTop from "../components/common/LoginTop";
    // import LoginTop from "./common/LoginTop";
    // import LoginText from "./common/LoginText";
    // import LoginBtn from "./common/LoginBtn";
    export default {
        data(){
            return {
                // name:'',
                // username:'',
                // password:''
                model:{
                    name:'',
                    username:'',
                    password:''
                }
            }
        },
        components:{
            LoginTop,
            LoginText,
            LoginBtn
        },
        methods:{
            async   registerSubmit(){
                if(this.model.name != '' && this.model.username != '' && this.model.password != ''){
                    const res = await  this.$http.post('/login',this.model,  )
                    this.$msg.fail(res.data.msg)
                }else{
                    this.$msg.fail('格式不正确')
                }
            }
        }
    }
</script>

<style scoped>

</style>