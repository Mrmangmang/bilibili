<template>
    <div class="userinfo">
        <nav-bar></nav-bar>
        <img class="backImg"  src="../assets/banner.png"/>
        <user-detail :userinfo="model"></user-detail>
    </div>
</template>

<script>
    import NavBar from "../components/common/NavBar";
    import userDetail from "../components/common/userComponent/userDetail";
    export default {
        data(){
          return {
              model:{}
          }
        },
          components:{
              NavBar,
              userDetail
          },
        methods:{
         async   UserinfoData(){
                 // console.log('进入用户页面')
             const res = await this.$http('/user/'+localStorage.getItem('id'),{
                 headers:{
                     'Authorization' :'Bearer ' + localStorage.getItem('token')
                 }
             })
             // console.log(res)
             this.model=res.data[0]
            }
        },
        created() {
            this.UserinfoData()
        }
    }
</script>

<style lang="scss" scoped>
    .userinfo{
        .backImg{
            height: 101px;
            width: 100%;
        }
    }

</style>