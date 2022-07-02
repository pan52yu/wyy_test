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
    <div class="search-results" v-else>
      <van-list
        @load="loadings"
        offset="1"
        v-model="loading"
        :immediate-check="false"
        :finished="isFinished"
        finished-text="没有数据了"
      >
        <SongItem
          v-for="item in searchList"
          :key="item.id"
          :id="item.id"
          :title="item.name"
          :label="item.ar[0].name + '---' + item.name"
        ></SongItem>
      </van-list>
    </div>
  </div>
</template>

<script>
import { getHotList, getSearch } from '@/api'
import SongItem from '@/components/SongItem.vue'
export default {
  name: 'Search',
  components: { SongItem },
  data() {
    return {
      value: '',
      hotLists: [],
      limit: 10,
      searchList: [],
      loading: false,
      page: 1,
      isFinished: false
    }
  },
  created() {
    this.getHotList()
  },
  watch: {
    value() {
      this.value = this.value.trim()
      if (this.value.trim() === '') return
      this.getSearch()
    }
  },
  methods: {
    async getHotList() {
      const { data } = await getHotList()
      this.hotLists = data.result.hots
    },
    getSearch() {
      // 防抖
      if (this.timer !== 0) clearTimeout(this.timer)
      this.page = 1
      this.timer = setTimeout(async () => {
        const { data } = await getSearch(this.value, this.limit)
        this.searchList = data.result.songs
      }, 300)
    },
    async loadings() {
      const { data } = await getSearch(
        this.value,
        this.limit,
        this.page * this.limit
      )
      if (!data.result.songs) {
        return (this.isFinished = true)
      }
      this.searchList.push(...data.result.songs)
      this.page++
      this.loading = false
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
