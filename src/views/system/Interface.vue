<template>
  <page-header-wrapper :title="false">
    <div class="interface">
      <a-spin tip="加载中..." class="position" v-if="interfaceLoading"> </a-spin>
      <div class="interfaceSearch">
        <div class="interfaceSearchInput">
          <div class="table-page-search-wrapper">
            <a-form layout="inline">
              <a-row :gutter="64">
                <a-col :md="6" :sm="32">
                  <a-form-item label="接口名称">
                    <a-input allowClear v-model="searchParameters.searchName" placeholder="请输入" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="接口代码">
                    <a-input allowClear v-model="searchParameters.searchCode" placeholder="请输入" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="接口地址">
                    <a-input allowClear v-model="searchParameters.searchUrl" placeholder="请输入" />
                  </a-form-item>
                </a-col>
                <a-col :md="6" :sm="32">
                  <a-form-item label="创建时间">
                    <a-range-picker @change="onChangeData" allowClear v-model="searchParameters.interfaceCreatetime" />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </div>
        </div>
        <div class="interfaceSearchButton">
          <a-button style="margin-right:20px" type="primary" @click="() => this.searchInterfaceTableData()">
            查询
          </a-button>
          <a-button @click="handleReset">重置</a-button>
        </div>
      </div>
      <div class="interfaceTable">
        <div class="interfaceTableAdd">
          <div class="interfaceTableAddTitle">接口列表</div>
          <div class="interfaceTableAddButton">
            <a-button type="primary" @click="() => ((this.expandedKeys = []), (this.modleVisible = true))">
              新增接口
            </a-button>
          </div>
        </div>
        <div class="interfaceTableContent">
          <a-table
            :columns="columns"
            :data-source="interfaceTableData"
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
      <div class="interfacePagination">
        <a-pagination
          v-model="currentPage"
          :page-size-options="pageSizeOptions"
          :total="interfaceTableTotal"
          :show-total="total => `共 ${interfaceTableTotal} 条`"
          show-size-changer
          :page-size="pageObject.pageSize"
          @change="handlePageNumberChange"
          @showSizeChange="onPageSizeChange"
        >
        </a-pagination>
        跳至 <a-input v-model="jumper" style="width:50px;margin-left:10px;margin-right:10px" @blur="blurJumperInput()"/>页
      </div>
      <a-modal
        width="50%"
        v-model="modleVisible"
        :title="form.id ? '编辑接口' : '新增接口'"
        @cancel="() => (this.clearFormData(), (this.modleVisible = false))"
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
                ref="interfaceRuleForm"
                :model="form"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-form-model-item ref="name" label="接口名称" prop="name">
                  <a-input v-model="form.name" placeholder="请输入接口名称" />
                </a-form-model-item>
                <a-form-model-item ref="code" label="接口代码" prop="code">
                  <a-input v-model="form.code" placeholder="请输入接口代码" />
                </a-form-model-item>
                <a-form-model-item ref="url" label="接口地址" prop="url">
                  <a-input v-model="form.url" placeholder="请输入接口地址" />
                </a-form-model-item>
                <a-form-model-item label="所属资源" prop="resourceId" ref="resourceId">
                  <a-select v-model="form.resourceId" placeholder="请选择所属资源" allowClear>
                    <a-select-option v-for="item in listAllResources" :key="item.id" :value="item.id">{{ item.name }}</a-select-option>
                  </a-select>
                </a-form-model-item>
                <a-form-model-item ref="isPermitAll" label="是否允许访问" prop="isPermitAll">
                  <a-radio-group default-value="1" button-style="solid" v-model="form.isPermitAll">
                    <a-radio-button value="1">
                      允许
                    </a-radio-button>
                    <a-radio-button value="2">
                      不允许
                    </a-radio-button>
                  </a-radio-group>
                </a-form-model-item>
                <a-form-model-item ref="method" label="请求方式" prop="method">
                  <a-select v-model="form.method" placeholder="请选择请求方式" allowClear>
                    <a-select-option value="GET">GET</a-select-option>
                    <a-select-option value="POST">POST</a-select-option>
                    <a-select-option value="PUT">PUT</a-select-option>
                    <a-select-option value="DELETE">DELETE</a-select-option>
                  </a-select>
                </a-form-model-item>
              </a-form-model>
            </div>
          </div>
          <div class="modalContentTree">
            <div class="modalContentTreeTitle">
              <div class="title">接口依赖</div>
              <div class="icon">
                <span>
                  <a-popover placement="bottomRight">
                    <template slot="content">
                      <p style="cursor: pointer;" @click="() => (this.checkedKeys = this.interfacesAllids)">
                        选择全部
                      </p>
                      <p style="cursor: pointer;" @click="() => (this.checkedKeys = [])">取消选择</p>
                      <p style="cursor: pointer;" @click="() => (this.expandedKeys = this.interfacesAllids)">
                        展开全部
                      </p>
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
                :tree-data="interfacesTreeArray"
              />
            </div>
          </div>
        </div>
      </a-modal>
    </div>
  </page-header-wrapper>
</template>
<script>
import { listApis, createApi, updateApi, deleteApiById, listResources, loadApiById } from '@/api/api';
import moment from 'moment';
const columns = [
  {
    title: '接口名称',
    dataIndex: 'name',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '接口代码',
    dataIndex: 'code',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '接口地址',
    dataIndex: 'url',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '请求方式',
    dataIndex: 'method',
    width: '16.6%',
    ellipsis: true
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' },
    width: '16.6%',
    ellipsis: true
  }
];
export default {
  name: 'Role',
  data() {
    return {
      jumper: '',
      resourceIds: [], // 获取所有资源ID
      editWaitFormLoading: false, // 加载编辑回显数据等待Loading
      formButtonDisableFlag: false, // 表单确定禁用按钮 防止多次点击多次保存
      interfaceLoading: false, // 加载表格的loading
      searchParameters: {}, // 表格搜索条件值
      modleVisible: false, // 控制弹框
      columns, // 表格头部
      interfaceTableData: [], // 表格数据
      pageSizeOptions: this.$store.state.user.defaultPaginationOptions, // 分页下拉
      currentPage: 1, // 默认分页当前页
      pageObject: {
        pageNumber: 0,
        pageSize: this.$store.state.user.defaultPaginationPagesize // 一页展示多少条数据
      },
      interfaceTableTotal: 0, // 表格数据总数
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
      form: {
        // 表单数据
        name: undefined,
        code: undefined,
        url: undefined,
        method: undefined,
        resourceId: undefined,
        isDelete: 0,
        isEnable: 1,
        isPermitAll: '1'
      },
      rules: {
        // 规则验证
        name: [{ required: true, message: '请输入接口名称', trigger: 'blur' }],
        code: [{ required: true, message: '请输入接口代码', trigger: 'blur' }],
        url: [{ required: true, message: '请输入接口地址', trigger: 'blur' }],
        resourceId: [{ required: true, message: '请选择所属资源', trigger: 'change' }]
      },
      interfacesTreeArray: [], // 表单上级接口数组数据
      listAllResources: [], // 表单资源数组
      expandedKeys: [], // 控制树形下拉 展开收起全选取消全选 功能
      checkedKeys: [], // 树形下拉选中的数据
      interfacesAllids: [] // 获取所有的接口ID
    };
  },
  watch: {
    /**
     * @description: 解决删除分页最后一条没数据的BUG
     * 思路：先获取当前的表格数据总数this.interfaceTableTotal
     * 在获取除了当前页数据外的表格总数this.getExceptCurrentPageTableTotalData
     * 如果这两个数相等 说明删除的是当前页最后一条数据 然后使当前页-1 请求数据就可以了
     */
    interfaceTableTotal() {
      if (this.interfaceTableTotal === this.getExceptCurrentPageTableTotalData && this.interfaceTableTotal !== 0) {
        this.currentPage -= 1;
         this.pageObject.pageNumber = Number(this.currentPage) - 1;
        this.getInterfaceTableData(this.pageObject, this.searchParameters);
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
    this.interfaceLoading = true;
    this.getInterfaceTableData(this.pageObject, this.searchParameters); // 获取表格数据
    this.getInterfacesTree(); // 表单的接口树
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
     * @description: 重置搜索条件
     */
    handleReset() {
      this.searchParameters = {};
      this.searchInterfaceTableData();
    },
    /**
     * @description: 获取接口树
     */
    getInterfacesTree() {
      listResources({ pageNumber: 0, pageSize: 9999 }).then((res) => {
        if (res.code === 200) {
          this.interfacesTreeArray = res.data.content;
          this.interfacesTreeArray.forEach((item) => {
            // 一级为资源ID 设置resource防止和接口ID重复
            item.id = 'resource' + item.id;
            this.resourceIds.push(item.id);
            if (item.apis) {
              item.children = item.apis;
            }
          });
          this.getTreeData(this.interfacesTreeArray);
        }
      });
    },
    /**
     * @description: 利用递归获取到所有的节点id
     * @param {array} interfacesTreeArray 接口树数组
     */
    getTreeData(interfacesTreeArray) {
      interfacesTreeArray.forEach((item) => {
        this.interfacesAllids.push(item.id);
        if (item.children) {
            item.children.forEach(item => {
              // children为接口ID设置api前缀防止和资源ID重复
              item.id = 'api' + item.id;
            });
          this.getTreeData(item.children);
        }
      });
    },
    /**
     * @description: 获取接口表格数据
     */
    getInterfaceTableData(page, params) {
        this.interfaceLoading = true;
      listApis(Object.assign({}, page, params)).then(res => {
        if (res.code === 200 && res.data.content) {
          this.interfaceTableData = res.data.content;
          this.interfaceTableData.forEach(res => {
            res.createTime = moment(res.createTime).format('YYYY-MM-DD HH:mm');
          });
          this.interfaceTableTotal = res.data.totalElements;
        } else {
          this.interfaceTableTotal = res.data.totalElements;
          this.interfaceTableData = [];
        }
      }).finally(() => {
          this.interfaceLoading = false;
        });
    },
    /**
     * @description: 点击表格搜索条件的查询
     */
    searchInterfaceTableData() {
      this.currentPage = 1;
      this.pageObject.pageNumber = 0;
      this.getInterfaceTableData(this.pageObject, this.searchParameters);
    },
    /**
     * @description: 表单提交
     */
    onSubmit() {
      this.$refs.interfaceRuleForm.validate(valid => {
        if (valid) {
          const apisArray = [];
          // 筛选出选中的接口数据里面符合条件的值
          this.checkedKeys.forEach(value => {
            if (this.resourceIds.indexOf(value) === -1) {
              apisArray.push(value);
            }
          });
          this.form.dependencies = apisArray.map((item) => {
            return {
              id: item.slice(3)
            };
          });
            this.formButtonDisableFlag = true;
            this.form.resource = { id: this.form.resourceId };
            if (this.form.id) {
              this.editInterface(this.form);
            } else {
              this.interfaceAdd(this.form);
            }
        } else {
          return false;
        }
      });
    },
    /**
     * @description: 新增接口
     * @param {object} addPermission 表单参数
     */
    interfaceAdd(addPermission) {
      createApi({ body: addPermission })
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
     * @description: 编辑接口
     * @param {object} addOrEditParam 表单参数
     */
    editInterface(editPermission) {
      updateApi({ body: editPermission, id: editPermission.id })
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
      this.getInterfaceTableData(this.pageObject, this.searchParameters);
    },
    /**
     * @description: 重置表单
     */
    clearFormData() {
      this.$refs.interfaceRuleForm.resetFields();
      this.form = this.$options.data.call(this).form;
       this.checkedKeys = [];
    },
    /**
     * @description: 编辑角色
     * @param {object} interfaceTableRowData 表格某一行的数据对象
     */
    handleEdit(interfaceTableRowData) {
      this.editWaitFormLoading = true;
      this.modleVisible = true;
      loadApiById({ id: interfaceTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.form = Object.assign({}, this.form, res.data);
          this.form.resourceId = res.data.resource.id;
          this.form.isPermitAll = String(this.form.isPermitAll);
          this.checkedKeys = res.data.dependencies.map((item) => {
              return 'api' + item.id;
          });
          this.expandedKeys = this.interfacesAllids;
        }
      })
      .finally(() => {
          this.editWaitFormLoading = false;
        });
    },
    /**
     * @description: 点击删除
     * @param {object} roleTableRowData 格某一行的数据对象
     */
    handleDelete(interfaceTableRowData) {
      deleteApiById({ id: interfaceTableRowData.id }).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.getInterfaceTableData(this.pageObject, this.searchParameters);
        }
      });
    },
    /**
     * @description:  获取分页下拉第几页展示几个
     * @param {string} current 当前页
     * @param {string} pageSize 当前页展示几条
     */
    onPageSizeChange(current, pageSize) {
      this.currentPage = current;
      this.pageObject.pageSize = pageSize;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getInterfaceTableData(this.pageObject, this.searchParameters);
    },
    /**
     * @description: 获取分页页数改变后的值
     * @param {string} pageNumber UI框架自带
     */
    handlePageNumberChange(pageNumber) {
      this.jumper = '';
      this.currentPage = pageNumber;
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getInterfaceTableData(this.pageObject, this.searchParameters);
    },
    /**
     * @description: 分页跳转输入框改变
     */
    blurJumperInput() {
      if (this.jumper !== '') {
        this.currentPage = Number(this.jumper);
      this.pageObject.pageNumber = Number(this.currentPage) - 1;
      this.getInterfaceTableData(this.pageObject, this.searchParameters);
      }
    },
    /**
     * @description: 日期选择器改变
     * @param {array} date UI框架自带
     * @param {array} dateString UI框架自带 时间区间
     */
    onChangeData(date, dateString) {
      this.searchParameters.searchCreateDateBegin = dateString[0];
      this.searchParameters.searchCreateDateEnd = dateString[1];
    }
  }
};
</script>

<style lang="less" scoped>
  #modalContent /deep/.table-page-search-wrapper .ant-form-inline .ant-form-item .ant-form-item-control-wrapper {
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
.table-page-search-wrapper /deep/ .ant-form-inline .ant-form-item > .ant-form-item-label {
  line-height: 32px;
  padding-right: 8px;
  width: 77px;
}
.interface {
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
  .interfaceSearch {
    width: 100%;
    height: 64px;
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    padding: 15px 20px;
    .interfaceSearchInput {
      width: 85%;
      height: 100%;
    }
    .interfaceSearchButton {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .interfaceTable {
    flex: 1;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    .interfaceTableAdd {
      width: 100%;
      height: 64px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ececec;
      padding: 0 20px;
      .interfaceTableAddTitle {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 550;
      }
      .interfaceTableAddButton {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    .interfaceTableContent {
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
    .interfaceTableContent /deep/ .ant-table-tbody .ant-table-row:nth-child(2n) {
      background: #fafafa;
    }
    .interfaceTableContent::-webkit-scrollbar {
      display: none;
    }
  }
  .interfacePagination {
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
      overflow:hidden;
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
    .modalContentTreeContent /deep/ .ant-tree li .ant-tree-node-content-wrapper {
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 140px;
  }
    .modalContentTreeContent::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
