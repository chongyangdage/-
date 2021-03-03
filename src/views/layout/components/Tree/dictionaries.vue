<template>
  <div class="wrap">
    <el-tree
      lazy
      :load="loadNode"
      :props="props"
      node-key="dicttypeid"
      ref="tree"
      :show-checkbox="isCheckbox"
    
      @node-click='node_click'
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop"
      @check-change="handleCheckChange"
      :allow-drop="allowDrop"
      :allow-drag="allowDrag"
    >
    </el-tree>
  </div>
</template>
<script>

import {index_type} from '@/api/Dictionaries'
export default {
  data() {
    return {
      num:0,
      props: {
        label: "dicttypename",
        isLeaf: false,
      },
    };
  },
  props: {
    is_dele: {
      default: true,
      type: Boolean,
    },
    isCheckbox: {
      default: false,
      type: Boolean,
    },
    data: {
      default: [],
      type: Array,
    },
  },
  methods: {
  
    //懒加载
    loadNode(node, resolve) {
    if (this.num == 1){  
         return resolve([]);
           } 
        index_type().then((res) => {
          this.num=1
          return resolve(res.data);
        });
      
      
    },
    //只能选中一个部门
    handleCheckChange(data1, checked) {
      let data = this.$refs.tree.getCheckedNodes();
      this.select = data;
      if (data.length > 1) {
        this.$message.error("只能选择一个应用");
        this.$refs.tree.setChecked(data1, false);
      }
    },

    //节点被点击
    node_click(e){
      this.$emit('click_node',e.dicttypename,e.dicttypeid,e.seqno)
    },

    handleDragStart(node, ev) {
      console.log("drag start", node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log("tree drag enter: ", dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log("tree drag leave: ", dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log("tree drag over: ", dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log("tree drag end: ", dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log("tree drop: ", dropNode.label, dropType);
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === "二级 3-1") {
        return type !== "inner";
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf("三级 3-2-2") === -1;
    },
  },
};
</script>
<style scoped>
.wrap {
  min-height: 64vh;
  max-height: 65vh;
  overflow: scroll;
  width: 19vw;
}
</style>