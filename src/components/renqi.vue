<template>
<!-- 人气推荐内容 -->
  <div>
    <div class="zt-top">
      <p @click="ren">人气推荐</p>
      <van-icon name="arrow" />
    </div>
    <ul>
      <li v-for="(itme,key) in list" :key="itme.id">
        <img :src="itme.pic" alt />
        <p v-html="itme.name"></p>
        <p v-html="itme.characteristic"></p>
        <p>￥{{itme.minPrice}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    ren() {
      this.$router.push("/renlist");
    },
    getlist() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/list")
        .then(res => {
          var lent=res.slice(9,13)
            console.log(lent)
            this.list=lent
        });
    }
  }
};
</script>

<style lang="scss" scoped>
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
      border-bottom: 0.01rem solid #E9E9E9;
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
      height: 3.5rem;
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