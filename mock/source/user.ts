import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/login',
    method: 'post',
    timeout: 1000,
    statusCode: 200,
    response: ({ body }) => {
      const { userName, passWord } = body
      if (userName === 'admin' && passWord === '123456') {
        return {
          code: 200,
          message: 'success',
          data: {
            token: '@word(50, 100)', // @word()是mockjs的语法
            refresh_token: '@word(50, 100)', // refresh_token是用来重新生成token的
          }
        }
      } else {
        return {
          code: 400,
          message: '用户名或密码错误',
        }
      }
    }
  }
] as MockMethod[]