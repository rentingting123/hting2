<template>
<div>
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
