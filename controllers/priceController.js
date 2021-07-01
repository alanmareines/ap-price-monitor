import { checkPrice, createPage, closeBrowser } from '../utils/browser.js'

export const priceController = async (page, string, url, selector) => {
  console.log('Fetching price...')
  page = await createPage(page, url)
  let price = await checkPrice(page, selector)
  try {
    price.includes('R$') ? price : (price = `R$ ${price}`)
    console.log(string, price)
    return price
  } catch (error) {
    console.log(error)
  }
  return price
}
