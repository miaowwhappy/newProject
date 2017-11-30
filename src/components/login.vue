<template>
	<div class="loginForm">
		<p class="loginFormTitle">登录</p>
		<div class="inputBox">
			<div class="inputLogo">
				<img src="../assets/logincomponent/register_phone.png">
			</div>
			<div class="inputBoxInner">
				<input class="f-input" placeholder="Email/昵称/手机" type="tel" maxlength="11" v-model="telephone" v-focus="isFocus">
				<p>{{telErr}}</p>
			</div>
		</div>
		<div class="inputBox">
			<div class="inputLogo">
				<img src="../assets/logincomponent/register_password.png">
			</div>
			<div class="inputBoxInner">
				<input class="f-input" placeholder="密码" type="password" v-model="password">
				<p>{{pwErr}}</p>
			</div>
		</div>
		<div class="loginFooter">
			<div class="autoLogin">
				<div class="checkboxOut" :style="{backgroundImage: 'url('+img+')'}">
					<input type="checkbox" value="1" v-model="checkState" >
				</div>				
				下次自动登录？
			</div>									
			<div class="lostPassword">
				<a href="#" >忘记密码？</a>
			</div>
		</div>
		<button @click="submitForm" class="btn">立即登录</button>
		<p class="noId">还没有账号？<router-link to="/register">马上注册</router-link></p>
	</div>	
</template>
<script>
	export default{
		data(){
			return {
				telephone:'',
				telErr:'',
				state1:0,
				isFocus:false,
				password:'',
				pwErr:'',
				state2:0,
				img:require('../assets/common/agreement.png'),
				checkState:''
			}
		},
		watch:{
			'checkState':function(){
				if(this.checkState){
					this.img = require('../assets/common/agreement_checked.png')
				}else{
					this.img = require('../assets/common/agreement.png')
				}
			},
			'telephone':function(){
				var phoneTest = /^1[34578]\d{9}$/;
				if(!this.telephone.replace(/\s/g,'')){
					this.telErr = '手机号不能为空';
					this.state1 = 0;
				}else if(!phoneTest.test(this.telephone.replace(/\s/g,''))){
					this.telErr = '手机格式不正确';
					this.state1 = 0;
				}else{
					this.telErr = '';
					this.state1 = 1;
				}

			},
			'password':function(){
				if(!this.password.replace(/\s/g,'')){
					this.pwErr = '密码不能为空';
					this.state2 = 0;
				}else{
					this.pwErr = '';
					this.state2 = 1;
				}
			}
		},
		methods:{
			submitForm(){
				let data = {
					tel:this.telephone,
					pw:this.password
				};
				if(!this.telephone.replace(/\s/g,'')){
					this.telErr = '手机号不能为空';
					this.state1 = 0;
					this.isFocus = true;
				}else if(!this.password.replace(/\s/g,'')){
					this.pwErr = '密码不能为空';
					this.state2 = 0;
				}else if(this.state1 && this.state2){
					this.$emit('submitHandle',data);
				}				
			}
		},
		directives: {
		    focus: {
		      update: function (el, {value}) {
		        if (value) {
		          el.focus()
		        }
		      }
		    }
		},
	}
</script>
<style scoped>
.noId{
	text-align: center;
    font-size: 18px;
    font-family: 'Microsoft YaHei';
    height: 18px;
    line-height: 18px;
    margin-top:15px;
}
.noId a{
	color:#39A1EA;
}
.loginFooter{
	width:383px;
	height:31px;
	font-size:14px;
	line-height:31px;
	margin-bottom:25px;
}
.loginFooter .autoLogin{
	float:left;
	height:31px;
	overflow:hidden;
	display:inline-block;

}
.loginFooter .autoLogin .checkboxOut{
	width:18px;
	height:18px;
	display:inline-block;
	position:relative;
	top:5px;
}
.loginFooter .autoLogin input{
	opacity:0;
	float:left;
	margin-left:2px;
	margin-top:2px;
	cursor:pointer;
}
.loginFooter .lostPassword{
	float:right;
	
}
.loginFooter .lostPassword a{
	color:#39A1EA;
}
.btn{
	width: 378px;
    height: 49.53px;
    font-size: 19.89px;
    color: #ffffff;
    background: #4CAFF9;
    cursor: pointer;
    display: inline-block;
    border:none;
    border-radius:3px;
}
.inputLogo{
	width:30px;
	height:80px;
	float:left;
}
.inputBox{
	width:400px;
	color:#666;
	margin-bottom:10px;
	overflow:hidden;
}
.inputBox img{
	margin-top: 8px;
    width: 18px;
    height: 26px;
}
.inputBoxInner{
	height:80px;
	width:360px;
	float:left;
}
.inputBoxInner p{
	padding-top: 0px;
    line-height: 30px;
    height: 30px;
    font-size: 14px;
    width: 360px;
    display:block;
}
.f-input{
	width: 325px;
    border-radius: 2px;
    color: #333333;
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    padding: 10px 5px;
    padding-left: 19px;
    border: 1px solid #ccc;
}
.loginForm{
	width:403px; 
	height: 469px;
	margin:50px 0 0 30px;
}
.loginFormTitle{
	color: #333333; 
	font-size: 24px; 
	font-family: 'Microsoft YaHei'; 
	height: 40px; 
	line-height: 40px; 
	width: 100px;
	text-align: left;
	margin-bottom:30px;
}	
</style>