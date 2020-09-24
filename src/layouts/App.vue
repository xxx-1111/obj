<template>
  <div id="app">
	<loading v-show="$root.bLoading"/>
	<router-view/>
	<Footer v-show="$root.bFoot"/>
     
  </div>
</template>

<script>
import loading from '../components/loading.vue'
import Footer  from './Footer.vue'

export default {
  name: 'App',
  data(){
    return {
    }
	
  },

  mounted(){
  
  },
  
  components: {
     loading,Footer
  },
  methods:{
  },
  watch:{
    $route:{
      handler(newVal){
        let path = newVal.path;
        if(/home|user/.test(path)){
          this.$root.bFoot=true;
        }
        if(/login|reg|detail/.test(path)){
          this.$root.bFoot=false;
        }
      },
      immediate:true
    }
  },
  
}
</script>

<style>

</style>

