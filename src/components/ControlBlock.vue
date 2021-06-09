<template xmlns:el-col="http://www.w3.org/1999/html">
  <el-card class="box-card" style="background-color: #d4d9e2" >
    <template #header>
      <div class="card-header">
        <span style="font-family: 'Arial Rounded MT Bold'"><b>内存调度控制模块</b></span>
      </div>
    </template>
        <el-card body-style="{ padding:'10px' }" class="smallcard" shadow="hover">
          <span class="bigsize" ><b>作业数目</b></span>
          <p><b>1</b></p>
          <span class="bigsize"><b>作业分配的内存块数</b></span>
          <p><b>4</b></p>
          <span class="bigsize"><b>每页存放的指令数</b></span>
          <p><b>10</b></p>
          <span class="bigsize"><b>作业的指令数</b></span>
          <p><b>320</b></p>
        </el-card>

    <p class="bigsize" ><b>页面置换算法</b></p>
    <el-select v-model="PRAValue" placeholder="请选择">
      <el-option
          v-for="item in PRAlgorithm"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>

    <p class="bigsize" ><b>指令执行顺序</b></p>
    <el-select v-model="PRASequence" placeholder="请选择">
      <el-option
          v-for="item in PRASOption"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>

    <p class="bigsize" ><b>当前缺页数</b></p>
    <el-button type="info" plain disabled>{{MissingPages}}</el-button>

    <p class="bigsize" ><b>当前缺页率</b></p>
    <el-progress type="circle" :percentage="MissingRate" indeterminate="true" width="80" color="#4b86fd" ></el-progress>
  </el-card>




</template>

<script>
export default {
  name: "ControlBlock",
  data: () => ({
    show: true,
    PRAlgorithm://指定页面置换的算法
        [{
          value: 'FIFO',
          label: 'FIFO算法',
        },
          {
            value: 'LRU',
            label: 'LRU算法',
          }],
    PRAValue:'FIFO',
    PRASequence:'混合执行',
    PRASOption://指令执行的顺序选项
    [{
      value:'混合执行',
      label:'混合执行',
    },
      {
        value:'随机执行',
        label:'随机执行',
      },
      {
        value:'顺序执行',
        label:'顺序执行',
      }],

    MissingPages:0,//缺页数
    MissingRate:0,

  })
}
</script>

<style scoped>
@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

h3{
  margin: 0;
  padding: 0;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 380px;
}

.smallcard
{
  border-radius: 5px;
  border-color: #909399;
  background-color: #e7ecf8;
  border-width: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.bigsize
{
  font-size: medium;
  text-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

</style>