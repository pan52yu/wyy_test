<template>
  <van-cell
    :title="title"
    :label="label"
    center
    class="new-son"
    @click="goPaly"
  >
    <van-icon name="play-circle-o" />
  </van-cell>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    id: {
      type: [Number, String],
      required: true
    }
  },
  methods: {
    goPaly() {
      this.$router.push({
        path: '/play',
        query: { id: this.id }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.new-son {
  border-bottom: 1px solid #ccc;
  .van-cell__title {
    flex: 4;
  }
}
</style>
