<template>
  <div class="organizationTreeMain">
    <div class="organizationTreeSearch">
      <span><a-input placeholder="搜索组织" style="width: 255px" @change="handleSearch" v-model="organizationSearch"/></span>
      <span>
        <a-popover placement="bottomRight">
          <template slot="content">
            <p style="cursor: pointer;" @click="() => (this.expandedKeys = this.allIds)">展开全部</p>
            <span style="cursor: pointer;" @click="() => (this.expandedKeys = [])">折叠全部</span>
          </template>
          <a-icon type="menu-unfold" /> </a-popover
        ></span>
      <span>
        <a-icon type="plus" @click="handleAddOrganization()"/>
      </span>
    </div>
    <div class="organizationTreeContent">
      <a-tree
        v-if="isOrganizationTreeShow"
        ref="tree"
        :replaceFields="{
          title: 'name',
          key: 'id'
        }"
        defaultExpandAll
        :tree-data="treeData"
        :expandedKeys.sync="expandedKeys"
        :defaultSelectedKeys.sync="defaultSelectedId"
        @select="handleSelect"
      >
        <template v-slot:title="nodeData">
          <span
            style="max-width:200px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            :title="nodeData.name"
            v-html="
              nodeData.name.replace(
                new RegExp(organizationSearch, 'g'),
                '<span style=color:#f50>' + organizationSearch + '</span>'
              )
            "
          ></span>
          <span>
            <span v-if="nodeData.id === showIconId" style="margin-left:10px"><a-icon type="edit" @click.stop="handleEdit(nodeData)"/></span>
            <span v-if="nodeData.id === showIconId" style="margin-left:10px"><a-icon type="delete" @click.stop="handleDelete(nodeData)"/></span>
          </span>
        </template>
        <template>
        </template>
      </a-tree>
    </div>
    <a-modal
      v-model="modleVisible"
      :title="form.id ? '编辑组织' : '新增组织'"
      @cancel="() => ((this.modleVisible = false), this.clearFormData() )"
      :confirm-loading="formButtonDisableFlag"
      @ok="onSubmit"
    >
      <a-form-model
        ref="organizationRuleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="name" label="组织名称" prop="name">
          <a-input v-model.trim="form.name" placeholder="请输入组织名称" />
        </a-form-model-item>
        <a-form-model-item ref="code" label="组织代码" prop="code">
          <a-input v-model.trim="form.code" placeholder="请输入组织代码" />
        </a-form-model-item>
        <a-form-model-item label="上级组织" prop="parentId">
          <a-tree-select
            :disabled="isChildren"
            :replaceFields="{
              title: 'name',
              value: 'id'
            }"
            @change="getFormTreeData"
            v-model="form.parentId"
            style="width: 100%"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            :tree-data="formOrganizationTreeData"
            placeholder="请选择上级组织"
            tree-default-expand-all
          >
          </a-tree-select>
        </a-form-model-item>
        <a-form-model-item ref="sortIndex" label="排序索引" prop="sortIndex">
          <a-input type="number" v-model="form.sortIndex" placeholder="请输入排序索引" />
        </a-form-model-item>
        <a-form-model-item label="备注">
          <a-input v-model.trim="form.description" type="textarea" placeholder="请输入备注" :maxLength="500" />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
    <a-modal v-model="deteleVisible" title="删除组织" @ok="handleOk">
      <p>确定要删除该组织吗？</p>
    </a-modal>
  </div>
</template>
<script>
import { organizationsTree, loadOrganizationById, createOrganization, deleteOrganizationById, updateOrganization } from '@/api/api';
export default {
  name: 'OrganizationTree',
  data() {
    return {
      isOrganizationTreeShow: true, // 用作取消选中重新加载组件 要不然默认效果不生效
      defaultSelectedId: [], // 默认选中第一条的ID
      expandedKeys: [], // 控制树结构展开折叠数据组
      allIds: [], // 用来保存树形所有节点ID
      organizationSearch: '', // 组织列表搜索
      treeData: [], // 组织树形结构数据
      showIconId: undefined,
      // 以下为组织的增删改
      isChildren: false, // 判断组织机构下是否存在子级 存在不可编辑上级组织
      deteleVisible: false,
      formOrganizationTreeData: [],
      modleVisible: false, // 控制弹框
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
      form: {
        // 表单数据
        name: undefined, // 组织名称
        parent: { leftValue: undefined, rightValue: undefined, level: undefined, id: undefined }, // 配合后台接口的字段
        parentId: undefined, // 上级组织ID
        code: undefined, // 组织代码
        sortIndex: undefined,
        isEnable: '1', // 状态\
        description: undefined // 组织描述
      },
      rules: {
        // 规则验证
        name: [
          { required: true, message: '请输入组织名称', trigger: 'blur' },
          { max: 50, message: '组织名称长度不能大于50', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入组织代码', trigger: 'blur' },
          { max: 50, message: '组织代码长度不能大于50', trigger: 'blur' }
        ]
      }
    };
  },
  created() {
    this.getTreeData();
  },
  methods: {
    /**
     * @description: 表单下拉获取组织机构数据
     * @param {object} extra
     */
    getFormTreeData(value, label, extra) {
      this.form.parent.leftValue = extra.triggerNode.dataRef.leftValue;
      this.form.parent.rightValue = extra.triggerNode.dataRef.rightValue;
      this.form.parent.level = extra.triggerNode.dataRef.level;
    },
    /**
     * @description: 获取组织列表树形结构数据
     * @param {boolean} InitialRendering 判断是初次加载 还是 其他地方调用 初次加载默认选中第一条 调用选中选择的节点
     */
    getTreeData(InitialRendering) {
      this.treeData = [];
      organizationsTree().then(res => {
        if (res.code === 200) {
          this.treeData.push(res.data);
          this.isOrganizationTreeShow = false;
          this.$nextTick(() => {
            if (InitialRendering === undefined) {
               this.$set(this.defaultSelectedId, 0, this.treeData[0].id);
               this.showIconId = this.treeData[0].id;
               this.form.parent.leftValue = this.treeData[0].leftValue;
               this.form.parent.rightValue = this.treeData[0].rightValue;
               this.form.parent.level = this.treeData[0].level;
            } else {
              this.$set(this.defaultSelectedId, 0, this.showIconId);
            }
            this.isOrganizationTreeShow = true;
          });
          this.initTreeData(this.treeData);
          // 表单的组织机构下拉数据 不能使用同一变量 因为表单的需要禁用已选择的节点 这样会导致左侧树也会禁用
          this.formOrganizationTreeData = JSON.parse(JSON.stringify(this.treeData));
          this.$emit('organizationTreeData', this.treeData);
        }
      });
    },
    /**
     * @description: 利用递归获取到所有的节点code 并添加scopedSlots 用来搜索变色 获取所有节点的ID并备份 用来做树形结构的默认展开
     * @param {array} treeData 组织列表数据
     */

    initTreeData(treeData) {
      treeData.forEach(item => {
        item.scopedSlots = { title: 'title' };
        this.expandedKeys.push(item.id);
        item.disabled = item.isEnable === 0;
        if (item.children) {
          this.initTreeData(item.children);
        }
      });
      this.allIds = this.expandedKeys;
    },

    /**
     * @description: 部门列表搜索
     */

    handleSearch() {
      // 获取符合条件的ID值
      this.expandedKeys = this.getTreeIDList(this.organizationSearch, this.treeData, []);
      // 获取符合条件的ID值得父级ID
      this.expandedKeys.forEach(item => {
        this.getParentKey(item, this.treeData);
      });
    },
    /**
     * @description:  获取符合条件的ID值
     * @param {string} searchValue 搜索框的值
     * @param {array} treeData 组织树数据
     * @param {array} idList 空数组 用来做返回值
     * @return {array} idList 命中节点的ID数组
     */

    getTreeIDList(searchValue, treeData, idList) {
      // 遍历所有同一级的树
      for (let i = 0; i < treeData.length; i++) {
        const node = treeData[i];
        // 如果该节点存在value值则push
        if (node.name.indexOf(searchValue) !== -1) {
          idList.push(node.id);
        }
        // 如果拥有孩子继续遍历
        if (node.children) {
          this.getTreeIDList(searchValue, node.children, idList);
        }
      }
      return idList;
    },

    /**
     * @description:  获取符合条件的ID值得父级ID
     * @param {string} id 选中的id
     * @param {array} treeData 组织树数组
     * @return {parentId} 选中id的父级id
     */

    getParentKey(id, treeData) {
      let parentId = null;
      for (let i = 0; i < treeData.length; i++) {
        const node = treeData[i];
        if (node.id === id) {
          // 判断该节点是否有父级
          if (node.parent) {
            parentId = node.parent.id;
            // 数组去重添加
            if (this.expandedKeys.indexOf(parentId) === -1) {
              this.expandedKeys.push(parentId);
              // 如果还有父级则拿父级ID重新遍历
              this.getParentKey(node.parent.id, this.treeData);
            }
          }
        }
        // 如果拥有孩子继续遍历
        if (node.children) {
          this.getParentKey(id, node.children);
        }
      }
      return parentId;
    },

    /**
     * @description: 选择组织列表数据
     * @param {array} selectedKeys 选中的组织id数组
     */

    handleSelect(selectedKeys, rowData) {
      // 要做取消选中 因为selectedKeys为0时 组件会取消选中 这里判断点击相同的节点时 默认选中当前选中节点
      if (selectedKeys.length === 0) {
        this.isOrganizationTreeShow = false;
        this.$nextTick(() => {
          this.$set(this.defaultSelectedId, 0, this.showIconId);
          this.isOrganizationTreeShow = true;
        });
        return false;
      }
      // 获取新增编辑需要的接口数据
      this.showIconId = selectedKeys[0];
      this.form.parent.leftValue = this.treeData[0].leftValue;
      this.form.parent.rightValue = this.treeData[0].rightValue;
      this.form.parent.level = this.treeData[0].level;
      this.$emit('selectOrganization', selectedKeys[0]);
    },

    /**
     * @description: 新增组织
     */

    handleAddOrganization() {
      this.form.id = undefined;
      this.modleVisible = true;
      this.isChildren = false;
      this.form.parentId = this.showIconId;
    },
      /**
     * @description: 新增编辑表单提交
     */
    onSubmit() {
      this.$refs.organizationRuleForm.validate(valid => {
        if (valid) {
          this.formButtonDisableFlag = true;
          if (this.form.parentId) {
              this.form.parent.id = this.form.parentId;
          }
          if (this.form.id) {
            this.organizationUpdate(this.form);
          } else {
            this.organizationAdd(this.form);
          }
        } else {
          return false;
        }
      });
    },

    /**
     * @description: 新增组织
     * @param {object} organizationAddParam 表单参数
     */
    organizationAdd(organizationAddParam) {
      createOrganization({ body: organizationAddParam })
        .then(res => {
          if (res.code === 201) {
            this.formSuccessOperation(res);
          }
        })
        .finally(() => {
          this.formButtonDisableFlag = false;
        });
    },
    /**
     * @description: 编辑组织
     * @param {object} organizationEditParam 表单参数
     */
    organizationUpdate(organizationEditParam) {
      updateOrganization({ body: organizationEditParam, id: organizationEditParam.id })
        .then(res => {
          if (res.code === 200) {
            this.formSuccessOperation(res);
          }
        })
        .finally(() => {
          this.formButtonDisableFlag = false;
        });
    },

    /**
     * @description: 表单新增编辑成功后的公共的代码 （消息提示 搜索框重置 请求表格数据）
     * @param {object} formSuccessData 表单请求成功后返回的对象
     */
    formSuccessOperation(formSuccessData) {
      this.$message.success(formSuccessData.message);
      this.modleVisible = false;
      this.formButtonDisableFlag = false;
      this.clearFormData();
      this.getTreeData(false);
    },
      /**
     * @description: 编辑组织isChildren
     * @param {nodeData} nodeData 节点参数
     */
    handleEdit(nodeData) {
      loadOrganizationById({ id: nodeData.id }).then(res => {
        if (res.code === 200) {
          console.log('nodeDatanodeDatanodeData', nodeData.dataRef.children);
          this.isChildren = !!nodeData.dataRef.children;
          this.form = Object.assign({}, this.form, res.data);
          this.form.parentId = this.form.parent ? this.form.parent.id : undefined;
          this.form.isEnable = String(this.form.isEnable);
          this.disableSelectIdData(nodeData.id, this.formOrganizationTreeData);
          this.modleVisible = true;
          console.log('nodeDatanodeDatanodeData', this.form);
        }
      });
    },
        /**
     * @description: 编辑用户时禁用自己
     * @param {string} selectId 选中ID
     * @param {array} formOrganizationTreeData 组织下拉树
     */
    disableSelectIdData(selectId, formOrganizationTreeData) {
      formOrganizationTreeData.forEach(item => {
        if (item.id === selectId) {
           item.disabled = true;
        } else {
           item.disabled = false;
        }
        if (item.children) {
          this.disableSelectIdData(selectId, item.children);
        }
      });
    },
      /**
     * @description: 删除组织
     * @param {nodeData} nodeData 节点参数
     */
    handleDelete(nodeData) {
      this.deteleVisible = true;
      this.showIconId = nodeData.id;
    },

    handleOk() {
      deleteOrganizationById({ id: this.showIconId }).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.deteleVisible = false;
          this.getTreeData(false);
        }
      });
    },

    /**
     * @description: 重置表单
     */
    clearFormData() {
      setTimeout(() => {
        this.$refs.organizationRuleForm.resetFields();
        this.form = this.$options.data.call(this).form;
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
.organizationTreeMain {
  width: 100%;
  display: flex;
  flex-direction: column;
    height: calc(100vh - 167px);
  .organizationTreeSearch {
    width: 100%;
    height: 46px;
    border-bottom: 1px solid #ececec;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
    cursor: pointer;
  }

  .organizationTreeContent {
    flex: 1;
    overflow: scroll;
    padding: 10px;
    scrollbar-width: none;//兼容火狐
  }
  .organizationTreeContent::-webkit-scrollbar {
    display: none;
  }
    .organizationTreeContent /deep/ .ant-tree li .ant-tree-node-content-wrapper {
    max-width: 100%;
    width: 93%;
    display: inline-block;
    height: 24px;
    margin: 0;
    padding: 0 5px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 24px;
    text-decoration: none;
    vertical-align: top;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
  .organizationTreeContent /deep/ .ant-tree-title{
    display: flex;
    justify-content: space-between;
  }
}
</style>
