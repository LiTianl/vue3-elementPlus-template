import request from '@/utils/request'
export const login = (data: { userName: string; passWord: string }) => {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}

export const userInfo = () => {
  return request({
    url: '',
    method: 'get'
  })
}