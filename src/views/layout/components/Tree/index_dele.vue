<template>
  <div class="wrap">
    <el-tree
      lazy
      check-strictly
      :load="loadNode"
      :props="props"
      node-key="nodeId"
      ref="tree"
      @node-click='node_click'
       @check="check"
      :show-checkbox="isCheckbox"
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      @node-drop="handleDrop"
      @check-change="handleCheckChange"
      draggable
      :expand-on-click-node="false"
      :allow-drop="allowDrop"
      :allow-drag="allowDrag"
    >
      <span  class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        
        <span v-if="!data.isLeaf&&data.orgOrganization">
          <el-button  type="text" size="mini" @click="() => append(data)">
            添加
          </el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
</template>
<script>
import { tree_after,tree } from "@/api/tree";
let id = 1000;
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
     //节点被点击
    node_click(e){
      console.log(e,'iiii')
      let id='';
      let str=''
      if(e.empid){
        id=e.empid
        str='empid'
      }else{
        id=e.orgid
        str='orgid'
      }
      this.$emit('click_node',id,str)
      // this.$emit('ok',e)
    },
    //复选框被选中触发
    check(e, e1) {
      if (e1.checkedKeys.length != 0) {
        this.$emit("ok", e);
      }
    },
    //懒加载
    loadNode(node, resolve) {
      if (node.level === 0) {
        
        let data = { nodeType: "OrgOrganization", nodeId: "" };
        tree_after().then((res) => {
          res.treeNodes.disabled=true
          return resolve(res.treeNodes);
        });
      } else {
        setTimeout(() => {
          let data = { nodeType: "OrgOrganization", nodeId: node.data.nodeId };
          tree_after(data).then((res) => {
             res.treeNodes.forEach((item) => {
              if (item.isLeaf) {
                item.disabled = true;
              }
            });
            if (res.treeNodes.length >= 1) {
              resolve(res.treeNodes);
            } else {
              return resolve([]);
            }
          });
        }, 500);
      }
      // if (node.level > 1) return resolve([]);
    },

    //增加部门
    append(data) {
     this.$emit('add',data)
    },
    //删除部门
    remove(node, data) {
      this.$emit('dele',data)
    },
    //只能选中一个部门
    handleCheckChange(data1, checked) {
      let data = this.$refs.tree.getCheckedNodes();
      this.select = data;
      if (data.length > 1) {
        this.$message.error("只能选择一个部门");
        this.$refs.tree.setChecked(data1, false);
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
  width: 25vw;
}
</style>