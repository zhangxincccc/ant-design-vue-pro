<template>
  <page-header-wrapper :title="false">
    <div class="router">
      <a-spin tip="加载中..." class="position" v-if="routerLoading"> </a-spin>
      <div class="routerSearch">
        <div class="routerSearchInput">
          <div class="table-page-search-wrapper">
            <a-form layout="inline">
              <a-row :gutter="64">
                <a-col :md="6" :sm="32">
                  <a-form-item label="路由名称">
                    <a-input allowClear v-model="searchParameters.searchName" placeholder="请输入路由名称" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="路由代码">
                    <a-input allowClear v-model="searchParameters.searchCode" placeholder="请输入路由代码" />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </div>
        </div>
        <div class="routerSearchButton">
          <a-button style="margin-right:20px" @click="handleReset">重置</a-button>
          <a-button type="primary" @click="() => this.searchRouterTableData()">
            查询
          </a-button>
        </div>
      </div>
      <div class="routerTable">
        <div class="routerTableAdd">
          <div class="routerTableAddTitle">路由列表</div>
          <div class="routerTableAddButton">
            <a-button type="primary" @click="() => (this.modleVisible = true)">
              新增路由
            </a-button>
          </div>
        </div>
        <div class="routerTableContent">
          <a-table
            :columns="columns"
            :data-source="routerTableData"
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
                v-if="record.isSystem === 0"
              >
                <a href="javascript:;" style="margin-left:5px">删除</a>
              </a-popconfirm>
            </template>
          </a-table>
        </div>
      </div>
      <div class="routerPagination">
        <a-pagination
          v-model="currentPage"
          :page-size-options="pageSizeOptions"
          :total="routerTableTotal"
          :show-total="total => `共 ${routerTableTotal} 条`"
          show-size-changer
          :page-size="pageObject.pageSize"
          @change="handlePageNumberChange"
          @showSizeChange="onPageSizeChange"
        >
        </a-pagination>
        跳至 <a-input v-model="jumper" style="width:50px;margin-left:10px;margin-right:10px" @blur="blurJumperInput()"/>页
      </div>
      <a-modal
        width="70%"
        v-model="modleVisible"
        :title="form.id ? '编辑路由' : '新增路由'"
        @cancel="() => (this.clearFormData(), (this.modleVisible = false))"
        :confirm-loading="formButtonDisableFlag"
        @ok="onSubmit"
      >
        <a-form-model
          ref="routerRuleForm"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <div class="formMain">
            <div class="leftMain">
              <a-form-model-item label="路由名称" prop="name">
                <a-input v-model="form.name" placeholder="请输入路由名称" />
              </a-form-model-item>
              <a-form-model-item label="资源ID" prop="resourceId">
                <a-select v-model="form.resourceId" placeholder="请选择资源ID" allowClear @change="getResourceId()">
                  <a-select-option v-for="item in listAllResources" :key="item.id" :value="item.id">{{ item.name }}</a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item ref="uri" label="服务地址" prop="uri">
                <a-input v-model="form.uri" placeholder="请输入服务地址">
                  <a-select v-model="formUri" slot="addonBefore" style="width: 90px">
                    <a-select-option value="ws:">
                      ws:
                    </a-select-option>
                    <a-select-option value="https:">
                      https:
                    </a-select-option>
                    <a-select-option value="http:">
                      http:
                    </a-select-option>
                    <a-select-option value="lb:">
                      lb:
                    </a-select-option>
                  </a-select>
                </a-input>
              </a-form-model-item>
              <a-form-model-item label="路由代码" prop="code">
                <a-input v-model="form.code" placeholder="请输入路由代码" />
              </a-form-model-item>
              <a-form-model-item label="路由描述" prop="description">
                <a-input v-model="form.description" placeholder="请输入路由描述" />
              </a-form-model-item>
            </div>
            <div class="rightMain">
              <a-form-model-item ref="predicates" label="断言" prop="predicates">
                <codemirror v-model="form.predicates" :options="predicates"></codemirror>
              </a-form-model-item>
              <a-form-model-item ref="filters" label="过滤器" prop="filters">
                <codemirror v-model="form.filters" :options="predicates"></codemirror>
              </a-form-model-item>
              <a-form-model-item ref="metadata" label="元数据" prop="metadata">
                <codemirror v-model="form.metadata" :options="predicates"></codemirror>
              </a-form-model-item>
            </div>
          </div>
        </a-form-model>
      </a-modal>
    </div>
  </page-header-wrapper>
</template>
<script>
import {
  listGatewayRoutes,
  createGatewayRoute,
  updateGatewayRoute,
  loadGatewayRouteById,
  deleteGatewayRouteById,
  listResources
} from '@/api/api';
import moment from 'moment';
import { codemirror } from 'vue-codemirror';
// 核心样式
import 'codemirror/lib/codemirror.css';
// 引入主题后还需要在 options 中指定主题才会生效
import 'codemirror/theme/rubyblue.css';
import 'codemirror/mode/python/python.js';
import 'codemirror/theme/ambiance.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/addon/hint/anyword-hint.js';
import 'codemirror/addon/hint/css-hint.js';
import 'codemirror/addon/hint/html-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/xml-hint.js';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/xml-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/selection/active-line';

const columns = [
  {
    title: '路由名称',
    dataIndex: 'name'
  },
  {
    title: '路由代码',
    dataIndex: 'code'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    title: '路由描述',
    dataIndex: 'description'
  },
    {
    title: '服务地址',
    dataIndex: 'uri'
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' },
    width: '200px'
  }
];
export default {
  name: 'Router',
  data() {
    return {
  // 默认配置
    predicates: {
      mode: { name: 'javascript', json: true },
      tabSize: 1,
      theme: 'rubyblue', // 主题，对应主题库 JS 需要提前引入
      styleActiveLine: true,
      lineNumbers: true,
      line: true,
      foldgutter: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
      lineWrapping: true, // 代码折叠
      foldGutter: true,
      matchBrackets: true, // 括号匹配
      autoCloseBrackets: true
    },
      jumper: '',
      listAllResources: [], // 表单资源数组
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      routerLoading: false, // 加载表格的loading
      searchParameters: {}, // 表格搜索条件值
      modleVisible: false, // 控制弹框
      columns, // 表格头部
      routerTableData: [], // 表格数据
      pageSizeOptions: this.$store.state.user.defaultPaginationOptions, // 分页下拉
      currentPage: 1, // 默认分页当前页
      pageObject: {
        pageNumber: 0,
        pageSize: this.$store.state.user.defaultPaginationPagesize // 一页展示多少条数据
      },
      routerTableTotal: 0, // 表格数据总数
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
      formUri: 'ws:', // 表单路由路径的前置
      form: {
        // 表单数据
        name: undefined,
        code: undefined,
        uri: undefined,
        resourceId: undefined,
        predicates: '',
        filters: '',
        metadata: '',
        isEnable: '1',
        isSystem: '0',
        description: undefined,
        sortIndex: 10
      },
      rules: {
        // 规则验证
        name: [{ required: true, message: '请输入路由名称', trigger: 'blur' }],
        code: [{ required: true, message: '请输入路由代码', trigger: 'blur' }],
        uri: [{ required: true, message: '请输入服务地址', trigger: 'blur' }],
        predicates: [{ required: true, message: '请输入断言', trigger: 'blur' }]
      }
    };
  },
  watch: {
    /**
     * @description: 解决删除分页最后一条没数据的BUG
     * 思路：先获取当前的表格数据总数this.routerTableTotal
     * 在获取除了当前页数据外的表格总数this.getExceptCurrentPageTableTotalData
     * 如果这两个数相等 说明删除的是当前页最后一条数据 然后使当前页-1 请求数据就可以了
     */
    routerTableTotal() {
      if (this.routerTableTotal === this.getExceptCurrentPageTableTotalData && this.routerTableTotal !== 0) {
        this.pageObject.pageNumber = Number(this.currentPage) - 1;
        this.currentPage -= 1;
        this.getRouterTableData(this.pageObject, this.searchParameters);
      }
    }
  },
components: {
    codemirror
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
    this.getRouterTableData(this.pageObject, this.searchParameters); // 获取表格数据
    this.getListResources(); // 获取资源数组
  },
  methods: {
    /**
     * @description: 获取资源数组
     */
    getListResources() {
      listResources().then(res => {
        this.listAllResources = res.data.content;
      });
    },
    /**
     * @description: 获取表格数据
     * @param {object} page 分页参数
     * @param {object} params 搜索参数
     */
    getRouterTableData(page, params) {
      this.routerLoading = true;
      listGatewayRoutes(Object.assign({}, page, params)).then(res => {
        if (res.code === 200 && res.data.content) {
          this.routerTableData = res.data.content;
          this.routerTableData.forEach(item => {
            item.createTime = moment(item.createTime).format('YYYY-MM-DD HH:mm');
          });
          this.routerTableTotal = res.data.totalElements;
        } else {
          this.routerTableTotal = res.data.totalElements;
          this.routerTableData = [];
        }
      }).finally(() => {
          this.routerLoading = false;
      });
    },

    /**
     * @description: 点击表格搜索条件的查询
     */
    searchRouterTableData() {
      this.currentPage = 1;
      this.pageObject.pageNumber = 0;
      this.getRouterTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 新增编辑路由表单提交
     */
    onSubmit() {
      this.$refs.routerRuleForm.validate(valid => {
        if (valid) {
          this.form.uri = this.formUri + '//' + this.form.uri;
          this.form.resource = { id: this.form.resourceId };
          this.formButtonDisableFlag = true;
          if (this.form.id) {
            this.routerUpdate(this.form);
          } else {
            this.routerAdd(this.form);
          }
        } else {
          return false;
        }
      });
    },

    /**
     * @description: 新增路由权限
     * @param {object} addRouterParam 表单参数
     */
    routerAdd(addRouterParam) {
      createGatewayRoute({ body: addRouterParam })
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
     * @description: 编辑路由权限
     * @param {object} editRouterParam 表单参数
     */
    routerUpdate(editRouterParam) {
      updateGatewayRoute({ body: editRouterParam, id: editRouterParam.id })
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
      this.getRouterTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 重置表单
     */
    clearFormData() {
      this.$refs.routerRuleForm.resetFields();
      this.form = this.$options.data.call(this).form;
    },

    /**
     * @description: 编辑路由
     * @param {object} routerTableRowData 表格某一行的数据对象
     */
    handleEdit(routerTableRowData) {
      this.modleVisible = true;
      // 根据ID请求相应路由的权限 进行回显
      loadGatewayRouteById({ id: routerTableRowData.id })
        .then(res => {
          if (res.code === 200) {
            this.form = Object.assign({}, this.form, res.data);
            this.form.resourceId = res.data.resource.id;
            this.form.uri = res.data.uri.split('//')[1];
            this.formUri = res.data.uri.split('//')[0];
            this.form.isEnable = String(this.form.isEnable);
          }
        });
    },
    /**
     * @description: 获取资源ID
     */
    getResourceId() {
      this.listAllResources.forEach(item => {
        if (item.id === this.form.resourceId) {
          this.form.uri = item.url.split('//')[1];
          this.formUri = item.url.split('//')[0];
        }
      });
    },
    handleReset() {
        this.searchParameters = {};
        this.searchRouterTableData();
    },
    /**
     * @description: 点击删除
     * @param {object} routerTableRowData 格某一行的数据对象
     */
    handleDelete(routerTableRowData) {
      deleteGatewayRouteById({ id: routerTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.getRouterTableData(this.pageObject, this.searchParameters);
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
      this.getRouterTableData(this.pageObject, this.searchParameters);
    },

    /**
     * @description: 获取分页页数改变后的值
     * @param {string} pageNumber UI框架自带
     */
    handlePageNumberChange(pageNumber) {
      this.jumper = '';
      this.currentPage = pageNumber;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getRouterTableData(this.pageObject, this.searchParameters);
    },
    /**
     * @description: 分页跳转输入框改变
     */
    blurJumperInput() {
      if (this.jumper !== '') {
        this.currentPage = Number(this.jumper);
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getRouterTableData(this.pageObject, this.searchParameters);
      }
    }
  }
};
</script>
<style>
.CodeMirror {
    font-family: monospace;
    height: 150px;
    color: black;
    direction: ltr;
     font-size : 13px;
    line-height : 150%;

}
</style>
<style lang="less" scoped>
.table-page-search-wrapper /deep/ .ant-form-inline .ant-form-item > .ant-form-item-label {
  line-height: 32px;
  padding-right: 8px;
  width: 77px;
}
.router {
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
  .routerSearch {
    width: 100%;
    height: 64px;
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    padding: 15px 20px;
    .routerSearchInput {
      width: 85%;
      height: 100%;
    }
    .routerSearchButton {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .routerTable {
    flex: 1;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    .routerTableAdd {
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ececec;
      padding: 0 20px;
      .routerTableAddTitle {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 550;
      }
      .routerTableAddButton {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    .routerTableContent {
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
    .routerTableContent /deep/ .ant-table-tbody .ant-table-row:nth-child(2n) {
      background: #fafafa;
    }
    .routerTableContent::-webkit-scrollbar {
      display: none;
    }
  }
  .routerPagination {
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
.formMain {
  width: 100%;
  display: flex;
  .leftMain{
      width: 40%;
  }
  .rightMain{
     width: 60%;
  }
}
</style>
