<template>
  <div>
    <!-- 推荐歌单 -->
    <van-cell title="推荐歌单" class="vt-cell" />
    <van-grid :column-num="3" :border="false">
      <van-grid-item
        v-for="item in recommendedSongList"
        :key="item.id"
        :icon="item.picUrl"
        :text="item.name"
      />
    </van-grid>
    <!-- 最新音乐 -->
    <van-cell title="最新音乐" class="vt-cell" />

    <SongItem
      v-for="item in newSongs"
      :key="item.id"
      :title="item.name"
      :label="item.song.artists[0].name + '---' + item.name"
    ></SongItem>
  </div>
</template>

<script>
import { getRecommendedSong, getNewSongs } from '@/api'
import SongItem from '@/components/SongItem.vue'
export default {
  name: 'Home',
  components: { SongItem },
  data() {
    return {
      recommendedSongList: [],
      newSongs: []
    }
  },
  created() {
    this.getRecommendedSongList()
    this.getNewSongs()
  },
  methods: {
    // 获取推荐歌单列表
    async getRecommendedSongList() {
      const res = await getRecommendedSong(6)
      this.recommendedSongList = res.data.result
    },
    // 获取最新音乐
    async getNewSongs() {
      const res = await getNewSongs()
      this.newSongs = res.data.result
    }
  }
}
</script>

<style lang="less" scoped>
.vt-cell {
  background-color: #eee;
  margin: 5px 0 10px;
}
/deep/.van-grid-item__icon {
  font-size: 100px;
}
/deep/.van-grid-item__content {
  padding: 2px;
}
/deep/.van-grid-item__text {
  height: 36px;
  width: 120px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
