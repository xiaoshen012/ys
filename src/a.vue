<template>
  <div style="padding-bottom:1.2rem;">
    <!-- 搜索框 -->
    <van-search placeholder="输入要搜索的商品" @focus="gotoSearch" />

    <!-- 轮播图的布局 -->
    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(item,index) in banner" :key="index">
        <img :src="item.picUrl" style="height: 4rem;width: 100%;" />
      </van-swipe-item>
    </van-swipe>
    <!-- 商品的列表布局 -->
    <!-- 列表页面 -->
    <div class="goods_list">
      <div class="item" v-for="(item,index) in goodsList" :key="index">
        <img src="/static/mock/img/1.jpg" :data-src="item.pic" alt />
        <p v-html="item.name"></p>
        <p class="price">¥{{item.originalPrice}}</p>
      </div>
    </div>

    <van-loading size="24px" v-show="loading" color="#0088dd">加载中...</van-loading>
    
    <div id="top" ref="top" @click="toTop" v-show="tops">
      <van-icon name="arrow-up" size="30"/>
    </div>
  </div>
</template>

<script>
import "@/assets/style/reset.css";
export default {
  name: "home",
  mounted() {
    document.title = "商品首页";
    this.getBanner();
    this.getGoods();
    window.addEventListener("scroll",()=>{
      let html = document.documentElement || document.body;
      //判断滚动高度大于可视化窗口的高度的时候
      if(html.scrollTop>html.clientHeight){
       this.tops = true;
      }else{
        this.tops = false;
      }
      if(html.scrollHeight == html.scrollTop+html.clientHeight){
        this.loading = true;
        setTimeout(()=>{
           this.loading = false;
           this.getGoods();
        },2000);
       
      }
      this.lazyLoad();
    });
  },
  data() {
    return {
      banner: [],
      goodsList: [],
      currentPage:1,
      loading: false,
      tops: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    gotoSearch() {
      this.$router.push("/08c/shop/search");
    },
    toTop(){
      let html = document.documentElement || document.body;
      html.scrollTop = 0;
    },
    //轮播图操作
    getBanner() {
      this.$axios({
        url: "https://api.it120.cc/small4/banner/list"
      }).then(res => {
        console.log(res);
        this.banner = res.data;
         this.lazyLoad();
      });
    },
    //商品列表的操作
    getGoods() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/list",
        params:{
          page:this.currentPage,
          pageSize: 6,
        }
      }).then(res => {
        if(res.code == 0){
          this.goodsList.push(...res.data);
          this.currentPage++;
        }else{
          this.loading = false;
        }
        
      });
    },
    lazyLoad(){
      let html = document.documentElement || document.body;
      //懒加载，找到所有的图片，
      //遍历页面中所有的图片
      let imgs = document.getElementsByTagName("img");
      //循环所有的图片
      for(var i = 3;i<imgs.length;i++){
        //并且判断图片距离顶部的页面头部的高度小雨页面滚动的高度+页面的可视化窗口的高度　
        if(html.clientHeight+html.scrollTop > imgs[i].offsetTop){
          // console.log(i);
          imgs[i].src = imgs[i].getAttribute("data-src");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.goods_list {
    width: 100%;
    margin-top: 0.2rem;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 46%;
      margin: 2%;
      padding: 0.15rem;
      box-sizing: border-box;
      background-color: #fff;
      img {
        width: 100%;
        height: 3rem;
      }
      p {
        width: 100%;
        padding: 0.2rem 0px;
      }
      .price {
        color: #ff0000;
        font-size: 0.35rem;
      }
    }
  }
  #top{
    position: fixed;
    right: .2rem;
    bottom: 1.2rem;
    padding:.2rem;
    text-align: center;
    border-radius: 50%;
    background-color: #F0F0F0;
    box-shadow: 0px 2px 3px rgb(0, 0, 0);
  }
</style>