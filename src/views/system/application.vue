<template>
  <page-header-wrapper :title="false">
    <div class="application">
      <a-spin tip="加载中..." class="position" v-if="applicationLoading"> </a-spin>
      <div class="applicationSearch">
        <div class="applicationSearchInput">
          <div class="table-page-search-wrapper">
            <a-form layout="inline">
              <a-row :gutter="64">
                <a-col :md="6" :sm="32">
                  <a-form-item label="应用名称">
                    <a-input allowClear v-model="searchParameters.searchName" placeholder="请输入应用名称" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="应用代码">
                    <a-input allowClear v-model="searchParameters.searchCode" placeholder="请输入应用代码" />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </div>
        </div>
        <div class="applicationSearchButton">
          <a-button style="margin-right:20px" @click="handleReset">重置</a-button>
          <a-button type="primary" @click="() => this.searchApplicationTableData()">
            查询
          </a-button>
        </div>
      </div>
      <div class="applicationTable">
        <div class="applicationTableAdd">
          <div class="applicationTableAddTitle">应用列表</div>
          <div class="applicationTableAddButton">
            <a-button type="primary" @click="() => (this.modleVisible = true)">
              新增应用
            </a-button>
          </div>
        </div>
        <div class="applicationTableContent">
          <a-table
            :columns="columns"
            :data-source="applicationTableData"
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
      <div class="applicationPagination">
        <a-pagination
          v-model="currentPage"
          :page-size-options="pageSizeOptions"
          :total="applicationTableTotal"
          show-size-changer
          :page-size="pageObject.pageSize"
          @change="handlePageNumberChange"
          @showSizeChange="onPageSizeChange"
        >
        </a-pagination>
        跳至 <a-input v-model="jumper" style="width:50px;margin-left:10px;margin-right:10px" @blur="blurJumperInput()"/>页
      </div>
      <a-modal
        v-model="modleVisible"
        :title="form.id ? '编辑应用' : '新增应用'"
        @cancel="() => (this.clearFormData(), (this.modleVisible = false))"
        :confirm-loading="formButtonDisableFlag"
        @ok="onSubmit"
      >
        <div id="modalContent">
          <div class="modalContentForm">
            <div class="modalContentFormContent">
              <a-form-model
                ref="applicationRuleForm"
                :model="form"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-form-model-item ref="name" label="应用名称" prop="name">
                  <a-input v-model="form.name" placeholder="请输入应用名称" />
                </a-form-model-item>
                <a-form-model-item ref="code" label="应用代码" prop="code">
                  <a-input v-model="form.code" placeholder="请输入应用代码" />
                </a-form-model-item>
                <a-form-model-item label="应用描述">
                  <a-input v-model="form.description" type="textarea" placeholder="请输入应用描述" :maxLength="500"/>
                </a-form-model-item>
              </a-form-model>
            </div>
          </div>
        </div>
      </a-modal>
    </div>
  </page-header-wrapper>
</template>
<script>
import {
  listApplications,
  createApplication,
  updateApplication,
  loadApplicationById,
  deleteApplicationById
} from '@/api/api';
import moment from 'moment';
const columns = [
  {
    title: '应用名称',
    dataIndex: 'name'
  },
  {
    title: '应用代码',
    dataIndex: 'code'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    title: '应用描述',
    dataIndex: 'description'
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' },
    width: '200px'
  }
];
export default {
  name: 'Application',
  data() {
    return {
      jumper: '',
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      applicationLoading: false, // 加载表格的loading
      searchParameters: {}, // 表格搜索条件值
      modleVisible: false, // 控制弹框
      columns, // 表格头部
      applicationTableData: [], // 表格数据
      pageSizeOptions: this.$store.state.user.defaultPaginationOptions, // 分页下拉
      currentPage: 1, // 默认分页当前页
      pageObject: {
        pageNumber: 0,
        pageSize: this.$store.state.user.defaultPaginationPagesize // 一页展示多少条数据
      },
      applicationTableTotal: 0, // 表格数据总数
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
      form: {
        // 表单数据
        name: undefined,
        code: undefined,
        isEnable: '1',
        isSystem: '0',
        description: undefined,
        sortIndex: 10
      },
      rules: {
        // 规则验证
        name: [
          { required: true, message: '请输入应用名称', trigger: 'blur' },
          { max: 50, message: '应用名称长度不能大于50', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入应用代码', trigger: 'blur' },
          { max: 200, message: '应用代码长度不能大于200', trigger: 'blur' }
        ]
      }
    };
  },
  watch: {
    /**
     * @description: 解决删除分页最后一条没数据的BUG
     * 思路：先获取当前的表格数据总数this.applicationTableTotal
     * 在获取除了当前页数据外的表格总数this.getExceptCurrentPageTableTotalData
     * 如果这两个数相等 说明删除的是当前页最后一条数据 然后使当前页-1 请求数据就可以了
     */

    applicationTableTotal() {
      if (this.applicationTableTotal === this.getExceptCurrentPageTableTotalData && this.applicationTableTotal !== 0) {
        this.pageObject.pageNumber = Number(this.currentPage) - 1;
        this.currentPage -= 1;
        this.getApplicationTableData(this.pageObject, this.searchParameters);
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
    this.getApplicationTableData(this.pageObject, this.searchParameters); // 获取表格数据
  },
  methods: {
    /**
     * @description: 获取表格数据
     * @param {object} page 分页参数
     * @param {object} params 搜索参数
     */
    getApplicationTableData(page, params) {
      this.applicationLoading = true;
      listApplications(Object.assign({}, page, params)).then(res => {
        if (res.code === 200 && res.data.content) {
          this.applicationTableData = res.data.content;
          this.applicationTableData.forEach(item => {
            item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm');
          });
          this.applicationTableTotal = res.data.totalElements;
        } else {
          this.applicationTableTotal = res.data.totalElements;
          this.applicationTableData = [];
        }
      }).finally(() => {
        this.applicationLoading = false;
      });
    },

    /**
     * @description: 点击表格搜索条件的查询
     */
    searchApplicationTableData() {
      this.currentPage = 1;
      this.pageObject.pageNumber = 0;
      this.getApplicationTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 新增编辑应用表单提交
     */
    onSubmit() {
      this.$refs.applicationRuleForm.validate(valid => {
        if (valid) {
          this.formButtonDisableFlag = true;
          if (this.form.id) {
            this.applicationUpdate(this.form);
          } else {
            this.applicationAdd(this.form);
          }
        } else {
          return false;
        }
      });
    },

    /**
     * @description: 新增应用权限
     * @param {object} addApplicationParam 表单参数
     */
    applicationAdd(addApplicationParam) {
      createApplication({ body: addApplicationParam })
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
     * @description: 编辑应用权限
     * @param {object} editApplicationParam 表单参数
     */
    applicationUpdate(editApplicationParam) {
      updateApplication({ body: editApplicationParam, id: editApplicationParam.id })
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
      this.getApplicationTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 重置表单
     */
    clearFormData() {
      this.$refs.applicationRuleForm.resetFields();
      this.form = this.$options.data.call(this).form;
    },

    /**
     * @description: 编辑应用
     * @param {object} applicationTableRowData 表格某一行的数据对象
     */
    handleEdit(applicationTableRowData) {
      this.modleVisible = true;
      // 根据ID请求相应应用的权限 进行回显
      loadApplicationById({ id: applicationTableRowData.id })
        .then(res => {
          if (res.code === 200) {
            this.form = Object.assign({}, this.form, res.data);
            this.form.isEnable = String(this.form.isEnable);
          }
        });
    },

    handleReset() {
        this.searchParameters = {};
        this.searchApplicationTableData();
    },
    /**
     * @description: 点击删除
     * @param {object} applicationTableRowData 格某一行的数据对象
     */
    handleDelete(applicationTableRowData) {
      deleteApplicationById({ id: applicationTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.getApplicationTableData(this.pageObject, this.searchParameters);
        }
      });
    },
    /**
     * @description:  获取分页下拉第几页展示几个
     * @param {string} currentPage 当前页
     * @param {string} pageSize 当前页展示几条
     */
    onPageSizeChange(currentPage, pageSize) {
      this.currentPage = currentPage;
      this.pageObject.pageSize = pageSize;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getApplicationTableData(this.pageObject, this.searchParameters);
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
     * @description: 获取分页页数改变后的值
     * @param {string} pageNumber UI框架自带
     */
    handlePageNumberChange(pageNumber) {
      this.jumper = '';
      this.currentPage = pageNumber;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getApplicationTableData(this.pageObject, this.searchParameters);
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
.application {
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
  .applicationSearch {
    width: 100%;
    height: 64px;
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    padding: 15px 20px;
    .applicationSearchInput {
      width: 85%;
      height: 100%;
    }
    .applicationSearchButton {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .applicationTable {
    flex: 1;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    .applicationTableAdd {
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ececec;
      padding: 0 20px;
      .applicationTableAddTitle {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 550;
      }
      .applicationTableAddButton {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    .applicationTableContent {
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
    .applicationTableContent /deep/ .ant-table-tbody .ant-table-row:nth-child(2n) {
      background: #fafafa;
    }
    .applicationTableContent::-webkit-scrollbar {
      display: none;
    }
  }
  .applicationPagination {
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
    width: 100%;
    height: 100%;
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
}
</style>
