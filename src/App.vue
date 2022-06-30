<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import axios from '@/utils/request'

export default {
  created() {
    console.log(axios.defaults)
  }
}
</script>

<style>

</style>
