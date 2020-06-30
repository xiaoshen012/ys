<template>
  <div class="kan">
    <div class="kan-top">
      <p @click="kj">全民砍价</p>
      <van-icon name="arrow"  />
    </div>
    <ul @click="kj" class="ul">
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
  name: "Kanjia",
  data() {
    return {
      list: [],
      goods: []
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
      this.$toast.setDefaultOptions(this.$toast("加载中"),{ duration: 1000 ,});
      this.$nextTick(() => {
        setTimeout(() => {
            this.$router.push("kanlist")
        }, 1000);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.kan {
  width: 100%;
  height: 100%;
  .kan-top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    border-bottom: 0.01rem solid #e9e9e9;
    .van-icon {
      text-indent: 0.2rem;
    }
  }
  .ul {
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
}
</style>