<!--
 * @Author: your name
 * @Date: 2021-08-24 11:28:34
 * @LastEditTime: 2022-02-14 15:36:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ant-design-vue-pro\src\components\GlobalHeader\AvatarDropdown.vue
-->
<template>
  <div>
    <a-dropdown v-if="currentUser && currentUser.name" placement="bottomRight">
      <span class="ant-pro-account-avatar">
        <a-avatar
          size="small"
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          class="antd-pro-global-header-index-avatar"
        />
        <span>{{ currentUser.name }}</span>
      </span>
      <template v-slot:overlay>
        <a-menu class="ant-pro-drop-down menu" :selected-keys="[]">
          <!-- <a-menu-item v-if="menu" key="center" @click="handleToCenter">
          <a-icon type="user" />
          {{ $t('menu.account.center') }}
        </a-menu-item>
        <a-menu-item v-if="menu" key="settings" @click="handleToSettings">
          <a-icon type="setting" />
          {{ $t('menu.account.settings') }}
        </a-menu-item>
        <a-menu-divider v-if="menu" /> -->
          <a-menu-item key="editPass" @click="handlEditPass">
            <a-icon type="edit" />
            修改密码
          </a-menu-item>
          <a-menu-item key="logout" @click="handleLogout">
            <a-icon type="logout" />
            {{ $t('menu.account.logout') }}
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <span v-else>
      <a-spin size="small" :style="{ marginLeft: 8, marginRight: 8 }" />
    </span>
    <a-modal v-model="visible" title="修改密码" @cancel="handleCancel" :footer="null">
      <a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item ref="oldPassword " label="旧密码" prop="oldPassword">
          <a-input type="password" placeholder="请输入旧密码" class="inputs" v-model="form.oldPassword" />
        </a-form-model-item>
        <a-form-model-item ref="newPassword" label="新密码" prop="newPassword">
          <a-input type="password" placeholder="请输入新密码" class="inputs" v-model="form.newPassword" />
        </a-form-model-item>
        <a-form-model-item ref="confirmPassword" label="确认密码" prop="confirmPassword">
          <a-input type="password" placeholder="请确认密码" class="inputs" v-model="form.confirmPassword" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit" style="border-radius:10px;">
            保存
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
import { Modal } from 'ant-design-vue';
import { userChangePassword } from '@/api/api';
export default {
  name: 'AvatarDropdown',
  props: {
    currentUser: {
      type: Object,
      default: () => null
    },
    menu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'));
      } else {
        if (this.form.newPassword !== value) {
          callback(new Error('两次密码输入不一致'));
        }
      }
      callback();
    };
    return {
      user: '',
      visible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      rules: {
        oldPassword: [{ required: true, message: '请输入旧密码', trigger: 'blur' }],
        newPassword: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
        confirmPassword: [{ required: true, validator: validatePass }]
      }
    };
  },
  methods: {
    handleToCenter() {
      this.$router.push({ path: '/demos/account/center' });
    },
    handleToSettings() {
      this.$router.push({ path: '/demos/account/settings' });
    },
    handleLogout(e) {
      Modal.confirm({
        title: this.$t('layouts.usermenu.dialog.title'),
        content: this.$t('layouts.usermenu.dialog.content'),
        onOk: () => {
          // return new Promise((resolve, reject) => {
          //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1500)
          // }).catch(() => console.log('Oops errors!'))
          return this.$store.dispatch('Logout').then(() => {
            if (process.env.NODE_ENV === 'production') {
              window.location.href = window.location.href.split('#')[0] + 'logout';
            } else {
              this.$router.push({ name: 'login' });
            }
          });
        },
        onCancel() {}
      });
    },
    handlEditPass() {
      this.visible = true;
      console.log(this.$store.state.user.info.id);
    },
    handleCancel(e) {
      this.clearForm();
    },
    /**
     * @description: 清空表单
     */
    clearForm() {
      this.$refs.ruleForm.resetFields();
      this.form = this.$options.data.call(this).form;
      this.visible = false;
    },
    /**
     * @description: 提交表单
     */
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.form.confirmPassword = undefined;
          userChangePassword({ body: this.form }).then(resp => {
            if (resp.code === 200) {
              this.$message.success(resp.message);
              this.clearForm();
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.ant-pro-drop-down {
  /deep/ .action {
    margin-right: 8px;
  }
  /deep/ .ant-dropdown-menu-item {
    min-width: 160px;
  }
}
</style>
