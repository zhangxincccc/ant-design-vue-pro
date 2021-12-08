<template>
  <div class="mixTreeMain">
    <div class="mixTreeSearch">
      <span><a-input placeholder="搜索组织/部门" style="width: 275px" @change="handleSearch" v-model="mixTreeSearch"/></span>
      <span>
        <a-popover placement="bottomRight">
          <template slot="content">
            <p style="cursor: pointer;" @click="() => (this.expandedKeys = this.allIds)">展开全部</p>
            <span style="cursor: pointer;" @click="() => (this.expandedKeys = [])">折叠全部</span>
          </template>
          <a-icon type="menu-unfold" /> </a-popover
        ></span>
    </div>
    <div class="mixTreeContent">
      <a-tree
        ref="tree"
        :replaceFields="{
          title: 'name',
          key: 'id'
        }"
        defaultExpandAll
        :tree-data="treeData"
        :expandedKeys.sync="expandedKeys"
        @select="handleSelect"
      >
        <template slot="title" slot-scope="{ name }">
          <span
            v-html="
              name.replace(
                new RegExp(mixTreeSearch, 'g'),
                '<span style=color:#f50>' + mixTreeSearch + '</span>'
              )
            "
          ></span>
        </template>
      </a-tree>
    </div>
  </div>
</template>

<script>
import * as api from '@/api/api';
export default {
  name: 'OrganizationMixTree',
  data() {
    return {
      expandedKeys: [], // 控制树结构展开折叠数据组
      allIds: [], // 用来保存树形所有节点ID
      mixTreeSearch: '', // 混合树搜索
      treeData: [] // 混合树形结构数据
    };
  },
  created() {
    this.getTreeData();
  },
  methods: {
    /**
     * @description: 获取混合树形结构数据
     */

    getTreeData() {
      api.organizationsTree().then(res => {
        if (res.code === 200) {
          this.treeData = res.data;
          this.setOrganizationType(this.treeData);
          this.initTreeData(this.treeData);
          this.getMixTreeAllId(this.treeData);
        }
      });
    },

    /**
     * @description: 设置组织的type 为了区分组织和部门
     * @param {array} organizationData 组织数据
     */
    setOrganizationType(organizationData) {
      organizationData.forEach(item => {
        item.type = 7;
        if (item.children) {
          this.setOrganizationType(item.children);
        }
      });
    },

    /**
     * @description: 初始化获取所有节点的ID并备份 用来做树形结构的默认展开
     * @param {array} treeData 混合树
     */
     getMixTreeAllId(treeData) {
      treeData.forEach(item => {
        this.expandedKeys.push(item.id);
        if (item.children) {
          this.getMixTreeAllId(item.children);
        }
      });
      this.allIds = this.expandedKeys;
    },

    /**
     * @description: 拼接部门组织的混合树 利用递归添加scopedSlots 用来搜索变色
     * @param {array} organizationData 组织列表数据
     */
    initTreeData(organizationData) {
      organizationData.forEach(item => {
        item.scopedSlots = { title: 'title' };
        item.disabled = item.isEnable === 0;
        if (!item.children) {
          item.children = [];
        }
        if (item.departments) {
          item.departments.forEach(value => {
            this.setDepartmentType(item.departments);
            item.children.push(value);
          });
        }
        if (item.children) {
          this.initTreeData(item.children);
        }
      });
    },
    /**
     * @description: 利用递归将部门的数据添加上一个type的唯一字段
     * @param {array} departmentsChildrenData 部门的子数据
     */
    setDepartmentType(departmentsChildrenData) {
      departmentsChildrenData.forEach(value => {
        value.type = 6;
        if (value.children) {
          this.setDepartmentType(value.children);
        }
      });
    },
    /**
     * @description: 混合树列表搜索
     */

    handleSearch() {
      // 获取符合条件的ID值
      this.expandedKeys = this.getMixTreeId(this.mixTreeSearch, this.treeData, []);
      // 获取符合条件的ID值得父级ID
      this.expandedKeys.forEach(item => {
        this.getParentKey(item, this.treeData);
      });
    },
    /**
     * @description:  获取符合条件的ID值
     * @param {string} searchValue 搜索框的值
     * @param {array} treeData 混合树数据
     * @param {array} idList 空数组 用来做返回值
     * @return {array} idList 命中节点的ID数组
     */

    getMixTreeId(searchValue, treeData, idList) {
      // 遍历所有同一级的树
      for (let i = 0; i < treeData.length; i++) {
        const node = treeData[i];
        // 如果该节点存在value值则push
        if (node.name.indexOf(searchValue) !== -1) {
          idList.push(node.id);
        }
        // 如果拥有孩子继续遍历
        if (node.children) {
          this.getMixTreeId(searchValue, node.children, idList);
        }
      }
      return idList;
    },

    /**
     * @description:  获取符合条件的ID值得父级ID
     * @param {string} id 选中的id
     * @param {array} treeData 混合树数组
     * @return {parentId} 选中id的父级id
     */

    getParentKey(id, treeData) {
      let parentId = null;
      for (let i = 0; i < treeData.length; i++) {
        const node = treeData[i];
        if (node.id === id) {
          // 判断该节点是否有父级
          if (node.type === 7) {
            // 一级的组织没有parent字段
            if (!node.parent) {
              return false;
            }
            parentId = node.parent.id;
            // 数组去重添加
            if (this.expandedKeys.indexOf(parentId) === -1) {
              this.expandedKeys.push(parentId);
              // 如果还有父级则拿父级ID重新遍历
              this.getParentKey(node.parent.id, this.treeData);
            }
            // 判断该节点是否为部门
          } else if (node.type === 6) {
            parentId = node.organization.id;
            // 数组去重添加
            if (this.expandedKeys.indexOf(parentId) === -1) {
              this.expandedKeys.push(parentId);
              // 如果还有父级则拿父级ID重新遍历 如果没有父级说明已经在部门的一级列表 拿organization.id继续向上查找
              if (node.parent) {
                this.getParentKey(node.parent.id, this.treeData);
              } else {
                this.getParentKey(node.organization.id, this.treeData);
              }
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
     * @description: 选择混合树列表数据
     * @param {array} selectedKeys 选中的id数组
     */

    handleSelect(selectedKeys, rowData) {
      if (rowData.node.dataRef.type === 7) {
        this.$emit('selectOrganization', selectedKeys, true);
      } else if (rowData.node.dataRef.type === 6) {
        const selecOrganizationAnddepartmentId = {
          organizationId: rowData.node.dataRef.organization.id,
          departmentId: rowData.node.dataRef.id
        };
        this.$emit('selectDepartment', selecOrganizationAnddepartmentId, false);
      }
      // 取消选中
      if (selectedKeys.length === 0) {
        this.$emit('cancelSelect');
      }
    }
  }
};
</script>

<style lang="less" scoped>
.mixTreeMain {
  width: 100%;
  display: flex;
  flex-direction: column;
  .mixTreeSearch {
    width: 100%;
    height: 46px;
    border-bottom: 1px solid #ececec;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    cursor: pointer;
  }

  .mixTreeContent {
    flex: 1;
    overflow: scroll;
    padding: 10px;
  }
  .mixTreeContent::-webkit-scrollbar {
    display: none;
  }
}
</style>
