
<template>
	<a-card
		:bordered="false"
		:hoverable='true'
		class="cardBox"
	>
		<div style="height:calc(100vh - 100px);">
      <SeeksRelationGraph
        ref="seeksRelationGraph"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
      />
    </div>
		<editOrganizational :visible='visibleOrganizational' @visibleCancel="visibleCancel()" />
	</a-card>
</template>

<script>
import SeeksRelationGraph from 'relation-graph'
import editOrganizational from './editOrganizational'

const data = {
   rootId: 'a',
		nodes: [
			{ id: 'a', text: '上海直猎网络科技有限公司(34)',},
			{ id: 'b', text: '业务(13)'},
			{ id: 'c', text: '运营(1)'},
			{ id: 'd', text: '运营(13)'},
			{ id: 'e', text: '人事(4)',},
			{ id: 'f', text: '金融组(3)',color:'#fff', fontColor:'#408CDF',borderWidth:1,borderColor:'#408CDF'},
			{ id: 'g', text: '科技组(3)',color:'#fff', fontColor:'#408CDF',borderWidth:1,borderColor:'#408CDF'},
			{ id: 'h', text: '战略组(3)',color:'#408CDF', fontColor:'#fff',borderWidth:1,borderColor:'#408CDF'},
			{ id: 'i', text: '战略小组01(3)',color:'#408CDF', fontColor:'#fff',borderWidth:1,borderColor:'#408CDF'},
			{ id: 'j', text: '战略小组02(3)',color:'#ECF3FC', fontColor:'#282828',borderWidth:1,borderColor:'#ECF3FC'}
		],
		links: [
			{ from: 'a', to: 'b'},
			{ from: 'a', to: 'c'},
			{ from: 'a', to: 'd'},
			{ from: 'a', to: 'e'},
			{ from: 'b', to: 'f'},
			{ from: 'b', to: 'g'},
			{ from: 'b', to: 'h'},
			{ from: 'b', to: 'i'},
			{ from: 'b', to: 'j'}
		]
}
export default {
	data() {
		return {
			type: 4,// 页面类型
			visibleOrganizational: false,
			graphOptions: {
				// allowShowMiniToolBar: false,// 是否显示工具栏
        layouts: [
          {
            'layoutLabel': '组织架构', //布局描述（如果有多个布局可以切换，此属性将作为布局名称显示）
            'layoutName': 'tree', //布局方式（tree树状布局/center中心布局/force自动布局）
						'defaultNodeShape': 0,
						'defaultLineShape': 1,
          }
        ],
        'defaultLineMarker': {
          'markerWidth': 12,
          'markerHeight': 12,
          'refX': 6,
          'refY': 6,
          'data': 'M2,2 L10,6 L2,10 L6,6 L2,2'
        },
        'defaultNodeShape': 1, // 默认的节点形状，0:圆形；1:矩形
        'defaultLineShape': 4, // 默认的线条样式（1:直线/2:样式2/3:样式3/4:折线/5:样式5/6:样式6）使用示例
        'defaultNodeBorderWidth': 0, //默认的节点边框粗细（像素）
        'defaultLineColor': '#435EBE', // 默认的线条颜色
				'defaultJunctionPoint': 'tb', //默认的连线与节点接触的方式（border:边缘/ltrb:上下左右/tb:上下/lr:左右）当布局为树状布局时应使用tb或者lr，这样才会好看
        'defaultNodeColor': '#435EBE', // 默认的节点背景颜色
				"defaultExpandHolderPosition": "bottom", //默认的节点展开/关闭按钮位置（left/top/right/bottom）
			}
		};
	},
	components: {
		SeeksRelationGraph,
		editOrganizational
	},
	mounted() {
    this.showSeeksGraph()
  },
	methods: {
		showSeeksGraph() {
      var __graph_json_data = data
      this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
        // 这些写上当图谱初始化完成后需要执行的代码
				console.log(seeksRGGraph);
      })
    },
    onNodeClick(nodeObject) {
      console.log('onNodeClick:', nodeObject)
			this.visibleOrganizational = true
    },
    onLineClick(lineObject) {
      console.log('onLineClick:', lineObject)
    },
		visibleCancel(){
			this.visibleOrganizational = true
		}
	},
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */

</style>