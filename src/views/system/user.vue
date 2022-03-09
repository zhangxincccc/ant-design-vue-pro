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
                        <a-select-option :title="item.name" v-for="item in userRoleArray" :key="item.id">
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
                <a-col :md="8" :sm="24" style="display: flex; justify-content: flex-end">
                  <span>
                    <a-button type="primary" @click="() => this.searchUserTableData()">查询</a-button>
                    <a-button style="margin-left: 8px" @click="handleReset">重置</a-button>
                    <a @click="() => (this.advanced = !this.advanced)" style="margin-left: 8px">
                      {{ advanced ? '收起' : '展开' }}
                      <a-icon :type="advanced ? 'up' : 'down'" />
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
              <a-popconfirm
                :disabled="batchSelectIdArray.length === 0"
                title="此操作将批量启用数据，是否继续?"
                ok-text="是"
                cancel-text="否"
                @confirm="handleBatchEnable"
              >
                <a-button type="primary" class="buttonMargin" :disabled="batchSelectIdArray.length === 0">
                  批量启用
                </a-button>
              </a-popconfirm>
              <a-popconfirm
                :disabled="batchSelectIdArray.length === 0"
                title="此操作将批量停用数据，是否继续?"
                ok-text="是"
                cancel-text="否"
                @confirm="handleBatchDisable"
              >
                <a-button type="primary" class="buttonMargin" :disabled="batchSelectIdArray.length === 0">
                  批量停用
                </a-button>
              </a-popconfirm>

              <a-popconfirm
                :disabled="batchSelectIdArray.length === 0"
                title="此操作将批量删除数据，是否继续?"
                ok-text="是"
                cancel-text="否"
                @confirm="handleBatchDelete"
              >
                <a-button type="primary" class="buttonMargin" :disabled="batchSelectIdArray.length === 0">
                  批量删除
                </a-button>
              </a-popconfirm>

              <a-button type="primary" @click="handleAddUser()"> 新增用户 </a-button>
            </div>
          </div>
          <div class="userMainTableContent">
            <a-table
              :row-selection="{ selectedRowKeys: batchSelectIdArray, onChange: handleUserSelectChange }"
              :columns="columns"
              :data-source="tableData"
              :pagination="false"
              :rowKey="
                (record, index) => {
                  return record.id;
                }
              "
              :rowClassName="rowClassName"
              bordered
            >
              <template slot="roles" slot-scope="roles">
                <span v-for="(item, index) in roles" :key="item.id">
                  {{ item.name }} <span v-if="index != roles.length - 1">/</span></span
                >
              </template>
              <template slot="action" slot-scope="text, record">
                <a-popconfirm
                  slot="action"
                  title="此操作将停用该条数据，是否继续?"
                  ok-text="是"
                  cancel-text="否"
                  @confirm="handleIsEnable(record)"
                >
                  <a
                    href="javascript:;"
                    v-if="record.isEnable == 1"
                    :class="{ deactivate: record.isEnable == 1 }"
                  >停用</a
                  >
                </a-popconfirm>
                <a
                  slot="action"
                  href="javascript:;"
                  @click="handleIsEnable(record)"
                  v-if="record.isEnable == 0"
                  :class="{ enable: record.isEnable == 0 }"
                >启用</a
                >
                <a-popconfirm
                  slot="action"
                  title="此操作将重置密码，是否继续?"
                  ok-text="是"
                  cancel-text="否"
                  @confirm="resetPassword(record)"
                >
                  <a href="javascript:;" style="margin-left: 5px">重置密码</a>
                </a-popconfirm>
                <a slot="action" href="javascript:;" @click="handleEditUser(record)" style="margin-left: 5px">编辑</a>
                <a-popconfirm
                  slot="action"
                  title="此操作将删除该条数据，是否继续?"
                  ok-text="是"
                  cancel-text="否"
                  @confirm="handleDelete(record)"
                >
                  <a href="javascript:;" style="margin-left: 5px">删除</a>
                </a-popconfirm>
              </template>
            </a-table>
          </div>
        </div>
        <div class="userMainPag">
          <a-pagination
            v-model="currentPage"
            :page-size-options="pageSizeOptions"
            :total="userTableTotal"
            :show-total="(total) => `共 ${userTableTotal} 条`"
            show-size-changer
            :page-size="pageObject.pageSize"
            @change="handlePageNumberChange"
            @showSizeChange="onPageSizeChange"
          >
          </a-pagination>
          跳至 <a-input v-model="jumper" style="width:50px;margin-left:10px;margin-right:10px" @blur="blurJumperInput()"/>页
        </div>
      </div>
      <a-modal
        width="50%"
        v-model="modleVisible"
        :title="form.id ? '编辑用户' : '新增用户'"
        @cancel="() => ((this.modleVisible = false), this.clearFormData())"
        :confirm-loading="formButtonDisableFlag"
        @ok="onSubmit"
      >
        <div id="modalContent">
          <div class="formAspin" v-if="editWaitFormLoading">
            <a-spin />
          </div>
          <div class="modalContentForm">
            <div class="modalContentFormTitle">基础信息</div>
            <div class="modalContentFormContent">
              <a-form-model
                ref="userRuleForm"
                :model="form"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-form-model-item ref="name" label="用户名" prop="name">
                  <a-input v-model="form.name" placeholder="请输入用户名" />
                </a-form-model-item>
                <a-form-model-item ref="username" label="登录名" prop="username">
                  <a-input v-model="form.username" placeholder="请输入登录名" />
                </a-form-model-item>
                <a-form-model-item ref="email" label="邮箱" prop="email">
                  <a-input v-model="form.email" placeholder="请输入邮箱" />
                </a-form-model-item>
                <a-form-model-item label="所属组织" prop="organizationId">
                  <a-tree-select
                    :replaceFields="{
                      title: 'name',
                      value: 'id',
                    }"
                    v-model="form.organizationId"
                    style="width: 100%"
                    @change="
                      (organizationId) => (
                        this.getUserDepartmentTree({ searchOrganizationId: organizationId }),
                        (this.form.departmentId = undefined)
                      )
                    "
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
                      value: 'id',
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
                    <a-radio-button value="1"> 启用 </a-radio-button>
                    <a-radio-button value="0"> 停用 </a-radio-button>
                  </a-radio-group>
                </a-form-model-item>
              </a-form-model>
            </div>
          </div>
          <div class="modalContentTree">
            <div class="modalContentTreeTitle">
              <div class="title">角色分配</div>
              <div class="icon">
                <span>
                  <a-popover placement="bottomRight">
                    <template slot="content">
                      <p style="cursor: pointer" @click="() => (this.checkedKeys = this.roleTreeAllids)">选择全部</p>
                      <p style="cursor: pointer" @click="() => (this.checkedKeys = [])">取消选择</p>
                      <p style="cursor: pointer" @click="() => (this.expandedKeys = this.roleTreeAllids)">展开全部</p>
                      <span style="cursor: pointer" @click="() => (this.expandedKeys = [])">折叠全部</span>
                    </template>
                    <a-icon type="menu-unfold" /> </a-popover
                  ></span>
              </div>
            </div>
            <div class="modalContentTreeContent">
              <a-tree
                :replaceFields="{
                  title: 'name',
                  key: 'id',
                  children:'roles'
                }"
                v-model="checkedKeys"
                checkable
                @check="getApplicationID"
                :expanded-keys.sync="expandedKeys"
                :tree-data="roleTreeArray"
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
  listUsers,
  deleteUserById,
  organizationsTree,
  createUser,
  updateUser,
  disableUserById,
  enableUserById,
  batchDisableUserByIds,
  batchEnableUserByIds,
  batchDeleteUserByIds,
  departmentsTree,
  listAllRoles,
  loadUserById,
  resetUserPasswordById,
  listApplications
} from '@/api/api';
import moment from 'moment';
import OrganizationMixTree from './components/tree/OrganizationMixTree';
// 表单正则验证统一写在这里
import { validateEmail } from '../../utils/validator';
const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    width: '10%',
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: '15%',
    ellipsis: true
  },
  {
    title: '角色',
    dataIndex: 'roles',
    width: '15%',
    scopedSlots: { customRender: 'roles' }
  },
  {
    title: '登录名',
    dataIndex: 'username',
    width: '10%',
    ellipsis: true
  },
  {
    title: '所属组织',
    dataIndex: 'organization.name',
    width: '15%',
    ellipsis: true
  },
  {
    title: '所属部门',
    dataIndex: 'department.name',
    width: '15%',
    ellipsis: true
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
      jumper: '',
      halfCheckedKeyArray: [], // 获取半选的ID值
      editWaitFormLoading: false, // 加载编辑回显数据等待Loading
      isBatchButtonDisabled: true, // 判断批量按钮的禁用状态
      selectDepartmentFlagArray: [], // 接受部门列表子组件选中的ID数组 []为未选中状态 有值为选中状态
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      userLoading: false, // 页面加载数据loading
      searchParameters: {}, // 表格搜索条件Input绑定
      advanced: false, // 控制搜索条件的展开折叠
      modleVisible: false, // 控制表单弹框
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
        applications: [],
        username: undefined,
        name: undefined, // 名字
        email: undefined, // 邮箱
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
        organizationId: [{ required: true, message: '请选择组织', trigger: 'change' }]
      },
      formDepartmentTreeData: [], // 部门下拉选择树结构数据
      formOrganizationTreeData: [], // 组织下拉选择树结构数据
      batchSelectIdArray: [], // 批量选中的数据ID
      selectMixTreeOrganizationId: undefined, // 点击左侧混合树获取到部门上级组织ID
      expandedKeys: [], // 控制树形下拉 展开收起全选取消全选 功能
      checkedKeys: [], // 树形下拉选中的数据
      roleTreeAllids: [], // 获取所有的接口ID
      roleTreeArray: [] // 角色树
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
        this.pageObject.pageNumber = Number(this.currentPage) - 1;
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
    this.getUserTableData(this.pageObject, this.searchParameters); // 获取表格数据
    this.getRoles(); // 获取角色数据列表
    this.getFormOrganizationsTree(); // 获取表单组织树结构数据
    this.getListAllApplications(); // 获取应用角色树
  },
  methods: {
    /**
     * @description: 获取应用角色树
     */
    getListAllApplications() {
      listApplications().then((res) => {
        if (res.code === 200) {
          this.roleTreeArray = res.data.content;
          this.roleTreeArray.forEach((item) => {
            // 一级为应用ID 设置application区分角色ID
            item.id = 'application' + item.id;
            this.roleTreeAllids.push(item.id);
            if (item.roles) {
              item.roles.forEach(value => {
                value.id = 'role' + value.id;
              });
            }
          });
        }
      });
    },
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
      if (organizationId.length > 1) {
        this.searchParameters.searchOrganizationIds = organizationId;
        this.searchParameters.searchOrganizationId = undefined;
      } else {
        this.searchParameters.searchOrganizationIds = undefined;
        this.searchParameters.searchOrganizationId = organizationId[0];
      }
      this.searchParameters.searchDepartmentIds = undefined;
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
      if (organizationAnddepartmentId.departmentId.length > 1) {
        this.searchParameters.searchDepartmentIds = organizationAnddepartmentId.departmentId;
        this.searchParameters.searchDepartmentId = undefined;
      } else {
        this.searchParameters.searchDepartmentIds = undefined;
        this.searchParameters.searchDepartmentId = organizationAnddepartmentId.departmentId[0];
      }
      this.searchParameters.searchOrganizationIds = undefined;
      this.searchParameters.searchOrganizationId = undefined;
      this.isOrganization = departmentType;
      this.searchUserTableData();
    },
    /**
     * @description: 取消选中混合树
     */
    cancelSelectMixTreeData() {
      this.searchParameters.searchOrganizationIds = undefined;
      this.searchParameters.searchDepartmentIds = undefined;
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
      this.userLoading = true;
      listUsers(Object.assign({}, page, params))
        .then((resp) => {
          if (resp.code === 200 && resp.data.content) {
            this.tableData = resp.data.content;
            this.tableData.forEach((item) => {
              item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm');
            });
            this.userTableTotal = resp.data.totalElements;
          } else {
            this.userTableTotal = resp.data.totalElements;
            this.tableData = [];
          }
        })
        .finally(() => {
          this.userLoading = false;
        });
    },

    /**
     * @description: 获取角色数据列表
     */
    getRoles() {
      listAllRoles().then((res) => {
        if (res.code === 200) {
          this.userRoleArray = res.data;
          this.userRoleArray = this.userRoleArray.filter((item) => {
            if (item.isEnable === 1) {
              return item;
            }
          });
        }
      });
    },

    /**
     * @description: 表格查询公共的代码
     */

    searchUserTableData() {
      this.currentPage = 1;
      this.pageObject.pageNumber = 0;
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
     * @param {object} searchParameters 组织ID
     */
    getUserDepartmentTree(searchParameters) {
      departmentsTree(searchParameters).then((res) => {
        if (res.code === 200) {
          this.formDepartmentTreeData = res.data;
        }
      });
    },

    /**
     * @description:新增编辑弹框 （提交数据）
     */
    onSubmit() {
      this.$refs.userRuleForm.validate((valid) => {
        if (valid) {
          this.formButtonDisableFlag = true;
          const roleArray = [];
          const applicationArray = [];
          // 筛选出 角色 和 应用的ID数据
            this.checkedKeys.forEach(value => {
              if (this.roleTreeAllids.indexOf(value) === -1) {
                roleArray.push(value);
              } else {
                applicationArray.push(value);
              }
            });
            // 考虑到会有半选和全选的情况 所以合并数组做去重处理
            let contentArray = this.halfCheckedKeyArray.concat(applicationArray);
                contentArray = [...new Set(contentArray)];
          this.form.roles = roleArray.map((item) => {
            return {
              id: item.slice(4)
            };
          });
           this.form.applications = contentArray.map((item) => {
            return {
              id: item.slice(11)
            };
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
        .then((res) => {
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
        .then((res) => {
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
      this.getUserTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 删除表格数据的某一条
     * @param {object} userTableRowData 某一条表格数据对象
     */
    handleDelete(userTableRowData) {
      deleteUserById({ id: userTableRowData.id }).then((res) => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.modleVisible = false;
          this.getUserTableData(this.pageObject, this.searchParameters);
        }
      });
    },

    /**
     * @description: 停用/启用表格数据的某一条
     * @param {object} userTableRowData 某一条表格数据对象
     */
    handleIsEnable(userTableRowData) {
      if (userTableRowData.isEnable === 1) {
        disableUserById({ id: userTableRowData.id }).then((res) => {
          if (res.code === 200) {
            this.$message.success('停用成功');
            this.modleVisible = false;
            this.getUserTableData(this.pageObject, this.searchParameters);
          }
        });
      } else {
        enableUserById({ id: userTableRowData.id }).then((res) => {
          if (res.code === 200) {
            this.$message.success('启用成功');
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
      batchDisableUserByIds({ body: this.batchSelectIdArray }).then((res) => {
        if (res.code === 200) {
          this.afterBatchActions(res, 1);
        }
      });
    },
    /**
     * @description: 点击批量启用
     */
    handleBatchEnable() {
      batchEnableUserByIds({ body: this.batchSelectIdArray }).then((res) => {
        if (res.code === 200) {
          this.afterBatchActions(res, 2);
        }
      });
    },
    /**
     * @description: 点击批量删除
     */
    handleBatchDelete() {
      batchDeleteUserByIds({ body: this.batchSelectIdArray }).then((res) => {
        if (res.code === 200) {
          this.afterBatchActions(res, 3);
        }
      });
    },
    /**
     * @description: 批量停用 启用 删除 公共返回数据
     * @param {object} batchSuccessData 接口返回数据
     * @param {number} type 判断点击的类型
     */

    afterBatchActions(batchSuccessData, type) {
      if (type === 1) {
        this.$message.success('停用成功');
      } else if (type === 2) {
        this.$message.success('启用成功');
      } else {
        this.$message.success('删除成功');
      }
      this.batchSelectIdArray = [];
      this.getUserTableData(this.pageObject, this.searchParameters);
    },
    /**
     * @description: 获取分页页数改变后的值
     * @param {string} pageNumber UI框架自带
     */
    handlePageNumberChange(pageNumber) {
      this.jumper = '';
      this.currentPage = pageNumber;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getUserTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 分页跳转输入框改变
     */
    blurJumperInput() {
      if (this.jumper !== '') {
        this.currentPage = Number(this.jumper);
        this.pageObject.pageNumber = Number(this.currentPage) - 1;
        this.getApplicationTableData(this.pageObject, this.searchParameters);
      }
    },

    /**
     * @description: 获取分页下拉第几页展示几个
     * @param {string} currentPage UI框架自带
     * @param {string} pageSize UI框架自带
     */
    onPageSizeChange(currentPage, pageSize) {
      this.currentPage = currentPage;
      this.pageObject.pageSize = pageSize;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getUserTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 获取表单树结构数据
     */
    getFormOrganizationsTree() {
      organizationsTree().then((res) => {
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
        this.form.organizationId = this.searchParameters.searchOrganizationIds
          ? this.searchParameters.searchOrganizationIds[0]
          : this.searchParameters.searchOrganizationId
          ? this.searchParameters.searchOrganizationId
          : undefined;
        this.getUserDepartmentTree({ searchOrganizationId: this.form.organizationId });
      } else if (this.isOrganization === false) {
        this.form.organizationId = this.selectMixTreeOrganizationId;
        this.form.departmentId = this.searchParameters.searchDepartmentIds
          ? this.searchParameters.searchDepartmentIds[0]
          : this.searchParameters.searchDepartmentId
          ? this.searchParameters.searchDepartmentId
          : undefined;
        this.getUserDepartmentTree({ searchOrganizationId: this.form.organizationId });
      }
    },

    /**
     * @description: 利用递归找出停用状态的数据 添加disabled字段属性
     * @param {array} formTreeData 组织树形结构数据
     */
    disabledFormTreeData(formTreeData) {
      formTreeData.forEach((item) => {
        item.disabled = item.isEnable === 0;
        if (item.children) {
          this.disabledFormTreeData(item.children);
        }
      });
    },

    /**
     * @description: 点击表格数据某一条的编辑
     * @param {object} userTableRowData 某一条表格数据对象
     */
    handleEditUser(userTableRowData) {
      loadUserById({ id: userTableRowData.id }).then((res) => {
        if (res.code === 200) {
          this.form = Object.assign({}, this.form, res.data);
          this.form.organizationId = this.form.organization.id;
          if (this.form.department) {
            this.form.departmentId = this.form.department.id;
          } else {
            this.form.department = undefined;
          }
          this.checkedKeys = res.data.roles.map(item => {
              return 'role' + item.id;
          });
          this.form.isEnable = String(this.form.isEnable);
          this.getUserDepartmentTree({ searchOrganizationId: this.form.organization });
          this.modleVisible = true;
        }
      });
    },
    /**
     * @description: 获取treeSelect半选的值
     * @param {object} event
     */
    getApplicationID(checkedKeys, event) {
      this.halfCheckedKeyArray = event.halfCheckedKeys;
    },

    /**
     * @description:数据新增编辑完成过后清空
     */
    clearFormData() {
      this.$refs.userRuleForm.resetFields();
      this.form = this.$options.data.call(this).form;
      this.checkedKeys = [];
    },
    /**
     * @description: 重置搜索条件
     */
    handleReset() {
      const copySearchParameters = JSON.parse(JSON.stringify(this.searchParameters));
      this.searchParameters = {};
      this.searchParameters.searchDepartmentIds = copySearchParameters.searchDepartmentIds;
      this.searchParameters.searchDepartmentId = copySearchParameters.searchDepartmentId;
      this.searchParameters.searchOrganizationIds = copySearchParameters.searchOrganizationIds;
      this.searchParameters.searchOrganizationId = copySearchParameters.searchOrganizationId;
      this.searchUserTableData();
    },
    /**
     * @description: 根据isEnable判断表格背景颜色
     * @param {*} record 当前行数据
     */
    rowClassName(record) {
      let className = 'enableBackground';
      if (record.isEnable === 1) className = 'deactivateBakcground';
      return className;
    },
    /**
     * @description: 重置密码
     * @param {object} userTableRowData 当前表格数据行
     */
    resetPassword(userTableRowData) {
      resetUserPasswordById({ id: userTableRowData.id }).then((res) => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.getUserTableData(this.pageObject, this.searchParameters);
        }
      });
    }
  }
};
</script>
<style>
.deactivateBakcground {
  background: white !important;
}
.enableBackground {
  background: #fafafa !important;
}
</style>
<style lang="less" scoped>
.table-page-search-wrapper /deep/ .ant-form-inline .ant-form-item > .ant-form-item-label {
  line-height: 32px;
  padding-right: 8px;
  width: 77px;
}
.deactivate {
  color: red;
}
.enable {
  color: green;
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
  .userMain /deep/.table-page-search-wrapper .ant-form-inline .ant-form-item .ant-form-item-control-wrapper {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
}
#modalContent {
  width: 100%;
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
      height: 420px;
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
