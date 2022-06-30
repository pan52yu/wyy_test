<template>
  <div id="layout">
    <!-- 头部导航 -->
    <!-- 通过 this.$route.path 可以拿到当前路由路径 -->
    <van-nav-bar :title="tableTitle" />
    <!-- 内容 -->
    <main>
      <router-view></router-view>
    </main>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      active: 0
    }
  },
  computed: {
    tableTitle() {
      return this.$route.path === '/layout/home' ? '首页' : '搜索'
    }
  }
}
</script>

<style lang="less" scoped>
#layout {
  padding: 50px 0;
  max-height: calc(100vh - 100px);
  overflow: auto;
}
.van-nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
