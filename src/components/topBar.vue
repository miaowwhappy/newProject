<template>
  <div class="top">
    <div class="layout clearfix">
      <div class="left">
        <img src="/src/assets/topBar/images/phone.png" alt="">
        <span>热线电话：400-821-2165</span>
        <a target="_blank">在线客服</a>
      </div>
      <div class="right clearfix">
        <ul class="clearfix">
          <li v-if="!hasLogin">
            <span><router-link to="/register">注册</router-link></span>
            <span><router-link to="/login">登录</router-link></span>
          </li>
          <li v-else class="hasLogin">
            <span>您好，
              <a href="javascript:;" class="wrap" id="wrap">{{user.name}}
                 <div class="arrow3"></div>
                 <ul class="clearfix">
                    <li class="clearfix">
                      <a href="javascript:;" class="c_r"><img src="/src/assets/topBar/images/phone.png" alt="">消息(596)</a>
                    </li>
                    <li class="clearfix">
                      <a href="javascript:;" class="c_r">充值</a>
                      <a href="javascript:;" class="c_r">提现</a>
                    </li>
                    <li class="clearfix">
                      <a href="javascript:;" class="c_r">资金管理</a>
                      <a href="javascript:;" class="c_r">投资管理</a>
                      <a href="javascript:;" class="c_r">借款管理</a>
                    </li>
                    <li class="clearfix">
                      <a @click="quit">退出</a>
                    </li>
                  </ul>
              </a>

            </span>
            <span><a href="javascript:;">有新手任务</a></span>

          </li>

          <li>
            <span><a href="javascript:;">积分商城</a></span>
            <span><a href="javascript:;">邀请好友</a></span>
            <span><a href="javascript:;">新手指引</a></span>
          </li>

          <li>
            <a href="javascript:;" class="weixin">
              <div class="arrow1"></div>
              <div class="content">
                  <p>手机扫一扫，关注民爱贷微信</p>
                  <p><img src="/src/assets/topBar/images/2wm.png" alt=""></p>
              </div>
            </a>
            <a href="javascript:;" class="weibo">
              <div class="arrow2"></div>
              <div class="content">
                <a href="javascript:;">点击关注民爱贷  &nbsp;<b>@民爱贷</b></a>
              </div>
            </a>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {setCookie,getCookie,delCookie} from '@/assets/js/cookie.js'
	export default{
		data(){
			return {
			  hasLogin:false,
        user:{
			    name:'',
          id:1
        }
			}
		},
		mounted(){
      (function () {
        var oAs = document.getElementsByClassName("c_r");
        for (var i = 0,l=oAs.length;i<l;i++){
          oAs[i].onmouseenter=function (e) {
            this.style.color = "#fff";
          };
          oAs[i].onmouseleave=function (e) {
            this.style.color = "#333";
          };
        }
      })();
      if(getCookie('username')){
            this.hasLogin = true;
            this.user.name = getCookie('username');

        }

    },
    methods:{
      quit(){
          delCookie('username');
          this.hasLogin = false;
      }
    }
	}
</script>

<style scoped>
  @import '../assets/topBar/topBar.css';
</style>
