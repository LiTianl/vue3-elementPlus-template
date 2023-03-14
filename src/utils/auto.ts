import cookies from 'js-cookie'

const key = 'token-name'
export const setItem = (token:string) => cookies.set(key, token, {expires: 1})

export const getItem = () => cookies.get(key)

export const removeItem = () => cookies.remove(key)





