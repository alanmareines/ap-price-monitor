const fridge = {
  productInfo: { SKU: '1546662727' },
  priceInfo: [
    {
      site: 'Brastemp',
      url: 'https://www.brastemp.com.br/geladeira-brastemp-inverse-maxi-573-litros-bre80ak/p',
      selector: function () {
        document.querySelector('.preco-new_onMiddle_preco').innerText
      },
    },
    // {
    //   site: 'Amazon',
    //   url: 'https://www.amazon.com.br/Geladeira-Brastemp-Frost-Inverse-litros/dp/B07CJLD8G1/',
    //   selector: function () {
    //     return document.querySelector('#priceblock_ourprice').innerText
    //   },
    // },
    // {
    //   site: 'Fast Shop',
    //   url: 'https://www.fastshop.com.br/web/p/d/45370_PRD/refrigerador-freezer-inverse-brastemp-de-02-portas-frost-free-com-573-litros-smart-bar-inox-bre80ak',
    //   selector: function () {
    //     return document.querySelector('.price-fraction').innerText
    //   },
    // },
    // {
    //   site: 'Casas Bahia',
    //   url: 'https://www.casasbahia.com.br/Eletrodomesticos/GeladeiraeRefrigerador/2Portas/refrigerador-brastemp-side-inverse-bre80ak-frost-free-maxi-evox-573-l-6346452.html?IdSku=6346452',
    //   selector: function () {
    //     return document.querySelector('#product-price').innerText
    //   },
    // },
    // {
    //   site: 'Submarino',
    //   url: 'https://www.submarino.com.br/produto/124738331',
    //   selector: function () {
    //     return document.querySelector(
    //       '#root > div > div > div.src__Container-sc-1gt98wm-3.dpDJgV.src__ProductMainAreaSpaced-sc-1qa6ckp-0.dxXyys > div.src__ProductOffer-sc-1gt98wm-6.bBUhSs > div.src__Wrapper-metkak-0.gJkxHv > div.src__PriceWrapper-sc-1jnodg3-3.bvFzov > div'
    //     ).innerText
    //   },
    // },
    // {
    //   site: 'Shoptime',
    //   url: 'https://www.shoptime.com.br/produto/124738331/geladeira-refrigerador-brastemp-inverse-frost-free-bre80ak-573-litros-evox?pfm_carac=bre80ak&pfm_page=search&pfm_pos=grid&pfm_type=search_page&voltagem=110%20volts',
    //   selector: function () {
    //     return document.querySelector(
    //       '#content > div > div > div.GridUI-wcbvwm-0.gpGkIJ.ViewUI-sc-1ijittn-6.iXIDWU > div > section > div > div.product-main-area-b__ProductMainAreaUI-sc-6nk5j9-0.lbmySh.ViewUI-sc-1ijittn-6.iXIDWU > div.offer-box__Wrapper-sc-37mxxl-0.kHdmjg.ViewUI-sc-1ijittn-6.iXIDWU > div > div.buybox__BigSection-sc-103cgy4-1.gPCAXB.ViewUI-sc-1ijittn-6.iXIDWU > div:nth-child(1) > div > div.main-offer__ContainerUI-sc-17zco9r-0.jdfsgp.ViewUI-sc-1ijittn-6.iXIDWU > div:nth-child(1) > div > span'
    //     ).innerText
    //   },
    // },
    // {
    //   site: 'Extra',
    //   url: 'https://www.extra.com.br/Eletrodomesticos/GeladeiraeRefrigerador/2Portas/refrigerador-brastemp-side-inverse-bre80ak-frost-free-maxi-evox-573-l-6346452.html?IdSku=6346452',
    //   selector: function () {
    //     return document.querySelector('#product-price').innerText
    //   },
    // },
    // {
    //   site: 'Americanas',
    //   url: 'https://www.americanas.com.br/produto/124738331?pfm_carac=bre80ak&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page&voltagem=110%20volts',
    //   selector: function () {
    //     return document.querySelector(
    //       '#root > div > div > div.src__Container-dda50e-0.ihwNf > div.product-offer__Container-sc-1xm718r-0.knpcH > div.src__Wrapper-sc-1urqdh5-0.krjUEV > div.src__PriceWrapper-sc-1jvw02c-4.gxILPN > div'
    //     ).innerText
    //   },
    // },
    // {
    //   site: 'Magalu',
    //   url: 'https://www.magazineluiza.com.br/geladeira-brastemp-frost-free-inverse-573-litros-cor-inox-com-smart-bar-bre80ak-127v/p/kf5b1dceh3/ed/rinv/',
    //   selector: function () {
    //     return document.querySelector(
    //       'body > div.wrapper__main > div.wrapper__content.js-wrapper-content > div.wrapper__control > div.wrapper-product__content.wrapper-product__box-prime > div.wrapper-product__informations.js-block-product > div.information-values__product-page > div > div > div > span.price-template__text'
    //     ).innerText
    //   },
    // },
  ],
}

export default fridge
