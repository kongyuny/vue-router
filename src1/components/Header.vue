<template>
  <div>
    <h2>{{msg}}</h2>
    <router-link to='/dingdan'>12132</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  props:['msg'],
  data(){
    return{
    }
  }
}
</script>

</style>
