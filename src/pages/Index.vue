<template>
  <!-- 首页 -->
  <div class="sy">
        <!-- 轮播组件 -->
        <Banner></Banner>
        <!-- 砍价组件 -->
        <Kanjia></Kanjia>
        <!-- 精选专题组件 -->
        <Zt></Zt>
        <!-- 人气推荐 -->
        <Renqi></Renqi>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Kanjia from "@/components/kanjia";
import Zt from "@/components/zt";
import Renqi from "@/components/renqi";
export default {
    components: { Banner, Kanjia, Zt ,Renqi},
};
</script>

<style lang="scss" scoped>
.sy{
  width: 100%;
}
</style>