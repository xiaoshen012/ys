<template>
<!-- 精选专题 -->
  <div class="zt">
    <div class="zt-top">
      <p @click="ztlist">精选专题</p>
      <van-icon name="arrow" />
    </div>
    <div class="soll">
      <ul>
          <Ztitme v-for="(itme,key) in list" :key="itme.id" :list="itme" :k="key" ></Ztitme>
      </ul>
    </div>
  </div>
</template>

<script>
import Ztitme from "./ztitme"
export default {
    components:{Ztitme},
  name: "Zt",
  data() {
    return {
      list: []
    };
  },
  created(){
    this.$axios.get("https://api.it120.cc/small4/cms/news/list").then((res)=>{
        // console.log(res)
        this.list=res
    })
  },
  methods:{
      ztlist(){
          this.$router.push("/ztlist")
      }
  }
};
</script>

<style lang="scss" scoped>
.zt {
  width: 100%;
  height: 4.4rem;
  border-bottom: 0.14rem solid #f5f5f5;
  .zt-top {
    font-size: 0.26rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 2.5rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    height: 0.65rem;
  }
  .soll {
    width: 100%;
    height: 3.78rem;
    overflow: auto;
    ul {
      width: 27.7rem;
      display: flex;
     
    }
  }
}
</style>