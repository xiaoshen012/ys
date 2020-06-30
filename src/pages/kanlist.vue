<template>
<!-- 商品的砍价列表 -->
  <div class="klist">
    <div class="klist-top">
      <van-icon name="arrow-left"  @click="fh()" />
      <p>砍价列表</p>
      <p></p>
    </div>
    <ul class="ul">
      <li v-for="(itme,key) in list" :key="itme.id">
        <img :src="itme.pic" alt />
        <div class="rigth">
          <p class="p1" v-html="itme.name"></p>
          <p class="p2">{{itme.characteristic}}</p>
          <ol>
            <li>
              <p>￥{{itme.minPrice}}</p>
              <p>底价</p>
            </li>
            <li class="li">
              <p>￥{{itme.originalPrice}}</p>
              <p>原价</p>
            </li>
            <li class="li">
              <p>{{itme.stores}}件</p>
              <p>限量</p>
            </li>
          </ol>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Kanlist",
  mounted() {
    document.title = "砍价列表";
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    getlist() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
        .then(res => {
          console.log(res);
          this.list = res.goodsMap;
        });
    },
    fh() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.ul {
  padding-top: 0.9rem;
  li {
    display: flex;
    padding: 0.1rem;
    border-bottom: 0.01rem solid #e9e9e9;
    img {
      width: 1.58rem;
      height: 1.58rem;
      border-radius: 0.06rem;
      display: block;
    }
    .rigth {
      margin-left: 0.14rem;
      width: 3.5rem;
      box-sizing: border-box;
      .p1 {
        font-size: 0.2rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .p2 {
        font-size: 0.15rem;
        color: #b2b2b2;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 0.1rem;
      }
      ol {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        li {
          text-align: center;
          margin-left: 0.5rem;
          margin-top: 0.46rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          // width: 20%;
          box-sizing: border-box;
          p {
            display: block;
          }
        }
        li:nth-of-type(1) {
          margin-left: 0;
        }
        li > p:nth-of-type(2) {
          color: #b2b2b2;
          font-size: 0.18rem;
          margin-top: 0.06rem;
        }
        li > p:nth-of-type(1) {
          color: #b2b2b2;
          font-size: 0.18rem;
        }
        li:nth-of-type(1) > p:nth-of-type(1) {
          color: #d00000;
          font-weight: 700;
        }
      }
    }
  }
}
.klist-top {
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
</style>