(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7700a3f8","chunk-227d7cbb","chunk-1c89dcc7"],{"1b6b":function(e,t,a){},"2f61":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l}));var o=a("b775");function n(e){return Object(o["a"])({url:"org.gocom.components.coframe.org.employee.updateEmpDetaiInfo.biz.ext",method:"post",data:e})}function r(e){return Object(o["a"])({url:"org.gocom.components.coframe.org.employee.queryEmployeeByCriteria.biz.ext",method:"post",data:e})}function l(e){return Object(o["a"])({url:"org.gocom.components.coframe.org.employee.updateEmpDetaiInfo.biz.ext",method:"post",data:e})}},3027:function(e,t,a){"use strict";a("8d0f")},"53d6":function(e,t,a){"use strict";a("ecdc")},"5d7d":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tree"},[a("el-dialog",{attrs:{title:"详细信息",visible:e.dialogVisible1,width:"30%"},on:{"update:visible":function(t){e.dialogVisible1=t}}},[a("el-form",{attrs:{"label-width":"80px",model:e.ruleForm}},[a("el-form-item",{attrs:{"label-width":"120px",label:"真实姓名",prop:"empname"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.empname,callback:function(t){e.$set(e.ruleForm,"empname",t)},expression:"ruleForm.empname"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"证件类型",prop:"cardtype"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.cardtype,callback:function(t){e.$set(e.ruleForm,"cardtype",t)},expression:"ruleForm.cardtype"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"证件号",prop:"cardno"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.cardno,callback:function(t){e.$set(e.ruleForm,"cardno",t)},expression:"ruleForm.cardno"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"警号/辅警号",prop:"empcode"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.empcode,callback:function(t){e.$set(e.ruleForm,"empcode",t)},expression:"ruleForm.empcode"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"手机号",prop:"mobileno"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.mobileno,callback:function(t){e.$set(e.ruleForm,"mobileno",t)},expression:"ruleForm.mobileno"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"警务通手机号",prop:"otel"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.otel,callback:function(t){e.$set(e.ruleForm,"otel",t)},expression:"ruleForm.otel"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"公安网邮箱",prop:"oemail"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.oemail,callback:function(t){e.$set(e.ruleForm,"oemail",t)},expression:"ruleForm.oemail"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"人员类别",prop:"faxnoname"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.faxnoname,callback:function(t){e.$set(e.ruleForm,"faxnoname",t)},expression:"ruleForm.faxnoname"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"政治面貌",prop:"partyname"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.partyname,callback:function(t){e.$set(e.ruleForm,"partyname",t)},expression:"ruleForm.partyname"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"职务类别",prop:"degreename"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.degreename,callback:function(t){e.$set(e.ruleForm,"degreename",t)},expression:"ruleForm.degreename"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"部门类别",prop:"workexpname"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.workexpname,callback:function(t){e.$set(e.ruleForm,"workexpname",t)},expression:"ruleForm.workexpname"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"所属单位",prop:"orgid"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.ruleForm.orgname,callback:function(t){e.$set(e.ruleForm,"orgname",t)},expression:"ruleForm.orgname"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible1=!1}}},[e._v("取 消")])],1)],1),a("el-dialog",{attrs:{title:"添加管理员",visible:e.centerDialogVisible,width:"45%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("div",{staticClass:"dialog_wrap",staticStyle:{display:"flex"}},[a("div",{staticClass:"tree_wrap"},[a("mul1",{attrs:{isCheckbox:"",data:e.data_tree},on:{ok:e.choose1}})],1),a("div",{staticClass:"from_wrap"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[a("el-form-item",{attrs:{label:"添加管理员"}},[a("el-input",{attrs:{disabled:"",placeholder:""},model:{value:e.changeUser,callback:function(t){e.changeUser=t},expression:"changeUser"}})],1)],1),a("div",{staticStyle:{display:"flex"}},[a("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.change}},[e._v("确 定")])],1)],1)])]),a("div",{staticClass:"table"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"title"},[e._v("用户信息列表")]),a("div",[a("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(t){return e.add_p()}}},[e._v("增加安全管理员")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:!0,border:!0,size:"mini",data:e.tableData}},[a("el-table-column",{attrs:{width:"80",align:"center",prop:"empname",label:"中文名称"}}),a("el-table-column",{attrs:{align:"center",prop:"cardno",label:"用户证件号"}}),a("el-table-column",{attrs:{align:"center",prop:"orgname",label:"所在部门"}}),a("el-table-column",{attrs:{align:"center",prop:"phone",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(a){return e.handleDetails(t.row)}}},[e._v("详情")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDele(t.row.empid)}}},[e._v("删除")])]}}])})],1)],1)],1)],1)])},n=[],r=a("e54b"),l=a("bd5e"),i=a("2f61"),c={components:{Tree:r["default"],mul1:l["default"]},data:function(){return{dialogVisible1:!1,ruleForm:{},form:{},data_tree:[],changeUser:"",centerDialogVisible:!1,page_size:7,total:100,formInline:{post:"",user:"",alarm:""},tableData:[]}},created:function(){this.all_data()},methods:{all_data:function(){var e=this,t={criteria:{_expr:[{qq:"1",_op:"="}]}};Object(i["c"])(t).then((function(t){e.tableData=t.data}))},add_p:function(){this.centerDialogVisible=!0},change:function(){var e=this,t={employee:{empid:this.changeUser,qq:1}};Object(i["a"])(t).then((function(t){t.response.flag?(e.$message.success("添加成功"),e.all_data(),e.centerDialogVisible=!1):e.$message.warning("添加失败")}))},choose1:function(e,t,a){this.new_orgin=a,this.changeUser=this.new_orgin},handleOk:function(e){},handleDetails:function(e){this.ruleForm=e,this.dialogVisible1=!0},handleDele:function(e){var t=this;this.$confirm("此操作将永久删除该人员, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a={employee:{empid:e,qq:0}};Object(i["b"])(a).then((function(e){e.response.flag?(t.all_data(),t.$message({type:"success",message:"删除成功!"})):t.$message({type:"warning",message:"删除失败!"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},prev_click:function(e){console.log(e)},next_click:function(e){console.log(e)},currentChange:function(e){console.log(e)},onSubmit:function(){}}},d=c,s=(a("53d6"),a("2877")),u=Object(s["a"])(d,o,n,!1,null,"28ff5319",null);t["default"]=u.exports},"8d0f":function(e,t,a){},bd5e:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("el-tree",{ref:"tree",attrs:{lazy:"","check-strictly":"",load:e.loadNode,props:e.props,"node-key":"nodeId","show-checkbox":e.isCheckbox,"allow-drop":e.allowDrop,"allow-drag":e.allowDrag},on:{check:e.check,"node-drag-start":e.handleDragStart,"node-drag-enter":e.handleDragEnter,"node-drag-leave":e.handleDragLeave,"node-drag-over":e.handleDragOver,"node-drag-end":e.handleDragEnd,"node-drop":e.handleDrop,"check-change":e.handleCheckChange}})],1)},n=[],r=(a("ac6a"),a("dd12")),l={data:function(){return{props:{label:"nodeName",children:"zones",isLeaf:"isLeaf",orgid:"orgid"}}},props:{is_dele:{default:!0,type:Boolean},isCheckbox:{default:!1,type:Boolean},data:{default:[],type:Array}},methods:{loadNode:function(e,t){0===e.level?Object(r["c"])().then((function(e){return e.treeNodes[0].disabled=!0,t(e.treeNodes)})):setTimeout((function(){var a={nodeType:"OrgOrganization",nodeId:e.data.nodeId};Object(r["c"])(a).then((function(e){if(e.treeNodes.forEach((function(e){0==e.isLeaf&&(e.disabled=!0)})),!(e.treeNodes.length>=1))return t([]);t(e.treeNodes)}))}),200)},handleCheckChange:function(e,t){},check:function(e,t){var a=this.$refs.tree.getCheckedNodes();a.length>1&&(this.$message.error("只能选择一个部门"),this.$refs.tree.setCheckedKeys([])),1==t.checkedKeys.length&&this.$emit("ok",e.orgid,e.nodeName,e.empid)},handleDragStart:function(e,t){console.log("drag start",e)},handleDragEnter:function(e,t,a){console.log("tree drag enter: ",t.label)},handleDragLeave:function(e,t,a){console.log("tree drag leave: ",t.label)},handleDragOver:function(e,t,a){console.log("tree drag over: ",t.label)},handleDragEnd:function(e,t,a,o){console.log("tree drag end: ",t&&t.label,a)},handleDrop:function(e,t,a,o){console.log("tree drop: ",t.label,a)},allowDrop:function(e,t,a){return"二级 3-1"!==t.data.label||"inner"!==a},allowDrag:function(e){return-1===e.data.label.indexOf("三级 3-2-2")}}},i=l,c=(a("3027"),a("2877")),d=Object(c["a"])(i,o,n,!1,null,"5419b066",null);t["default"]=d.exports},dd12:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return i}));var o=a("b775");function n(){return Object(o["a"])({url:"org.gocom.components.coframe.auth.partyauth.ManageableRes.getManageableOrg.biz.ext",method:"post"})}function r(e){return Object(o["a"])({url:"org.gocom.components.coframe.org.organization.queryTreeChildNodes.biz.ext",method:"post",data:e})}function l(e){return Object(o["a"])({url:"org.gocom.components.coframe.framework.SystemManager.querySystemByCriteria.biz.ext",method:"post",data:e})}function i(e){return Object(o["a"])({url:"org.gocom.components.coframe.org.organization.queryOrgTree.biz.ext",method:"post",data:e})}},e406:function(e,t,a){"use strict";a("1b6b")},e54b:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("el-tree",{ref:"tree",attrs:{lazy:"",load:e.loadNode,props:e.props,"node-key":"nodeId","show-checkbox":e.isCheckbox,"allow-drop":e.allowDrop,"allow-drag":e.allowDrag},on:{"node-click":e.node_click,check:e.check,"node-drag-start":e.handleDragStart,"node-drag-enter":e.handleDragEnter,"node-drag-leave":e.handleDragLeave,"node-drag-over":e.handleDragOver,"node-drag-end":e.handleDragEnd,"node-drop":e.handleDrop,"check-change":e.handleCheckChange}})],1)},n=[],r=(a("ac6a"),a("dd12")),l={data:function(){return{props:{label:"nodeName",children:"zones",isLeaf:"isLeaf",orgid:"orgid"}}},props:{is_dele:{default:!0,type:Boolean},isCheckbox:{default:!1,type:Boolean},data:{default:[],type:Array}},methods:{node_click:function(e){var t="",a="";e.empid?(t=e.empid,a="empid"):(t=e.orgid,a="orgid"),this.$emit("click_node",t,a)},loadNode:function(e,t){0===e.level?Object(r["b"])().then((function(e){return e.treeNodes[0].disabled=!0,t(e.treeNodes)})):setTimeout((function(){var a={nodeType:"OrgOrganization",nodeId:e.data.nodeId};Object(r["c"])(a).then((function(e){if(e.treeNodes.forEach((function(e){0==e.isLeaf&&(e.disabled=!0)})),!(e.treeNodes.length>=1))return t([]);t(e.treeNodes)}))}),200)},handleCheckChange:function(e,t){},check:function(e,t){var a=this.$refs.tree.getCheckedNodes();a.length>1&&(this.$message.error("只能选择一个部门"),this.$refs.tree.setCheckedKeys([])),1==t.checkedKeys.length&&this.$emit("ok",e.orgid,e.nodeName,e.empid)},handleDragStart:function(e,t){console.log("drag start",e)},handleDragEnter:function(e,t,a){console.log("tree drag enter: ",t.label)},handleDragLeave:function(e,t,a){console.log("tree drag leave: ",t.label)},handleDragOver:function(e,t,a){console.log("tree drag over: ",t.label)},handleDragEnd:function(e,t,a,o){console.log("tree drag end: ",t&&t.label,a)},handleDrop:function(e,t,a,o){console.log("tree drop: ",t.label,a)},allowDrop:function(e,t,a){return"二级 3-1"!==t.data.label||"inner"!==a},allowDrag:function(e){return-1===e.data.label.indexOf("三级 3-2-2")}}},i=l,c=(a("e406"),a("2877")),d=Object(c["a"])(i,o,n,!1,null,"3fd88d52",null);t["default"]=d.exports},ecdc:function(e,t,a){}}]);
//# sourceMappingURL=chunk-7700a3f8.c78b7a53.js.map