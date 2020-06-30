<template>
<!-- 人气推荐列表页 -->
  <div>
    <div class="ren">
        <van-icon name="arrow-left" @click="fh()" />
        <p>人气推荐</p>
        <p></p>
    </div>
    <ul>
      <li v-for="(itme,key) in list" :key="itme.id">
        <img :src="itme.pic" alt />
        <p>{{itme.name}}</p>
        <p>{{itme.characteristic}}</p>
        <p>￥{{itme.minPrice}}</p>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data () {
      return {
          list:[]
      }
  },
  mounted(){
      document.title = "人气推荐";
      this.$axios.get("https://api.it120.cc/small4/shop/goods/list").then((res)=>{
          this.list=res
      })
  },
  methods:{
      fh() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.ren{
    width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid #e9e9e9;
  height: 0.7rem;
  padding: 0.1rem 0.4rem;
  position: fixed;
  left: 0;
  top: 0;
  background: #ffffff;
}
ul {
  width: 100%;
  padding: 1%;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 0.2rem;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: .2rem;
  li {
      width: 48%;
    img {
      width: 100%;
      height: 4.2rem;
      display: block;
    }
    p:nth-of-type(1) {
      font-size: 0.2rem;
      color: #000000;
      width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p:nth-of-type(2) {
      font-size: 0.14rem;
      color: #b2b2b2;
      width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 0.1rem;
    }
    p:nth-of-type(3) {
      font-size: 0.16rem;
      color: #d00000;
      margin-top: 0.1rem;
    }
  }
}
</style>