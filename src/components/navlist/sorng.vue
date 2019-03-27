<template>
  <div>
      <div class="paertSorng">
        <div id="sorng">
            <router-link to="/childone">李斯</router-link>
            <router-link to="/childtow">吕不韦</router-link>
            <router-link to="/childtreen">吕不韦</router-link>
        </div>
        <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sorng'
}
</script>
<style scoped>
.paertSorng{
  padding:0 0.2rem;
}
#sorng{
  display: flex;
  justify-content:space-between;
  font-size: 0.42rem;
  height: 1rem;
  border-bottom: 0.01rem solid #ccc;
}
</style>
