<template>
<div>
  <a-form-model
    ref="dynamicValidateForm"
    :model="form"
    layout="inline">
    <a-form-model-item label="姓名">
      <a-input v-model="form.name" placeholder="请输入姓名" class="iptName" />
    </a-form-model-item>
    <a-form-model-item label="职位">
      <a-input v-model="form.position" placeholder="请输入职位" class="iptName"/>
    </a-form-model-item>
    <a-form-model-item label="描述">
      <a-input v-model="form.tel" placeholder="请输入描述" class="iptName"/>
    </a-form-model-item>
    <a-form-model-item label="相册">
       <a-upload
        name="avatar"
        list-type="picture-card"
        class="avatar-uploader"
        :show-upload-list="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :before-upload="beforeUpload"
        @change="handleChange"
        >
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <a-icon :type="loading ? 'loading' : 'plus'" />
    </div>
  </a-upload>
    </a-form-model-item>
    <a-form-model-item >
      <a-button type="link"  @click="companyPeopleAdd">
        添加
      </a-button>
    </a-form-model-item>
  </a-form-model>
  <template v-if="companyList.length>0">
    <div class="companyList" v-for="(item, index) in companyList" :key="index">
      <span> 姓名：{{item.name}}</span>
      <span> 职位：{{item.position}}</span>
      <span> 描述：{{item.tel}}</span>
      <span> 相册：{{item.emil}}</span>
      <a-button type="link"  @click="deleteData(item)">
        <i class="iconfont redColor" >&#xe614;</i>
      </a-button>
    </div>
  </template> 
</div>
</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  data() {
    return {
      form: { },
      companyList: [], // 企业联系人列表
      imageUrl: ''
    }; 
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    deleteData(item) {
      let index = this.companyList.indexOf(item);
      if (index !== -1) {
        this.companyList.splice(index, 1);
      }
    },
    companyPeopleAdd() {
      this.companyList.push({
        ...this.form,
        key: Date.now(),
      });
    },
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
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
</style>
