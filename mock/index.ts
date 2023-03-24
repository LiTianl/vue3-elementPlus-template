import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import user from './source/user'



export function setupProdMockServer(){
  createProdMockServer(user)
}