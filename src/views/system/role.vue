<template>
  <page-header-wrapper :title="false">
    <div class="Role">
      <a-spin tip="加载中..." class="position" v-if="roleLoading"> </a-spin>
      <div class="roleSearch">
        <div class="roleSearchInput">
          <div class="table-page-search-wrapper">
            <a-form layout="inline">
              <a-row :gutter="64">
                <a-col :md="6" :sm="32">
                  <a-form-item label="角色名称">
                    <a-input allowClear v-model="searchParameters.searchName" placeholder="请输入角色名称" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="角色值">
                    <a-input allowClear v-model="searchParameters.searchCode" placeholder="请输入角色值" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="创建日期">
                    <a-range-picker @change="onChangeData" allowClear v-model="searchParameters.roleDate" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="状态">
                    <a-select allowClear v-model="searchParameters.searchIsEnable" placeholder="请选择">
                      <a-select-option value="0">停用</a-select-option>
                      <a-select-option value="1">启用</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </div>
        </div>
        <div class="roleSearchButton">
          <a-button style="margin-right:20px" @click="() => (this.searchParameters = {})">重置</a-button>
          <a-button type="primary" @click="() => this.searchRoleTableData()">
            查询
          </a-button>
        </div>
      </div>
      <div class="roleTable">
        <div class="roleTableAdd">
          <div class="roleTableAddTitle">角色列表</div>
          <div class="roleTableAddButton">
            <a-button type="primary" @click="() => (this.modleVisible = true)">
              新增角色
            </a-button>
          </div>
        </div>
        <div class="roleTableContent">
          <a-table
            :columns="columns"
            :data-source="roleTableData"
            :pagination="false"
            size="middle"
            :rowKey="
              (record, index) => {
                return index;
              }
            "
            bordered
          >
            <template slot="action" slot-scope="text, record">
              <a slot="action" href="javascript:;" style="margin-left:5px" @click="handleEdit(record)">编辑</a>
              <a-popconfirm
                slot="action"
                title="此操作将删除该条数据，是否继续?"
                ok-text="是"
                cancel-text="否"
                @confirm="handleDelete(record)"
              >
                <a href="javascript:;" style="margin-left:5px">删除</a>
              </a-popconfirm>
            </template>
          </a-table>
        </div>
      </div>
      <div class="rolePagination">
        <a-pagination
          v-model="currentPage"
          show-quick-jumper
          :page-size-options="pageSizeOptions"
          :total="roleTableTotal"
          show-size-changer
          :page-size="pageObject.pageSize"
          @change="handlePageNumberChange"
          @showSizeChange="onPageSizeChange"
        >
        </a-pagination>
      </div>
      <a-modal
        width="45%"
        v-model="modleVisible"
        :title="form.id ? '编辑角色' : '新增角色'"
        @cancel="() => (this.clearFormData(), (this.modleVisible = false))"
        :confirm-loading="formButtonDisableFlag"
        @ok="onSubmit"
      >
        <div id="modalContent">
          <div class="formAspin" v-if="editWaitForLoading">
            <a-spin />
          </div>
          <div class="modalContentForm">
            <div class="modalContentFormTitle">基础信息</div>
            <div class="modalContentFormContent">
              <a-form-model
                ref="roleRuleForm"
                :model="form"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-form-model-item ref="name" label="角色名称" prop="name">
                  <a-input v-model="form.name" placeholder="请输入角色名称" />
                </a-form-model-item>
                <a-form-model-item ref="code" label="角色代码" prop="code">
                  <a-input v-model="form.code" placeholder="请输入角色代码" />
                </a-form-model-item>
                <a-form-model-item label="状态" prop="isEnable">
                  <a-radio-group v-model="form.isEnable" button-style="solid">
                    <a-radio-button value="1">
                      启用
                    </a-radio-button>
                    <a-radio-button value="0">
                      停用
                    </a-radio-button>
                  </a-radio-group>
                </a-form-model-item>
                <a-form-model-item label="备注">
                  <a-input v-model="form.description" type="textarea" placeholder="请输入备注" />
                </a-form-model-item>
              </a-form-model>
            </div>
          </div>
          <div class="modalContentTree">
            <div class="modalContentTreeTitle">
              <div class="title">菜单分配</div>
              <div class="icon">
                <span>
                  <a-popover placement="bottomRight">
                    <template slot="content">
                      <p style="cursor: pointer;" @click="() => (this.checkedKeys = this.permissionsAllids)">选择全部</p>
                      <p style="cursor: pointer;" @click="() => (this.checkedKeys = [])">取消选择</p>
                      <p style="cursor: pointer;" @click="() => (this.expandedKeys = this.permissionsAllids)">展开全部</p>
                      <span style="cursor: pointer;" @click="() => (this.expandedKeys = [])">折叠全部</span>
                    </template>
                    <a-icon type="menu-unfold" /> </a-popover
                ></span>
              </div>
            </div>
            <div class="modalContentTreeContent">
              <a-tree
                :replaceFields="{
                  title: 'name',
                  key: 'id'
                }"
                v-model="checkedKeys"
                checkable
                :expanded-keys.sync="expandedKeys"
                :tree-data="permissionsTreeArray"
              />
            </div>
          </div>
        </div>
      </a-modal>
    </div>
  </page-header-wrapper>
</template>
<script>
import {
  listPermissionsTree,
  listRoles,
  createRole,
  updateRole,
  loadRoleById,
  deleteRoleById,
  disableRoleById,
  enableRoleById
} from '@/api/api';
import moment from 'moment';
const columns = [
  {
    title: '角色名称',
    dataIndex: 'name'
  },
  {
    title: '角色值',
    dataIndex: 'code'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    title: '备注',
    dataIndex: 'description'
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' },
    width: '200px'
  }
];
export default {
  name: 'Role',
  data() {
    return {
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      editWaitForLoading: false, // 加载编辑回显数据等待Loading
      roleLoading: false, // 加载表格的loading
      searchParameters: {}, // 表格搜索条件值
      modleVisible: false, // 控制弹框
      columns, // 表格头部
      roleTableData: [], // 表格数据
      pageSizeOptions: this.$store.state.user.defaultPaginationOptions, // 分页下拉
      currentPage: 1, // 默认分页当前页
      pageObject: {
        pageNumber: 0,
        pageSize: this.$store.state.user.defaultPaginationPagesize // 一页展示多少条数据
      },
      roleTableTotal: 0, // 表格数据总数
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        // 表单数据
        name: undefined, // 名字
        code: undefined, // 角色
        isEnable: '1', // 状态
        isSystem: '0',
        description: undefined,
        permissions: []
      },
      rules: {
        // 规则验证
        name: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
        code: [{ required: true, message: '请输入角色值', trigger: 'change' }]
      },
      permissionsTreeArray: [], // 表单的树形下拉数据
      expandedKeys: [], // 控制树形下拉 展开收起全选取消全选 功能
      checkedKeys: [], // 树形下拉选中的数据
      permissionsAllids: [] // 获取所有的权限ID
    };
  },
  watch: {
    /**
     * @description: 解决删除分页最后一条没数据的BUG
     * 思路：先获取当前的表格数据总数this.roleTableTotal
     * 在获取除了当前页数据外的表格总数this.getExceptCurrentPageTableTotalData
     * 如果这两个数相等 说明删除的是当前页最后一条数据 然后使当前页-1 请求数据就可以了
     */

    roleTableTotal() {
      if (this.roleTableTotal === this.getExceptCurrentPageTableTotalData && this.roleTableTotal !== 0) {
        this.pageObject.pageNumber = Number(this.currentPage) - 1;
        this.currentPage -= 1;
        this.getRoleTableData();
      }
    }
  },
  computed: {
    /**
     * @description: 获取去掉当前页的表格总数
     */
    getExceptCurrentPageTableTotalData: function() {
      return (this.currentPage - 1) * this.pageObject.pageSize;
    }
  },
  created() {
    this.roleLoading = true;
    this.getRoleTableData(this.pageObject, this.searchParameters); // 获取表格数据
    this.getRolePermissions(); // 获取角色权限
  },
  methods: {
    /**
     * @description: 获取角色权限
     */
    getRolePermissions() {
      listPermissionsTree({ searchUserId: this.$store.getters.userInfo.roles[0].id }).then(res => {
        if (res.code === 200) {
          this.permissionsTreeArray = res.data;
          this.getTreeData(this.permissionsTreeArray);
        }
      });
    },

    /**
     * @description: 获取表格数据
     * @param {object} page 分页参数
     * @param {object} params 搜索参数
     */
    getRoleTableData(page, params) {
      listRoles(Object.assign({}, page, params)).then(res => {
        if (res.code === 200 && res.data.content) {
          this.roleTableData = res.data.content;
          this.roleTableData.forEach(item => {
            item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm');
          });
          this.roleTableTotal = res.data.totalElements;
        } else {
          this.roleTableTotal = res.data.totalElements;
          this.roleTableData = [];
        }
      }).finally(() => {
        this.roleLoading = false;
      });
    },

    /**
     * @description: 点击表格搜索条件的查询
     */
    searchRoleTableData() {
      this.currentPage = 1;
      this.pageObject.pageNumber = 0;
      this.roleLoading = true;
      this.getRoleTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 新增编辑角色表单提交
     */
    onSubmit() {
      this.$refs.roleRuleForm.validate(valid => {
        if (valid) {
          this.form.permissions = this.checkedKeys.map(item => {
            return {
              id: item
            };
          });
          // 判断是否至少选择了一个权限
          if (this.form.permissions.length === 0) {
            this.$message.error('请选择权限列表');
            return false;
          }
          this.formButtonDisableFlag = true;
          if (this.form.id) {
            this.editRole(this.form);
          } else {
            this.roleAdd(this.form);
          }
        } else {
          return false;
        }
      });
    },

    /**
     * @description: 新增角色权限
     * @param {object} addRoleParam 表单参数
     */
    roleAdd(addRoleParam) {
      createRole({ body: addRoleParam })
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
     * @description: 编辑角色权限
     * @param {object} editRoleParam 表单参数
     */
    editRole(editRoleParam) {
      updateRole({ body: editRoleParam, id: editRoleParam.id })
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
     * @param {object} successFormData 表单请求成功后返回的对象
     */
    formSuccessOperation(successFormData) {
      this.$message.success(successFormData.message);
      this.modleVisible = false;
      this.clearFormData();
      this.roleLoading = true;
      this.getRoleTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 重置表单
     */
    clearFormData() {
      this.$refs.roleRuleForm.resetFields();
      this.form = this.$options.data.call(this).form;
      this.checkedKeys = [];
    },

    /**
     * @description: 编辑角色
     * @param {object} roleTableRowData 表格某一行的数据对象
     */
    handleEdit(roleTableRowData) {
      this.editWaitForLoading = true;
      this.modleVisible = true;
      // 根据ID请求相应角色的权限 进行回显
      loadRoleById({ id: roleTableRowData.id })
        .then(res => {
          if (res.code === 200) {
            this.form = Object.assign({}, this.form, res.data);
            this.form.isEnable = String(this.form.isEnable);
            this.checkedKeys = res.data.permissions.map(item => {
              return item.id;
            });
          }
        })
        .finally(() => {
          this.editWaitForLoading = false;
        });
    },

    /**
     * @description: 点击删除
     * @param {object} roleTableRowData 格某一行的数据对象
     */
    handleDelete(roleTableRowData) {
      deleteRoleById({ id: roleTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.roleLoading = true;
          this.getRoleTableData(this.pageObject, this.searchParameters);
        }
      });
    },

    /**
     * @description: 利用递归获取到所有的节点id
     * @param {array} permissionsTreeArray 树形下拉的数据
     */
    getTreeData(permissionsTreeArray) {
      permissionsTreeArray.forEach(item => {
        this.permissionsAllids.push(item.id);
        if (item.children) {
          this.getTreeData(item.children);
        }
      });
    },

    /**
     * @description:  获取分页下拉第几页展示几个
     * @param {string} currentPage 当前页
     * @param {string} pageSize 当前页展示几条
     */
    onPageSizeChange(currentPage, pageSize) {
      this.roleLoading = true;
      this.currentPage = currentPage;
      this.pageObject.pageSize = pageSize;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getRoleTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 获取分页页数改变后的值
     * @param {string} pageNumber UI框架自带
     */
    handlePageNumberChange(pageNumber) {
      this.roleLoading = true;
      this.currentPage = pageNumber;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getRoleTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 日期选择器改变
     * @param {array} date UI框架自带
     * @param {array} dateString UI框架自带 时间区间
     */
    onChangeData(date, dateString) {
      this.searchParameters.searchCreateDateBegin = dateString[0];
      this.searchParameters.searchCreateDateEnd = dateString[1];
    },
    /**
     * @description: 停用/启用表格数据的某一条
     * @param {object} roleTableRowData 某一条表格数据对象
     */
    handleIsEnable(roleTableRowData) {
      this.roleLoading = true;
      if (roleTableRowData.isEnable === 1) {
        disableRoleById({ id: roleTableRowData.id }).then(res => {
          if (res.code === 200) {
            this.$message.success(res.message);
            this.modleVisible = false;
            this.getRoleTableData(this.pageObject, this.searchParameters);
          }
        });
      } else {
        enableRoleById({ id: roleTableRowData.id }).then(res => {
          if (res.code === 200) {
            this.$message.success(res.message);
            this.modleVisible = false;
            this.getRoleTableData(this.pageObject, this.searchParameters);
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.table-page-search-wrapper /deep/ .ant-form-inline .ant-form-item > .ant-form-item-label {
  line-height: 32px;
  padding-right: 8px;
  width: 77px;
}
.Role {
  width: 100%;
  height: calc(100vh - 150px);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  .position {
    width: 100%;
    height: 100%;
    background: white;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  .roleSearch {
    width: 100%;
    height: 64px;
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    padding: 15px 20px;
    .roleSearchInput {
      width: 85%;
      height: 100%;
    }
    .roleSearchButton {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .roleTable {
    flex: 1;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    .roleTableAdd {
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ececec;
      padding: 0 20px;
      .roleTableAddTitle {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 550;
      }
      .roleTableAddButton {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    .roleTableContent {
      max-height: calc(100vh - 380px);
      padding: 10px;
      overflow: scroll;
      .position {
        width: 100%;
        height: calc(100vh - 380px);
        background: white;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
      }
    }
    .roleTableContent /deep/ .ant-table-tbody .ant-table-row:nth-child(2n) {
      background: #fafafa;
    }
    .roleTableContent::-webkit-scrollbar {
      display: none;
    }
  }
  .rolePagination {
    width: 100%;
    height: 47px;
    border-radius: 5px;
    background: white;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px 0 0;
  }
}
#modalContent {
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  .formAspin {
    position: absolute;
    width: 100%;
    height: 400px;
    background: #ececec;
    border-radius: 4px;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modalContentForm {
    width: 50%;
    height: 100%;
    border-right: 1px solid #ececec;
    display: flex;
    flex-direction: column;
    .modalContentFormTitle {
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
    .modalContentFormContent {
      padding: 0 0 0 20px;
      flex: 1;
    }
    .modalContentFormContent /deep/ .ant-form-item-label {
      display: inline-block;
      overflow: hidden;
      line-height: 39.9999px;
      white-space: nowrap;
      text-align: right;
      vertical-align: middle;
      width: 100px;
    }
  }
  .modalContentTree {
    width: 50%;
    height: 100%;
    max-height: 500px;
    .modalContentTreeTitle {
      width: 100%;
      height: 64px;
      display: flex;
      font-size: 16px;
      .title {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
    .modalContentTreeContent {
      width: 100%;
      height: 334px;
      overflow: scroll;
      display: flex;
      margin-left: 30%;
    }
    .modalContentTreeContent::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
