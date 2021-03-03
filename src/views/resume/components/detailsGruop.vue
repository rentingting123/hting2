<template>
  <a-popover v-model="visible" trigger="click" placement="bottomRight">
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
          <a-button key="submit" type="primary" class="primarybtn btnR" @click="visible = false;">
            确定 
          </a-button>
        </div>
      </a-form-model>
    </a>
    <a-button :type="status == 1?'danger':''" class="marginleft" :class="status == 1?'danger-from-button':'clear-from-button' ">
      <a-icon type="profile" theme="filled" />简历分组
    </a-button>
  </a-popover>
</template>
<script>


export default {
  data() {
    return {
      visible: false,
      form: {},
    };
  },
  props:['status'],
  computed: {
	},
	methods: {

	}
};
</script>
