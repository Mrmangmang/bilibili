<template>
    <div class="userdetail">
         <div>
<!--             左边-->
             <div>
                 <img class="user_img" src="../../../assets/touxiang.png" />
             </div>
<!--             右边-->
             <div class="user_edit">
<!--                 右边的上部-->
                 <div>
                    <p>
                        <span>0</span>
                        <span>粉丝</span>
                    </p>
                    <p>
                        <span>100</span>
                        <span>关注</span>
                    </p>
                    <p>
                        <span>100</span>
                        <span>获赞</span>
                    </p>
                 </div>
<!--                 右边下部-->
                 <div>
                     <div class="user_editbtn">编辑资料</div>
                 </div>
             </div>
<!--             下边-->

         </div>
        <div>
            <h2>宝哥</h2>
            <p>这个人除了帅，一无所有</p>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style  lang="scss" scoped>
    .userdetail{
        background-color: white;
        padding:0 12px;
        >div:nth-child(1){
            display: flex;
        }
        >div:nth-child(2){
          h2{
              margin:10px 0 3px 0
          }
            p{
                padding:0 ;
                margin:0
            }
        }
        .user_img{
            margin-right: 20px;
            height: 85px;
            width: 85px;
            border-radius: 50%;
        }
        .user_edit{
            flex: 1;
            div:nth-child(1){
                display: flex;
                p{
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: 13px;
                }
                p:nth-child(1),p:nth-child(2) {
                    border-right: 1px solid #ccc;
                }
            }
            div:nth-child(2){
                padding: 2px 10px;
            .user_editbtn{
                border: 1px solid pink;
                padding: 3px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: pink;
                border-radius: 3px;
            }
                         }
        }
    }

</style>