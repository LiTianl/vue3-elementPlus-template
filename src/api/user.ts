import request from '@/utils/request'
export const login = (data: { userName: string; passWord: string }) => {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}

export const userInfo = (token: string) => {
  return request({
    url: '/api/userinfo',
    method: 'get',
    params: { token }
  })
}