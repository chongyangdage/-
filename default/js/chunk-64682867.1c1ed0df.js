(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64682867","chunk-1c89dcc7","chunk-6e478f36"],{"2fda":function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return r})),o.d(t,"e",(function(){return l})),o.d(t,"c",(function(){return i})),o.d(t,"f",(function(){return c})),o.d(t,"d",(function(){return s}));var a=o("b775");function n(e){return Object(a["a"])({url:"org.gocom.components.coframe.org.employee.queryEmployeeByCriteria.biz.ext",method:"post",data:e})}function r(e){return Object(a["a"])({url:"org.gocom.components.coframe.org.employee.getEmployee.biz.ext",method:"post",data:e})}function l(e){return Object(a["a"])({url:"org.gocom.components.coframe.org.organization.deleteNode.biz.ext",method:"post",data:e})}function i(e){return Object(a["a"])({url:"org.gocom.components.coframe.org.organization.moveNode.biz.ext",method:"post",data:e})}function c(e){return Object(a["a"])({url:"org.gocom.components.coframe.org.employee.queryEmployeeByCriteria.biz.ext",method:"post",data:e})}function s(e){return Object(a["a"])({url:"org.gocom.components.coframe.org.employee.getEmployee.biz.ext",method:"post",data:e})}},3027:function(e,t,o){"use strict";o("8d0f")},"488e":function(e,t,o){"use strict";o.d(t,"e",(function(){return n})),o.d(t,"c",(function(){return r})),o.d(t,"f",(function(){return l})),o.d(t,"b",(function(){return i})),o.d(t,"a",(function(){return c})),o.d(t,"d",(function(){return s})),o.d(t,"g",(function(){return d})),o.d(t,"h",(function(){return u})),o.d(t,"i",(function(){return m})),o.d(t,"j",(function(){return p}));var a=o("b775");function n(e){return Object(a["a"])({url:"org.gocom.components.coframe.framework.SystemManager.queryApplyAuthByCriteriaWithPage.biz.ext",method:"post",data:e})}function r(e){return Object(a["a"])({url:"org.gocom.components.coframe.framework.SystemManager.querySystemManager.biz.ext",method:"post",data:e})}function l(e){return Object(a["a"])({url:"org.gocom.components.coframe.framework.SystemManager.AuthSystem.biz.ext",method:"post",data:e})}function i(e){return Object(a["a"])({url:"org.gocom.components.coframe.framework.SystemManager.deleteSystemManager.biz.ext",method:"post",data:e})}function c(e){return Object(a["a"])({url:"org.gocom.components.coframe.framework.SystemManager.saveSystemManager.biz.ext",method:"post",data:e})}function s(e){return Object(a["a"])({url:"org.gocom.components.coframe.framework.SystemManager.saveSystemInfo.biz.ext",method:"post",data:e})}function d(e){return Object(a["a"])({url:"org.gocom.components.coframe.framework.SystemManager.countSystemEmp.biz.ext",method:"post",data:e})}function u(e){return Object(a["a"])({url:"org.gocom.components.coframe.org.employee.updateEmpDetaiInfo.biz.ext",method:"post",data:e})}function m(e){return Object(a["a"])({url:"org.gocom.components.coframe.framework.SystemManager.queryMySystem.biz.ext",method:"post",data:e})}function p(e){return Object(a["a"])({url:"org.gocom.components.coframe.framework.SystemManager.applySystemAuth.biz.ext",method:"post",data:e})}},"4d2f":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrap"},[o("el-tree",{ref:"tree",attrs:{lazy:"","check-strictly":"",load:e.loadNode,props:e.props,"node-key":"nodeId","show-checkbox":e.isCheckbox,"allow-drop":e.allowDrop,"allow-drag":e.allowDrag},on:{"node-click":e.node_click,check:e.check,"node-drag-start":e.handleDragStart,"node-drag-enter":e.handleDragEnter,"node-drag-leave":e.handleDragLeave,"node-drag-over":e.handleDragOver,"node-drag-end":e.handleDragEnd,"node-drop":e.handleDrop,"check-change":e.handleCheckChange}})],1)},n=[],r=o("dd12"),l={data:function(){return{props:{label:"nodeName",children:"zones",isLeaf:"isLeaf",orgid:"orgid"}}},props:{is_dele:{default:!0,type:Boolean},isCheckbox:{default:!1,type:Boolean},data:{default:[],type:Array}},methods:{node_click:function(e){console.log(e,"sss"),this.$emit("click_node",e.orgid)},loadNode:function(e,t){0===e.level?Object(r["d"])().then((function(e){return e.treeNodes[0].disabled=!0,t(e.treeNodes)})):setTimeout((function(){var o={nodeType:"OrgOrganization",nodeId:e.data.nodeId};Object(r["d"])(o).then((function(e){if(!(e.treeNodes.length>=1))return t([]);t(e.treeNodes)}))}),200)},handleCheckChange:function(e,t){},check:function(e,t){var o=this.$refs.tree.getCheckedNodes();o.length>1&&(this.$message.error("只能选择一个部门"),this.$refs.tree.setCheckedKeys([])),1==t.checkedKeys.length&&this.$emit("ok",e.orgid,e.nodeName,e.empid)},handleDragStart:function(e,t){console.log("drag start",e)},handleDragEnter:function(e,t,o){console.log("tree drag enter: ",t.label)},handleDragLeave:function(e,t,o){console.log("tree drag leave: ",t.label)},handleDragOver:function(e,t,o){console.log("tree drag over: ",t.label)},handleDragEnd:function(e,t,o,a){console.log("tree drag end: ",t&&t.label,o)},handleDrop:function(e,t,o,a){console.log("tree drop: ",t.label,o)},allowDrop:function(e,t,o){},allowDrag:function(e){}}},i=l,c=(o("e6f8"),o("2877")),s=Object(c["a"])(i,a,n,!1,null,"41194d74",null);t["default"]=s.exports},"8d0f":function(e,t,o){},a034:function(e,t,o){"use strict";o("f9a8")},baa1:function(e,t,o){},bd5e:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrap"},[o("el-tree",{ref:"tree",attrs:{lazy:"","check-strictly":"",load:e.loadNode,props:e.props,"node-key":"nodeId","show-checkbox":e.isCheckbox,"allow-drop":e.allowDrop,"allow-drag":e.allowDrag},on:{check:e.check,"node-drag-start":e.handleDragStart,"node-drag-enter":e.handleDragEnter,"node-drag-leave":e.handleDragLeave,"node-drag-over":e.handleDragOver,"node-drag-end":e.handleDragEnd,"node-drop":e.handleDrop,"check-change":e.handleCheckChange}})],1)},n=[],r=(o("ac6a"),o("dd12")),l={data:function(){return{props:{label:"nodeName",children:"zones",isLeaf:"isLeaf",orgid:"orgid"}}},props:{is_dele:{default:!0,type:Boolean},isCheckbox:{default:!1,type:Boolean},data:{default:[],type:Array}},methods:{loadNode:function(e,t){0===e.level?Object(r["c"])().then((function(e){return e.treeNodes[0].disabled=!0,t(e.treeNodes)})):setTimeout((function(){var o={nodeType:"OrgOrganization",nodeId:e.data.nodeId};Object(r["c"])(o).then((function(e){if(e.treeNodes.forEach((function(e){0==e.isLeaf&&(e.disabled=!0)})),!(e.treeNodes.length>=1))return t([]);t(e.treeNodes)}))}),200)},handleCheckChange:function(e,t){},check:function(e,t){var o=this.$refs.tree.getCheckedNodes();o.length>1&&(this.$message.error("只能选择一个部门"),this.$refs.tree.setCheckedKeys([])),1==t.checkedKeys.length&&this.$emit("ok",e.orgid,e.nodeName,e.empid)},handleDragStart:function(e,t){console.log("drag start",e)},handleDragEnter:function(e,t,o){console.log("tree drag enter: ",t.label)},handleDragLeave:function(e,t,o){console.log("tree drag leave: ",t.label)},handleDragOver:function(e,t,o){console.log("tree drag over: ",t.label)},handleDragEnd:function(e,t,o,a){console.log("tree drag end: ",t&&t.label,o)},handleDrop:function(e,t,o,a){console.log("tree drop: ",t.label,o)},allowDrop:function(e,t,o){return"二级 3-1"!==t.data.label||"inner"!==o},allowDrag:function(e){return-1===e.data.label.indexOf("三级 3-2-2")}}},i=l,c=(o("3027"),o("2877")),s=Object(c["a"])(i,a,n,!1,null,"5419b066",null);t["default"]=s.exports},dd12:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return l})),o.d(t,"d",(function(){return i}));var a=o("b775");function n(){return Object(a["a"])({url:"org.gocom.components.coframe.auth.partyauth.ManageableRes.getManageableOrg.biz.ext",method:"post"})}function r(e){return Object(a["a"])({url:"org.gocom.components.coframe.org.organization.queryTreeChildNodes.biz.ext",method:"post",data:e})}function l(e){return Object(a["a"])({url:"org.gocom.components.coframe.framework.SystemManager.querySystemByCriteria.biz.ext",method:"post",data:e})}function i(e){return Object(a["a"])({url:"org.gocom.components.coframe.org.organization.queryOrgTree.biz.ext",method:"post",data:e})}},e6f8:function(e,t,o){"use strict";o("baa1")},f9a8:function(e,t,o){},fd06:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-dialog",{attrs:{title:"详细信息",visible:e.dialogVisible1,width:"30%"},on:{"update:visible":function(t){e.dialogVisible1=t}}},[o("el-form",{attrs:{"label-width":"80px",model:e.ruleForm}},[o("el-form-item",{attrs:{"label-width":"120px",label:"真实姓名",prop:"empname"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.empname,callback:function(t){e.$set(e.ruleForm,"empname",t)},expression:"ruleForm.empname"}})],1),o("el-form-item",{attrs:{"label-width":"120px",label:"证件类型",prop:"cardtype"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.cardtype,callback:function(t){e.$set(e.ruleForm,"cardtype",t)},expression:"ruleForm.cardtype"}})],1),o("el-form-item",{attrs:{"label-width":"120px",label:"证件号",prop:"cardno"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.cardno,callback:function(t){e.$set(e.ruleForm,"cardno",t)},expression:"ruleForm.cardno"}})],1),o("el-form-item",{attrs:{"label-width":"120px",label:"警号/辅警号",prop:"empcode"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.empcode,callback:function(t){e.$set(e.ruleForm,"empcode",t)},expression:"ruleForm.empcode"}})],1),o("el-form-item",{attrs:{"label-width":"120px",label:"手机号",prop:"mobileno"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.mobileno,callback:function(t){e.$set(e.ruleForm,"mobileno",t)},expression:"ruleForm.mobileno"}})],1),o("el-form-item",{attrs:{"label-width":"120px",label:"警务通手机号",prop:"otel"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.otel,callback:function(t){e.$set(e.ruleForm,"otel",t)},expression:"ruleForm.otel"}})],1),o("el-form-item",{attrs:{"label-width":"120px",label:"公安网邮箱",prop:"oemail"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.oemail,callback:function(t){e.$set(e.ruleForm,"oemail",t)},expression:"ruleForm.oemail"}})],1),o("el-form-item",{attrs:{"label-width":"120px",label:"人员类别",prop:"faxnoname"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.faxnoname,callback:function(t){e.$set(e.ruleForm,"faxnoname",t)},expression:"ruleForm.faxnoname"}})],1),o("el-form-item",{attrs:{"label-width":"120px",label:"政治面貌",prop:"partyname"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.partyname,callback:function(t){e.$set(e.ruleForm,"partyname",t)},expression:"ruleForm.partyname"}})],1),o("el-form-item",{attrs:{"label-width":"120px",label:"职务类别",prop:"degreename"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.degreename,callback:function(t){e.$set(e.ruleForm,"degreename",t)},expression:"ruleForm.degreename"}})],1),o("el-form-item",{attrs:{"label-width":"120px",label:"部门类别",prop:"workexpname"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.workexpname,callback:function(t){e.$set(e.ruleForm,"workexpname",t)},expression:"ruleForm.workexpname"}})],1),o("el-form-item",{attrs:{"label-width":"120px",label:"所属单位",prop:"orgname"}},[o("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.orgname,callback:function(t){e.$set(e.ruleForm,"orgname",t)},expression:"ruleForm.orgname"}})],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible1=!1}}},[e._v("取 消")])],1)],1),o("div",{staticClass:"tree"},[o("el-dialog",{attrs:{title:"添加管理员",visible:e.centerDialogVisible,width:"45%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[o("div",{staticClass:"dialog_wrap",staticStyle:{display:"flex"}},[o("div",{staticClass:"tree_wrap"},[o("mul1",{attrs:{isCheckbox:"",data:e.data_tree},on:{ok:e.choose1}})],1),o("div",{staticClass:"from_wrap"},[o("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[o("el-form-item",{attrs:{label:"添加管理员"}},[o("el-input",{attrs:{disabled:"",placeholder:""},model:{value:e.change_name,callback:function(t){e.change_name=t},expression:"change_name"}})],1)],1),o("div",{staticStyle:{display:"flex"}},[o("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.change}},[e._v("确 定")])],1)],1)])]),o("div",[o("mul",{attrs:{isCheckbox:!0,data:e.data_tree},on:{click_node:e.click_node,ok:e.choose}})],1),o("div",{staticClass:"table"},[o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"title"},[e._v("用户信息列表")]),o("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.handleadd()}}},[e._v("新增管理员")]),o("el-table",{staticStyle:{width:"100%"},attrs:{stripe:!0,border:!0,size:"mini",data:e.tableData}},[o("el-table-column",{attrs:{width:"80",align:"center",prop:"empname",label:"中文名称"}}),o("el-table-column",{attrs:{align:"center",prop:"cardno",label:"用户证件号"}}),o("el-table-column",{attrs:{align:"center",prop:"workexpname",label:"所在部门"}}),o("el-table-column",{attrs:{align:"center",prop:"phone",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(o){return e.handleDetails(t.row)}}},[e._v("详情")]),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return e.handleDele(t.row.empid)}}},[e._v("删除")])]}}])})],1),o("div",{staticClass:"pagination"},[o("el-pagination",{attrs:{background:"",layout:"prev, pager, next",pageSize:e.page_size,total:e.total},on:{"current-change":e.currentChange,"prev-click":e.prev_click,"next-click":e.next_click}})],1)],1)],1)],1)],1)},n=[],r=o("bd5e"),l=o("4d2f"),i=o("488e"),c=o("2fda"),s={components:{mul1:r["default"],mul:l["default"]},data:function(){return{ruleForm:[],dialogVisible1:!1,change_name:"",id:"",changeUser:"",centerDialogVisible:!1,page_size:7,total:0,formInline:{post:"",user:"",alarm:""},new_orgin:"",data_tree:[],tableData:[]}},methods:{click_node:function(e){var t=this,o={criteria:{_expr:[{orgidlist:e,_op:"="},{empstates:2,_op:"="}]}};Object(c["f"])(o).then((function(e){console.log(e,"saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"),t.tableData=e.data}))},choose1:function(e,t,o){this.change_name=t,this.new_orgin=o,this.changeUser=this.new_orgin},choose:function(e,t,o){this.y_name=t,this.id=e},change:function(){var e=this;this.changeUser=this.new_orgin;var t={employee:{orgidlist:this.id,empid:this.changeUser}};Object(i["h"])(t).then((function(t){t.response.flag?(e.$message.success("添加成功"),e.centerDialogVisible=!1):e.$message.warning("添加失败")}))},handleadd:function(){""==this.id?this.$message({type:"info",message:"请选择要添加的部门"}):this.centerDialogVisible=!0},handleOk:function(e){},handleDetails:function(e){this.ruleForm=e,this.dialogVisible1=!0},handleDele:function(e){var t=this;this.$confirm("此操作将永久删除该人员对".concat(this.y_name,"的管理权限, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o={systemId:t.id,empid:e};criteria_dele(o).then((function(e){1==e.returnCode&&(t.choose(),t.$message({type:"success",message:"删除成功!"}))}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},prev_click:function(e){},next_click:function(e){},currentChange:function(e){},onSubmit:function(){}}},d=s,u=(o("a034"),o("2877")),m=Object(u["a"])(d,a,n,!1,null,"f96bc886",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-64682867.1c1ed0df.js.map