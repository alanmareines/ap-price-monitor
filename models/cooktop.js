const cooktop = {
  productInfo: { SKU: '1546662727' },
  priceInfo: [
    {
      site: 'Electrolux',
      url: 'https://loja.electrolux.com.br/cooktop-a-gas-5-bocas-preto-pro-series-electrolux-gv75p-/p',
      selector: function () {
        return document.querySelector('.skuBestPrice').innerText
      },
    },
    {
      site: 'Amazon',
      url: 'https://www.amazon.com.br/Cooktop-Electrolux-GV75P-Bocas-Preto/dp/B084BTCV5G',
      selector: function () {
        return document.querySelector('#priceblock_ourprice').innerText
      },
    },
    {
      site: 'Fast Shop',
      url: 'https://www.fastshop.com.br/web/p/d/EXGV75P_PRD/cooktop-electrolux-05-bocas-preto-gc75p-fast',
      selector: function () {
        return document.querySelector('.price-fraction').innerText
      },
    },
    {
      site: 'Casas Bahia',
      url: 'https://www.casasbahia.com.br/cooktop-a-gas-electrolux-pro-series-de-vidro-com-5-bocas-preto-gv75p-1514129143/p/1514129143',
      selector: function () {
        return document.querySelector('#product-price').innerText
      },
    },
    {
      site: 'Submarino',
      url: 'https://www.submarino.com.br/produto/1546662727',
      selector: function () {
        return document.querySelector(
          '#root > div > div > div.src__Container-sc-1gt98wm-3.dpDJgV.src__ProductMainAreaSpaced-sc-1qa6ckp-0.dxXyys > div.src__ProductOffer-sc-1gt98wm-6.bBUhSs > div.src__Wrapper-metkak-0.gJkxHv > div.src__PriceWrapper-sc-1jnodg3-3.bvFzov > div'
        ).innerText
      },
    },
    {
      site: 'Shoptime',
      url: 'https://www.shoptime.com.br/produto/1546662727/cooktop-a-gas-electrolux-pro-series-de-vidro-com-5-bocas-preto-gv75p',
      selector: function () {
        return document.querySelector(
          '#content > div > div > div.GridUI-wcbvwm-0.gpGkIJ.ViewUI-sc-1ijittn-6.iXIDWU > div > section > div > div.product-main-area-b__ProductMainAreaUI-sc-6nk5j9-0.lbmySh.ViewUI-sc-1ijittn-6.iXIDWU > div.offer-box__Wrapper-sc-37mxxl-0.kHdmjg.ViewUI-sc-1ijittn-6.iXIDWU > div > div.buybox__BigSection-sc-103cgy4-1.gPCAXB.ViewUI-sc-1ijittn-6.iXIDWU > div:nth-child(1) > div > div.main-offer__ContainerUI-sc-17zco9r-0.jdfsgp.ViewUI-sc-1ijittn-6.iXIDWU > div > div:nth-child(2) > span'
        ).innerText
      },
    },
    {
      site: 'Extra',
      url: 'https://www.extra.com.br/cooktop-a-gas-electrolux-pro-series-de-vidro-com-5-bocas-preto-gv75p-1514129143/p/1514129143',
      selector: function () {
        return document.querySelector('#product-price').innerText
      },
    },
    {
      site: 'Americanas',
      url: 'https://www.americanas.com.br/produto/1546662727',
      selector: function () {
        return document.querySelector(
          '#root > div > div > div.src__Container-dda50e-0.ihwNf > div.product-offer__Container-sc-1xm718r-0.knpcH > div.src__Wrapper-sc-1urqdh5-0.krjUEV > div.src__PriceWrapper-sc-1jvw02c-4.gxILPN > div'
        ).innerText
      },
    },
    {
      site: 'Magalu',
      url: 'https://www.magazineluiza.com.br/cooktop-a-gas-electrolux-pro-series-de-vidro-com-5-bocas-preto-gv75p/p/fh7581h420/ed/cook/',
      selector: function () {
        return document.querySelector(
          'body > div.wrapper__main > div.wrapper__content.js-wrapper-content > div.wrapper__control > div.wrapper-product__content.wrapper-product__box-prime > div.wrapper-product__informations.js-block-product > div.information-values__product-page > div > div.price-template__cash > div > span.price-template__text'
        ).innerText
      },
    },
  ],
}

export default cooktop
