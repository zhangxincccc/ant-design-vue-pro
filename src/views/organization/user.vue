<template>
  <page-header-wrapper :title="false">
    <div class="user">
      <div class="userList">
        <div class="userList-search">
          <span>部门列表</span>
          <span><a-input-search placeholder="搜索" style="width: 150px" @search="onSearch" v-model="listSearch"/></span>
          <span>
            <a-popover placement="bottomRight">
              <template slot="content">
                <p style="cursor: pointer;" @click="openTree">展开全部</p>
                <p style="cursor: pointer;" @click="endTree">折叠全部</p>
              </template>
              <a-icon type="menu-unfold" /> </a-popover
          ></span>
        </div>
        <div class="userList-content">
          <a-tree :tree-data="departmentTreeData" :default-expand-all="openOrEndTreeFlag" @select="onSelect"> </a-tree>
        </div>
      </div>
      <div class="userMain">
        <div class="userMain-search">
          <div class="userMain-search-input">
            用户名 <a-input placeholder="请输入" v-model="userName" style="width: 200px;margin-left:20px" />
          </div>
          <div class="userMain-search-select">
            角色
            <a-select
              v-model="roleCode"
              style="width: 200px;margin-left:20px"
              show-search
              placeholder="请选择"
              option-filter-prop="children"
            >
              <a-select-option v-for="(item, index) in roleArray" :key="index" :value="item.code">
                {{ item.name }}
              </a-select-option>
            </a-select>
          </div>
          <div class="userMain-search-button">
            <a-button style="margin-right:20px" @click="reset()">重置</a-button>
            <a-button type="primary" @click="search()">
              查询
            </a-button>
          </div>
        </div>
        <div class="userMain-table">
          <div class="userMain-table-add">
            <div>账号列表</div>
            <div></div>
            <div>
              <a-button type="primary" @click="addAccount">
                新增账号
              </a-button>
            </div>
          </div>
          <div class="userMain-table-content">
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
              <template slot="action" slot-scope="text, record">
                <a slot="action" href="javascript:;" @click="handleEdit()">编辑</a>
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
        <div class="userMain-pag">
          <a-pagination
            v-model="current"
            show-quick-jumper
            :page-size-options="pageSizeOptions"
            :total="total"
            show-size-changer
            :page-size="pageSize"
            @showSizeChange="onShowSizeChange"
          >
          </a-pagination>
        </div>
      </div>
      <a-modal
        v-model="userVisible"
        :title="addOrEdit == 1 ? '新增账号' : '编辑账号'"
        @cancel="handleOk"
        @ok="onSubmit"
      >
        <a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item ref="name" label="用户名" prop="name">
            <a-input v-model="form.name" placeholder="请输入用户名" />
          </a-form-model-item>
          <a-form-model-item ref="email" label="邮箱" prop="email">
            <a-input v-model="form.email" placeholder="请输入邮箱" />
          </a-form-model-item>
          <a-form-model-item label="角色" prop="role">
            <a-select v-model="form.role" placeholder="请选择角色">
              <a-select-option value="shanghai">
                Zone one
              </a-select-option>
              <a-select-option value="beijing">
                Zone two
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item label="状态" prop="status">
            <a-radio-group v-model="form.editStatus" default-value="a" button-style="solid">
              <a-radio-button value="a">
                启用
              </a-radio-button>
              <a-radio-button value="b">
                停用
              </a-radio-button>
            </a-radio-group>
          </a-form-model-item>

          <a-form-model-item label="所属部门" prop="department">
            <a-tree-select
              v-model="form.department"
              style="width: 100%"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :tree-data="treeData"
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
// import * as api from '@/api/api';
const columns = [
  {
    title: '序号',
    dataIndex: 'a'
  },
  {
    title: '用户名',
    dataIndex: 'b'
  },
  {
    title: '邮箱',
    dataIndex: 'c'
  },
  {
    title: '创建时间',
    dataIndex: 'd'
  },
  {
    title: '角色',
    dataIndex: 'e'
  },
  {
    title: '状态',
    dataIndex: 'f'
  },
  {
    title: '所属部门',
    dataIndex: 'g'
  },
  {
    title: '操作',
    dataIndex: 'j',
    scopedSlots: { customRender: 'action' }
  }
];
const tableData = [
  {
    a: 1,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 1,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 1,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 1,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 1,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 1,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 2,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 3,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 4,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 5,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 6,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 7,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 8,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 9,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  },
  {
    a: 10,
    b: '张三三',
    c: 'zx20170401@126.com',
    d: '2021-08-23 14:23',
    e: '普通用户',
    f: '已启用',
    g: '运维部'
  }
];
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '1',
    children: [
      {
        title: 'Child Node2',
        value: '1-1',
        key: '1-1',
        children: [
          {
            title: '3333',
            value: '6',
            key: '6'
          },
          {
            title: '4444',
            value: '7',
            key: '7'
          }
        ]
      },
      {
        title: 'Child Node2',
        value: '1-2',
        key: '1-2'
      }
    ]
  }
];
const departmentTreeData = [
  {
    title: '华南分部',
    key: '1',
    children: [
      {
        title: '研发部',
        key: '1-1',
        children: [
          { title: '运维部A', key: '1-1-1' },
          { title: '运维部B', key: '1-1-2' }
        ]
      },
      { title: '财务部', key: '1-2' },
      { title: '市场部', key: '1-3' }
    ]
  }
];
export default {
  name: 'User',
  data() {
    return {
      openOrEndTreeFlag: true,
      addOrEdit: 1, // 判断新增或编辑
      userVisible: false,
      listSearch: undefined, // 部门列表搜索
      userName: undefined, // 用户名
      roleCode: undefined, // 角色code
      roleArray: [], // 角色下拉数组
      tableData, // 表格数据
      columns, // 表格头部
      pageSizeOptions: this.$store.state.user.options, // 分页下拉
      current: 1, // 默认分页当前页
      pageSize: this.$store.state.user.page, // 一页展示多少条数据
      total: 11, // 表格数据总数
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        // 表单数据
        name: undefined, // 名字
        email: undefined, // 邮箱
        role: undefined, // 角色
        status: undefined, // 编辑状态下的状态选择
        department: undefined // 所属部门
      },
      rules: {
        // 规则验证
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        role: [{ required: true, message: '请选择角色', trigger: 'change' }],
        department: [{ required: true, message: '请选择所属部门', trigger: 'change' }]
      },
      departmentTreeData, // 部门树形结构数据
      treeData // 下拉选择树结构数据
    };
  },
  watch: {
    pageSize(val) {
      console.log('pageSize', val);
    },
    current(val) {
      console.log('current', val);
    }
  },
  created() {
    // api.listDictionaries({ searchType: 'VENUE' }).then(res => {
    //   if (res.code === 200) {
    //     this.roleArray = res.data.content;
    //   }
    // });
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log(this.form);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 选择部门列表数据
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    // 点击左侧部门列表搜索
    onSearch() {
      console.log(this.listSearch);
    },
    // 重置表格的查询条件
    reset() {
      this.userName = undefined;
      this.roleCode = undefined;
    },
    // 点击表格的查询条件
    search() {
      console.log(this.userName, this.roleCode);
    },
    // 点击删除
    handleDel(val) {
      alert('我是删除啊');
    },
    // 获取分页下拉第几页展示几个
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
      console.log(current, pageSize);
    },
    // 新增账号
    addAccount() {
      this.addOrEdit = 1;
      this.userVisible = true;
    },
    // 点击编辑
    handleEdit() {
      this.addOrEdit = 2;
      this.userVisible = true;
    },
    // 展开部门树形结构
    openTree() {
      this.openOrEndTreeFlag = true;
    },
    // 关闭部门树形结构
    endTree() {
      console.log(222);
      this.openOrEndTreeFlag = false;
    },
    // 关闭弹框
    handleOk(e) {
      console.log(e);
      this.userVisible = false;
    }
  }
};
</script>

<style lang="less" scoped>
.user {
  width: 100%;
  height: calc(100vh - 150px);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  .userList {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 5px;
    .userList-search {
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

    .userList-content {
      flex: 1;
      overflow: scroll;
      padding: 10px;
    }
    .userList-content::-webkit-scrollbar {
      display: none;
    }
  }
  .userMain {
    width: 79%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .userMain-search {
      width: 100%;
      height: 64px;
      background: white;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      .userMain-search-input {
        flex: 1;
        height: 64px;
        display: flex;
        align-items: center;
        padding: 0 0 0 60px;
      }
      .userMain-search-select {
        flex: 1;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0px;
      }
      .userMain-search-button {
        flex: 1;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 30px 0 0;
      }
    }
    .userMain-table {
      flex: 1;
      background: white;
      display: flex;
      flex-direction: column;

      .userMain-table-add {
        width: 100%;
        height: 64px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ececec;
        div {
          flex: 1;
          height: 64px;
          display: flex;
          align-items: center;
          padding: 0 0 0 60px;
          font-size: 18px;
        }
        div:nth-child(2) {
          flex: 1;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0px;
        }
        div:nth-child(3) {
          flex: 1;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 30px 0 0;
        }
      }
      .userMain-table-content {
        max-height: calc(100vh - 370px);
        padding: 10px;
        overflow: scroll;
      }
      .userMain-table-content /deep/ .ant-table-tbody .ant-table-row:nth-child(2n) {
        background: #fafafa;
      }
      .userMain-table-content::-webkit-scrollbar {
        display: none;
      }
    }
    .userMain-pag {
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
