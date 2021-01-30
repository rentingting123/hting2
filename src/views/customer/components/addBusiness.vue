<!--  -->
<template>
	<div class='business'>
    <a-table
			:columns="columns"
			:dataSource="data"
			:pagination="false"
			:loading="memberLoading"
			>
			<template v-for="(col, i) in ['name', 'phone', 'department']" :slot="col" slot-scope="text, record">
				<a-input
					:key="col"
					v-if="record.editable"
					style="margin: -5px 0"
					:value="text"
					:placeholder="columns[i].title"
					@change="e => handleChange(e.target.value, record.key, col)"
				/>
				<template v-else>{{ text }}</template>
			</template>
			<template slot="operation" slot-scope="text, record">
				<template v-if="record.editable">
					<span v-if="record.isNew">
						<a @click="saveRow(record)">添加</a>
						<a-divider type="vertical" />
						<a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)">
							<a>删除</a>
						</a-popconfirm>
					</span>
					<span v-else>
						<a @click="saveRow(record)">保存</a>
						<a-divider type="vertical" />
						<a @click="cancel(record.key)">取消</a>
					</span>
				</template>
				<span v-else>
					<a @click="toggle(record.key)">编辑</a>
					<a-divider type="vertical" />
					<a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)">
						<a>删除</a>
					</a-popconfirm>
				</span>
			</template>
		</a-table>
		<a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus" @click="newMember">新增成员</a-button>
	</div>
</template>

<script>

export default {
	data() {
		return {
			loading: false,
			memberLoading: false,
			// table
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: '部门',
          dataIndex: 'department',
          key: 'department',
          scopedSlots: { customRender: 'department' }
        },
        {
          title: '电话',
          dataIndex: 'phone',
          key: 'phone',
          scopedSlots: { customRender: 'phone' }
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      data: [
        {
          key: '1',
          name: '小明',
          phone: '001',
          editable: false,
          department: '行政部'
        },
        {
          key: '2',
          name: '李莉',
          phone: '002',
          editable: false,
          department: 'IT部'
        },
        {
          key: '3',
          name: '王小帅',
          phone: '003',
          editable: false,
          department: '财务部'
        }
      ],
		};
	},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {

	},
//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {

	},
	methods: {
		newMember () {
      const length = this.data.length
      this.data.push({
        key: length === 0 ? '1' : (parseInt(this.data[length - 1].key) + 1).toString(),
        name: '',
        phone: '',
        department: '',
        editable: true,
        isNew: true
      })
    },
    remove (key) {
      const newData = this.data.filter(item => item.key !== key)
      this.data = newData
    },
    saveRow (record) {
      this.memberLoading = true
      const { key, name, phone, department } = record
      if (!name || !phone || !department) {
        this.memberLoading = false
        this.$message.error('请填写完整成员信息。')
        return
      }
      // 模拟网络请求、卡顿 800ms
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ loop: false })
        }, 800)
      }).then(() => {
        const target = this.data.find(item => item.key === key)
        target.editable = false
        target.isNew = false
        this.memberLoading = false
      })
		},
		toggle (key) {
      const target = this.data.find(item => item.key === key)
      target._originalData = { ...target }
      target.editable = !target.editable
    },
    getRowByKey (key, newData) {
      const data = this.data
      return (newData || data).find(item => item.key === key)
    },
    cancel (key) {
      const target = this.data.find(item => item.key === key)
      Object.keys(target).forEach(key => { target[key] = target._originalData[key] })
      target._originalData = undefined
    },
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.find(item => key === item.key)
      if (target) {
        target[column] = value
        this.data = newData
      }
    },

    // 最终全页面提交
    validate () {
      const { $refs: { repository, task }, $notification } = this
      const repositoryForm = new Promise((resolve, reject) => {
        repository.form.validateFields((err, values) => {
          if (err) {
            reject(err)
            return
          }
          resolve(values)
        })
      })
      const taskForm = new Promise((resolve, reject) => {
        task.form.validateFields((err, values) => {
          if (err) {
            reject(err)
            return
          }
          resolve(values)
        })
      })

      // clean this.errors
      this.errors = []
      Promise.all([repositoryForm, taskForm]).then(values => {
        $notification['error']({
          message: 'Received values of form:',
          description: JSON.stringify(values)
        })
      }).catch(() => {
        const errors = Object.assign({}, repository.form.getFieldsError(), task.form.getFieldsError())
        const tmp = { ...errors }
        this.errorList(tmp)
      })
    },
	},
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */

</style>