import axios from '@/utils/request'

// 获取热搜列表
export const getHotList = () => axios({ url: '/search/hot' })
// 获取搜索列表
export const getSearch = (keywords, limit, offset) =>
  axios({
    url: '/cloudsearch',
    params: {
      keywords,
      limit,
      offset
    }
  })
