<template>
  <page-header-wrapper :title="false">
    <div class="user">
      <div class="mixTree">
        <organization-mix-tree
          @selectOrganization="selectMixTreeOrganizationData"
          @selectDepartment="selectMixTreeDepartmentData"
          @cancelSelect="cancelSelectMixTreeData"
        ></organization-mix-tree>
      </div>
      <div class="userMain">
        <a-spin tip="加载中..." class="position" v-if="userLoading"> </a-spin>
        <div class="userMainSearch">
          <div class="table-page-search-wrapper">
            <a-form layout="inline">
              <a-row :gutter="48">
                <a-col :md="8" :sm="24">
                  <a-form-item label="用户名">
                    <a-input v-model="searchParameters.searchName" placeholder="请输入" allowClear />
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item label="创建日期">
                    <a-range-picker @change="onChangeData" allowClear v-model="searchParameters.userDate" />
                  </a-form-item>
                </a-col>
                <template v-if="advanced">
                  <a-col :md="8" :sm="24">
                    <a-form-item label="角色">
                      <a-select allowClear v-model="searchParameters.searchRoleId" size="default" placeholder="请选择">
                        <a-select-option v-for="item in userRoleArray" :key="item.id">
                          {{ item.name }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :md="8" :sm="24">
                    <a-form-item label="登录名">
                      <a-input v-model="searchParameters.searchUsername" placeholder="请输入" allowClear />
                    </a-form-item>
                  </a-col>
                  <a-col :md="8" :sm="24">
                    <a-form-item label="状态">
                      <a-select v-model="searchParameters.searchIsEnable" placeholder="请选择" allowClear>
                        <a-select-option value="1">启用</a-select-option>
                        <a-select-option value="0">停用</a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                </template>
                <a-col :md="8" :sm="24" style="display:flex;justify-content: flex-end">
                  <span>
                    <a-button style="margin-left: 30px" @click="() => (this.searchParameters = {})">重置</a-button>
                    <a-button style="margin-left: 8px" type="primary" @click="() => this.searchUserTableData()">查询</a-button>
                    <a @click="() => (this.advanced = !this.advanced)" style="margin-left: 8px">
                      {{ advanced ? '收起' : '展开' }}
                      <a-icon :type="6 ? 'up' : 'down'" />
                    </a>
                  </span>
                </a-col>
              </a-row>
            </a-form>
          </div>
        </div>
        <div class="userMainTable">
          <div class="userMainTableAdd">
            <div>用户列表</div>
            <div>
              <a-button type="primary" class="buttonMargin" @click="handleBatchEnable">
                批量启用
              </a-button>
              <a-button type="primary" class="buttonMargin" @click="handleBatchDisable">
                批量停用
              </a-button>
              <a-button type="primary" class="buttonMargin" @click="handleBatchDelete">
                批量删除
              </a-button>
              <a-button type="primary" @click="handleAddUser()">
                新增用户
              </a-button>
            </div>
          </div>
          <div class="userMainTableContent">
            <a-table
              :row-selection="{ selectedRowKeys: batchSelectIdArray, onChange: handleUserSelectChange }"
              :columns="columns"
              :data-source="tableData"
              :pagination="false"
              size="middle"
              :rowKey="
                (record, index) => {
                  return record.id;
                }
              "
              bordered
            >
              <span slot="name" slot-scope="text">{{ text }}</span>
              <template slot="roles" slot-scope="roles">
                <span v-for="item in roles" :key="item.id"> {{ item.name }} <span style="padding:0 5px;"></span> </span>
              </template>
              <template slot="action" slot-scope="text, record">
                <a slot="action" href="javascript:;" @click="handleIsEnable(record)">{{
                  record.isEnable == 1 ? '停用' : '启用'
                }}</a>
                <a slot="action" href="javascript:;" @click="handleEditUser(record)" style="margin-left:5px">编辑</a>
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
        <div class="userMainPag">
          <a-pagination
            v-model="currentPage"
            show-quick-jumper
            :page-size-options="pageSizeOptions"
            :total="userTableTotal"
            show-size-changer
            :page-size="pageObject.pageSize"
            @change="handlePageNumberChange"
            @showSizeChange="onPageSizeChange"
          >
          </a-pagination>
        </div>
      </div>
      <a-modal
        v-model="modleVisible"
        :title="form.id ? '编辑用户' : '新增用户'"
        @cancel="() => ((this.modleVisible = false), this.clearFormData())"
        :confirm-loading="formButtonDisableFlag"
        @ok="onSubmit"
      >
        <a-form-model ref="userRuleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item ref="name" label="用户名" prop="name">
            <a-input v-model="form.name" placeholder="请输入用户名" />
          </a-form-model-item>
          <a-form-model-item ref="username" label="登录名" prop="username">
            <a-input v-model="form.username" placeholder="请输入登录名" />
          </a-form-model-item>
          <a-form-model-item ref="email" label="邮箱" prop="email">
            <a-input v-model="form.email" placeholder="请输入邮箱" />
          </a-form-model-item>
          <a-form-model-item label="角色" prop="roleIds">
            <a-select v-model="form.roleIds" mode="multiple" size="default" placeholder="请选择角色">
              <a-select-option v-for="item in userRoleArray" :key="item.id">
                {{ item.name }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="所属组织" prop="organizationId">
            <a-tree-select
              :replaceFields="{
                title: 'name',
                value: 'id'
              }"
              v-model="form.organizationId"
              style="width: 100%"
              @change="organizationId => this.getUserDepartmentTree({ searchOrganizationId: organizationId })"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :tree-data="formOrganizationTreeData"
              placeholder="请选择所属组织"
              tree-default-expand-all
            >
            </a-tree-select>
          </a-form-model-item>
          <a-form-model-item label="所属部门" prop="departmentId">
            <a-tree-select
              :replaceFields="{
                title: 'name',
                value: 'id'
              }"
              v-model="form.departmentId"
              style="width: 100%"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :tree-data="formDepartmentTreeData"
              placeholder="请选择所属部门"
              tree-default-expand-all
            >
            </a-tree-select>
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
        </a-form-model>
      </a-modal>
    </div>
  </page-header-wrapper>
</template>
<script>
import {
  listUsers,
  deleteUserById,
  userOrganizationTree,
  createUser,
  updateUser,
  disableUserById,
  enableUserById,
  batchDisableUserByIds,
  batchEnableUserByIds,
  batchDeleteUserByIds,
  userDepartmentTree,
  listAllRoles,
  loadUserById
} from '@/api/api';
import moment from 'moment';
import OrganizationMixTree from './components/tree/OrganizationMixTree';
// 表单正则验证统一写在这里
import { validateEmail } from '../../utils/validator';
const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    title: '角色',
    dataIndex: 'roles',
    width: '20%',
    scopedSlots: { customRender: 'roles' }
  },
  {
    title: '登录名',
    dataIndex: 'username'
  },
  {
    title: '邮箱',
    dataIndex: 'email'
  },
  {
    title: '所属部门',
    dataIndex: 'department.name'
  },
  {
    title: '所属组织',
    dataIndex: 'organization.name'
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' }
  }
];
const tableData = [];
export default {
  name: 'User',
  data() {
    return {
      selectDepartmentFlagArray: [], // 接受部门列表子组件选中的ID数组 []为未选中状态 有值为选中状态
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      userLoading: false, // 页面加载数据loading
      searchParameters: {}, // 表格搜索条件Input绑定
      advanced: false, // 控制搜索条件的展开折叠
      modleVisible: false, // 控制表单弹框
      userRoleArray: [], // 角色下拉数组
      tableData, // 表格数据
      columns, // 表格头部
      currentPage: 1, // 默认分页当前页
      pageSizeOptions: this.$store.state.user.defaultPaginationOptions, // 分页下拉
      pageObject: {
        pageNumber: 0,
        pageSize: this.$store.state.user.defaultPaginationPagesize // 一页展示多少条数据
      },
      userTableTotal: 0, // 表格数据总数
      isOrganization: -1, // 判断treeSelect选中时的类型(true代表是属于组织 false代表部门)
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        // 表单数据
        username: undefined,
        name: undefined, // 名字
        email: undefined, // 邮箱
        roles: [], // 角色
        roleIds: [], // 角色ID
        isEnable: '1', // 状态
        departmentId: undefined, // 所属部门ID
        department: undefined, // 所属部门
        organizationId: undefined, // 所属组织ID
        organization: undefined // 所属组织
      },
      rules: {
        // 规则验证
        email: [
          {
            validator: validateEmail.bind(this),
            message: '请输入正确的邮箱',
            trigger: 'blur'
          },
          { max: 500, message: '邮箱长度不能大于500', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
          { min: 4, max: 50, message: '登录名长度应为4--50', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { max: 200, message: '用户名长度不能大于200', trigger: 'blur' }
        ],
        roleIds: [{ required: true, message: '请选择角色', trigger: 'change' }],
        organization: [{ required: true, message: '请选择组织', trigger: 'change' }]
      },
      formDepartmentTreeData: [], // 部门下拉选择树结构数据
      formOrganizationTreeData: [], // 组织下拉选择树结构数据
      batchSelectIdArray: [], // 批量选中的数据ID
      selectMixTreeOrganizationId: undefined // 点击左侧混合树获取到部门上级组织ID
    };
  },
  components: {
    OrganizationMixTree
  },
  watch: {
    /**
     * @description: 解决删除分页最后一条没数据的BUG
     * 思路：先获取当前的表格数据总数this.userTableTotal
     * 在获取除了当前页数据外的表格总数this.getExceptCurrentPageTableTotalData
     * 如果这两个数相等 说明删除的是当前页最后一条数据 然后使当前页-1 请求数据就可以了
     */
    userTableTotal() {
      if (this.userTableTotal === this.getExceptCurrentPageTableTotalData && this.userTableTotal !== 0) {
        this.currentPage -= 1;
        this.getUserTableData(this.pageObject, this.searchParameters);
      }
    }
  },
  computed: {
    getExceptCurrentPageTableTotalData: function() {
      return (this.currentPage - 1) * this.pageObject.pageSize;
    }
  },
  created() {
    this.userLoading = true;
    this.getUserTableData(this.pageObject, this.searchParameters); // 获取表格数据
    this.getRoles(); // 获取角色数据列表
    this.getFormOrganizationsTree(); // 获取表单组织树结构数据
  },
  methods: {
    /**
     * @description: 表格复选框选中数据变化
     * @param {array} selectedRowKeys 下标回值
     * @param {array} selectedRows 数据回值
     */
    handleUserSelectChange(selectedRowKeys) {
      this.batchSelectIdArray = selectedRowKeys;
    },
    /**
     * @description: 选中混合树组织的数据
     * @param {array} organizationId 组织ID数组
     * @param {string} organizationType 选中的类型
     */

    selectMixTreeOrganizationData(organizationId, organizationType) {
      this.searchParameters.searchOrganizationId = organizationId[0];
      this.searchParameters.searchDepartmentId = undefined;
      this.isOrganization = organizationType;
      this.searchUserTableData();
    },
    /**
     * @description: 选中混合树组织的数据
     * @param {array} departmentId 部门ID数组
     * @param {string} departmentType 选中的类型
     */
    selectMixTreeDepartmentData(organizationAnddepartmentId, departmentType) {
      this.selectMixTreeOrganizationId = organizationAnddepartmentId.organizationId;
      this.searchParameters.searchDepartmentId = organizationAnddepartmentId.departmentId;
      this.searchParameters.searchOrganizationId = undefined;
      this.isOrganization = departmentType;
      this.searchUserTableData();
    },
    /**
     * @description: 取消选中混合树
     */
    cancelSelectMixTreeData() {
      this.searchParameters.searchOrganizationId = undefined;
      this.searchParameters.searchDepartmentId = undefined;
      this.isOrganization = -1;
      this.searchUserTableData();
    },
    /**
     * @description: 获取表格数据
     * @param {object} page 分页参数
     * @param {object} params 搜索参数
     */

    getUserTableData(page, params) {
      listUsers(Object.assign({}, page, params)).then(resp => {
        if (resp.code === 200 && resp.data.content) {
          this.tableData = resp.data.content;
          this.tableData.forEach(item => {
            item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm');
          });
          this.userTableTotal = resp.data.totalElements;
          this.userLoading = false;
        } else {
          this.userTableTotal = resp.data.totalElements;
          this.tableData = [];
          this.userLoading = false;
        }
      });
    },

    /**
     * @description: 获取角色数据列表
     */
    getRoles() {
      listAllRoles().then(res => {
        if (res.code === 200) {
          this.userRoleArray = res.data;
        }
      });
    },

    /**
     * @description: 表格查询公共的代码
     */

    searchUserTableData() {
      this.currentPage = 1;
      this.pageObject.pageNumber = 0;
      this.userLoading = true;
      this.getUserTableData(this.pageObject, this.searchParameters);
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
     * @description: 根据组织ID获取对应的部门树
     * @param {object} searchOrganizationId 组织ID
     * @return {*}
     */
    getUserDepartmentTree(searchParameters) {
      userDepartmentTree(searchParameters).then(res => {
        if (res.code === 200) {
          this.formDepartmentTreeData = res.data;
        }
      });
    },

    /**
     * @description:新增编辑弹框 （提交数据）
     */
    onSubmit() {
      this.$refs.userRuleForm.validate(valid => {
        if (valid) {
          this.formButtonDisableFlag = true;
          // 构建后端需要的参数形式[{id:1}]
          this.form.roles = [];
          this.form.roleIds.map(item => {
            const obj = {
              id: item
            };
            return this.form.roles.push(obj);
          });
          this.form.department = { id: this.form.departmentId };
          this.form.organization = { id: this.form.organizationId };

          // 编辑
          if (this.form.id) {
            this.userUpdate(this.form);
          } else {
            // 新增
            this.userAdd(this.form);
          }
        } else {
          return false;
        }
      });
    },

    /**
     * @description: 用户新增
     * @param {object} userAddParam 新增的对象参数
     */
    userAdd(userAddParam) {
      createUser({ body: userAddParam })
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
     * @description: 用户编辑
     * @param {object} userAddParam 编辑的对象参数
     */
    userUpdate(userEditParam) {
      updateUser({ body: userEditParam, id: userEditParam.id })
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
     * @description: 数据更新后共同的代码
     * @param {object} formSuccessData 用户新增编辑请求成功后返回的对象
     */
    formSuccessOperation(formSuccessData) {
      this.$message.success(formSuccessData.message);
      this.modleVisible = false;
      this.clearFormData();
      this.userLoading = true;
      this.getUserTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 删除表格数据的某一条
     * @param {object} userTableRowData 某一条表格数据对象
     */
    handleDelete(userTableRowData) {
      deleteUserById({ id: userTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.modleVisible = false;
          this.userLoading = true;
          this.getUserTableData(this.pageObject, this.searchParameters);
        }
      });
    },

    /**
     * @description: 停用/启用表格数据的某一条
     * @param {object} userTableRowData 某一条表格数据对象
     */
    handleIsEnable(userTableRowData) {
      this.userLoading = true;
      if (userTableRowData.isEnable === 1) {
        disableUserById({ id: userTableRowData.id }).then(res => {
          if (res.code === 200) {
            this.$message.success(res.message);
            this.modleVisible = false;
            this.getUserTableData(this.pageObject, this.searchParameters);
          }
        });
      } else {
        enableUserById({ id: userTableRowData.id }).then(res => {
          if (res.code === 200) {
            this.$message.success(res.message);
            this.modleVisible = false;
            this.getUserTableData(this.pageObject, this.searchParameters);
          }
        });
      }
    },
    /**
     * @description: 点击批量停用
     */
    handleBatchDisable() {
      this.userLoading = true;
      batchDisableUserByIds({ body: this.batchSelectIdArray }).then(res => {
        if (res.code === 200) {
          this.afterBatchActions(res);
        }
      });
    },
    /**
     * @description: 点击批量启用
     */
    handleBatchEnable() {
      this.userLoading = true;
      batchEnableUserByIds({ body: this.batchSelectIdArray }).then(res => {
        if (res.code === 200) {
          this.afterBatchActions(res);
        }
      });
    },
    handleBatchDelete() {
      this.userLoading = true;
      batchDeleteUserByIds({ body: this.batchSelectIdArray }).then(res => {
        if (res.code === 200) {
          this.afterBatchActions(res);
        }
      });
    },
    /**
     * @description: 批量停用 启用 删除 公共返回数据
     * @param {object} batchSuccessData 接口返回数据
     */

    afterBatchActions(batchSuccessData) {
      this.$message.success(batchSuccessData.message);
      this.batchSelectIdArray = [];
      this.getUserTableData(this.pageObject, this.searchParameters);
    },
    /**
     * @description: 获取分页页数改变后的值
     * @param {string} pageNumber UI框架自带
     */
    handlePageNumberChange(pageNumber) {
      this.userLoading = true;
      this.currentPage = pageNumber;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getUserTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 获取分页下拉第几页展示几个
     * @param {string} currentPage UI框架自带
     * @param {string} pageSize UI框架自带
     */
    onPageSizeChange(currentPage, pageSize) {
      this.userLoading = true;
      this.currentPage = currentPage;
      this.pageObject.pageSize = pageSize;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getUserTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 获取表单树结构数据
     */
    getFormOrganizationsTree() {
      userOrganizationTree().then(res => {
        if (res.code === 200) {
          this.formOrganizationTreeData = res.data;
          this.disabledFormTreeData(this.formOrganizationTreeData);
          this.formDepartmentTreeData = [];
        }
      });
    },

    /**
     * @description: 新增用户
     */
    handleAddUser() {
      this.form.id = undefined;
      this.modleVisible = true;
      if (this.isOrganization === true) {
        this.form.organizationId = this.searchParameters.searchOrganizationId;
      } else if (this.isOrganization === false) {
        this.form.organizationId = this.selectMixTreeOrganizationId;
        this.form.departmentId = this.searchParameters.searchDepartmentId;
        this.getUserDepartmentTree({ searchOrganizationId: this.form.organizationId });
      }
    },

    /**
     * @description: 利用递归找出停用状态的数据 添加disabled字段属性
     * @param {array} formTreeData 组织树形结构数据
     */
    disabledFormTreeData(formTreeData) {
      formTreeData.forEach(res => {
        if (res.isEnable === 0) {
          res.disabled = true;
        }
        if (res.children) {
          this.disabledFormTreeData(res.children);
        }
      });
    },

    /**
     * @description: 点击表格数据某一条的编辑
     * @param {object} userTableRowData 某一条表格数据对象
     */
    handleEditUser(userTableRowData) {
      loadUserById({ id: userTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.form = Object.assign({}, this.form, res.data);
          this.form.roleIds = this.form.roles.map(item => {
            return item.id;
          });
          this.form.organizationId = this.form.organization.id;
          if (this.form.department) {
            this.form.departmentId = this.form.department.id;
          } else {
            this.form.department = undefined;
          }
          this.form.isEnable = String(this.form.isEnable);
          this.getUserDepartmentTree({ searchOrganizationId: this.form.organization });
          this.modleVisible = true;
        }
      });
    },

    /**
     * @description:数据新增编辑完成过后清空
     */
    clearFormData() {
      this.form = this.$options.data.call(this).form;
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
.user {
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  .mixTree {
    width: 330px;
    background: white;
    border-radius: 5px;
  }
  .userMain {
    width: calc(100% - 340px);
    height: 100%;
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
    .userMainSearch {
      width: 100%;
      padding: 20px;
      background: white;
      margin-bottom: 10px;
    }
    .userMainTable {
      background: white;
      display: flex;
      flex-direction: column;
      .userMainTableAdd {
        width: 100%;
        height: 64px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ececec;
        font-size: 18px;
        justify-content: space-between;
        padding: 0 20px;
        font-weight: 600;
        .buttonMargin {
          margin-right: 10px;
        }
      }
      .userMainTableContent {
        height: calc(100vh - 380px);
        padding: 10px;
        overflow: scroll;
      }
      .userMainTableContent /deep/ .ant-table-tbody .ant-table-row:nth-child(2n) {
        background: #fafafa;
      }
      .userMainTableContent::-webkit-scrollbar {
        display: none;
      }
    }
    .userMainPag {
      width: 100%;
      height: 47px;
      background: white;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 10px 0 0;
    }
  }
}
</style>
