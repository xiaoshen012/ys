<template>
    <div class="home">
        <Banner></Banner>
        <Kanjia></Kanjia>
        <Zt></Zt>
    </div>
</template>

<script>
import Banner from "@/components/Banner"
import Kanjia from "@/components/kanjia"
import Zt from "@/components/zt"
    export default {
        components:{Banner,Kanjia,Zt},
        name:"Home",
        data(){
            return{

            }
        },
        mounted(){
            document.title = "首页";
        }
    }
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
}
</style>