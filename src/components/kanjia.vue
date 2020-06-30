<template>
<!-- 商品砍价 -->
  <div class="kan">
    <div class="kan-top">
      <p @click="kj">全民砍价</p>
      <van-icon name="arrow"  />
    </div>
    <ul @click="kj" class="ul">
      <List v-for="(itme,key) in list" :key="itme.id" :tit="itme"></List>
    </ul>
  </div>
</template>

<script>
import List from "./list"
export default {
  name: "Kanjia",
  components:{List},
  data() {
    return {
      list: [],
      goods: []
    };
  },
  mounted() {
    this.getlist();
    document.title = "砍价列表";
  },
  
  methods: {
    // 获取砍价的数据
    getlist() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
        .then(res => {
          var arr = res.goodsMap;

          for (let i in arr) {
            this.goods.push(arr[i]);
          }
          this.goods.filter((itme, key) => {
            if (key > 2) {
              this.list.push(itme);
            }
          });
        });
    },
    kj() {
      this.$toast.setDefaultOptions(this.$toast("加载中"),{ duration: 100 ,});
      this.$nextTick(() => {
        setTimeout(() => {
            this.$router.push("/kanlist")
        }, 1000);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.kan {
  width: 100%;
  // height: 100%;
  border-bottom: 0.14rem solid #F5F5F5;
  .kan-top {
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
 
}
</style>