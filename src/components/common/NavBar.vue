<template>
   <div class="navbar">
       <div class="logo">
           <img src="../../assets/bilibili.png" />
       </div>
       <div>
            <p>
                <van-icon class="ipt-icon" name="search" />
            </p>
       </div>
       <div>
           <img src="../../assets/touxiang.png"/>
           <p>下载APP</p>
       </div>

       </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .navbar{
        height:50px;
        background-color: white;
        display: flex;
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            img{
                width: 80%;
            }
        }
        div:nth-child(2){
           flex: 1;
            display: flex;
            align-items: center;
            p{
                background-color: gray;
                position: relative;
                padding:15px 5px;
                width: 90%;
                border-radius: 10px;
                .ipt-icon{
                    position: absolute;
                    left: 10px;
                    top: 50%;
                }
            }
        }
        div:nth-child(3){
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 30px;
                height: 30px;
            }
            p{
                margin: 0 8px;
                padding:0 10px;
                background-color: red;
                color: white;
                font-size: 13px;
                border-radius: 5px;
            }
        }
    }

</style>