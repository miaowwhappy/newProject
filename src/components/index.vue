<template>
  <div class="hello">
    <top-bar></top-bar>
    <ul>
      <li @mouseover="isShow = 1" :class="{active:isShow == 1}">Core Docs</li>
      <li @mouseover="isShow = 2" :class="{active:isShow == 2}">Forum</li>
      <li @mouseover="isShow = 3" :class="{active:isShow == 3}">Community Chat</li>
      <li @mouseover="isShow = 4" :class="{active:isShow == 4}">Twitter</li>
    </ul>

    <div style="width:400px;height:400px;border:1px solid black" v-show="isShow == 1">
      1
    </div>
    <div style="width:400px;height:400px;border:1px solid black" v-show="isShow == 2">
      2
    </div>
    <div style="width:400px;height:400px;border:1px solid black" v-show="isShow == 3">
      3
    </div>
    <div style="width:400px;height:400px;border:1px solid black" v-show="isShow == 4">
      4
    </div>
  </div>
</template>

<script>
import topBar from '@/components/topBar'
export default {
  components:{
      "topBar":topBar
  },
  name: 'HelloWorld',
  data () {
    return {
      isShow: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
    background:red;
}
</style>
