<template>
<!-- 首页组件 -->
  <div class="home">
    
    
    <router-view></router-view>
    <!-- 顶部图标 -->
    <div v-show="tit" class="tit"><img src="../assets/tit.jpg"  alt=""></div>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from "@/components/footer";
export default {
  components: { Footer},
  name: "Home",
  data() {
    return {
      tit:false
    };
  },
  mounted() {
    document.title = "首页";
    window.addEventListener("scroll",()=>{
      let html = document.documentElement || document.body;
      if(html.scrollTop>320){
       this.tit = true;
      }else{
        this.tit = false;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.tit{
    width: 100%;
    height: 0.6rem;
    background: white;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
  img{
    width: 0.6rem;
    height: 0.6rem;
    display: block;
    border-radius: 0.04rem
  }
}
</style>