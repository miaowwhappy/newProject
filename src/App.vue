<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,
form,fieldset,legend,button,input,textarea,th,td {margin:0;padding:0;}
/* body{ background:#f6f7fb } */
h1,h2,h3,h4,h5,h6{font-size:100%;}

ul,ol{list-style:none;}

a{text-decoration:none;color:black;cursor:pointer;}

a:hover{text-decoration:underline;}

sup{vertical-align:text-top;}

sub{vertical-align:text-bottom;}

legend{color:#000;}

fieldset,img{border:0;}

button,input,select,textarea{font-size:100%;}

table{border-collapse:collapse;border-spacing:0;}

.wrap { height: auto; width: 1200px; overflow: visible;margin:0 auto;overflow:hidden;}
</style>
