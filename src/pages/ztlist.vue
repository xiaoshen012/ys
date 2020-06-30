<template>
<!-- 严选专栏页 -->
  <div>
    <div class="ztlist-top">
      <van-icon @click="fh()" name="arrow-left" />
      <p>严选专栏</p>
      <p></p>
    </div>
    <ul>
      <li v-for="(itme,key) in list" :key="itme.id">
        <img :src="itme.pic" alt="">
        <p>{{itme.title}}</p>
        <p>{{itme.descript}}</p>
        <p @click="add(itme.id)">查看详情</p>
      </li>
     
    </ul>
  </div>
</template>

<script>
export default {
  name: "Ztlist",
  data () {
      return {
        list:[]      
      }
  },
  mounted() {
    document.title = "严选专栏";
    this.$axios.get("https://api.it120.cc/small4/cms/news/list").then((res)=>{
        this.list=res
    })
  },
  methods:{
      fh() {
      this.$router.go(-1);
    },
    add(id){
        // console.log(id)
        this.$router.push("/zldetail"+id)
    }
  }

};
</script>

<style lang="scss" scoped>
.ztlist-top {
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
ul {
  width: 100%;
  padding-top: 0.7rem;
  padding-bottom: 0.2rem;
  li {
    text-align: center;
    padding-left: 0.09rem;
    padding-top: 0.09rem;
    padding-right: 0.09rem;
    position: relative;
    img {
      width: 100%;
      height: 3.56rem;
      display: block;
      background: rgba(0, 0, 0, 0.7);
    }
    p:nth-of-type(1) {
      position: absolute;
      top: 0.6rem;
      left: 10%;
      width: 80%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.26rem;
      color: white;
    }
    p:nth-of-type(2) {
      position: absolute;
      top: 1.2rem;
      left: 10%;
      width: 80%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.2rem;
      color: white;
    }
    p:nth-of-type(3) {
      position: absolute;
      top: 1.8rem;
      left: 2.6rem;
      width: 1.08rem;
      height: 0.38rem;
      text-align: center;
      line-height: 0.38rem;
      font-size: 0.18rem;
      color: white;
      border: 0.01rem solid #ffffff;
      border-radius: 0.5rem;
    }
  }
}
</style>