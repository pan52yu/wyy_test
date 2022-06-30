import axios from '@/utils/request'

/**
 *  推荐歌单
 * @param {*} limit : 音乐条数
 * @returns
 */
export const getRecommendedSong = (limit) =>
  axios({
    url: '/personalized',
    params: {
      limit
    }
  })

// 获取最新音乐
export const getNewSongs = (limit) =>
  axios({
    url: '/personalized/newsong',
    params: {
      limit
    }
  })
