<template>
<div class="bankSelect" v-show='bankSelectShow'>
    <div class="bank" bankId="ICBC" bankName="工商银行" @click="clickThis(item)" v-for="item in bankList">
        <img src="../assets/images/support_bank/ICBC.png">
        <p>单笔限额2{{item.bankId}}，单卡单日限额累计2{{item.bankName}}</p>
    </div>
</div>
</template>
<script>

	export default{
		props:{
				bankSelectShow:{
					type:Boolean,
					default:false,
				},	
		},
		data(){
			return {
				bankList:[
					{
						bankId : "ICBC",
						bankName : "工商银行"
					},
					{
						bankId : "ABC",
						bankName : "农业银行"
					},
					{
						bankId : "ICBC",
						bankName : "工商银行"
					},
					{
						bankId : "ICBC",
						bankName : "工商银行"
					},

				]
			}
		},
		watch:{
			bankSelectShow:function(){
				if(this.bankSelectShow){
					document.body.style.overflow = 'hidden'
				}else{
					document.body.style.overflow = 'visible'
				}
			}
	    },
	    methods:{

	    	clickThis(item){
	    		this.$emit("clickThis",item);
	    	}
	    }
	}
</script>
<style>
.bankSelect{
    box-sizing: border-box;
    width:321px;
    height:230px;
    position:absolute;
    left:100px;
    top:50px;
    border:1px solid #ccc;
    background:white;
    overflow-y:scroll;
    overflow-x:hidden;
    z-index:2;
}
.bankSelect .bank{
    box-sizing: border-box;
    width: 304px;
    height: 60px;
    text-align:left;
    margin-bottom:4px;
    margin-top:4px;
}
.bankSelect .bank:hover{
    border: solid 3px #ffd8d4;
}
.bankSelect .bank img{
    width:136px;
    height:22.2px;
    margin-left:10px;
    margin-top:11px;
}
.bankSelect .bank p{
    font-size: 12px;
    color: #999999;
    margin-left:10px;
}	
</style>