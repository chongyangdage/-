<template>
  <div class="wrap">
    <el-tree
      lazy
      :load="loadNode"
      :props="props"
       @node-click="node_click"
      node-key="id"
      ref="tree"
      :show-checkbox="isCheckbox"
      @check="check"
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

import {criteria} from '@/api/tree'
export default {
  data() {
    return {
      num:0,
      props: {
        label: "systemName",
        orgid: "id",
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
     //节点被点击
    node_click(e) {
      
      this.$emit("click_node", e);
    },
    //懒加载
    loadNode(node, resolve) {
    if (this.num == 1){  
         return resolve([]);
           } 
        criteria().then((res) => {
          this.num=1
          return resolve(res.uApplicationSystem);
        });   
    },
    //只能选中一个部门
    handleCheckChange(data1, checked) {
    },
    //复选框被选中触发
    check(e, e1) {

      let data = this.$refs.tree.getCheckedNodes();
      if (data.length > 1) {
        this.$message.error("只能选择一个部门");
         this.$refs.tree.setCheckedKeys([]);
      }
      if (e1.checkedKeys.length == 1) {
        this.$emit("ok", e.id, e.systemName);
      }

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