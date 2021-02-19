<template>
<div>
	<a-input v-model="form.name" placeholder="请输入福利" class="iptName" />
	<a-button type="link"  @click="companyPeopleAdd">
		添加
	</a-button>
	<template v-for="(tag, index) in List">
		<a-tooltip v-if="tag.name.length > 20" :key="index" :title="tag">
			<a-tag  :closable="true" @close="() => handleClose(index)">
				{{ `${tag.name.slice(0, 20)}...` }}
			</a-tag>
		</a-tooltip>
		<a-tag v-else class="tag"  :key="index" :closable="true" @close="() => handleClose(index)">
			{{ tag.name }}
		</a-tag>
	</template>
</div>
</template>

<script>

export default {
  data() {
    return {
      form: { },
      List: [], // 企业联系人列表
    }; 
  },
  methods: {
    deleteData(item) {
      let index = this.List.indexOf(item);
      if (index !== -1) {
        this.List.splice(index, 1);
      }
    },
    companyPeopleAdd() {
      this.List.push({
        ...this.form,
      });
    },
		handleClose(index) {
			console.log(index);
      // this.List = this.List.splice(index,1);
    },
  },
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.iptName{
  width: 150px !important;
}
.companyList{
  height: 40px;
  background: #F9FAFB;
  display: flex;
  justify-content: space-between;
  /* font-size: 18px; */
  color: #282828;
  line-height: 40px;
  margin-top: 10px;
}
.companyList > span{
  width: 150px;
}
.avatar-uploader > .ant-upload {
  width: 60px !important;
  height: 60px !important;
	background: #FAFAFA !important;
	border-radius: 8px !important;
	border: 1px solid #DEDEDE !important;
}
.ant-upload-select-picture-card i {
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  color: #666;
}
.tag{
	background: #F9FAFB !important;
	color: #282828 !important;
	padding: 4px 12px !important;
}
</style>
