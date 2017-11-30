<template>
	<div>
		<top-bar></top-bar>	
		<header-component></header-component>
		<div class="wrap">
			<img src="../assets/images/open_account/open_header.png">
		</div>
		<div class="wrap owrap">
			<form class="openAccountForm">
				<div class="inputBox">
					<div class="inputInfo">
						<p>真实姓名</p>	
					</div>
					<div class="inputBoxInner">
						<input class="f-input" placeholder="输入真实姓名，一经核实不可更改" type="tel" maxlength="11" >
						<p>{{nameErr}}</p>
					</div>
				</div>
				<div class="inputBox">
					<div class="inputInfo">
						<p>身份证号</p>	
					</div>
					<div class="inputBoxInner">
						<input class="f-input" placeholder="请输入身份证号码" type="tel" maxlength="11">
						<p>{{telErr}}</p>
					</div>
				</div>
				<div class="inputBox">
					<div class="inputInfo">
						<p>银行卡号</p>	
					</div>
					<div class="inputBoxInner">
						<input class="f-input" placeholder="请输入银行卡号" type="tel" maxlength="11" >
						<p>{{telErr}}</p>
					</div>
				</div>
				<div class="inputBox openBank">
					<div class="inputInfo">
						<p>开户银行</p>	
					</div>
					<div class="inputBoxInner">
						<div class="bankBox" @click="bankSelectShow = ! bankSelectShow">{{bankName}}</div>
						<p>{{telErr}}</p>
					</div>
					<bank-choose :bankSelectShow="bankSelectShow" @clickThis="clickThis"></bank-choose>
				</div>
				<div class="inputBox">
					<div class="inputInfo">
						<p>真实姓名</p>	
					</div>
					<div class="selectBoxInner" >						
						<select v-model="provNameSelected" >
		                  	<option>开户省份</option>
		                    <option v-for="item in provList">{{item.provName}}</option>
		                </select>
		                <p>{{telErr}}</p>
					</div>
					<div class="inputInfo" >
						<p>真实姓名</p>	
					</div>
					<div class="selectBoxInner">
						<select>
		                  	<option>开户城市</option>
		                    <option v-for="item in filterAreaList" >{{item.areaName}}</option>
		                </select>
		                <p>{{telErr}}</p>
					</div>
				</div>
				<div class="inputBox">
					<div class="inputInfo">
						<p>预留手机号</p>	
					</div>
					<div class="inputBoxInner">
						<input class="f-input" placeholder="请输入银行卡开户时预留手机号" type="tel" maxlength="11">
						<p>{{telErr}}</p>
					</div>
				</div>
				<div class="inputBox">
					<div class="inputInfo">
						<p>短信验证码</p>	
					</div>
					<div class="inputBoxInner">						
						<input class="smsInput" placeholder="请输入手机验证码" type="tel" maxlength="11">
						<input type="button" class="btn btnSms" value="发送手机验证码">
						<p>{{telErr}}</p>
					</div>
				</div>
				<input type="button" class="btnNext btn" value="下一步">
			</form>
		</div>
		<footer-component></footer-component>
	</div>
</template>
<script>
	import topBar from '@/components/topBar'
	import header from '@/components/header'
    import footer from '@/components/footer'
    import bankChoose from '@/components/bankChoose'
	export default{
		components:{
			'topBar':topBar,
			'footerComponent':footer,
			'headerComponent':header,
			'bankChoose':bankChoose
		},
		data(){
			return {
				telErr:'',
				bankSelectShow:false,
				bankName:'开户银行',
				bankId:'',
				provNameSelected:'开户省份',
				/*selectedProvId:'',*/
				nameErr:'',
				filterAreaList:[],
				provList:[
					{
						provName:'江西',
						provId:'001'
					},
					{
						provName:'浙江',
						provId:'002'
					},

				],
				areaList:[
					{
						areaName:'南昌',
						provId:'001',
						provName:'江西'
					},
					{
						areaName:'抚州',
						provId:'001',
						provName:'江西'

					},
					{
						areaName:'衢州',
						provId:'002',
						provName:'浙江'
					},
					{
						areaName:'嘉兴',
						provId:'002',
						provName:'浙江'
					},

				],

			}
		},
		watch:{
			provNameSelected:function(){
				console.log(this.provNameSelected);
				this.filterAreaList = [];
				for(let item of this.areaList){
					if(item.provName === this.provNameSelected){
						this.filterAreaList.push(item)
					}
				}
			}
		},
		methods:{
			clickThis(item){
				this.bankSelectShow = false;
				this.bankName = item.bankName;
				this.bankId = item.bankId;
			}
		},
		mounted(){

		},
	}
</script>
<style scoped>
.openBank{
	position:relative;
}
.btn{
	border-radius: 4px;
	background:#ff6e5f;
	border:none;
	letter-spacing:0.5px;
	color:#ffffff;
	cursor:pointer;
}
.btnNext{
	width: 150px;
	height: 43px;
	text-align:43px;
	margin-top:40px;
	margin-left:100px;
}
.btnSms{
	width: 133px;
	height: 36px;
	text-align:36px;
	float:left;
	margin-left:13px;
	font-size:14px;
}
.smsInput{
	width: 158px;
    border-radius: 2px;
    color: #333333;
    height: 36px;
    line-height: 22px;
    font-size: 14px;
	padding-left:13px;
    border: 1px solid #ccc;
    float:left;
}
.openAccountForm{
	width:520px;
	height:550px;
	background: white;
	margin:0 auto;
}
.inputBox{
	width:520px;
	height:60px;
	color:#666;
}
.inputInfo{
	width:100px;
	height:60px;
	float:left;
}
.inputInfo p{
	line-height:38px;
	text-align:right;
	padding-right:10px;
	color: #333;
	font-size:14px;
}
.inputBoxInner{
	height:60px;
	width:360px;
	float:left;
}
.selectBoxInner{
	height:60px;
	width:110px;
	float:left;
}
.selectBoxInner select{
	width:104px;
	height:38px;
}
.inputBoxInner p{
    line-height: 20px;
    height: 20px;
    font-size: 14px;
    width: 360px;
    display:block;
}
.f-input{
	width: 306px;
    border-radius: 2px;
    color: #333333;
    height: 36px;
    line-height: 22px;
    font-size: 14px;
	padding-left:13px;
    border: 1px solid #ccc;
}
.bankBox{
	width: 306px;
    border-radius: 2px;
    color: #333333;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
	padding-left:13px;
    border: 1px solid #ccc;
}
body{
	background:white;
}
.owrap{
	margin:20px auto;
	height:600px;
	background:#666666;
}
</style>