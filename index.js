import { checkPrice, launchBrowser, closeBrowser } from './browser.js'
import * as cheerio from 'cheerio'

const monitor = async (string, url, selector) => {
  const { page, browser } = await launchBrowser(url)
  let price = await checkPrice(page, selector)
  price.includes('R$') ? price : (price = `R$ ${price}`)
  console.log(string, price)
  await closeBrowser(browser)
}

await monitor(
  'Cooktop price => ',
  'https://loja.electrolux.com.br/cooktop-a-gas-5-bocas-preto-pro-series-electrolux-gv75p-/p',
  function callback() {
    return document.querySelector('.skuBestPrice').innerText
  }
)

await monitor(
  'Amazon price => ',
  'https://www.amazon.com.br/Cooktop-Electrolux-GV75P-Bocas-Preto/dp/B084BTCV5G',
  function callback() {
    return document.querySelector('#priceblock_ourprice').innerText
  }
)

await monitor(
  'Fast price => ',
  'https://www.fastshop.com.br/web/p/d/EXGV75P_PRD/cooktop-electrolux-05-bocas-preto-gc75p-fast',
  function callback() {
    return document.querySelector('.price-fraction').innerText
  }
)

await monitor(
  'Casas Bahia price => ',
  'https://www.casasbahia.com.br/cooktop-a-gas-electrolux-pro-series-de-vidro-com-5-bocas-preto-gv75p-1514129143/p/1514129143',
  function callback() {
    return document.querySelector('#product-price').innerText
  }
)

await monitor(
  'Ponto Frio price => ',
  'https://www.pontofrio.com.br/cooktop-a-gas-electrolux-pro-series-de-vidro-com-5-bocas-preto-gv75p-1514129143/p/1514129143',
  function callback() {
    return document.querySelector('#product-price').innerText
  }
)

await monitor(
  'Shoptime price => ',
  'https://www.shoptime.com.br/produto/1546662727',
  function callback() {
    return document.querySelector(
      '#content > div > div > div.GridUI-wcbvwm-0.gpGkIJ.ViewUI-sc-1ijittn-6.iXIDWU > div > section > div > div.product-main-area-b__ProductMainAreaUI-sc-6nk5j9-0.lbmySh.ViewUI-sc-1ijittn-6.iXIDWU > div.offer-box__Wrapper-sc-37mxxl-0.kHdmjg.ViewUI-sc-1ijittn-6.iXIDWU > div > div.buybox__BigSection-sc-103cgy4-1.gPCAXB.ViewUI-sc-1ijittn-6.iXIDWU > div:nth-child(1) > div > div.main-offer__ContainerUI-sc-17zco9r-0.jdfsgp.ViewUI-sc-1ijittn-6.iXIDWU > div > div:nth-child(2) > span'
    ).innerText
  }
)

await monitor(
  'Submarino price => ',
  'https://www.submarino.com.br/produto/1546662727',
  function callback() {
    return document.querySelector(
      '#root > div > div > div.src__Container-sc-1gt98wm-3.dpDJgV.src__ProductMainAreaSpaced-sc-1qa6ckp-0.dxXyys > div.src__ProductOffer-sc-1gt98wm-6.bBUhSs > div.src__Wrapper-metkak-0.gJkxHv > div.src__PriceWrapper-sc-1jnodg3-3.bvFzov > div'
    ).innerText
  }
)

await monitor(
  'Extra price => ',
  'https://www.extra.com.br/cooktop-a-gas-electrolux-pro-series-de-vidro-com-5-bocas-preto-gv75p-1514129143/p/1514129143',
  function callback() {
    return document.querySelector('#product-price').innerText
  }
)

await monitor(
  'Americanas price => ',
  'https://www.americanas.com.br/produto/1546662727',
  function callback() {
    return document.querySelector(
      '#root > div > div > div.src__Container-dda50e-0.ihwNf > div.product-offer__Container-sc-1xm718r-0.knpcH > div.src__Wrapper-sc-1urqdh5-0.krjUEV > div.src__PriceWrapper-sc-1jvw02c-4.gxILPN > div'
    ).innerText
  }
)
