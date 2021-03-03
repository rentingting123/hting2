<template>
  <a-popover v-model="visible" trigger="click" placement="bottomRight">
    <a slot="content" >
      <a-form-model
        ref="dynamicValidateForm"
        :model="form"
        layout="horizontal"
        class=" padding20">
        <a-form-model-item >
          <a-radio-group v-model="radiovalue" @change="onChange" class="Radiogroup">
            <a-row v-for="(item1,index) in zhiweilist" :key="index" class="rowRadioStyle">
                <a-radio :value="item1.id" class="radioStyle">
                  <span>{{ item1.name }}</span>
                </a-radio>
            </a-row>
          </a-radio-group>
        </a-form-model-item>
        <div class="textalginC">
          <a-button key="submit" type="primary" class="primarybtn btnR" @click="visible = false;">
            确定 
          </a-button>
        </div>
      </a-form-model>
    </a>
    <a-button :type="status ==1?'danger':''" class="marginleft" :class="status ==1?'danger-from-button':'clear-from-button' ">
      <a-icon type="plus-circle" theme="filled" />加入职位
    </a-button> 
  </a-popover>
</template>
<script>


export default {
  data() {
    return {
      visible: false,
      form: {},
      radiovalue: {},
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
    };
  },
  props:['status'],
  computed: {
	},
	methods: {
    onChange(e) {
      console.log('radio checked', e.target.value);
		},
	}
};
</script>
