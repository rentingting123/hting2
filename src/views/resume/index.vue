<template>
  <div>
    <a-card
      :bordered="false"
      :hoverable='true'
      class="cardBox">
      <div class="searchbox">
        <a-input-search
          placeholder="请输入搜索内容"
          @search="onSearch"
          class="searchIpt"
          size="large">
          <a-button slot="enterButton"  type="primary" class="danger-from-button1">
            <a-icon type="search" />
            搜索
          </a-button>
        </a-input-search>
        <a-button size="large" class="clear-from-button1">清空搜索条件</a-button>
      </div>
      <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="目前城市">
          <template  v-for="(item,index) in cityList">
            <a-checkable-tag
              :key="index"
              v-model="item.checked"
              :value="index"
              @change="handleChange">
              {{ item.name }}
            </a-checkable-tag>
          </template>
        </a-form-item>
        <a-form-item label="期望城市">
          <template  v-for="(item,index) in cityList">
            <a-checkable-tag
              :key="index"
              v-model="item.checked"
              :value="index"
              @change="handleChange"
              >
              {{ item.name }}
            </a-checkable-tag>
          </template>
        </a-form-item>
        <a-form-item label="工作年限">
          <template  v-for="(item,index) in workYearList">
            <a-checkable-tag
              :key="index"
              v-model="item.checked"
              :value="index"
              @change="handleChange"
              >
              {{ item.name }}
            </a-checkable-tag>
          </template>
          <span>
            自定义
            <a-input placeholder=""  class="smallIpt" />
            <span class="custom">-</span>
            <a-input placeholder="" class="smallIpt"/>
          </span>
        </a-form-item>
        <a-form-item label="教育经历">
          <template  v-for="(item,index) in educationList">
            <a-checkable-tag
              :key="index"
              v-model="item.checked"
              :value="index"
              @change="handleChange"
              >
              {{ item.name }}
            </a-checkable-tag>
          </template>
        </a-form-item>
        <a-form-item label="当前行业">
          <a-select v-model="form.status1" placeholder="不限" default-value="0" allowClear style="width:160px">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
          <span class="customtxt">当前职能</span>
          <a-select v-model="form.status1" placeholder="不限" default-value="0" allowClear style="width:160px">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
          <span>
            <span class="customtxt">年 龄</span>
            <a-input placeholder=""  class="smallIpt" />
            <span class="custom">-</span>
            <a-input placeholder="" class="smallIpt"/>
          </span>
          <span class="customtxt">性 别</span>
          <a-select v-model="form.status1" placeholder="不限" default-value="0" allowClear style="width:160px">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="目前年薪">
          <span>
            <a-input placeholder=""  class="smallIpt" />
            <span class="custom">-</span>
            <a-input placeholder="" class="smallIpt"/>
          </span>
          <span>
            <span class="customtxt">期望年薪</span>
            <a-input placeholder=""  class="smallIpt" />
            <span class="custom">-</span>
            <a-input placeholder="" class="smallIpt"/>
          </span>
          <span class="customtxt">毕业院校</span>
          <a-select v-model="form.status1" placeholder="不限" default-value="0" allowClear style="width:160px">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
          <span class="customtxt">专业名称</span>
          <a-select v-model="form.status1" placeholder="不限" default-value="0" allowClear style="width:160px">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="其 它">
          <a-select v-model="form.status1" placeholder="简历状态" default-value="0" allowClear style="width:160px;margin-right:20px">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
          <a-select v-model="form.status1" placeholder="求职意向" default-value="0" allowClear style="width:160px;margin-right:20px">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
          <a-select v-model="form.status1" placeholder="简历来源" default-value="0" allowClear style="width:160px;margin-right:20px">
            <a-select-option value="0">全部</a-select-option>
            <a-select-option value="1">关闭</a-select-option>
            <a-select-option value="2">运行中</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
      <div class="morebtn">
        <a-button type="link" class="primColor">收起更多条件</a-button>
      </div>
    </a-card>
    <div class="peopleList">
      <a-row :gutter="16" class="peopleItem cardBox" v-for="(item, index) in peopleList" :key="index">
        <a-col :span="14" class="resumeInfo">
          <div class="infoTop">
            <img :src="item.info.img?item.img:logom" alt="" class="img">
            <div class="infoR">
              <div class="xinxi">
                <span class="name">{{item.info.name}}</span>
                <span>/ {{item.info.sex}}</span>
                <span>/ {{item.info.age}}岁</span>
                <span class="jifen">{{item.info.jifen}}积分</span>
              </div>
              <div class="primColor">
                <span>
                  <div class="iconbg"><i class="iconfont">&#xe646;</i></div>
                  {{item.info.address}}
                </span>
                <span>
                  <div class="iconbg"><i class="iconfont">&#xe647;</i></div>
                  {{item.info.time}}
                </span>
                <span>
                  <div class="iconbg"><i class="iconfont">&#xe611;</i></div>
                  {{item.info.education}}
                </span>
              </div>
            </div>
          </div>
          <div class="projectList">
            <div class="projectItem" v-for="(item1,index1) in item.project" :key="index1">
              <span>关联项目：<span class="primColor">{{item1.name}}</span></span>
              <span>PM：{{item1.pm}}</span>
              <span>RC：{{item1.rc}}</span>
              <span>当前推进状态：<span class="redColor">{{item1.status}}</span></span>
            </div>
          </div>
        </a-col>
        <a-col :span="10" class="resumeTime">
          <div class="timeTop">
            <span>简历更新时间：{{ item.resumeTime.time }}</span>
            <span>简历来源：{{ item.resumeTime.come }}</span>
            <span>操作人：{{ item.resumeTime.optionpeople }}</span>
          </div>
          <div class="companybox">
            <div v-for="(item2,index2) in item.companyList" :key="index2" class="companyItem">
              <span>{{item2.name}}</span>
              <span class="primColor">/ {{item2.zhiwei}}</span>
              <span class="primColor">/ {{item2.time}}</span>
            </div>
          </div>
          <div class="optionGroup">
            <a-button :type="item.optionbtn.sc ==1?'danger':''" :class="item.optionbtn.sc ==1?'danger-from-button':'clear-from-button' ">
              <a-icon type="star" theme="filled"/>已收藏
            </a-button>
            <!-- 转发-->
            <a-popover v-model="item.optionbtn.zfvisible" trigger="click" placement="bottomRight">
              <a slot="content" >
                <a-form-model
                  ref="dynamicValidateForm"
                  :model="form"
                  layout="horizontal"
                  class="width300 padding20"
                  v-bind="{
                    labelCol: { span: 6 },
                    wrapperCol: { span: 18 },
                  }">
                  <a-form-model-item label="顾问">
                    <a-select placeholder="请选择" allowClear>
                      <a-select-option value="王同学">王同学</a-select-option>
                      <a-select-option value="李同学">李同学</a-select-option>
                      <a-select-option value="黄同学">黄同学</a-select-option>
                    </a-select>
                  </a-form-model-item>
                 <a-form-model-item label="公司">
                    <a-select placeholder="请选择" allowClear>
                      <a-select-option value="王同学">王同学</a-select-option>
                      <a-select-option value="李同学">李同学</a-select-option>
                      <a-select-option value="黄同学">黄同学</a-select-option>
                    </a-select>
                  </a-form-model-item>
                  <a-form-model-item label="职位">
                    <a-select placeholder="请选择" allowClear>
                      <a-select-option value="王同学">王同学</a-select-option>
                      <a-select-option value="李同学">李同学</a-select-option>
                      <a-select-option value="黄同学">黄同学</a-select-option>
                    </a-select>
                  </a-form-model-item>
                  <div class="textalginC">
                    <a-button key="submit" type="primary" class="primarybtn btnR" @click="item.optionbtn.zfvisible = false;">
                      确定 
                    </a-button>
                  </div>
                </a-form-model>
              </a>
              <a-button :type="item.optionbtn.zf ==1 ?'danger':''" class=" marginleft" :class="item.optionbtn.zf ==1?'danger-from-button':'clear-from-button' ">
                <i class="iconfont">&#xe6cf;</i> 转发
              </a-button>
            </a-popover>
            <!-- 简历分组-->
            <a-popover v-model="item.optionbtn.jlfzvisible" trigger="click" placement="bottomRight">
              <a slot="content" >
                <a-form-model
                  ref="dynamicValidateForm"
                  :model="form"
                  layout="horizontal"
                  class="width300 padding20"
                  v-bind="{
                    labelCol: { span: 6 },
                    wrapperCol: { span: 18 },
                  }">
                  <a-form-model-item label="分组">
                    <a-select placeholder="请选择" allowClear>
                      <a-select-option value="王同学">王同学</a-select-option>
                      <a-select-option value="李同学">李同学</a-select-option>
                      <a-select-option value="黄同学">黄同学</a-select-option>
                    </a-select>
                  </a-form-model-item>
                 <a-form-model-item label="添加小组">
                    <a-select placeholder="请选择" allowClear>
                      <a-select-option value="王同学">王同学</a-select-option>
                      <a-select-option value="李同学">李同学</a-select-option>
                      <a-select-option value="黄同学">黄同学</a-select-option>
                    </a-select>
                  </a-form-model-item>
                  <div class="textalginC">
                    <a-button key="submit" type="primary" class="primarybtn btnR" @click="item.optionbtn.jlfzvisible = false;">
                      确定 
                    </a-button>
                  </div>
                </a-form-model>
              </a>
              <a-button :type="item.optionbtn.jlfx ==1?'danger':''" class="marginleft" :class="item.optionbtn.jlfx ==1?'danger-from-button':'clear-from-button' ">
                <a-icon type="profile" theme="filled" />简历分组
              </a-button>
            </a-popover>
             <!-- 加入职位-->
            <a-popover v-model="item.optionbtn.jrzwvisible" trigger="click" placement="bottomRight">
              <a slot="content" >
                <a-form-model
                  ref="dynamicValidateForm"
                  :model="form"
                  layout="horizontal"
                  class=" padding20">
                  <a-form-model-item >
                    <a-radio-group v-model="radiovalue" @change="onChange" class="Radiogroup">
                      <a-row v-for="(item1,index) in item.zhiweilist" :key="index" class="rowRadioStyle">
                          <a-radio :value="item1.id" class="radioStyle">
                            <span>{{ item1.name }}</span>
                          </a-radio>
                      </a-row>
                    </a-radio-group>
                  </a-form-model-item>
                  <div class="textalginC">
                    <a-button key="submit" type="primary" class="primarybtn btnR" @click="item.optionbtn.jrzwvisible = false;">
                      确定 
                    </a-button>
                  </div>
                </a-form-model>
              </a>
              <a-button :type="item.optionbtn.jrzw ==1?'danger':''" class="marginleft" :class="item.optionbtn.jrzw ==1?'danger-from-button':'clear-from-button' ">
                <a-icon type="plus-circle" theme="filled" />加入职位
              </a-button> 
            </a-popover>
          </div>
        </a-col>
      </a-row>
      <a-pagination show-quick-jumper :default-current="2" :total="500" @change="onChange" />
    </div>
  </div>
</template>

<script>
import logom from '@/assets/img/logom.png'
import logof from '@/assets/img/logof.png'
const cityList = [
  {
    id: 1,
    name: '上海',
    checked: false
  },
   {
    id: 2,
    name: '北京 ',
    checked: false
  },
  {
    id: 3,
    name: '广州',
    checked: false
  },
  {
    id: 3,
    name: '深圳',
    checked: false
  },
  {
    id: 4,
    name: '天津',
    checked: false
  },
  {
    id: 5,
    name: '武汉',
    checked: false
  },
  {
    id: 6,
    name: '广州',
    checked: false
  },
  {
    id: 7,
    name: '其他',
    checked: false
  }
];
const workYearList = [
   {
    id: 1,
    name: '不限    ',
    checked: false
  },
   {
    id: 2,
    name: '应届生',
    checked: false
  },
   {
    id: 3,
    name: '1-3年',
    checked: false
  },
   {
    id: 4,
    name: '3-5年',
    checked: false
  },
   {
    id: 5,
    name: '5-10年',
    checked: false
  },

];
const educationList = [
   {
    id: 1,
    name: '不限',
    checked: false
  },
   {
    id: 2,
    name: '本科及以上',
    checked: false
  },
   {
    id: 3,
    name: '硕士及以上',
    checked: false
  },
   {
    id: 4,
    name: '博士',
    checked: false
  },
   {
    id: 5,
    name: '大专及以下',
    checked: false
  },
  {
    id: 6,
    name: '高中及以上',
    checked: false
  },
   {
    id: 7,
    name: '统招',
    checked: false
  },
   {
    id: 8,
    name: '985院校',
    checked: false
  },
   {
    id: 9,
    name: '211院校',
    checked: false
  },
];
const peopleList =[
  {
    info: {
      img: '',
      name: "张飞",
      sex: '男',
      age: '35',
      jifen: '30',
      address: "上海市徐汇区云峰路500号",
      time: "12年(2004.09-2016.09)",
      education: '上海交通大学 / 工商管理(本科)'
    },
    project: [
      {
        name: 'CTO 阿里巴巴',
        pm: '百里',
        rc: '百里',
        status: '推荐-待反馈'
      },
       {
        name: 'CTO 阿里巴巴',
        pm: '百里',
        rc: '百里',
        status: '推荐-待反馈'
      }
    ],
    resumeTime: {
      time: '2020年12月31日 16:30',
      come: '上传 ',
      optionpeople: '张三'
    },
    companyList: [
      {
        name:'上海直猎网络科技有限公司',
        zhiwei:'技术总监',
        time:'2004.09-2016.09 12年1个月'
      }
    ],
    optionbtn: {
      sc: 1,
      zf: 1,
      jlfx: 1,
      jrzw: 1,
      zfvisible: false,
      jlfzvisible: false,
      jrzwvisible: false
    },
    zhiweilist :[
      {
        id: 1,
        name: '技术总监 阿里巴巴'
      },
      {
        id: 2,
        name: '技术总监 阿里巴巴'
      },
      {
        id: 3,
        name: '运营负责人 京东'
      },
      {
        id: 4,
        name: '销售负责人 360金融'
      }
    ]
  },
  {
    info: {
      img: '',
      name: "张飞",
      sex: '男',
      age: '35',
      jifen: '30',
      address: "上海市徐汇区云峰路500号",
      time: "12年(2004.09-2016.09)",
      education: '上海交通大学 / 工商管理(本科)'
    },
    project: [
      {
        name: 'CTO 阿里巴巴',
        pm: '百里',
        rc: '百里',
        status: '推荐-待反馈'
      },
       {
        name: 'CTO 阿里巴巴',
        pm: '百里',
        rc: '百里',
        status: '推荐-待反馈'
      }
    ],
    resumeTime: {
      time: '2020年12月31日 16:30',
      come: '上传 ',
      optionpeople: '张三'
    },
    companyList: [
      {
        name:'上海直猎网络科技有限公司',
        zhiwei:'技术总监',
        time:'2004.09-2016.09 12年1个月'
      },
       {
        name:'上海直猎网络科技有限公司',
        zhiwei:'技术总监',
        time:'2004.09-2016.09 12年1个月'
      },
       {
        name:'上海直猎网络科技有限公司',
        zhiwei:'技术总监',
        time:'2004.09-2016.09 12年1个月'
      }
    ],
    optionbtn: {
      sc: 0,
      zf: 0,
      jlfx: 0,
      jrzw: 0,
      zfvisible: false,
      jlfzvisible: false,
      jrzwvisible: false
    },
    zhiweilist :[
      {
        id: 1,
        name: '技术总监 阿里巴巴'
      },
      {
        id: 2,
        name: '技术总监 阿里巴巴'
      },
      {
        id: 3,
        name: '运营负责人 京东'
      },
      {
        id: 4,
        name: '销售负责人 360金融'
      }
    ]
  }
];
export default {
  data () {
    return {
      form: {},
      cityList,
      workYearList, // 工作年限
      educationList, // 教育经历
      peopleList, // 简历人员
      logom,
      logof,
      radiovalue:{}, //选择职位 选中的值
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 22},
      },
    }
  },
  created () {
    
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    handleChange(value) {
      console.log(value);
      // const key = Object.keys(this.cityList).filter(key => key === checked.value)
      // this.cityList[key] = checked.checked
    },
    onChange(e) {
      console.log('radio checked', e.target.value);
		},
  },
}
</script>

<style scoped>
  .searchbox{
    display: flex;
    align-items: center;
  }
  .searchIpt{
    flex: 1;
    margin-right: 20px;
  }
  .smallIpt{
    display: 'inline-block';
    width: 86px 
  }
  .custom{
    color: #C1C1C1;
    margin:0 10px;
  }
  .ant-form-item{
    /* margin-bottom: 0; */
  }
  .customtxt{
    margin: 0 10px 0 30px;
  }
  .morebtn{
    text-align: right;
  }
  /* 简历信息 */
  .peopleItem{
    /* height: 254px; */
    background: #fff;
    padding: 18px;
    box-sizing: border-box;
  }
  .resumeInfo{
    border-right: 1px solid rgba(67, 94, 190, 0.18);
    /* height: 100%; */
  }
  .infoTop{
    display: flex;
    align-items: center;
  }
  .infoTop .img{
    width: 54px;
    height: 54px;
    border-radius: 50%;
    margin-right: 12px;
  }
  /* .infoR{

  } */
  .infoTop .xinxi{
    font-size: 14px;
    color: #282828;
    margin-bottom: 5px;
  }
  .infoTop .xinxi .name{
    font-size: 20px;
  }
  .infoTop .xinxi .jifen{
    padding: 2px 6px;
    line-height: 22px;
    background: #FF6864;
    border-radius: 2px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    margin-left: 20px;
  }
  .projectItem{
    height: 40px;
    background: #F1F7FF;
    border-radius: 6px;
    display: flex;
    padding: 0 12px;
    line-height: 40px;
    justify-content: space-between;
    margin-top: 20px;
    margin-right: 80px;
  }
  /* 右 */
  .resumeTime{
    /* height: 254px; */
    padding: 14px;
    box-sizing: border-box;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
  }
  .optionGroup{
    text-align: right;
    margin-top: 50px;
  }
  .timeTop{
    text-align: right;
    color: #666666;
    font-size: 12px;
    height: 20px;
  }
  .timeTop>span{
    margin-right:16px ;
  }
  .companybox{
    margin-top: 20px;
  }
  .companyItem{
    width: 100%;
    color: #242424;
    font-size: 14px;
    margin-bottom: 8px;
  }
</style>