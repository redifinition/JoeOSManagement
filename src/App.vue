<template>
  <div id="app">
   <Home></Home>
    <br><br><br><br>
    <el-container style="margin-top: -60px;" >
      <el-aside  style="line-height: 10px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)" width="390px" >
        <control-block ref="ControlBlockDom"></control-block>
      </el-aside>
      <el-main >
        <page ref="PageDom"></page>
        <br>
        <el-space wrap :size="30"  >
          <order-info ref="OrderInfoDom"></order-info>
          <el-card shadow="always" class="box-card" >
            <template #header>
              <div class="card-header">
                <span class="Neicuntitle">指令控制模块</span>
              </div>
            </template>
            <el-button type="info" round @click="addOneOrder()" :disabled="singButtonTag" style="position: relative;left:-20px">单步执行</el-button>
            <br>
            <br>
            <el-button type="info" round @click="addOrder()" :disabled="continueButtonTag" style="position: relative;left:-20px">连续执行</el-button>
            <br>
            <br>
            <el-button type="primary" round @click="reset" :disabled="resetButtonTag"  style="position: relative;left:-30px">重置</el-button>
            <br><br>
          </el-card>

        </el-space>
      </el-main>
    </el-container>


  </div>
</template>


<script>

import Home from "@/components/Home";
import ControlBlock from "@/components/ControlBlock";
import OrderInfo from "@/components/OrderInfo";

import Page from "@/components/Page";


export default {
  name: 'App',
  components: {
    Page,
    OrderInfo,
    ControlBlock,
    Home
  },
  data: () => ({
    orderNum: 0,//已经执行的指令数目
    orderId: -1,//当前执行的指令地址，最开始为-1
    mixTag: 0,//记录混合执行时当前应该顺序执行还是应该跳转
    FIFOArr: [],//FIFO算法的队列
    pageID: 0,//需要调入的页号
    relatedOrderId: 0,//指令的相对地址
    singButtonTag:false,//确定单步执行按钮是否可以点击
    timer:'',
    timerStart:false,//时间为否
    continueButtonTag:false,
    resetButtonTag:false,//控制重置按钮的可用性tag
    LRUArray:[-1,-1,-1,-1]//记录每个内存块上一次被访问的时间t
  }),
  methods: {
    addOneOrder: function ()//现在该函数为混合执行FIFO
    {
      //首先设置重置按钮的可用性
      if(this.resetButtonTag==false&&this.timerStart==true)
      {
        this.resetButtonTag=true;
      }
      if(this.orderNum==319)
      {
        if(this.timerStart==true) {
          clearInterval(this.timer);
          this.timerStart = false;
          //表明程序已经执行完毕
          this.open();
          this.continueButtonTag=true;
        }
        else {
          this.open();
          this.singButtonTag = false;
        }
        this.resetButtonTag=false;
      }
      if (this.orderNum == 0)//表明现在是第一条执行的指令,首先生成指令起点
      {
        if(this.$refs.ControlBlockDom.PRASequence=='随机执行'||this.$refs.ControlBlockDom.PRASequence=='混合执行')
          this.orderId = parseInt(319 * Math.random());//生成指令起点
        else
          this.orderId=-1;
      }
      if(this.$refs.ControlBlockDom.PRASequence=='混合执行') {
        switch (this.mixTag) {
          case 0: {
            this.mixTag++;
            this.orderNum++;
            break;
          }

          case 1: {
            //当前应该顺序执行
            this.orderId++;
            this.orderNum++;
            this.mixTag++;
            break;
          }
          case 2: {
            //当前跳转到0-orderID-1的指令继续执行
            this.orderId = parseInt((this.orderId - 2) * Math.random());
            this.orderNum++;
            this.mixTag++;
            break;
          }
          case 3: {
            //当前应该顺序执行
            this.orderId++;
            this.orderNum++;
            this.mixTag++;
            break;
          }
          case 4: {
            //当前应该跳转到orderID+1-319之间的指令
            this.orderId = parseInt((319 - this.orderId) * Math.random() + this.orderId);
            this.orderNum++;
            this.mixTag = 1;
            break;
          }
        }
      }
      else if(this.$refs.ControlBlockDom.PRASequence=='随机执行')
      {
        this.orderId=parseInt(319 * Math.random());//随机生成
        this.orderNum++;
      }
      else if(this.$refs.ControlBlockDom.PRASequence=='顺序执行')
      {
        this.orderId++;
        this.orderNum++;
      }
      this.pageID = Math.floor(this.orderId / 10);//获取当前页号
      this.relatedOrderId = parseInt(this.orderId % 10);
      let i = 0;
      //首先需要将每个内存块的上次访问的时间都增加一
      for(let j=0;j<4;j++)
      {
        if(this.LRUArray[j]!=-1)
          this.LRUArray[j]++;
      }
      for (i = 0; i < 4; i++) {
        if (this.$refs.PageDom.pageIDArray[i] == this.pageID)//如果当前内存块放入的页号和要调入指令的页号相同
        {
          //直接调入，无需换出
          //首先将对应内存块页的访问时间清零
          this.LRUArray[i]=0;//表示刚刚访问
          //console.log('直接调入'+this.LRUArray[i].toString());
          this.$refs.PageDom.pageIDArray[i] = this.pageID;//标识为已访问
          this.$refs.ControlBlockDom.MissingRate = (this.$refs.ControlBlockDom.MissingPages / this.orderNum) * 100;//重新计算缺页率
          this.$refs.ControlBlockDom.MissingRate = parseInt(this.$refs.ControlBlockDom.MissingRate);
          this.$refs.PageDom.PageArray[i].colorArray[this.relatedOrderId] = 'rgb(250,232,162)';
          //添加该指令信息
          let obj = this.$refs.OrderInfoDom.createOrderInfo(this.orderId, '否', '-', '-');//创建一个信息对象
          this.$refs.OrderInfoDom.tableData.push(obj);//加入到信息数组中
          break;
        }
      }
      if (i == 4) {
        //此时已经发生缺页
        this.$refs.ControlBlockDom.MissingPages++;//缺页数增加
        this.$refs.ControlBlockDom.MissingRate = (this.$refs.ControlBlockDom.MissingPages / this.orderNum) * 100;//重新计算缺页率
        this.$refs.ControlBlockDom.MissingRate = parseInt(this.$refs.ControlBlockDom.MissingRate);
        let index = this.$refs.PageDom.pageIDArray.indexOf(-1);//寻找当前尚存空闲元素的位置
        //console.log('当前的页号' + this.pageID);//获取当前页号
       // console.log('获取当前的index:' + index);

        if (index != -1) //尚存空闲，无需换页
        {
          //现在将该内存块号加入到队列中

          this.FIFOArr.push(index);
          this.LRUArray[index]=0;
          this.$refs.PageDom.pageIDArray[index] = this.pageID;//换入页
          this.$refs.PageDom.PageArray[index].PageID = this.pageID;
          this.$refs.PageDom.PageArray[index].AdActive[this.relatedOrderId] = 1;//标记为已访问
          this.$refs.PageDom.PageArray[index].colorArray[this.relatedOrderId] = 'rgb(250,232,162)';
          this.$refs.PageDom.PageArray[index].PageTag = 1;
          let obj = this.$refs.OrderInfoDom.createOrderInfo(this.orderId, this.pageID.toString(), '-', '-');//创建一个信息对象
          this.$refs.OrderInfoDom.tableData.push(obj);//加入到信息数组中

        } else//已经没有空闲，需要换页,这里是关键的页面置换算法
        {
          let excIndex;
          if(this.$refs.ControlBlockDom.PRAValue=='FIFO') {
             excIndex = this.FIFOAlgorithm();//调用FIFO算法
          }
          else if(this.$refs.ControlBlockDom.PRAValue=='LRU')
          {
            //调用相应的LRU算法
            excIndex=this.LRUAlgorithm();//调用LRU算法
          }

          let outPage = this.$refs.PageDom.PageArray[excIndex].PageID;
          //将该内存块清空，然后调页进入
          this.DeletePage(excIndex);
          console.log('当前需要换出的内存块号' + excIndex);
          //删除
          //现在调入新的页


          this.FIFOArr.push(excIndex);
          this.LRUArray[excIndex]=0;
          this.$refs.PageDom.pageIDArray[excIndex] = this.pageID;//换入页
          this.$refs.PageDom.PageArray[excIndex].PageID = this.pageID;
          this.$refs.PageDom.PageArray[excIndex].AdActive[this.relatedOrderId] = 1;//标记为已访问
          this.$refs.PageDom.PageArray[excIndex].colorArray[this.relatedOrderId] = 'rgb(250,232,162)';
          this.$refs.PageDom.PageArray[excIndex].PageTag = 1;
          let obj = this.$refs.OrderInfoDom.createOrderInfo(this.orderId, '是', this.pageID.toString(), outPage.toString());//创建一个信息对象
          this.$refs.OrderInfoDom.tableData.push(obj);//加入到信息数组中*/
        }

      }
      /*
      console.log(this.LRUArray[0]);
      console.log(this.LRUArray[1]);
      console.log(this.LRUArray[2]);
      console.log(this.LRUArray[3]);
      */

    },


    //FIFO算法
    FIFOAlgorithm:function()
    {
      let excIndex = this.FIFOArr[0];
      this.FIFOArr.shift();//取出最先换页进入的内存块号
      return excIndex;
    },

    //LRU算法
    LRUAlgorithm:function()
    {
      //首先需要获取t值最大的元素的索引
      let index=0;
      let maxNum=this.LRUArray[0];//初始化最大值
      for(let i=1;i<4;i++)
      {
        if(this.LRUArray[i]>maxNum)
        {
          index=i;
        }
      }
      this.LRUArray[index]=0;
      return index;
    },

    DeletePage: function (pageId) {
      this.$refs.PageDom.PageArray[pageId].AdActive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.$refs.PageDom.PageArray[pageId].PageTag = false;
      this.$refs.PageDom.PageArray[pageId].PageID = -1;
      this.$refs.PageDom.PageArray[pageId].colorArray = ['rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)'
        , 'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)',
        'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)'];
      this.$refs.PageDom.pageIDArray[pageId] = -1;

    },
    open() {
      this.$alert('请点击‘知晓’查看结果。', '320条指令已经执行完毕', {
        confirmButtonText: '知晓'
          });
        },
    addOrder:function()
    {
      if(this.timerStart==false) {
        this.timerStart = true;
        this.singButtonTag=true;
        this.timer = setInterval(this.addOneOrder, 10);
      }
    },
    reset:function()//重置所有内容
    {
      this.$refs.OrderInfoDom.tableData=[];//清空指令区
      for(let i=0;i<4;i++) {
        this.$refs.PageDom.PageArray[i].PageID=-1;
        this.$refs.PageDom.PageArray[i].PageTag=false;
        this.$refs.PageDom.PageArray[i].colorArray=['rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)'
          , 'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)',
          'rgba(155, 204, 255, 0.59)', 'rgba(155, 204, 255, 0.59)'];
        this.$refs.PageDom.PageArray[i].AdActive=[0,0,0,0,0,0,0,0,0,0];
      }
      this.$refs.PageDom.pageIDArray=[-1,-1,-1,-1];
      this.orderNum=0;
      this.orderId=-1;
      this.mixTag=0;
      this.FIFOArr=[];
      this.LRUArray=[-1,-1,-1,-1];
      this.pageID=0;
      this.relatedOrderId=0;
      this.$refs.ControlBlockDom.MissingPages=0;
      this.resetButtonTag=false;//重置按钮的可用状态
      this.continueButtonTag=false;
      this.singButtonTag=false;
    }




  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
@import url("//unpkg.com/element-plus/lib/theme-chalk/index.css");

.el-aside {
  background-color: #ffffff;
  width: 580px;
}
.el-main {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.box-card {
  width: 300px;
  background-color: rgba(255, 255, 255, 0.29);
}
.Neicuntitle
{
  font-size: medium;
  font-family: "PingFang SC";
  font-weight: bold;
}
</style>
