import router from './router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { getItem } from './utils/auto'
import getPageTitle from './utils/get-page-title'
import { userAccount } from './pinia/modules'

const whiteList: string[] = ['login'] //白名单

nprogress.configure({
  speed: 1000,  // 递增进度条的速度
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3, // 初始化时的最小百分比
  showSpinner: false // 是否显示加载ico    
})

router.beforeEach(async (to, from, next) => {
  nprogress.start()
  const store = userAccount()
  // 如果获取不到token，则用户未登录
  if (!getItem()) {
    // 如果访问路径的name 存在白名单则允许通过，否则跳转登陆
    if (whiteList.indexOf(to.name as string) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
    nprogress.done()
  } else {
    // 如果用户已登录
    if (to.path === '/login') { // 如果目标地址是登录页
      next({ path: '/' })
      nprogress.done()
    } else {
      const roles = store._roles && store._roles.length > 0
      if (roles) {
        next()
        nprogress.done()
      } else {
        try {
          const res = await store.getUserInfo()
          console.log(res)
          next({ ...to, replace: true })
        } catch (err) {
          store.clearUserInfo()
          next(`/login?redirect=${to.path}`)
        }
        nprogress.done()
      }
    }
  }
})


router.afterEach((to) => {
  document.title = getPageTitle(to.meta.title as string)
})