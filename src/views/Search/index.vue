<template>
  <div>
    <van-search
      shape="round"
      clear-trigger="always"
      v-model="value"
      placeholder="请输入搜索关键词"
    />

    <div class="hot-search" v-if="value.trim() === ''">
      <van-cell title="热门搜索" />
      <van-button
        v-for="(item, index) in hotLists"
        :key="index"
        class="btn"
        type="default"
        round
        @click="value = item.first"
        >{{ item.first }}</van-button
      >
    </div>
    <div class="search-results" v-else>搜索结果</div>
  </div>
</template>

<script>
import { getHotList } from '@/api'
export default {
  name: 'Search',
  data() {
    return {
      value: '',
      hotLists: []
    }
  },
  created() {
    this.getHotList()
  },
  methods: {
    async getHotList() {
      const { data } = await getHotList()
      this.hotLists = data.result.hots
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  margin: 3px 4px;
  border: 1px solid #d3d4da;
}
</style>
