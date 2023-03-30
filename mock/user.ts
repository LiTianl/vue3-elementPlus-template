import { MockMethod } from 'vite-plugin-mock'

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a Super Admin',
    avatar: '',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an Editor',
    avatar: '',
    name: 'Normal Editor'
  }
}
export default [
  {
    url: '/api/login',
    method: 'post',
    timeout: 1000,
    statusCode: 200,
    response: ({ body }) => {
      const { userName, passWord } = body
      if ((userName === 'admin' || userName === 'editor') && passWord === '123456') {
        return {
          code: 200,
          message: 'success',
          data: {
            token: `${userName}-token`, // @word()是mockjs的语法
          }
        }
      } else {
        return {
          code: 400,
          message: 'User name or password error.',
        }
      }
    }
  }, {
    url: '/api/userinfo',
    method: 'get',
    timeout: 1000,
    statusCode: 200,
    response: config => {
      const { token } = config.query
      const info = users[token]
      if (!info) {
        return {
          code: 500,
          message: 'Login failed, unable to get user details.'
        }
      }
      return {
        code: 200,
        message: 'Login successful',
        data: info
      }
    }
  },
  {
    url: '/api/test',
    method: 'get',
    timeout: 1000,
    statusCode: 200,
    response: config => {
      return {
        code: 200,
        message: 'Login successful',
        data: users['admin-token']
      }
    }
  }
] as MockMethod[]