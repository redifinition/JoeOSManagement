<template>
  <el-card shadow="always" class="box-card" style="box-shadow: 0 4px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);">
    <template #header>
      <div class="card-header">
        <span class="Neicuntitle">指令序列</span>
      </div>
    </template>

    <el-table style="box-shadow:0 4px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);width: 100% "
        :data="tableData"
        height="220"
        border
      highlight-current-row
        ref="table"
      @current-change="handleCurrentChange">
      <el-table-column
          type="index"
          width="60">
      </el-table-column>
      <el-table-column
          prop="address"
          label="指令地址"
          width="100">
      </el-table-column>
      <el-table-column
          prop="lossPage"
          label="缺页"
          width="100">
      </el-table-column>
      <el-table-column
          prop="inPage"
          label="换入页"
          width="100">
      </el-table-column>
      <el-table-column
          prop="outPage"
          label="换出页"
           width="100">
      </el-table-column>
    </el-table>


  </el-card>

</template>

<script>
export default {
  name: "OrderInfo",
  data:()=>({
    tableData: [
      ],
  }),
  methods:{
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    createOrderInfo:function(address,lossPage,inPage,outPage)
    {
      let obj=new Object();
      obj.address=address;
      obj.lossPage=lossPage;
      obj.inPage=inPage;
      obj.outPage=outPage;
      return obj;
    }
  }


}
</script>

<style scoped>
@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");
.box-card {
  width: 550px;
  height: 310px;
  background-color: rgba(180, 144, 144, 0.29);
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
</style>