<template>
<div>
<!--页面的顶栏-->
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><img src="https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/github.png" width="40" height="40"></el-menu-item>
    <el-submenu index="3">
      <template #title>关于</template>
      <el-menu-item index="3-1"><a href="https://github.com/redifinition" target="_blank" style="text-decoration: none;color: #909399" >我的github</a></el-menu-item>
      <el-menu-item index="3-2"> <el-button type="text" @click="open" style="text-decoration: none ;color: #909399">项目说明</el-button></el-menu-item>
      <el-menu-item index="3-3"><el-button type="text" @click="openMoreInfo" style="text-decoration: none ;color: #909399">更多信息</el-button></el-menu-item>
    </el-submenu>
    <h2 style="position:relative;left:-100px;top: -10px;text-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) ">操作系统内存调度项目</h2>
  </el-menu>
  <div class="line"></div>

</div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //定义一个有关项目说明的函数
    open() {
      this.$alert('<h3>操作系统内存调度项目说明</h3>'+'该项目的目的是模拟计算机操作系统<b>请求分页分配</b>请求分页分配的方式。' +
          '项目涉及了<b>页面、页表、地址转换；也涉及了页面置换过程的模拟</b>，从而加深了对<b>请求调页系统</b>的原理和实现过程的理解。'+
          '<br>1853572 梁乔',{
        confirmButtonText: '知晓',
        dangerouslyUseHTMLString:true,

      });
    },
    openMoreInfo() {
      this.$alert('<h3>项目信息</h3>'+'该项目所用前端框架为<b>vue3.x</b>,同时使用<b>Elementplus组件库</b>' +
          '想了解该项目的更多内容，欢迎进入<b>redifiniton的github</b>，希望得到一个小小的<b>Follow</b>!!!。'+
          '<br>1853572 梁乔<br><b>指导老师：张惠娟</b>',{
        confirmButtonText: '快前往梁乔的github',
        dangerouslyUseHTMLString:true,

      });
    }
  }
}




</script>

<style scoped>
@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");

</style>