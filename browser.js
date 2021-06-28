import puppeteer from 'puppeteer'

export const launchBrowser = async (url) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setExtraHTTPHeaders({
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
    'upgrade-insecure-requests': '1',
    accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9,en;q=0.8',
  })
  await page.goto(url)
  return { page, browser }
}

export const checkPrice = async (page, callback) => {
  const text = await page.evaluate(callback)
  console.log(text)
  return text
}

export const closeBrowser = async (browser) => {
  await browser.close()
}
