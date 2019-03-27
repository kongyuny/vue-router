<template>
  <div>
    <div class="search_bar">
      <div>
        <ul class="list">
          <li @click="href('/orders','全部订单')">全部订单</li>
          <li @click="href('/service','服务订单')">服务订单</li>
          <li @click="href('/material','实物订单')">实物订单</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navlist',
  data:{
    return:{
      isShow:0
    }
  },
  methods:{
        next(){
            console.log(1)
            this.$router.go(1);
        },
         href(path,id){
            console.log(1)
            // 使用params传递参数
            this.$router.push({path:path,query:{id:id}});
        }
    }
}
</script>
<style scoped>
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
.list li:hover{
  background:red;
}
.list{
  display: flex;
  justify-content:space-between;
  height: 1rem;
  line-height: 1rem;
  background: #ccc;
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
    top: 0;
    left: 0;
    z-index: 888;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.52rem;
    background: #fff;
    color: #000;
    text-align: center;
}
.search_bar{
  padding:0 0.4rem;
  height: 100px;
}
/*.search_bar div{
  display: flex;
  justify-content:space-between;
}*/
</style>
