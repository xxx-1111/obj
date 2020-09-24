<template>
	<!-- 向其中添加对象 插槽 slot -->
  <div class="red-btn">
		<button class="login-btn"
				:style="{background: bgColor}"
				 @click="$emit('click',$event)"
		 >
		 <template v-if =" text !== '按钮'">
			 {{text}}
		 </template>
		 <slot v-if =" text === '按钮' ">按钮</slot>
		 </button>
  </div>
</template>


<script>
  export default {
    name:'red-button',
    props:{
		bgColor:{
			type:String,
			default:'#4C4F50'
		},
		text:{
			type:String,
			default:'按钮'
		}
		
	},
    
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
 .login-btn{
	 width: 8.986667rem;
     height: 1.306667rem;
     background: #e8c756;
     border-radius: 0.653333rem;                                                  
     font-size: 0.453333rem;
     font-family: PingFang SC;
     font-weight: 500;
     color: #a0347a;
     text-align: center;
     line-height: 1.306667rem;
     margin-top: 1rem;
 }
</style>

