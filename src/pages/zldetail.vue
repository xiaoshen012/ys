<template>
<!--专栏详情页  -->
  <div>
    <div class="top">
      <van-icon @click="fh" name="arrow-left" />
      <p>专栏详情</p>
      <p></p>
    </div>
    <ul class="ul">
      <li>
        <p>{{list.title}}</p>
        <img :src="list.pic" alt />
        <div v-html="list.content"></div>
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
    this.getdeta();
    document.title = "专栏详情";
  },
  methods: {
    getdeta() {
      var id = this.$route.params.id;
      this.$axios
        .get("https://api.it120.cc/small4/cms/news/detail?id=" + id)
        .then(res => {
          console.log(res);
          this.list = res;
        });
    },
    fh() {
      this.$router.go(-1);
    }
  },
  
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 0.7rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 0.3rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}
.ul {
  padding-top: 0.7rem;
  li {
    p:nth-of-type(1) {
      font-size: 0.3rem;
      color: #333333;
      width: 100%;
      text-align: center;
      margin-top: 0.45rem;
      margin-bottom: 0.2rem;
    }
    img {
      width: 96%;
      height: 3.13rem;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>