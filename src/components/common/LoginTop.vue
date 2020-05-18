<template>
    <div class="LoginTop" >
       <div>s</div>
       <div>{{middleTop}}</div>
       <div>
<!--           //相当于占坑，子组件一个插槽名字叫right-->
           <slot name="right"/>
       </div>
    </div>
</template>

<script>
    export default {
       props:['middleTop']
    }
</script>

<style lang="scss" scoped>
    .LoginTop{
       height: 50px;
        background-color: white;
        display: flex;
        div{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
        }
    }

</style>