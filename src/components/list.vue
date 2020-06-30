<template>
<!-- 砍价拆分 -->
    <li>
        <img :src="tit.pic" alt />
        <div class="rigth">
          <p class="p1" v-html="tit.name"></p>
          <p class="p2">{{tit.characteristic}}</p>
          <ol>
            <li>
              <p>￥{{tit.minPrice}}</p>
              <p>底价</p>
            </li>
            <li class="li">
              <p>￥{{tit.originalPrice}}</p>
              <p>原价</p>
            </li>
            <li class="li">
              <p>{{tit.stores}}件</p>
              <p>限量</p>
            </li>
          </ol>
        </div>
      </li>
</template>

<script>
    export default {
        name:"",
        props:["tit"]
    }
</script>

<style lang="scss" scoped>
li {
      display: flex;
      padding: 0.1rem;
    //   border-bottom: 0.01rem solid #e9e9e9;
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
</style>