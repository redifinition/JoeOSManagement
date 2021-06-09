<template>
  <el-row :gutter="12">
    <el-col :span="5" v-for="page in 4" :key="page" >
      <el-card   shadow="always" class="box-card" >
        <template #header>
          <div class="card-header">
            <span class="Neicuntitle">{{PageArray[page-1].PageTitle}}</span>
            <el-button  type="info" plain disabled v-show="PageArray[page-1].PageTag">{{PageArray[page-1].PageID}}</el-button>
            <span v-show="PageArray[page-1].PageTag" style="font-family: 'PingFang SC';font-weight: bold">页</span>
          </div>
        </template>
        <div v-for="i in 10" :key="i" class="text item"  >
          <transition name="el-fade-in-linear">
          <div class="transition-box" :style="'background-color: '+PageArray[page-1].colorArray[i-1]" v-show="PageArray[page-1].PageTag">{{i-1}}</div>
          </transition>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Page",
  data: () => ({
    colorNow:'rgba(155, 204, 255, 0.59)',
    colorThen:'rgb(250,232,162)',
    PageArray: [{
      PageID: -1,//每个内存块当前调入的页号
      PageTitle:'内存块1',
      PageTag:false,//记录当前内存块是否调入页
      AdActive:[0,0,0,0,0,0,0,0,0,0],//记录内存块内的每个地址是否被访问，0为未被访问
      colorArray:['rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)'
        ,'rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)',
        'rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)']
    },
      {
        PageID: -1,
        PageTitle:'内存块2',
        PageTag:false,//记录当前内存块是否调入页
        AdActive:[0,0,0,0,0,0,0,0,0,0],//记录内存块内的每个地址是否被访问，0为未被访问
        colorArray:['rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)']
      },
      {
        PageID: -1,
        PageTitle:'内存块3',
        PageTag:false,//记录当前内存块是否调入页
        AdActive:[0,0,0,0,0,0,0,0,0,0],//记录内存块内的每个地址是否被访问，0为未被访问
        colorArray:['rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)']
      },
      {
        PageID: -1,
        PageTitle:'内存块4',
        PageTag:false,//记录当前内存块是否调入页
        AdActive:[0,0,0,0,0,0,0,0,0,0],//记录内存块内的每个地址是否被访问，0为未被访问
        colorArray:['rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)','rgba(155, 204, 255, 0.59)']
      }
    ],
    pageIDArray:[-1,-1,-1,-1],//记录每个内存块当前调入页的页号

  //首先记录每个内存块当前存放的页号，缺省值为“内存块i"
}),
  methods:
      {
      }

}


</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 2px;
}

.box-card {
  width: 200px;
  height: 350px;
  background-color: rgba(177, 172, 172, 0.29);
}

.Neicuntitle
{
  font-size: medium;
  font-family: "PingFang SC";
  font-weight: bold;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Neicuntitle
{
  font-size: medium;
  font-family: "PingFang SC";
  font-weight: bold;
}
.transition-box {
  width: 160px;
  height: 20px;
  text-align: center;
  font-family: "PingFang SC";
  font-weight: bold;
  color: rgba(28, 28, 28, 0.52);
  background-color: rgba(155, 204, 255, 0.59);
  border:1px solid rgba(132, 132, 132, 0.75);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>