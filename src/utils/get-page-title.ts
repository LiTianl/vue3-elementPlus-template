
const title = 'vue3 elementPlus Template'

export default function getPageTitle(pageTitle:string):string{

  if (pageTitle){
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}