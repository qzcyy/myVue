<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1></h1>
    <h2>Essential Links</h2>
    <indexvue></indexvue>
        <router-link to='/first'>这是第一个</router-link>
        <router-link to='/second'>这是第二个</router-link>
        <router-link to='/todo'>看一下todo</router-link>
        <router-view class="view one" name="index"></router-view>
        <router-view class="view two" name='content'></router-view>
        <router-view class="view three" name='todo'></router-view>
  </div>
</template>

<script>
import indexvue from './component/hello_index.vue';
import contentvue from './component/hello_content.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  } 
  ,
  components: {
    indexvue,
    contentvue
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

a {
  color: #42b983;
}
</style>
