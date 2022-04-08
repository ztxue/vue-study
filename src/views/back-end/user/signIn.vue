<template>
  <div class="_452c3ec4 d68c66a8">
    <div class="_75ce47e7">
      <main>
        <div class="_94d452dc">
          <section class="_2b1f4808 bg-white br3">
            <div class="_66e908c6">
              <div class="_98d1fd92">
                <div class="_0c4ed431">
                  <div class="bac87ec6">
                    <div class="_83938fda">
                      <div class="_33c43af5">
                        <div class="e7114814">
                          <img src="@/assets/images/1.png" class="_489835f0" alt=""/>
                          <img src="@/assets/images/2.png" class="fe2acb34" alt=""/>
                          <img src="@/assets/images/3.png" class="_8fb7c421" alt=""/>
                        </div>
                      </div>
                      <img src="@/assets/images/4.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <a-form :model="loginBean" :rules="dataRule" ref="loginBean" @keyup.enter.native="loginBeanSubmit()"
                      status-icon>
                <a-form-item prop="username">
                  <a-input v-model="loginBean.loginName" placeholder="帐号">
                    <a-icon slot="prefix" type="user"/>
                  </a-input>
                </a-form-item>
                <a-form-item prop="password">
                  <a-input v-model="loginBean.loginPassword" type="password" placeholder="密码">
                    <a-icon slot="prefix" type="unlock"/>
                  </a-input>
                </a-form-item>
                <a-form-item prop="captcha">
                  <a-row :gutter="20">
                    <a-col :span="14">
                      <a-input v-model="loginBean.captcha" placeholder="验证码">
                      </a-input>
                    </a-col>
                    <a-col :span="10" class="login-captcha">
                      <img :src="captchaPath" @click="getCaptcha()" alt="">
                    </a-col>
                  </a-row>
                </a-form-item>
                <a-form-item>
                  <a-button class="submit" type="primary" @click="loginBeanSubmit()">登录</a-button>
                </a-form-item>
              </a-form>
            </div>
          </section>
        </div>
      </main>
    </div>
    <div class="_8a62ca63 fixed top-0 left-0 z-999" style="opacity: 0; transform: scaleX(1);"></div>
  </div>
</template>

<script>
import "/src/assets/css/login.css"
import {message} from "ant-design-vue";
import {login} from "@/services/login/login";

export default {
  data() {
    return {
      loginBean: {
        loginName: '',
        loginPassword: '',
        uuid: '',
        captcha: ''
      },
      dataRule: {
        loginName: [
          {required: true, message: '帐号不能为空', trigger: 'blur'}
        ],
        loginPassword: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ],
        captcha: [
          {required: true, message: '验证码不能为空', trigger: 'blur'}
        ]
      },
      captchaPath: ''
    }
  },
  created() {
    // this.getCaptcha()
  },
  methods: {
    // 提交表单
    loginBeanSubmit() {
      login(this.loginBean.loginName, this.loginBean.loginPassword)
          .then(response => {
            const params = response.data;
            if (params && params.code === '200') {
              message.loading('加载中...', 1.5)
                  .then(() => {
                    message.success(params.msg, 1, () => {
                      localStorage.setItem('token', params.data)
                      this.$router.push({path: '/home'})
                    })
                  }).catch(() => {
                console.log('99999999999')
              })
            } else {
              message.error(params.msg, 2, () => {
                this.$router.push({path: '/'})
              })
            }
            console.log(response)
          })

    },
    // 获取验证码
    getCaptcha() {
      // this.loginBean.uuid = getUUID()
      this.loginBean.uuid = 666;
      this.captchaPath = this.$http.adornUrl(`/captcha.jpg?uuid=${this.loginBean.uuid}`)
    }
  }
};
</script>

<style>
/* 登陆按钮 */
.submit {
  width: 100%;
  height: 45px;
  font-size: 16px;
}
</style>
