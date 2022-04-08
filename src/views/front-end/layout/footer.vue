<template>
  <div class="footer-container">
    <div>
      <a-back-top/><!--回到顶部-->
    </div>
    <div class="footer-content">
      <ul class="footer-li">
        <li style="float: left;display: block;margin: 0 50px 0 0;">
          <a href="" style="font-size: 18px;color:#000;">平台服务</a>
          <ul>
            <li style="padding: 15px 0 5px 0">
              <a href="" style="color:#000;">个人页</a>
            </li>
            <li style="padding: 0 0 5px 0">
              <a href="" style="color:#000;">社区</a>
            </li>
            <li style="padding: 0 0 5px 0">
              <a href="" style="color:#000;">问答</a>
            </li>
            <li style="padding: 0 0 5px 0">
              <a href="" style="color:#000;">资源</a>
            </li>
          </ul>
        </li>
        <li style="float: left;display: block;margin: 0 80px 0 100px">
          <a href="" style="font-size: 18px;color:#000;">关于我们</a>
          <ul>
            <li style="padding: 15px 0 5px 0">
              <a-tooltip>
                <template slot="title">
                  <img :src="me" style="height:120px;width: 200px;" alt="你好"/>
                </template>
                关于作者
              </a-tooltip>
            </li>
            <li style="padding: 0 0 5px 0">
              <a-tooltip>
                <template slot="title">
                  <p><a-icon type="qq"/>&nbsp;1792016308</p>
                  <p><a-icon type="wechat" theme="filled" />&nbsp;Handsomeztxue</p>
                </template>
                联系作者
              </a-tooltip>
            </li>
            <li style="padding: 0 0 5px 0">
              <a-tooltip >
                <template slot="title">
                  Wechatpay:<img :src="Wechatpay" style="height:200px;width: 200px;" alt="你好"/>
                  Alipay:<img :src="Alipay" style="height:200px;width: 200px;" alt="你好"/>
                </template>
                帮助作者
              </a-tooltip>
            </li>
          </ul>
        </li>
        <li style="float: left;display: block;">
          <a href="https://1x.antdv.com/components/tooltip-cn/"
             style="font-size: 18px;color:#000;text-align: left;">品牌方</a>
          <ul style="padding-top: 15px">
            <a-tooltip >
              <template slot="title">
                <img :src="shuLog" style="height:67px;width: 197px;" alt="你好"/>
              </template>
              <img :src="shuLog" style="height:67px;width: 197px;" alt="你好"/>
            </a-tooltip>

          </ul>
        </li>
      </ul>
      <a-divider/>
      <p>专利/备案信息</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      shuLog: require('@/assets/logo.png'),
      me: require('@/assets/logo.webp'),
      Alipay: require('@/assets/QRcode/Alipay.jpg'),
      Wechatpay: require('@/assets/QRcode/WeChatPay.jpg'),
    }
  }
}
</script>

<style scoped>
.footer-container {
  height: 251px;
  width: 100%;
  background: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center
}

.footer-content {
  width: 70%;
  height: 230px;
}

.footer-li {
  margin: 0 0 0 20%;
}
</style>
