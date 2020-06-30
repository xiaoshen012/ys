<template>
    <div>
        <li @click="add(list.id)">
            <img :src="list.pic" alt="">
          <p>{{list.title}}</p>
          <p>{{list.descript}}</p>
        </li>
    </div>
</template>

<script>
    export default {
        props:["list","k"],
        methods:{
            add(id){
                // console.log(id)
                this.$router.push("/zldetail"+id)
            }
        }
    }
</script>

<style lang="scss" scoped>
 li {
        width: 5.42rem;
        height: 2.84rem;
        margin-left: 0.12rem;
        img {
          width:100%;
          height: 2.84rem;
          border-radius: 0.06rem;
        }
        p:nth-of-type(1) {
          font-size: 0.18rem;
          color: #2c2c2c;
          margin-top: 0.12rem;
          width: 4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p:nth-of-type(2) {
          font-size: 0.14rem;
          color: #a8a8a8;
          margin-top: 0.2rem;
          width: 3.24rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
</style>