<template>
  <div class="wrap">
    <el-tree
      lazy
      check-strictly
      :load="loadNode"
      :props="props"
      node-key="nodeId"
      ref="tree"
      @node-click="node_click"
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
import { tree_after,tree,tree_place } from "@/api/tree";
export default {
  data() {
    return {
      props: {
        label: "nodeName",
        children: "zones",
        isLeaf: "isLeaf",
        orgid: "orgid",
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
      if (node.level === 0) {
        tree_place().then((res) => {
     
          res.treeNodes[0].disabled = true;
          return resolve(res.treeNodes);
        });
      } else {
 
        setTimeout(() => {
          let data = {  nodeId: node.data.nodeId };
          tree_place(data).then((res) => {
            if (res.treeNodes.length >= 1) {
          
              resolve(res.treeNodes);
            } else {
              return resolve([]);
            }
          });
        }, 200);
      }
    },
    //节点被点击
    node_click(e) {
      let id = "";
      let str = "";
      if (e.empid) {
        id = e.empid;
        str = "empid";
      } else {
        id = e.orgid;
        str = "orgid";
      }
      this.$emit("click_node", id, str);
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
        this.$emit("ok", e.orgid, e.nodeName,e.empid);
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
 
    },
    allowDrag(draggingNode) {
    
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