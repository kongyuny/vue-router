<template>
  <div id="app">
        <div class="header">
          <div class="goBack" @click="prevent"><i></i></div>
          <span class="title">{{ $route.query.id || title }} </span>
        </div>
        <router-view :age="age"/>
            <!--<div class="subbox">这是首页</div> -->
              <input type="button" value="前进" @click="next">
              <input type="button" value="后退" @click="prevent">
              <p @click=""></p>
        <!-- <div class="box">
            <div>1111111</div>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        title:'全部订单',
        age:18
    }
  },
    methods:{
        next(){
            console.log(1)
            this.$router.go(1);
        },
        prevent(){
            this.$router.go(-1);
        },
         href(path){
            console.log(1)
            // 使用params传递参数
            this.$router.push({path:path});
        }
    },
     mounted(){
        console.log(this.$route);
        console.log(this.$route.query.id);
        // this.title = this.$route.query.id;
    }
}
</script>
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
input{
    width: 1rem;
    height: 1rem;
}
a {

}
.header .title {
    max-width: 70%;
    margin: 0 auto;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.header .goBack {
    height: 100%;
    position: absolute;
    top: 0;
    left: .48rem;
}
.header .goBack i {
    position: absolute;
    top: 50%;
    margin-top: -.3rem;
    background: url(//gfs14.gomein.net.cn/T1W6VgB4Cv1RCvBVdK.png) 50%;
    width: .58667rem;
    height: .58667rem;
    background-size: .58667rem .58667rem;
}
.header {
    width: 100%;
    position: relative;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.52rem;
    background: #fff;
    color: #000;
    text-align: center;
}

</style>
