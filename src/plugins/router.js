import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import NoPage from '../pages/no-page.vue'
import Home from '../pages/home.vue'
import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import user from '../pages/user.vue'
import Detail from '../pages/detail.vue'


// const routes=[
// 	{path:'/home',component:Home},
// 	{path:'/login',component:Login},
// 	{path:'/reg',component:Reg},
// 	{path:'/user',component:user},
// 	{path:'/detail/:_id',component:Detail,name:'detail'},
// 	{path:'/',redirect:'/home'},
// 	{path:'*',component:NoPage},
// ]

//实例
const router=new VueRouter({
	// routes:routes, 键值对
	routes:[
		{path:'/home',component:Home},
		{path:'/login',component:Login},
		{path:'/reg',component:Reg},
		{path:'/user',component:user},
		{path:'/detail/:_id',component:Detail,name:'detail'},
		{path:'/',redirect:'/home'},
		{path:'*',component:NoPage},
     ],
	mode:'history'
})

//暴露
export default router