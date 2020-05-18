<template>
    <div class="btnpadding" @click="registerClick">
        <div class="login-btn">{{btntext}}</div>
    </div>
</template>

<script>
    export default {
        props:['btntext'],
        methods:{
            registerClick(){
                this.$emit('registerSubmit')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btnpadding{
        padding:15px 10px;
    }
    .login-btn{
        height: 45px;
        background-color: crimson;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 22.5px;
    }

</style>