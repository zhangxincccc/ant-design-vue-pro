<template>
  <page-header-wrapper :title="false">
    <div class="department">
      <div class="departmentList">
        <organization-mix-tree
          ref="mixTree"
          @selectOrganization="selectMixTreeOrganizationData"
          @selectDepartment="selectMixTreeDepartmentData"
          @cancelSelect="cancelSelectMixTreeData"
        ></organization-mix-tree>
      </div>
      <div class="departmentMain">
        <a-spin tip="加载中..." class="position" v-if="departmentLoading"> </a-spin>
        <div class="departmentMainSearch">
          <div class="table-page-search-wrapper">
            <a-form layout="inline">
              <a-row :gutter="48">
                <a-col :md="8" :sm="24">
                  <a-form-item label="部门名称">
                    <a-input v-model="searchParameters.searchName" placeholder="请输入" allowClear />
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item label="部门编码">
                    <a-input allowClear v-model="searchParameters.searchCode" placeholder="请输入" />
                  </a-form-item>
                </a-col>
                <template v-if="advanced">
                  <a-col :md="8" :sm="24">
                    <a-form-item label="创建时间">
                      <a-range-picker @change="onChangeData" v-model="searchParameters.departmentDate" />
                    </a-form-item>
                  </a-col>
                  <a-col :md="8" :sm="24">
                    <a-form-model-item label="所属组织">
                      <a-tree-select
                        allowClear
                        :replaceFields="{
                          title: 'name',
                          value: 'id'
                        }"
                        v-model="searchParameters.searchOrganizationId"
                        style="width: 100%"
                        :dropdown-style="{ maxHeight: '400px',maxWidth: '300px', overflow: 'auto' }"
                        :tree-data="organizationTreeData"
                        placeholder="请选择所属组织"
                        tree-default-expand-all
                      >
                      </a-tree-select>
                    </a-form-model-item>
                  </a-col>
                  <a-col :md="8" :sm="24">
                    <a-form-item label="状态">
                      <a-select allowClear v-model="searchParameters.searchIsEnable" placeholder="请选择">
                        <a-select-option value="0">停用</a-select-option>
                        <a-select-option value="1">启用</a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :md="8" :sm="24"> </a-col>
                </template>
                <a-col :md="8" :sm="24" style="display:flex;justify-content: flex-end">
                  <span>
                    <a-button type="primary" @click="() => this.searchDepartmentTableData()">查询</a-button>
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
        <div class="departmentMainTable">
          <div class="departmentMainTableAdd">
            <div>部门列表</div>
            <div>
              <div>
                <a-button type="primary" @click="handleAddDepartment">
                  新增部门
                </a-button>
              </div>
            </div>
          </div>
          <div class="departmentMainTableContent">
            <a-table
              :columns="columns"
              :data-source="departmentTableData"
              :pagination="false"
              size="middle"
              :rowKey="
                (record, index) => {
                  return record.id;
                }
              "
              :rowClassName="rowClassName"
              bordered
            >
              <template slot="action" slot-scope="text, record">
                <a-popconfirm
                  slot="action"
                  title="此操作将停用该条数据，是否继续?"
                  ok-text="是"
                  cancel-text="否"
                  @confirm="handleIsEnable(record)"
                >
                  <a href="javascript:;" v-if="record.isEnable == 1" :class="{ deactivate: record.isEnable == 1 }">停用</a>
                </a-popconfirm>
                <a
                  slot="action"
                  href="javascript:;"
                  @click="handleIsEnable(record)"
                  v-if="record.isEnable == 0"
                  :class="{ enable: record.isEnable == 0 }"
                  >启用</a
                >
                <a slot="action" href="javascript:;" style="margin-left:5px" @click="handleEdit(record)">编辑</a>
                <a-popconfirm
                  slot="action"
                  title="此操作将删除该条数据，是否继续?"
                  ok-text="是"
                  cancel-text="否"
                  @confirm="handleDel(record)"
                >
                  <a href="javascript:;" style="margin-left:5px">删除</a>
                </a-popconfirm>
              </template>
            </a-table>
          </div>
        </div>
        <div class="departmentMainPag">
          <a-pagination
            v-model="currentPage"
            :page-size-options="pageSizeOptions"
            :total="departmentTableTotal"
            :show-total="total => `共 ${departmentTableTotal} 条`"
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
        v-model="modleVisible"
        :title="form.id ? '编辑部门' : '新增部门'"
        @cancel="() => ((this.modleVisible = false), this.clearFormData())"
        :confirm-loading="formButtonDisableFlag"
        @ok="onSubmit"
      >
        <a-form-model
          ref="departmentRuleForm"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item ref="name" label="部门名称" prop="name">
            <a-input v-model.trim="form.name" placeholder="请输入部门名称" />
          </a-form-model-item>
          <a-form-model-item ref="code" label="部门编码" prop="code">
            <a-input v-model.trim="form.code" placeholder="请输入部门编码" />
          </a-form-model-item>
          <a-form-model-item label="所属组织" prop="organizationId">
            <a-tree-select
              :replaceFields="{
                title: 'name',
                value: 'id'
              }"
              v-model="form.organizationId"
              @change="organizationId => (this.getDepartmentTree({ searchOrganizationId: organizationId }),form.parentId = undefined)"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :tree-data="organizationTreeData"
              placeholder="请选择所属组织"
              tree-default-expand-all
            >
            </a-tree-select>
          </a-form-model-item>
          <a-form-model-item label="上级部门" prop="parentId">
            <a-tree-select
              :replaceFields="{
                title: 'name',
                value: 'id'
              }"
              v-model="form.parentId"
              style="width: 100%"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :tree-data="departmentFormTreeData"
              placeholder="请选择上级部门"
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
          <a-form-model-item label="备注">
            <a-input v-model="form.description" type="textarea" placeholder="请输入备注" :maxLength="500"/>
          </a-form-model-item>
        </a-form-model>
      </a-modal>
    </div>
  </page-header-wrapper>
</template>
<script>
import {
  listDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartmentById,
  organizationsTree,
  departmentsTree,
  loadDepartmentById,
  enableDepartmentById,
  disableDepartmentById
} from '@/api/api';
import moment from 'moment';
import OrganizationMixTree from './components/tree/OrganizationMixTree';
const columns = [
  {
    title: '部门名称',
    dataIndex: 'name',
    width: '26%',
    ellipsis: true
  },
  {
    title: '部门编码',
    dataIndex: 'code',
    width: '11%',
    ellipsis: true
  },
  {
    title: '所属组织',
    dataIndex: 'organization.name',
    width: '11%',
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: '16%',
    ellipsis: true
  },
  {
    title: '备注',
    dataIndex: 'description',
    width: '16%',
    ellipsis: true
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' },
    width: '16%'
  }
];
export default {
  name: 'Department',
  data() {
    return {
      jumper: '',
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      departmentLoading: false, // 加载表格的loading
      modleVisible: false, // 控制弹框显示隐藏
      advanced: false, // 控制搜索条件的展开折叠
      searchParameters: {}, // 部门表格查询参数
      departmentTableData: [], // 表格数据
      columns, // 表格头部
      pageSizeOptions: this.$store.state.user.defaultPaginationOptions, // 分页下拉
      currentPage: 1, // 默认分页当前页
      pageObject: {
        pageNumber: 0,
        pageSize: this.$store.state.user.defaultPaginationPagesize // 一页展示多少条数据
      },
      departmentTableTotal: 0, // 表格数据总数
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
      form: {
        // 表单数据
        name: undefined, // 名字
        code: undefined, // 编码
        isEnable: '1', // 状态
        parentId: undefined, // 上级部门
        parent: undefined, // 传给后台接口的上级部门字段
        organizationId: undefined, // 所属组织
        organization: undefined, // 传给后台接口的所属组织字段
        description: undefined // 备注
      },
      rules: {
        // 规则验证
        name: [
          { required: true, message: '请输入部门名称', trigger: 'blur' },
          { max: 50, message: '部门名称长度不能大于50', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入部门编码', trigger: 'blur' },
          { max: 50, message: '部门编码长度不能大于50', trigger: 'blur' }
        ],
        organizationId: [{ required: true, message: '请选择所属组织', trigger: 'change' }]
      },
      selectOrganizationId: undefined, // 选中部门的组织ID
      departmentFormTreeData: [], // 部门下拉选择树结构数据
      organizationTreeData: [] // 组织下拉选择树结构数据
    };
  },
  components: {
    OrganizationMixTree
  },
  watch: {
    /**
     * @description: 解决删除分页最后一条没数据的BUG
     * 思路：先获取当前的表格数据总数this.departmentTableTotal
     * 在获取除了当前页数据外的表格总数this.getExceptCurrentPageTableTotalData
     * 如果这两个数相等 说明删除的是当前页最后一条数据 然后使当前页-1 请求数据就可以了
     */
    departmentTableTotal() {
      if (this.departmentTableTotal === this.getExceptCurrentPageTableTotalData && this.departmentTableTotal !== 0) {
        this.currentPage -= 1;
        this.pageObject.pageNumber = Number(this.currentPage) - 1;
        this.getDepartentTableData(this.pageObject, this.searchParameters);
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
    this.getDepartentTableData(this.pageObject, this.searchParameters); // 获取部门表格数据
    this.getOrganizationTree(); // 获取组织树结构数据
  },
  methods: {
    /**
     * @description: 获取组织树结构数据
     */
    getOrganizationTree() {
      organizationsTree().then(res => {
        if (res.code === 200) {
          this.organizationTreeData = res.data;
          this.disabledFormTreeData(this.organizationTreeData);
          this.departmentFormTreeData = [];
        }
      });
    },

    /**
     * @description: 利用递归找出停用状态的数据 添加disabled字段属性
     * @param {array} formTreeData 组织树形结构数据
     */
    disabledFormTreeData(formTreeData) {
      formTreeData.forEach(item => {
        item.disabled = item.isEnable === 0;
        if (item.children) {
          this.disabledFormTreeData(item.children);
        }
      });
    },

        /**
     * @description: 选中混合树组织的数据
     * @param {array} organizationId 组织ID数组
     * @param {string} organizationType 选中的类型
     */

    selectMixTreeOrganizationData(organizationId) {
      this.selectOrganizationId = organizationId[0];
      if (organizationId.length > 1) {
        this.searchParameters.searchOrganizationIds = organizationId;
        this.searchParameters.searchOrganizationId = undefined;
      } else {
        this.searchParameters.searchOrganizationIds = undefined;
        this.searchParameters.searchOrganizationId = organizationId[0];
      }
      this.searchParameters.searchParentId = undefined;
      this.searchParameters.searchParentIds = undefined;
      this.searchDepartmentTableData();
    },
        /**
     * @description: 选中混合树组织的数据
     * @param {array} departmentId 部门ID数组
     */
    selectMixTreeDepartmentData(organizationAnddepartmentId) {
      this.selectOrganizationId = organizationAnddepartmentId.organizationId;
      if (organizationAnddepartmentId.departmentId.length > 1) {
         this.searchParameters.searchParentId = undefined;
          this.searchParameters.searchParentIds = organizationAnddepartmentId.departmentId;
      } else {
        this.searchParameters.searchParentId = organizationAnddepartmentId.departmentId[0];
        this.searchParameters.searchParentIds = undefined;
      }
      this.searchParameters.searchOrganizationIds = undefined;
      this.searchParameters.searchOrganizationId = undefined;
      this.searchDepartmentTableData();
    },
    /**
     * @description: 取消选中混合树
     */
    cancelSelectMixTreeData() {
      this.searchParameters.searchOrganizationIds = undefined;
      this.searchParameters.searchParentIds = undefined;
      this.searchParameters.searchOrganizationId = undefined;
      this.searchParameters.searchParentId = undefined;
      this.selectOrganizationId = undefined;
      this.searchDepartmentTableData();
    },
    /**
     * @description:  获取部门表格数据
     */
    getDepartentTableData(page, params) {
      this.departmentLoading = true;
      listDepartments(Object.assign({}, page, params)).then(res => {
        if (res.code === 200 && res.data.content) {
          this.departmentTableData = res.data.content;
          this.departmentTableData.forEach(item => {
            item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm');
          });
          this.departmentTableTotal = res.data.totalElements;
        } else {
          this.departmentTableTotal = res.data.totalElements;
          this.departmentTableData = [];
        }
      }).finally(() => {
         this.departmentLoading = false;
      });
    },

    /**
     * @description: 新增编辑弹框 （提交数据）
     */
    onSubmit() {
      this.$refs.departmentRuleForm.validate(valid => {
        if (valid) {
          this.formButtonDisableFlag = true;
          this.form.parent = { id: this.form.parentId };
          this.form.organization = { id: this.form.organizationId };
          if (this.form.id) {
            this.departmentUpdate(this.form);
          } else {
            this.departmentAdd(this.form);
          }
        } else {
          return false;
        }
      });
    },

    /**
     * @description: 部门新增
     * @param {object} departmentAddParam 新增的对象参数
     */
    departmentAdd(departmentAddParam) {
      createDepartment({ body: departmentAddParam })
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
     * @description: 部门编辑
     * @param {object} departmentEditParam 编辑的对象参数
     */
    departmentUpdate(departmentEditParam) {
      updateDepartment({ body: departmentEditParam, id: departmentEditParam.id })
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
     * @description: 删除表格数据的某一条
     * @param {object} departmentTableRowData 某一条表格数据对象
     */
    handleDel(departmentTableRowData) {
      deleteDepartmentById({ id: departmentTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.modleVisible = false;
          this.getDepartentTableData(this.pageObject, this.searchParameters);
          this.$refs.mixTree.getTreeData(); // 刷新子组件部门列表的方法
        }
      });
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
      this.getDepartentTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 获取分页页数改变后的值
     * @param {string} pageNumber UI框架自带
     */
    handlePageNumberChange(pageNumber) {
      this.jumper = '';
      this.currentPage = pageNumber;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getDepartentTableData(this.pageObject, this.searchParameters);
    },
    /**
     * @description: 分页跳转输入框改变
     */
    blurJumperInput() {
      if (this.jumper !== '') {
        this.currentPage = Number(this.jumper);
        this.pageObject.pageNumber = Number(this.currentPage) - 1;
        this.getDepartentTableData(this.pageObject, this.searchParameters);
      }
    },

    /**
     * @description: 新增部门数据
     */
    handleAddDepartment() {
      this.form.id = undefined;
      this.modleVisible = true;
      this.form.organizationId = this.selectOrganizationId;
      this.form.parentId = this.searchParameters.searchParentIds ? this.searchParameters.searchParentIds[0] : this.searchParameters.searchParentId ? this.searchParameters.searchParentId : undefined;
      this.getDepartmentTree({ searchOrganizationId: this.form.organizationId });
    },

    /**
     * @description:点击表格数据某一条的编辑
     * @param {object} departmentTableRowData
     */
    handleEdit(departmentTableRowData) {
      loadDepartmentById({ id: departmentTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.form = Object.assign({}, this.form, res.data);
          this.form.organizationId = this.form.organization.id;
          this.form.parentId = this.form.parent ? this.form.parent.id : undefined;
          this.form.isEnable = String(this.form.isEnable);
          this.getDepartmentTree({ searchOrganizationId: this.form.organizationId }, departmentTableRowData.id);
          this.modleVisible = true;
        }
      });
    },
    /**
     * @description: 编辑用户时禁用自己
     * @param {string} selectId 选中ID
     * @param {array} departmentFormTreeData 部门下拉树
     */
    disableSelectIdData(selectId, departmentFormTreeData) {
      departmentFormTreeData.forEach(item => {
        if (item.id === selectId) {
           item.disabled = true;
        }
        if (item.children) {
          this.disableSelectIdData(selectId, item.children);
        }
      });
    },
    /**
     * @description: 数据更新后共同的代码
     * @param {object} formSuccessData 部门新增编辑请求成功后返回的对象
     */
    formSuccessOperation(formSuccessData) {
      this.$message.success(formSuccessData.message);
      this.modleVisible = false;
      this.clearFormData();
      this.getDepartentTableData(this.pageObject, this.searchParameters);
      this.$refs.mixTree.getTreeData();
    },

    /**
     * @description: 数据新增编辑完成过后清空
     */
    clearFormData() {
      this.$refs.departmentRuleForm.resetFields();
      this.form = this.$options.data.call(this).form;
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
     * @description: 表格查询公共的代码
     */
    searchDepartmentTableData() {
      this.currentPage = 1;
      this.pageObject.pageNumber = 0;
      this.userLoading = true;
      this.getDepartentTableData(this.pageObject, this.searchParameters);
    },
    /**
     * @description: 根据组织ID获取对应的部门树
     * @param {object} searchOrganizationId 组织ID
     * @param {string} selectRowDepartemntId 选中部门ID
     * @return {*}
     */
    getDepartmentTree(searchParameters, selectRowDepartemntId) {
      departmentsTree(searchParameters).then(res => {
        if (res.code === 200) {
          this.departmentFormTreeData = res.data;
           this.disabledFormTreeData(this.departmentFormTreeData);
           this.disableSelectIdData(selectRowDepartemntId, this.departmentFormTreeData);
        }
      });
    },
    /**
     * @description: 停用/启用表格数据的某一条
     * @param {object} departmentTableRowData 某一条表格数据对象
     */
    handleIsEnable(departmentTableRowData) {
      if (departmentTableRowData.isEnable === 1) {
        disableDepartmentById({ id: departmentTableRowData.id }).then(res => {
          if (res.code === 200) {
            this.$message.success('停用成功');
            this.getDepartentTableData(this.pageObject, this.searchParameters);
           this.$refs.mixTree.getTreeData();
          }
        });
      } else {
        enableDepartmentById({ id: departmentTableRowData.id }).then(res => {
          if (res.code === 200) {
           this.$message.success('启用成功');
            this.getDepartentTableData(this.pageObject, this.searchParameters);
          this.$refs.mixTree.getTreeData();
          }
        });
      }
    },
   /**
     * @description: 重置搜索条件
     */
    handleReset() {
      const copySearchParameters = JSON.parse(JSON.stringify(this.searchParameters));
      this.searchParameters = {};
      this.searchParameters.searchParentIds = copySearchParameters.searchParentIds;
      this.searchParameters.searchParentId = copySearchParameters.searchParentId;
      this.searchDepartmentTableData();
    },
    /**
     * @description: 根据isEnable判断表格背景颜色
     * @param {*} record 当前行数据
     */
    rowClassName(record) {
      let className = 'enableBackground';
      if (record.isEnable === 1) className = 'deactivateBakcground';
      return className;
    }
  }
};
</script>
<style>
.deactivateBakcground {
  background: white !important;
}
.enableBackground{
  background: #FAFAFA !important;
}
</style>
<style lang="less" scoped>
.deactivate {
  color: red;
}
.enable {
  color: green;
}
.table-page-search-wrapper /deep/ .ant-form-inline .ant-form-item > .ant-form-item-label {
  line-height: 32px;
  padding-right: 8px;
  width: 77px;
}
.department {
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  .departmentList {
    width: 330px;
    background: white;
    border-radius: 5px;
  }

  .departmentMain {
    // width: 79%;
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
    .departmentMainSearch {
      width: 100%;
      padding: 20px;
      background: white;
      margin-bottom: 10px;
    }
    .departmentMainTable {
      background: white;
      display: flex;
      flex-direction: column;

      .departmentMainTableAdd {
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
      .departmentMainTableContent {
        height: calc(100vh - 380px);
        padding: 10px;
        overflow: scroll;
      }
      .departmentMainTableContent /deep/ .ant-table-tbody .ant-table-row:nth-child(2n) {
        background: #fafafa;
      }
      .departmentMainTableContent::-webkit-scrollbar {
        display: none;
      }
    }
    .departmentMainPag {
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
  .departmentMain /deep/ .table-page-search-wrapper .ant-form-inline .ant-form-item .ant-form-item-control-wrapper {
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
</style>
