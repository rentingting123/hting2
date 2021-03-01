<!--  -->
<template>
 <div>
	<a-card :bordered="false" class="cardBox uploadContainer">
		<a-upload-dragger
			name="file"
			:multiple="true"
			action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
			@change="handleChange"
			class="uploadbox">
			<p class="ant-upload-text">
				点击/拖拽上传简历文件
			</p>
			<p class="ant-upload-text">
				支持<span class="primColor">PDF、DOC、EXCEL、HTML、JPG、PNG</span>
				等文档格式
				<span class="primColor">多文件上传</span>
			</p>
		</a-upload-dragger>
		<div>
			<a-button key="submit" type="primary" class="primarybtn " @click="upload">
				<a-icon type="upload" /> 上传简历文件 
			</a-button>
		</div>
	</a-card>
		<a-tabs class="tabs" :tabBarStyle="{borderBottom: 'none'}" >	
      <a-tab-pane key="1" tab="全部(29)">
        <uploadTable />
      </a-tab-pane>
      <a-tab-pane key="2" tab="上传成功(20)">
       <uploadTable />
      </a-tab-pane>
      <a-tab-pane key="3" tab="上传失败(20)">
        <uploadTable />
      </a-tab-pane>
      <a-tab-pane key="4" tab="重复简历(20)">
        <uploadTable />
      </a-tab-pane>
			<a-tab-pane key="5" tab="取消上传(20)">
        <uploadTable />
      </a-tab-pane>
    </a-tabs>
	<div class="optionbox">
		<a-button key="submit" type="primary" class="primarybtn btnR marginTB" @click="handleOk">
			完成 
		</a-button>
	</div>
 </div>
</template>

<script>
import uploadTable from './components/uploadTable';

export default {
	data() {
		//这里存放数据
		return {

		};
	},
	components: {
		uploadTable
  },
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
	//上传简历
	upload(){
		
	}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style scoped>
.uploadbox{
	display: block;
	width: 782px;
	height: 146px;
	margin-bottom: 20px;
}
.uploadContainer{
	/* width: 100%; */
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
}
</style>