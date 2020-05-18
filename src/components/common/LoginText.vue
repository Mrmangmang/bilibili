<template>
    <div>
        <van-cell-group class="mt-10">
            <van-field
                    :label="label"
                    :type="type"
                    :placeholder="placeholder"
                    :rule="rule"
                    v-model="content"
            />
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        props:['label','type','placeholder','rule' ],
        data() {
            return {
               content:''
            };
        },
        methods:{
            handlerulg(){
                // 3.一旦触发就会打印
                // console.log(this.rule)
                const rule = new RegExp(this.rule)
                if(rule.test(this.content)){
                    this.$emit('inputChange',this.content)
                    // console.log('正则校验成功')
                }

            }
        },
        watch:{
            //2.监听这个content ,从而一旦触发就会就会响应
            content(){
               this.handlerulg()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mt-10{
        margin-top: 10px;
    }

</style>