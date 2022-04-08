<template>
  <div class="header-container">
    <a-row style="height: 50px">
      <a-col :span="6">
        <router-link to="/" title="回到首页">
          <p class="logo">WE-BOLG</p>
        </router-link>
      </a-col>
      <a-col :span="1"/>
      <div class="aa">
        <a-col :span="1"><a href="https://www.csdn.net/?spm=1001.2100.3001.4476">社区</a></a-col>
        <a-col :span="1"><a href="https://www.csdn.net/?spm=1001.2100.3001.4476">问答</a></a-col>
        <a-col :span="1"><a href="https://www.csdn.net/?spm=1001.2100.3001.4476">资源</a></a-col>
        <a-col :span="1"><a href="https://www.csdn.net/?spm=1001.2100.3001.4476">天气</a></a-col>
      </div>
      <a-col :span="1"/>
      <a-col :span="6" style="margin: 10px 0 0 0">
        <a-input-search placeholder="输入要查询的博客-可以关键字" allowClear enter-button v-model="title" @search="onSearch"/>
      </a-col>
      <a-col :span="2" style="margin-top: 3px">
        <a-tooltip placement="right">
          <template slot="title">
            点我进入个人主页
          </template>
          <a-avatar size="large" shape="square" src="https://joeschmoe.io/api/v1/random" alt="你好" icon="user"/>
        </a-tooltip>
      </a-col>
      <a-col :span="4">
        <aPlayer :songInfo="songInfo"/>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import aPlayer from "@/components/aPlayer";

export default {
  name: 'Header',
  components: {
    aPlayer
  },
  data() {
    return {
      title: '',
      songInfo: {
        title: '我爱祖国.map3', //歌曲名称
        artist: '123', //演唱者
        lrc: '', //LRC 歌词或者歌词文件的 URL
        pic: '', //封面图片 URL
        src: 'https://music.163.com/song/media/outer/url?id=1466598056.mp3' //音频文件的 URL

      }
    }
  },
  methods: {
    onSearch(value) {
      this.$emit("materials", this.title); //触发 input 事件，并传入新值
      console.log("title =", value);
    },
    created() {
      console.log("title =", this.title)
    },
  }
}
</script>

<style scoped>
.header-container {
  width: 100%;
  background: white;
  text-align: center; /*全局文字居中*/
}

.logo {
  margin-bottom: -5px;
  margin-right: 5px;
  text-align: right;
  color: rgba(3, 31, 72, 0.98);
  font-size: 32px;
  font-family: 'yjsz', system-ui;
  font-weight: bold;
  font-style: italic;
  text-shadow: 5px 5px 3px #333;
}

.aa a {
  line-height: 50px; /*设置这个和height一样数值，实现垂直居中效果*/
  font-size: 18px;
  display: block;
  color: #001b44;
}

.aa a:hover {
  background-color: rgba(227, 235, 238, 0.93);
}
</style>

