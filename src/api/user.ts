import request from '@/utils/request'

export const login  = (data:{loginName:string;passWord:string}) => {
  return request({
    url: '',
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