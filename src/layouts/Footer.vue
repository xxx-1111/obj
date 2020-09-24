<template>
 	<div class="footer">
 		<ul>
 			<router-link class="home li" tag="li" to="/home" active-class="active">
 				<i />
 				<span>首页</span>
 			</router-link>
 			<router-link class="my li" tag="li" to="/user" active-class="active">
 				<i />
 				<span>我的</span>
 			</router-link>
 		</ul>
 	</div>
 </template>
 
 <script>
 	export default {
 		name: 'Footer',
 		props: {},
 		data() {
 			return {
 
 			}
 		},
 
 		components: {},
 		mounted() {},
 		updated() {},
 		methods: {}
 	}
 </script>
	
<style scoped>
	.footer {
	  position: fixed;
	  bottom: 0;
	  width: 100%;
	  height: 1.6rem;
	  background: linear-gradient(264deg, rgba(192, 59, 112, 0.97), rgba(74, 36, 152, 0.97));
	}
	.footer ul {
	  height: 100%;
	  display: flex;
	  justify-content: space-around;
	  align-items: center;
	}
	.footer li {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
	}
	.footer li img {
	  width: 0.48rem;
	  height: 0.48rem;
	}
	.footer li span {
	  font-size: 0.266667rem;
	  font-family: PingFang SC;
	  font-weight: 400;
	  color: white;
	  line-height: 0.64rem;
	  opacity: 0.5;
	}
	.footer ul .home i{
		background: url(../assets/img/index2.png) no-repeat;
		background-size: 100%;
		width: 0.55rem;
		height:0.55rem;
	}
	.footer ul .my i{
		
		background: url(../assets/img/my.png) no-repeat;
		background-size: 100%;
		width: 0.55rem;
		height:0.55rem;
		
	}
	.footer ul .home.active i{
		background: url(../assets/img/index-checked.png) no-repeat;
		/* src:'../assets/img/首页-选中(2).png'; */
		background-size: 100%;
		width: 0.55rem;
		height: 0.55rem;
	}
	.footer ul .my.active i{
		background: url(../assets/img/my2.png) no-repeat;
		background-size: 100%;
		width: 0.55rem;
		height:0.55rem;
	} 
</style>