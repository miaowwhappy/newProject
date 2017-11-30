<template>
<div>
	<div class="footerBox1">
		<div class="wrap footer1BoxInner">
			<ul class="linkList">
				<li class="linkListLi">
					<p>新手帮助</p>
					<ul>
						<li><a href="./help/id-9">平台原理</a></li>
						<li><a href="./help/id-10">如何借款</a></li>
						<li><a href="./help/id-12">民爱费率</a></li>          
					</ul>
				</li> 
				<li class="linkListLi">
					<p>关于我们</p>
					<ul>
						<li><a href="/?ctl=about_us&id=1637">公司简介</a></li>
						<li><a href="/?ctl=about_us&id=1639">管理团队</a></li>
						<li><a href="/?ctl=about_us&id=1638">股东背景</a></li>
						<li><a href="/?ctl=about_us&id=1640">荣誉资质</a></li>
						<li><a href="./?ctl=newbie_event&act=feedback">意见反馈</a></li>          
					</ul>
				</li> 
				<li class="linkListLi">
					<p>安全保护</p>
					<ul>
						<li><a href="/help/id-2703">签章安全</a></li>
						<li><a href="/help/id-27">政策法规</a></li>
						<li><a href="/help/id-3">隐私保护</a></li>         
					</ul>
				</li>  
			</ul>
			<div class="qrcode">
				<div class="qrcodeItem">
					<img src="../assets/footer/dingyuehao.png"> 
					<p>微信订阅号</p>
				</div>
				<div class="qrcodeItem">
					<img src="../assets/footer/fuwuhao.png"> 
					<p>微信服务号</p>
				</div>
				<div class="qrcodeItem">
					<img src="../assets/footer/app_download.png"> 
					<p>手机App下载</p>
				</div>
			</div>
			<div class="contactInfo">
				<div>
					<div>
						<p>400-821-2165</p>
						<p>客服热线（工作日：9：00-20：00</p>
						<p>非工作日：9：00-17：00）</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footerBox2">
		<div class="wrap footerBoxInner2">
			<div class="imgBox">
				<a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">
					<img src="../assets/footer/common01.png">
				</a>
				<a  key ="5951f52befbfb024ddebc1b1"  logo_size="124x47"  logo_type="common"  href="https://www.anquan.org" target="_blank">
					<img src="../assets/footer/common02.png">
				</a>
				<a target="_blank" href="//www.yunaq.com/analytics/login/?site=www.minaiw.com" title="知道创宇云安全统计">
					<img src="../assets/footer/common04.png">
				</a>
				<a key="5951f52befbfb024ddebc1b1" logo_size="124x47" logo_type="business" href="https://www.anquan.org" target="_blank">
					<img src="../assets/footer/common03.png">
				</a>
			</div>
			<p class="copyright"> 
				2015-{{nowyear}}版权所有&nbsp;©民爱贷&nbsp;沪ICP备15025448号&nbsp;
					<img src="../assets/footer/police.png" alt="police">&nbsp;沪公网安备31011702000086号&nbsp;
				上海民爱互联网金融信息服务有限公司&nbsp;地址：上海市松江区茸平路8号汇甲大厦10楼
			</p>
		</div>
	</div>
</div>		
</template>
<script>
	export default{
		data(){
			return {
				nowyear:new Date().getFullYear(),
			}
		}
	}
</script>
<style scoped>
	.footerBox1{
		width:100%;
		background: white;
	}
	.footer1BoxInner{
		padding-top:40px;
		height:225px;
	}
	.linkList{
		width:390px;
		height:225px;
		color:#666;
		float:left;
	}
	.linkList .linkListLi{
		float:left;
		width:123px;
		height:23px;
	}
	.linkList .linkListLi p{
		font-size:18px;
		padding-bottom:10px;
	}
	.linkList .linkListLi ul li{
		line-height:27.5px;
	}
	.linkList .linkListLi ul li a{
		color:#666;
		font-size:14px;
	}
	.qrcode{
		float:left;
		width:520px;
		height:225px;
	}
	.qrcode .qrcodeItem{
		width:170px;
		height:225px;
		float:left;
	}
	.qrcode .qrcodeItem img{
		width:124px;
		height:124px;
		padding-top:5px;
	}
	.qrcode .qrcodeItem p{
		font-size:12px;
		color:#333333;
		padding-left:30px;
	}
	.contactInfo{
		width:280px;
		height:225px;
		float:left;
		text-align:right;
		color:#333;
	}
	.contactInfo p:nth-of-type(1){
		padding-top:10px;
		font-family: 'Microsoft YaHei';
    	font-size: 36px;
    	line-height:36px;
	}
	.contactInfo p:nth-of-type(2){
		padding-top:10px;
	}
	.contactInfo p:nth-of-type(2),.contactInfo p:nth-of-type(3){
		font-size:18px;
		line-height:30px;
	}
	.footerBox2{
		width:100%;
		background:#666;
		height:145px;
	}
	.footerBoxInner2{
		height:125px;
		padding-top:20px;
	}
	.footerBox2 .footerBoxInner2 .imgBox{
		width:690px;
		height:80px;	
		margin:0 auto;
	}
	.footerBox2 .footerBoxInner2 .imgBox img{
		margin-left:30px;
	}
    .copyright{
    	color:#fff;
    	text-align:center;
    	letter-spacing: 1px;
    	font-size:14px;
    }
    .copyright img{
    	vertical-align:sub;
    }
</style>