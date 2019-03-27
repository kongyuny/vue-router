<template>
  <div>
    这是hover
  </div>
</template>

<script>
export default {
  name: 'hover',
  data(){
    return {

    }
  }
}
</script>
<style scoped>
.header{
  padding:0.2rem 0;
  position: relative;
  text-align: center;
  background: #fff;
  margin-bottom: .04rem;
  font-size: 0.28rem;

}
.header b{
  position: absolute;
  left: 0.4rem;
  top:0.15rem;
  font-size: 0.6rem;
  font-family: '宋体'
}
.list{
  padding:0.2rem 0.4rem;
  background: #fff;
}
.list ul{
  display: flex;
   justify-content:space-between;

}
.list li {
  padding:0.2rem 0;
  font-size:0.32rem;
}
.active{
  /*background: #ccc;*/
  border-bottom:0.04rem solid red;
  color:red;
  /*box-sizing: border-box;*/
}
.Order-list{
  margin-top:0.5rem;

}
.Order-list li{
  background: #fff;
}
.Order-list{
  padding:0 0.2rem;
}
.Order-list li{
  padding: 0.2rem;
  border-radius: .2rem;
  margin-bottom: 0.4rem;
}
.ord-tit{
  display: flex;
  justify-content:space-between;
  font-size:0.32rem;
  margin-bottom: 0.2rem;
}
.order-info{
  display: flex;
  /*justify-content:space-between;*/
}
.order-info img{
  width:1.8rem;
  height:1.8rem;
}
.order-info div{
  fiex:1;
  margin-left: 0.2rem;
}
.order-info div p{
  line-height: .48rem;
  font-size: .30rem;
}
</style>
