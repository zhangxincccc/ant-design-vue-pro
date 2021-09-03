<template>
  <page-header-wrapper :title="false">
    <div class="user">
      <div class="userList">
        <department-list
          @getDepartnebtData="getDepartnebtData"
          @getDepartentTreeData="getDepartentTreeData"
        ></department-list>
      </div>
      <div class="userMain">
        <div class="userMainSearch">
          <div class="table-page-search-wrapper">
            <a-form layout="inline">
              <a-row :gutter="48">
                <a-col :md="8" :sm="24">
                  <a-form-item label="用户名">
                    <a-input v-model="userTableParam.userName" placeholder="请输入" allowClear />
                  </a-form-item>
                </a-col>

                <a-col :md="8" :sm="24">
                  <a-form-item label="所属部门">
                    <a-tree-select
                      allowClear
                      :replaceFields="{
                        title: 'name',
                        value: 'id'
                      }"
                      v-model="userTableParam.userDepartment"
                      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                      :tree-data="formTreeData"
                      placeholder="请选择所属部门"
                      tree-default-expand-all
                    >
                    </a-tree-select>
                  </a-form-item>
                </a-col>
                <template v-if="advanced">
                  <a-col :md="8" :sm="24">
                    <a-form-item label="角色">
                      <a-select
                        allowClear
                        v-model="userRole"
                        :maxTagCount="2"
                        mode="multiple"
                        size="default"
                        placeholder="请选择"
                        @change="handleChange"
                      >
                        <a-select-option v-for="item in userRoleArray" :key="item.id">
                          {{ item.name }}
                        </a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :md="8" :sm="24">
                    <a-form-item label="状态">
                      <a-select v-model="userTableParam.userStatus" placeholder="请选择" allowClear>
                        <a-select-option value="1">启用</a-select-option>
                        <a-select-option value="2">停用</a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :md="8" :sm="24">
                    <a-form-item label="登录名">
                      <a-input v-model="userTableParam.userLoginName" placeholder="请输入" allowClear />
                    </a-form-item>
                  </a-col>
                </template>
                <a-col :md="8" :sm="24">
                  <span>
                    <a-button style="margin-left: 30px" @click="() => (this.userTableParam = {})">重置</a-button>
                    <a-button style="margin-left: 8px" type="primary" @click="handleSearchTable()">查询</a-button>
                    <a @click="toggleAdvanced" style="margin-left: 8px">
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
            <div>账号列表</div>
            <div>
              <a-button type="primary" @click="addAccount">
                新增账号
              </a-button>
            </div>
          </div>
          <div class="userMainTableContent">
            <a-spin tip="加载中..." class="position" v-if="userLoading"> </a-spin>
            <a-table
              :columns="columns"
              :data-source="tableData"
              :pagination="false"
              size="middle"
              :rowKey="
                (record, index) => {
                  return index;
                }
              "
              bordered
            >
              <template slot="roles" slot-scope="roles">
                <span v-for="item in roles" :key="item.id"> {{ item.name }} <span style="padding:0 5px;"></span> </span>
              </template>
              <template slot="action" slot-scope="text, record">
                <a slot="action" href="javascript:;" @click="handleEndOrOpen(record)">{{
                  record.isEnable == 1 ? '停用' : '启用'
                }}</a>
                <a slot="action" href="javascript:;" @click="handleEdit(record)" style="margin-left:5px">编辑</a>
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
            :total="totalPage"
            show-size-changer
            :page-size="pageSize"
            @showSizeChange="onShowSizeChange"
          >
          </a-pagination>
        </div>
      </div>
      <a-modal
        v-model="formUserVisible"
        :title="addOrEdit == 1 ? '新增账号' : '编辑账号'"
        @cancel="handleOk"
        :confirm-loading="formButtonDisableFlag"
        @ok="onSubmit"
      >
        <a-form-model ref="userRuleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item ref="name" label="用户名" prop="name">
            <a-input v-model="form.name" placeholder="请输入用户名" />
          </a-form-model-item>
          <a-form-model-item ref="loginName" label="登录名" prop="loginName">
            <a-input v-model="form.loginName" placeholder="请输入登录名" />
          </a-form-model-item>
          <a-form-model-item ref="email" label="邮箱" prop="email">
            <a-input v-model="form.email" placeholder="请输入邮箱" @blur="sendEmail" />
          </a-form-model-item>
          <a-form-model-item label="角色" prop="role">
            <a-select
              v-model="form.role"
              mode="multiple"
              size="default"
              placeholder="请选择角色"
              @change="handleChange"
            >
              <a-select-option v-for="item in userRoleArray" :key="item.id">
                {{ item.name }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="状态" prop="status">
            <a-radio-group v-model="form.status" button-style="solid">
              <a-radio-button value="1">
                启用
              </a-radio-button>
              <a-radio-button value="2">
                停用
              </a-radio-button>
            </a-radio-group>
          </a-form-model-item>

          <a-form-model-item label="所属部门" prop="department">
            <a-tree-select
              :replaceFields="{
                title: 'name',
                value: 'id'
              }"
              v-model="form.department"
              style="width: 100%"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :tree-data="formTreeData"
              placeholder="请选择所属部门"
              tree-default-expand-all
            >
            </a-tree-select>
          </a-form-model-item>
        </a-form-model>
      </a-modal>
    </div>
  </page-header-wrapper>
</template>

<script>
import * as api from '@/api/api';
import moment from 'moment';
import departmentList from '../../components/departmentList/index';
const columns = [
  {
    title: '序号',
    dataIndex: 'number'
  },
  {
    title: '用户名',
    dataIndex: 'name'
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
    title: '所属部门',
    dataIndex: 'department.name'
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
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      userLoading: false, // loading
      userTableParam: {}, // 表格搜索绑定
      advanced: false, // 高级搜索 展开/关闭
      addOrEdit: 1, // 判断新增或编辑
      formUserVisible: false, // 控制表单弹框
      userRole: [], // 角色绑定
      userRoleArray: [], // 角色下拉数组
      formRoleArray: [], // 表单角色下拉数组
      tableData, // 表格数据
      columns, // 表格头部
      tableRowId: undefined, // 表格单条数据的ID
      pageSizeOptions: this.$store.state.user.options, // 分页下拉
      currentPage: 1, // 默认分页当前页
      pageSize: this.$store.state.user.page, // 一页展示多少条数据
      totalPage: 0, // 表格数据总数
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        // 表单数据
        loginName: undefined,
        name: undefined, // 名字
        email: '', // 邮箱
        role: [], // 角色
        status: '1', // 编辑状态下的状态选择
        department: undefined // 所属部门
      },
      rules: {
        // 规则验证
        loginName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        role: [{ required: true, message: '请选择角色', trigger: 'change' }],
        department: [{ required: true, message: '请选择所属部门', trigger: 'change' }]
      },
      formTreeData: [] // 下拉选择树结构数据
    };
  },
  components: {
    departmentList
  },
  watch: {
    // 监听页码
    currentPage(val) {
      this.userLoading = true;
      this.currentPage = val;
      this.getUserTableData();
    },
    // 解决删除分页最后一条没数据的BUG
    totalPage() {
      if (this.totalPage === (this.currentPage - 1) * this.pageSize && this.totalPage !== 0) {
        this.currentPage -= 1;
        this.getUserTableData();
      }
    }
  },
  created() {
    this.getUserTableData(); // 获取表格数据
    this.getUserRoleData(); // 获取角色数据列表
  },
  methods: {
    // 获取子组件部门列表数据
    getDepartentTreeData(val) {
      this.formTreeData = val;
    },
    // 获取子组件部门列表选中数据
    getDepartnebtData(val) {
      this.pageNumber = 1;
      this.pageSize = 10;
      this.userLoading = true;
      this.getUserTableData(val[0]);
    },
    // 获取表格数据
    getUserTableData(val) {
      const obj = {
        pageNumber: Number(this.currentPage) - 1,
        pageSize: this.pageSize,
        searchName: this.userTableParam.userName,
        searchUsername: this.userTableParam.userLoginName,
        searchDepartmentId: this.userTableParam.userDepartment || val,
        searchIsEnable: this.userTableParam.userStatus
      };
      api.listUsers(obj).then(res => {
        if (res.code === 200 && res.data.content) {
          this.tableData = res.data.content;
          this.tableData.forEach(res => {
            res.createTime = moment(res.createTime).format('YYYY-MM-DD HH:mm');
          });
          this.totalPage = res.data.totalElements;
          this.userLoading = false;
        } else {
          this.totalPage = res.data.totalElements;
          this.tableData = [];
          this.userLoading = false;
        }
      });
    },
    // 获取角色数据列表
    getUserRoleData() {
      api.listRoles().then(res => {
        if (res.code === 200) {
          this.userRoleArray = res.data.content;
        }
      });
    },
    // 控制搜索条件的展示隐藏
    toggleAdvanced() {
      this.advanced = !this.advanced;
    },
    // 选中的角色ID
    handleChange(value) {
      this.userRole = value;
    },
    // 点击表格搜索条件的查询
    handleSearchTable() {
      this.pageNumber = 1;
      this.pageSize = 10;
      this.userLoading = true;
      this.getUserTableData();
    },
    // 保存弹框数据
    onSubmit() {
      this.$refs.userRuleForm.validate(valid => {
        if (valid) {
          this.formButtonDisableFlag = true;
          const rolesArray = [];
          // 构建后端需要的参数形式[{id:1}]
          this.form.role.forEach(res => {
            const obj = {
              id: res
            };
            rolesArray.push(obj);
          });
          const obj = {
            username: this.form.loginName,
            name: this.form.name,
            email: this.form.email === '' ? undefined : this.form.email,
            department: {
              id: this.form.department
            },
            id: this.tableRowId === undefined ? undefined : this.tableRowId, // 编辑有ID新增无ID
            roles: rolesArray,
            isEnable: this.form.status
          };
          // 新增
          if (this.addOrEdit === 1) {
            api
              .createUser({ body: obj })
              .then(res => {
                if (res.code === 201) {
                  this.updata(res);
                }
              })
              .catch(() => {
                this.formButtonDisableFlag = false;
              });
          } else {
            // 编辑
            api
              .updateUser({ body: obj, id: this.tableRowId })
              .then(res => {
                if (res.code === 200) {
                  this.updata(res);
                }
              })
              .catch(() => {
                this.formButtonDisableFlag = false;
              });
          }
        } else {
          return false;
        }
      });
    },
    // 数据更新后共同的代码
    updata(res) {
      this.$message.success(res.message);
      this.formUserVisible = false;
      this.formButtonDisableFlag = false;
      this.clearFormData();
      this.userLoading = true;
      this.getUserTableData();
    },
    // 点击删除
    handleDelete(val) {
      api.deleteUserById({ id: val.id }).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.formUserVisible = false;
          this.userLoading = true;
          this.getUserTableData();
        }
      });
    },
    // 获取分页下拉第几页展示几个
    onShowSizeChange(currentPage, pageSize) {
      this.userLoading = true;
      this.pageSize = pageSize;
      this.currentPage = currentPage;
      this.getUserTableData();
    },
    // 新增账号
    addAccount() {
      this.addOrEdit = 1;
      this.formUserVisible = true;
    },
    // 点击编辑
    handleEdit(val) {
      this.form.role = [];
      val.roles.forEach(res => {
        this.form.role.push(res.id);
      });
      this.tableRowId = val.id;
      this.form.loginName = val.username;
      this.form.name = val.name;
      this.form.email = val.email ? val.email : '';
      this.form.status = String(val.isEnable);
      this.form.department = val.department.id;
      this.addOrEdit = 2;
      this.formUserVisible = true;
    },
    // 更改停用启用状态
    handleEndOrOpen(val) {},
    // 表单邮箱验证
    sendEmail() {
      var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.form.email !== '' && !regEmail.test(this.form.email)) {
        this.$message.error('邮箱格式不正确');
        this.form.email = '';
      }
    },
    // 关闭弹框
    handleOk(e) {
      this.formUserVisible = false;
      this.clearFormData();
    },
    // 数据新增编辑完成过后清空
    clearFormData() {
      this.$refs.userRuleForm.resetFields();
      this.form.name = undefined;
      this.form.email = undefined;
      this.form.loginName = undefined;
      this.tableRowId = undefined;
      this.form.role = [];
      this.form.status = '1';
      this.form.department = undefined;
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
  .userList {
    width: 20%;
    background: white;
    border-radius: 5px;
  }
  .userMain {
    width: 79%;
    height: 100%;
    .userMainSearch {
      width: 100%;
      padding: 10px;
      background: white;
      margin-bottom: 10px;
      .userMainSearchInput {
        flex: 1;
        height: 64px;
        display: flex;
        align-items: center;
        padding: 0 0 0 60px;
      }
      .userMainSearchSelect {
        flex: 1;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0px;
      }
      .userMainSearchButton {
        flex: 1;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 30px 0 0;
      }
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
      }
      .userMainTableContent {
        height: calc(100vh - 380px);
        padding: 10px;
        overflow: scroll;
        position: relative;
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
