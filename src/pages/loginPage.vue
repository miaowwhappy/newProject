<template>
	<div>
		<top-bar style="z-index:10"></top-bar>	
		<header-component></header-component>
		<div class="wrap owrap">
			<div class='imgBox' :style="{backgroundImage: 'url('+img+')'}">
			</div>
			<div class="loginBox">
				<login-component @submitHandle="submitForm"></login-component>
			</div>
		</div>
		<footer-component></footer-component>
	</div>
</template>
<script>
	import {setCookie,getCookie} from '@/assets/js/cookie.js'
	import topBar from '@/components/topBar'
	import header from '@/components/header'
	import login from '@/components/login'
    import footer from '@/components/footer'
	export default{
		components:{
			'topBar':topBar,
			'footerComponent':footer,
			'headerComponent':header,
			'loginComponent':login,
		},
		name:'loginPage',
		data(){
			return {
				img:require('../assets/logincomponent/register_banner_v2.jpg')
			}
		},
		methods:{
			submitForm(data){
				alert('登录成功！');
				setCookie("username",data.tel,1000*60);
				this.$router.push('/');
			}
		},
		mounted(){
			if(getCookie('username')){
        		this.$router.push('/')
    		}
		}
	}
</script>
<style scoped>
body{
	background:white;
}
.owrap{
	margin:20px auto;
}
.imgBox{
	width: 740px; 
	height: 523px;  
	float: left; 
	border:1px solid #d5d5d5;
}
.loginBox{
	width: 435px; 
	height: 523px;  
	float: left; 
	border:1px solid #d5d5d5;
	margin-left:20px;
}
</style>