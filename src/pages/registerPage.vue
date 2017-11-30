<template>
	<div>
		<header-component></header-component>
		<div class="wrap owrap">
			<div class='imgBox' :style="{backgroundImage: 'url('+img+')'}">
			</div>
			<div class="loginBox">
				<register-component @submitHandle="submitRegisterForm"></register-component>
			</div>
		</div>
		<footer-component></footer-component>
	</div>
</template>
<script>
	import header from '@/components/header'
	import register from '@/components/register'
    import footer from '@/components/footer'
	export default{
		components:{
			'footerComponent':footer,
			'headerComponent':header,
			'registerComponent':register,
		},
		name:'registerPage',
		data(){
			return {
				img:require('../assets/logincomponent/register_banner_v2.jpg')
			}
		},
		methods:{
			submitRegisterForm(data){
				console.log(data);
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