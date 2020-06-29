<template>
    <div>
        <Banner></Banner>
        <Kanjia></Kanjia>
    </div>
</template>

<script>
import Banner from "@/components/Banner"
import Kanjia from "@/components/kanjia"
    export default {
        components:{Banner,Kanjia},
        name:"Home",
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>