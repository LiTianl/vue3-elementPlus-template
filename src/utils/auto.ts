import cookies from 'js-cookie'

const key = 'token-name'
export const setItem = (token: string) => cookies.set(key, token, { expires: 1 })
export const getItem = () => cookies.get(key)
export const removeItem = () => cookies.remove(key)


export const setCookie = (key: string, value: string) => cookies.set(key, value)
export const getCookie = (key: string) => {
  const data = cookies.get(key)
  try {
    if (data){
      return JSON.parse(data)
    }
    return data
  } catch (e){
    return data
  }
}
export const removeCookie = (key: string) => cookies.remove(key)
