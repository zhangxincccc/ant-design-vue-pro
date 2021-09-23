<template>
  <div class="departmentListMain">
    <div class="departmentListSearch">
      <span>部门列表</span>
      <span><a-input placeholder="搜索" style="width: 150px" @change="handleSearch" v-model="departmentListSearch"/></span>
      <span>
        <a-popover placement="bottomRight">
          <template slot="content">
            <p style="cursor: pointer;" @click="openTree">展开全部</p>
            <p style="cursor: pointer;" @click="endTree">折叠全部</p>
          </template>
          <a-icon type="menu-unfold" /> </a-popover
        ></span>
    </div>
    <div class="departmentListContent">
      <a-tree
        ref="tree"
        :replaceFields="{
          title: 'name',
          key: 'id'
        }"
        defaultExpandAll
        :tree-data="departmentTreeData"
        :expandedKeys.sync="expandedKeys"
        @select="handleSelect"
      >
        <template slot="title" slot-scope="{ name }">
          <span
            v-html="
              name.replace(
                new RegExp(departmentListSearch, 'g'),
                '<span style=color:#f50>' + departmentListSearch + '</span>'
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
  name: 'TreeListComponents',
  data() {
    return {
      expandedKeys: [], // 控制树结构展开折叠数据组
      selectIdArray: [], // 搜索条件命中的节点ID
      departmentTreeSelectData: [], // 树结构选中的数据
      departmentListSearch: '', // 部门列表搜索
      departmentTreeData: [] // 部门树形结构数据
    };
  },
  created() {
    this.getDepartmentsTree();
  },
  methods: {
    /**
     * @description: 获取部门列表树形结构数据
     */

    getDepartmentsTree() {
      api.departmentsTree().then(res => {
        if (res.code === 200) {
          this.departmentTreeData = res.data;
          this.openTree();
          this.$emit('getDepartmentTreeData', this.departmentTreeData);
        }
      });
    },
    /**
     * @description: 利用递归获取到所有的节点code 并添加scopedSlots 用来搜索变色
     * @param {array} departmentTreeData 部门列表数据
     */

    getTreeData(departmentTreeData) {
      departmentTreeData.forEach(res => {
        this.expandedKeys.push(res.id);
        res.scopedSlots = { title: 'title' };
        if (res.children) {
          this.getTreeData(res.children);
        }
      });
    },
    /**
     * @description: 部门列表搜索
     */

    handleSearch() {
      // 获取符合条件的ID值
      this.selectIdArray = this.getTreeIDList(this.departmentListSearch, this.departmentTreeData, []);
      // 获取符合条件的ID值得父级ID
      this.selectIdArray.forEach(res => {
        this.getParentKey(res, this.departmentTreeData);
      });
      this.expandedKeys = this.selectIdArray;
    },
    /**
     * @description:  获取符合条件的ID值
     * @param {string} searchValue 搜索框的值
     * @param {array} departmentTreeData 部门列表数据
     * @param {array} idList 空数组 用来做返回值
     * @return {array} idList 命中节点的ID数组
     */

    getTreeIDList(searchValue, departmentTreeData, idList) {
      // 遍历所有同一级的树
      for (let i = 0; i < departmentTreeData.length; i++) {
        const node = departmentTreeData[i];
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
     * @param {array} departmentTreeData 部门列表数组
     * @return {parentId} 选中id的父级id
     */

    getParentKey(id, departmentTreeData) {
      let parentId = null;
      for (let i = 0; i < departmentTreeData.length; i++) {
        const node = departmentTreeData[i];
        if (node.id === id) {
          // 判断该节点是否有父级
          if (node.parent) {
            parentId = node.parent.id;
            // 数组去重添加
            if (this.selectIdArray.indexOf(parentId) === -1) {
              this.selectIdArray.push(parentId);
              // 如果还有父级则拿父级ID重新遍历
              this.getParentKey(node.parent.id, this.departmentTreeData);
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
     * @description: 展开部门树形结构
     */

    openTree() {
      this.expandedKeys = [];
      this.getTreeData(this.departmentTreeData);
    },
    /**
     * @description: 关闭部门树形结构
     */

    endTree() {
      this.expandedKeys = [];
    },
    /**
     * @description: 选择部门列表数据
     * @param {array} selectedKeys 选中的部门id数组
     */

    handleSelect(selectedKeys) {
      this.departmentTreeSelectData = selectedKeys;
      this.$emit('getDepartmentData', this.departmentTreeSelectData);
    }
  }
};
</script>

<style lang="less" scoped>
.departmentListMain {
  width: 100%;
  display: flex;
  flex-direction: column;
  .departmentListSearch {
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

  .departmentListContent {
    flex: 1;
    overflow: scroll;
    padding: 10px;
  }
  .departmentListContent::-webkit-scrollbar {
    display: none;
  }
}
</style>
