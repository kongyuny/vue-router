<template>
  <div id="app">
    <headerTop :msg="msg"></headerTop>

  </div>
</template>

<script>
import headerTop from '@/components/Header.vue'
export default {
    components:{
        headerTop
    },
  name: 'App',
  data(){
    return{
      msg:'123'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f5f5;
  padding-bottom:0.4rem;
}
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

</style>
