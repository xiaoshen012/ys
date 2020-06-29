  <template>
  <div class="hello">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(itme,key) in banner" :key="key">
        <img :src="itme.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
    <ul>
      <li>
        <img src="/static/1.png" alt />
        <p>签到</p>
      </li>
      <li>
        <img src="/static/1.png" alt />
        <p>礼卷</p>
      </li>
      <li>
        <img src="/static/1.png" alt />
        <p>砍价</p>
      </li>
      <li>
        <img src="/static/1.png" alt />
        <p>专栏</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      banner: []
    };
  },
  mounted() {
    this.getbanner();
  },
  methods: {
    getbanner() {
      this.$axios.get("https://api.it120.cc/small4/banner/list").then(res => {
        console.log(res);
        this.banner = res;
      });
    }
  }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 7rem;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
.hello {
  width: 100%;
  height: 100%;
  position: relative;
}
ul {
  width: 100%;
  height: 1.8rem;
  background: white;
  position: absolute;
  left: 0;
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  text-align: center;
  border-radius: 20% 20% 0 0;
  border-bottom: 0.2rem solid #f5f5f5;
  list-style: none;
}
ul li {
  width: 25%;
}
ul li img {
  width: 0.58rem;
  height: 0.58r;
  display: block;
  margin: 0 auto;
  background-color: white;
  
}
ul li p{
  font-size: .26rem;
  margin-top: .17rem;

}
</style>
