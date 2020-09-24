<template>
  <div id="app">
	  
     <h4>input测试</h4>
	 <!-- <RedInput/> -->
	 <red-input v-model="op"></red-input>
	
  </div>
</template>

<script>

import RedInput from '../components/red-input/red-input.vue'

export default {
  name: 'App',
  components: {
      RedInput
  },
  data(){
	  return {
		  op:'123'
	  }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
