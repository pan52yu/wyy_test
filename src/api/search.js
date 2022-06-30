import axios from '@/utils/request'

// 获取热搜列表
export const getHotList = () => axios({ url: '/search/hot' })
