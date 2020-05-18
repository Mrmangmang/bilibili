<template>
    <div>
      <login-top middleTop="注册bilibili">
<!--          父组件就可以根据这个名字传给子组件-->
         <div slot="right" @click="$router.push('/login')">切换登录</div>
      </login-top>

        <login-text label="姓名" type="text" placeholder="请输入用户名" rule="^.{6,16}$" @inputChange="res => model.name = res" ></login-text>
        <login-text label="账号" placeholder="请输入账号" type="text" rule="^.{6,16}$"   @inputChange="res=>model.username =  res" ></login-text>
        <login-text label="密码" type="password" placeholder="请输入密码" rule="^.{6,16}$"  @inputChange="res=>model.password = res" ></login-text>
        <login-btn btntext="注册" @registerSubmit="registerSubmit"></login-btn>
    </div>
</template>

<script>

    import LoginTop from "../components/common/LoginTop";
    import LoginText from "../components/common/LoginText";
    import LoginBtn from "../components/common/LoginBtn";
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
                  const res = await  this.$http.post('/register',this.model,  )
                    this.$msg.fail(res.data.msg)
                    console.log(res)
                    localStorage.setItem('id',res.data.id)
                    localStorage.setItem('token',res.data.objtoken)
                    setTimeout(()=>{
                        this.$router.push('/userinfo')
                    },1000)

                }else{
                    this.$msg.fail('格式不正确')
                }
            }
      }
    }
</script>

<style scoped>

</style>