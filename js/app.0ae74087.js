(function(e){function t(t){for(var a,i,l=t[0],c=t[1],s=t[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,l=1;l<r.length;l++){var c=r[l];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/JoeOSManagement/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var b=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1739:function(e,t,r){},2326:function(e,t,r){},"2b43":function(e,t,r){},"3e84":function(e,t,r){"use strict";r("2326")},"4a8c":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n=r("3fd4"),o=(r("7dd6"),{id:"app"}),i=Object(a["m"])("br",null,null,-1),l=Object(a["m"])("br",null,null,-1),c=Object(a["m"])("br",null,null,-1),s=Object(a["m"])("br",null,null,-1),b=Object(a["m"])("br",null,null,-1),u=Object(a["m"])("div",{class:"card-header"},[Object(a["m"])("span",{class:"Neicuntitle"},"指令控制模块")],-1),d=Object(a["l"])("单步执行"),g=Object(a["m"])("br",null,null,-1),f=Object(a["m"])("br",null,null,-1),h=Object(a["l"])("连续执行"),O=Object(a["m"])("br",null,null,-1),m=Object(a["m"])("br",null,null,-1),j=Object(a["l"])("重置"),p=Object(a["m"])("br",null,null,-1),P=Object(a["m"])("br",null,null,-1);function y(e,t,r,n,y,v){var D=Object(a["M"])("Home"),I=Object(a["M"])("control-block"),A=Object(a["M"])("el-aside"),x=Object(a["M"])("page"),M=Object(a["M"])("order-info"),$=Object(a["M"])("el-button"),T=Object(a["M"])("el-card"),k=Object(a["M"])("el-space"),_=Object(a["M"])("el-main"),R=Object(a["M"])("el-container");return Object(a["D"])(),Object(a["i"])("div",o,[Object(a["m"])(D),i,l,c,s,Object(a["m"])(R,{style:{"margin-top":"-60px"}},{default:Object(a["bb"])((function(){return[Object(a["m"])(A,{style:{"line-height":"10px","box-shadow":"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"},width:"390px"},{default:Object(a["bb"])((function(){return[Object(a["m"])(I,{ref:"ControlBlockDom"},null,512)]})),_:1}),Object(a["m"])(_,null,{default:Object(a["bb"])((function(){return[Object(a["m"])(x,{ref:"PageDom"},null,512),b,Object(a["m"])(k,{wrap:"",size:30},{default:Object(a["bb"])((function(){return[Object(a["m"])(M,{ref:"OrderInfoDom"},null,512),Object(a["m"])(T,{shadow:"always",class:"box-card"},{header:Object(a["bb"])((function(){return[u]})),default:Object(a["bb"])((function(){return[Object(a["m"])($,{type:"info",round:"",onClick:t[1]||(t[1]=function(e){return v.addOneOrder()}),disabled:e.singButtonTag,style:{position:"relative",left:"-20px"}},{default:Object(a["bb"])((function(){return[d]})),_:1},8,["disabled"]),g,f,Object(a["m"])($,{type:"info",round:"",onClick:t[2]||(t[2]=function(e){return v.addOrder()}),disabled:e.continueButtonTag,style:{position:"relative",left:"-20px"}},{default:Object(a["bb"])((function(){return[h]})),_:1},8,["disabled"]),O,m,Object(a["m"])($,{type:"primary",round:"",onClick:v.reset,disabled:e.resetButtonTag,style:{position:"relative",left:"-30px"}},{default:Object(a["bb"])((function(){return[j]})),_:1},8,["onClick","disabled"]),p,P]})),_:1})]})),_:1})]})),_:1})]})),_:1})])}r("d3b7"),r("25f0");var v=Object(a["fb"])("data-v-6512a836");Object(a["G"])("data-v-6512a836");var D=Object(a["m"])("img",{src:"https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/github.png",width:"40",height:"40"},null,-1),I=Object(a["l"])("关于"),A=Object(a["m"])("a",{href:"https://github.com/redifinition",target:"_blank",style:{"text-decoration":"none",color:"#909399"}},"我的github",-1),x=Object(a["l"])("项目说明"),M=Object(a["l"])("更多信息"),$=Object(a["m"])("h2",{style:{position:"relative",left:"-100px",top:"-10px","text-shadow":"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"}},"操作系统内存调度项目",-1),T=Object(a["m"])("div",{class:"line"},null,-1);Object(a["E"])();var k=v((function(e,t,r,n,o,i){var l=Object(a["M"])("el-menu-item"),c=Object(a["M"])("el-button"),s=Object(a["M"])("el-submenu"),b=Object(a["M"])("el-menu");return Object(a["D"])(),Object(a["i"])("div",null,[Object(a["m"])(b,{"default-active":o.activeIndex2,class:"el-menu-demo",mode:"horizontal",onSelect:i.handleSelect},{default:v((function(){return[Object(a["m"])(l,{index:"1"},{default:v((function(){return[D]})),_:1}),Object(a["m"])(s,{index:"3"},{title:v((function(){return[I]})),default:v((function(){return[Object(a["m"])(l,{index:"3-1"},{default:v((function(){return[A]})),_:1}),Object(a["m"])(l,{index:"3-2"},{default:v((function(){return[Object(a["m"])(c,{type:"text",onClick:i.open,style:{"text-decoration":"none",color:"#909399"}},{default:v((function(){return[x]})),_:1},8,["onClick"])]})),_:1}),Object(a["m"])(l,{index:"3-3"},{default:v((function(){return[Object(a["m"])(c,{type:"text",onClick:i.openMoreInfo,style:{"text-decoration":"none",color:"#909399"}},{default:v((function(){return[M]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),$]})),_:1},8,["default-active","onSelect"]),T])})),_={name:"Home",data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(e,t){console.log(e,t)},open:function(){this.$alert("<h3>操作系统内存调度项目说明</h3>该项目的目的是模拟计算机操作系统<b>请求分页分配</b>请求分页分配的方式。项目涉及了<b>页面、页表、地址转换；也涉及了页面置换过程的模拟</b>，从而加深了对<b>请求调页系统</b>的原理和实现过程的理解。<br>1853572 梁乔",{confirmButtonText:"知晓",dangerouslyUseHTMLString:!0})},openMoreInfo:function(){this.$alert("<h3>项目信息</h3>该项目所用前端框架为<b>vue3.x</b>,同时使用<b>Elementplus组件库</b>想了解该项目的更多内容，欢迎进入<b>redifiniton的github</b>，希望得到一个小小的<b>Follow</b>!!!。<br>1853572 梁乔<br><b>指导老师：张惠娟</b>",{confirmButtonText:"快前往梁乔的github",dangerouslyUseHTMLString:!0})}}};r("f13e");_.render=k,_.__scopeId="data-v-6512a836";var R=_,w=Object(a["fb"])("data-v-7f435314");Object(a["G"])("data-v-7f435314");var B=Object(a["m"])("div",{class:"card-header"},[Object(a["m"])("span",{style:{"font-family":"'Arial Rounded MT Bold'"}},[Object(a["m"])("b",null,"内存调度控制模块")])],-1),C=Object(a["m"])("span",{class:"bigsize"},[Object(a["m"])("b",null,"作业数目")],-1),S=Object(a["m"])("p",null,[Object(a["m"])("b",null,"1")],-1),F=Object(a["m"])("span",{class:"bigsize"},[Object(a["m"])("b",null,"作业分配的内存块数")],-1),U=Object(a["m"])("p",null,[Object(a["m"])("b",null,"4")],-1),L=Object(a["m"])("span",{class:"bigsize"},[Object(a["m"])("b",null,"每页存放的指令数")],-1),N=Object(a["m"])("p",null,[Object(a["m"])("b",null,"10")],-1),V=Object(a["m"])("span",{class:"bigsize"},[Object(a["m"])("b",null,"作业的指令数")],-1),z=Object(a["m"])("p",null,[Object(a["m"])("b",null,"320")],-1),q=Object(a["m"])("p",{class:"bigsize"},[Object(a["m"])("b",null,"页面置换算法")],-1),E=Object(a["m"])("p",{class:"bigsize"},[Object(a["m"])("b",null,"指令执行顺序")],-1),H=Object(a["m"])("p",{class:"bigsize"},[Object(a["m"])("b",null,"当前缺页数")],-1),G=Object(a["m"])("p",{class:"bigsize"},[Object(a["m"])("b",null,"当前缺页率")],-1);Object(a["E"])();var K=w((function(e,t,r,n,o,i){var l=Object(a["M"])("el-card"),c=Object(a["M"])("el-option"),s=Object(a["M"])("el-select"),b=Object(a["M"])("el-button"),u=Object(a["M"])("el-progress");return Object(a["D"])(),Object(a["i"])(l,{class:"box-card",style:{"background-color":"#d4d9e2"}},{header:w((function(){return[B]})),default:w((function(){return[Object(a["m"])(l,{"body-style":"{ padding:'10px' }",class:"smallcard",shadow:"hover"},{default:w((function(){return[C,S,F,U,L,N,V,z]})),_:1}),q,Object(a["m"])(s,{modelValue:e.PRAValue,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.PRAValue=t}),placeholder:"请选择"},{default:w((function(){return[(Object(a["D"])(!0),Object(a["i"])(a["b"],null,Object(a["K"])(e.PRAlgorithm,(function(e){return Object(a["D"])(),Object(a["i"])(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"]),E,Object(a["m"])(s,{modelValue:e.PRASequence,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.PRASequence=t}),placeholder:"请选择"},{default:w((function(){return[(Object(a["D"])(!0),Object(a["i"])(a["b"],null,Object(a["K"])(e.PRASOption,(function(e){return Object(a["D"])(),Object(a["i"])(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"]),H,Object(a["m"])(b,{type:"info",plain:"",disabled:""},{default:w((function(){return[Object(a["l"])(Object(a["Q"])(e.MissingPages),1)]})),_:1}),G,Object(a["m"])(u,{type:"circle",percentage:e.MissingRate,indeterminate:"true",width:"80",color:"#4b86fd"},null,8,["percentage"])]})),_:1})})),Q={name:"ControlBlock",data:function(){return{show:!0,PRAlgorithm:[{value:"FIFO",label:"FIFO算法"},{value:"LRU",label:"LRU算法"}],PRAValue:"FIFO",PRASequence:"混合执行",PRASOption:[{value:"混合执行",label:"混合执行"},{value:"随机执行",label:"随机执行"},{value:"顺序执行",label:"顺序执行"}],MissingPages:0,MissingRate:0}}};r("3e84");Q.render=K,Q.__scopeId="data-v-7f435314";var J=Q,Y=Object(a["fb"])("data-v-4a275b22");Object(a["G"])("data-v-4a275b22");var W=Object(a["m"])("div",{class:"card-header"},[Object(a["m"])("span",{class:"Neicuntitle"},"指令序列")],-1);Object(a["E"])();var X=Y((function(e,t,r,n,o,i){var l=Object(a["M"])("el-table-column"),c=Object(a["M"])("el-table"),s=Object(a["M"])("el-card");return Object(a["D"])(),Object(a["i"])(s,{shadow:"always",class:"box-card",style:{"box-shadow":"0 4px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"}},{header:Y((function(){return[W]})),default:Y((function(){return[Object(a["m"])(c,{style:{"box-shadow":"0 4px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)",width:"100%"},data:e.tableData,height:"220",border:"","highlight-current-row":"",ref:"table",onCurrentChange:i.handleCurrentChange},{default:Y((function(){return[Object(a["m"])(l,{type:"index",width:"60"}),Object(a["m"])(l,{prop:"address",label:"指令地址",width:"100"}),Object(a["m"])(l,{prop:"lossPage",label:"缺页",width:"100"}),Object(a["m"])(l,{prop:"inPage",label:"换入页",width:"100"}),Object(a["m"])(l,{prop:"outPage",label:"换出页",width:"100"})]})),_:1},8,["data","onCurrentChange"])]})),_:1})})),Z={name:"OrderInfo",data:function(){return{tableData:[]}},methods:{handleCurrentChange:function(e){this.currentRow=e},createOrderInfo:function(e,t,r,a){var n=new Object;return n.address=e,n.lossPage=t,n.inPage=r,n.outPage=a,n}}};r("5da4");Z.render=X,Z.__scopeId="data-v-4a275b22";var ee=Z,te=Object(a["fb"])("data-v-db0d65be");Object(a["G"])("data-v-db0d65be");var re={class:"card-header"},ae={class:"Neicuntitle"},ne={style:{"font-family":"'PingFang SC'","font-weight":"bold"}};Object(a["E"])();var oe=te((function(e,t,r,n,o,i){var l=Object(a["M"])("el-button"),c=Object(a["M"])("el-card"),s=Object(a["M"])("el-col"),b=Object(a["M"])("el-row");return Object(a["D"])(),Object(a["i"])(b,{gutter:12},{default:te((function(){return[(Object(a["D"])(),Object(a["i"])(a["b"],null,Object(a["K"])(4,(function(t){return Object(a["m"])(s,{span:5,key:t},{default:te((function(){return[Object(a["m"])(c,{shadow:"always",class:"box-card"},{header:te((function(){return[Object(a["m"])("div",re,[Object(a["m"])("span",ae,Object(a["Q"])(e.PageArray[t-1].PageTitle),1),Object(a["cb"])(Object(a["m"])(l,{type:"info",plain:"",disabled:""},{default:te((function(){return[Object(a["l"])(Object(a["Q"])(e.PageArray[t-1].PageID),1)]})),_:2},1536),[[a["Y"],e.PageArray[t-1].PageTag]]),Object(a["cb"])(Object(a["m"])("span",ne,"页",512),[[a["Y"],e.PageArray[t-1].PageTag]])])]})),default:te((function(){return[(Object(a["D"])(),Object(a["i"])(a["b"],null,Object(a["K"])(10,(function(r){return Object(a["m"])("div",{key:r,class:"text item"},[Object(a["m"])(a["d"],{name:"el-fade-in-linear"},{default:te((function(){return[Object(a["cb"])(Object(a["m"])("div",{class:"transition-box",style:"background-color: "+e.PageArray[t-1].colorArray[r-1]},Object(a["Q"])(r-1),5),[[a["Y"],e.PageArray[t-1].PageTag]])]})),_:2},1024)])})),64))]})),_:2},1024)]})),_:2},1024)})),64))]})),_:1})})),ie={name:"Page",data:function(){return{colorNow:"rgba(155, 204, 255, 0.59)",colorThen:"rgb(250,232,162)",PageArray:[{PageID:-1,PageTitle:"内存块1",PageTag:!1,AdActive:[0,0,0,0,0,0,0,0,0,0],colorArray:["rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)"]},{PageID:-1,PageTitle:"内存块2",PageTag:!1,AdActive:[0,0,0,0,0,0,0,0,0,0],colorArray:["rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)"]},{PageID:-1,PageTitle:"内存块3",PageTag:!1,AdActive:[0,0,0,0,0,0,0,0,0,0],colorArray:["rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)"]},{PageID:-1,PageTitle:"内存块4",PageTag:!1,AdActive:[0,0,0,0,0,0,0,0,0,0],colorArray:["rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)"]}],pageIDArray:[-1,-1,-1,-1]}},methods:{}};r("d7fc");ie.render=oe,ie.__scopeId="data-v-db0d65be";var le=ie,ce={name:"App",components:{Page:le,OrderInfo:ee,ControlBlock:J,Home:R},data:function(){return{orderNum:0,orderId:-1,mixTag:0,FIFOArr:[],pageID:0,relatedOrderId:0,singButtonTag:!1,timer:"",timerStart:!1,continueButtonTag:!1,resetButtonTag:!1,LRUArray:[-1,-1,-1,-1]}},methods:{addOneOrder:function(){if(0==this.resetButtonTag&&1==this.timerStart&&(this.resetButtonTag=!0),319==this.orderNum&&(1==this.timerStart?(clearInterval(this.timer),this.timerStart=!1,this.open(),this.continueButtonTag=!0):(this.open(),this.singButtonTag=!1),this.resetButtonTag=!1),0==this.orderNum&&("随机执行"==this.$refs.ControlBlockDom.PRASequence||"混合执行"==this.$refs.ControlBlockDom.PRASequence?this.orderId=parseInt(319*Math.random()):this.orderId=-1),"混合执行"==this.$refs.ControlBlockDom.PRASequence)switch(this.mixTag){case 0:this.mixTag++,this.orderNum++;break;case 1:this.orderId++,this.orderNum++,this.mixTag++;break;case 2:this.orderId=parseInt((this.orderId-2)*Math.random()),this.orderNum++,this.mixTag++;break;case 3:this.orderId++,this.orderNum++,this.mixTag++;break;case 4:this.orderId=parseInt((319-this.orderId)*Math.random()+this.orderId),this.orderNum++,this.mixTag=1;break}else"随机执行"==this.$refs.ControlBlockDom.PRASequence?(this.orderId=parseInt(319*Math.random()),this.orderNum++):"顺序执行"==this.$refs.ControlBlockDom.PRASequence&&(this.orderId++,this.orderNum++);this.pageID=Math.floor(this.orderId/10),this.relatedOrderId=parseInt(this.orderId%10);for(var e=0,t=0;t<4;t++)-1!=this.LRUArray[t]&&this.LRUArray[t]++;for(e=0;e<4;e++)if(this.$refs.PageDom.pageIDArray[e]==this.pageID){this.LRUArray[e]=0,this.$refs.PageDom.pageIDArray[e]=this.pageID,this.$refs.ControlBlockDom.MissingRate=this.$refs.ControlBlockDom.MissingPages/this.orderNum*100,this.$refs.ControlBlockDom.MissingRate=parseInt(this.$refs.ControlBlockDom.MissingRate),this.$refs.PageDom.PageArray[e].colorArray[this.relatedOrderId]="rgb(250,232,162)";var r=this.$refs.OrderInfoDom.createOrderInfo(this.orderId,"否","-","-");this.$refs.OrderInfoDom.tableData.push(r);break}if(4==e){this.$refs.ControlBlockDom.MissingPages++,this.$refs.ControlBlockDom.MissingRate=this.$refs.ControlBlockDom.MissingPages/this.orderNum*100,this.$refs.ControlBlockDom.MissingRate=parseInt(this.$refs.ControlBlockDom.MissingRate);var a=this.$refs.PageDom.pageIDArray.indexOf(-1);if(-1!=a){this.FIFOArr.push(a),this.LRUArray[a]=0,this.$refs.PageDom.pageIDArray[a]=this.pageID,this.$refs.PageDom.PageArray[a].PageID=this.pageID,this.$refs.PageDom.PageArray[a].AdActive[this.relatedOrderId]=1,this.$refs.PageDom.PageArray[a].colorArray[this.relatedOrderId]="rgb(250,232,162)",this.$refs.PageDom.PageArray[a].PageTag=1;var n=this.$refs.OrderInfoDom.createOrderInfo(this.orderId,this.pageID.toString(),"-","-");this.$refs.OrderInfoDom.tableData.push(n)}else{var o;"FIFO"==this.$refs.ControlBlockDom.PRAValue?o=this.FIFOAlgorithm():"LRU"==this.$refs.ControlBlockDom.PRAValue&&(o=this.LRUAlgorithm());var i=this.$refs.PageDom.PageArray[o].PageID;this.DeletePage(o),console.log("当前需要换出的内存块号"+o),this.FIFOArr.push(o),this.LRUArray[o]=0,this.$refs.PageDom.pageIDArray[o]=this.pageID,this.$refs.PageDom.PageArray[o].PageID=this.pageID,this.$refs.PageDom.PageArray[o].AdActive[this.relatedOrderId]=1,this.$refs.PageDom.PageArray[o].colorArray[this.relatedOrderId]="rgb(250,232,162)",this.$refs.PageDom.PageArray[o].PageTag=1;var l=this.$refs.OrderInfoDom.createOrderInfo(this.orderId,"是",this.pageID.toString(),i.toString());this.$refs.OrderInfoDom.tableData.push(l)}}},FIFOAlgorithm:function(){var e=this.FIFOArr[0];return this.FIFOArr.shift(),e},LRUAlgorithm:function(){for(var e=0,t=this.LRUArray[0],r=1;r<4;r++)this.LRUArray[r]>t&&(e=r);return this.LRUArray[e]=0,e},DeletePage:function(e){this.$refs.PageDom.PageArray[e].AdActive=[0,0,0,0,0,0,0,0,0,0],this.$refs.PageDom.PageArray[e].PageTag=!1,this.$refs.PageDom.PageArray[e].PageID=-1,this.$refs.PageDom.PageArray[e].colorArray=["rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)"],this.$refs.PageDom.pageIDArray[e]=-1},open:function(){this.$alert("请点击‘知晓’查看结果。","320条指令已经执行完毕",{confirmButtonText:"知晓"})},addOrder:function(){0==this.timerStart&&(this.timerStart=!0,this.singButtonTag=!0,this.timer=setInterval(this.addOneOrder,10))},reset:function(){this.$refs.OrderInfoDom.tableData=[];for(var e=0;e<4;e++)this.$refs.PageDom.PageArray[e].PageID=-1,this.$refs.PageDom.PageArray[e].PageTag=!1,this.$refs.PageDom.PageArray[e].colorArray=["rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)","rgba(155, 204, 255, 0.59)"],this.$refs.PageDom.PageArray[e].AdActive=[0,0,0,0,0,0,0,0,0,0];this.$refs.PageDom.pageIDArray=[-1,-1,-1,-1],this.orderNum=0,this.orderId=-1,this.mixTag=0,this.FIFOArr=[],this.LRUArray=[-1,-1,-1,-1],this.pageID=0,this.relatedOrderId=0,this.$refs.ControlBlockDom.MissingPages=0,this.resetButtonTag=!1,this.continueButtonTag=!1,this.singButtonTag=!1}}};r("9e6a");ce.render=y;var se=ce,be=Object(a["h"])(se);be.use(n["a"]),be.mount("#app")},"5da4":function(e,t,r){"use strict";r("a122")},"9e6a":function(e,t,r){"use strict";r("1739")},a122:function(e,t,r){},d7fc:function(e,t,r){"use strict";r("2b43")},f13e:function(e,t,r){"use strict";r("4a8c")}});
//# sourceMappingURL=app.0ae74087.js.map