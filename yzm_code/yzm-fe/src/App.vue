<template>
  <div id="app">
   <ul>
     <li v-for="(user,index) in users" v-key="index">{{user.name}}</li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      users:[]
    }
  },
  mounted(){
    this.$http("/api").then(data => data.json()).then(data => {
      console.log(data)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
