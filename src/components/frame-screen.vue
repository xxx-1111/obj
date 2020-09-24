<template>
	<div class="frame-screen-list" id="top" v-if="type==='list'">
	  <div class="swiper">swiper</div>
	  <div class="item">item</div>
	  <div class="item">item</div>
	  <div class="item">item</div>
	  <div class="item">item</div>
	  <div class="item">item</div>
	  <div class="item">item</div>
	</div>
	
	<div class="frame-screen-detail" v-else>
	  <div class="nav"></div>
	  <div class="user">
	    <div class="icon"></div>
	    <div class="username"></div>
	  </div>
	  <div class="title"></div>
	</div>
</template>

<script>
	export default{
		props:{
			type:String
		}
	}
</script>

<style scoped>
	.nav{
		width: 310px;
		height: 60px;
		border: 1px solid #ccc;
		margin:50px auto;
	}
	.user{
		width: 310px;
		height: 100px;
		border: 1px solid #ccc;
		margin:50px auto;
	}
	.title{
		width: 310px;
		height: 200px;
		border: 1px solid #ccc;
		margin: auto;
	}
</style>
