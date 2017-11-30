<template>
<div id="topNav">
    <div class="wrap">
        <div class="picBox">
            <router-link to="/">
                <img src="../assets/header/logo-web-new1.png" alt="民爱贷官网" title="民爱贷国内领先的互联网p2p理财投资平台" class="logo1">
            </router-link>
            <span></span>
            <a href="/?ctl=newbie_event&act=cunguan_guide">
                <img src="../assets/header/cunguan.png" alt="民爱贷官网" title="民爱贷国内领先的互联网p2p理财投资平台" class="logo2">
            </a>
        </div>

        <ul class="navList">
            <li class='listItem'>
                <router-link to="/">首页</router-link>
            </li>
            <li class='listItem' >
                <a href="/deals_new?ctl=deals_new&cid=0&months_type=0&deal_status=0&deal_marking=0" 
                    @mouseover="isShowList1=true"
                    @mouseout="isShowList1=false"
                    :class="{'showBorder':isShowList1}"
                >我要投资
                    <img src="../assets/header/ico_xs03.png">
                </a>
                <transition name="slide">
                    <ul v-show="isShowList1" @mouseover="isShowList1=true" @mouseout="isShowList1=false">
                        <li><span>企业贷</span></li>
                        <li><span>车&nbsp;&nbsp;&nbsp;&nbsp;贷</span></li>
                        <li><span>个人贷</span></li>
                        <li><span>预约标</span></li>
                    </ul>
                </transition>
            </li>
            <li class='listItem'>
                <a href="/?ctl=about_us&id=1637"
                    @mouseover="isShowList2=true"
                    @mouseout="isShowList2=false"
                    :class="{'showBorder':isShowList2}"
                >信息披露
                    <img src="../assets/header/ico_xs03.png">
                </a>
                <ul v-show="isShowList2" @mouseover="isShowList2=true" @mouseout="isShowList2=false">
                    <li><span>关于我们</span></li>
                    <li><span>实时数据</span></li>
                    <li><span>运营报告</span></li>
                    <li><span>风险管理</span></li>
                </ul>
            </li>
            <li class='listItem'>
                <a href="/?ctl=newbie_event&act=cunguan_guide">新手指引</a>
            </li>
            <li class='listItem'>
                <a href="/uc_center">我的账户</a>
            </li>
        </ul>
        
    </div>
</div>
</template>
<script>
	export default{
		data(){
			return {
                scroll:'',
                isShowList1:false,
                isShowList2:false,
			}
		},
        mounted() {
            window.addEventListener('scroll', this.menu)
        },
        methods:{
            menu() {
                this.scroll = document.body.scrollTop || document.documentElement.scrollTop ;
                var header = document.getElementById('topNav');
                /*if(this.scroll > 300){
                    header.style.position = 'fixed';
                    header.style.top = 0;
                    header.style.left = 0;
                }else{
                    header.style.position = 'static';
                }*/
                
            }
        }
	}
</script>
<style scoped>
a{
    text-decoration: none;
}
.showBorder{
    box-shadow:0 0 1px #666666;
    border-radius:10px 10px 0 0;
}
.wrap{
    position:relative;
    overflow:visible;
    box-sizing:border-box;
}
#topNav{
    width:100%;
    height:80px;
    background:white;
}
.picBox{
    width:400px;
    height:80px;
    float:left;
}
.picBox a{
    display:inline-block;
}
.picBox span{
    height:40px;
    margin-left:10px;
    margin-right:10px;
    display:inline-block;
    border-left:1px solid #d8d8d8;
}
.logo1{
    margin-top:20px;
}
.logo2{
    margin-bottom:7px;
}
.navList{
    width:600px; 
    height:80px;
    float:right;
    font-size:16px;   
}  
.navList .listItem{
    float:left;
    width:115px;
    height:80px;   
    position:relative;
    text-align:center;
}
.navList .listItem a{
    margin-top:20px;
    line-height:40px;
    width:115px;
    height:40px;
    display:block;
}
.navList .listItem ul{
     position:absolute;
     top:60px;
     left:0px;
     width:115px;
     background:white;
     border-radius:0 0 10px 10px;
     box-shadow:0 1px 1px #666666;
     text-align:center;
     padding-top:10px;
}	
.navList .listItem ul li{
    height:36px;
}
</style>