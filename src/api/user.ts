import request from '@/utils/request'
console.log("🚀 ~ file: user.ts:4 ~ login ~ login:", request)

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