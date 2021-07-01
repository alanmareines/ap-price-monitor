import puppeteer from 'puppeteer'

export const launchBrowser = async () => {
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
  await page.setJavaScriptEnabled(true)
  await page.cookies()
  await page.setViewport({
    width: 1280,
    height: 1024,
    deviceScaleFactor: 1,
  })
  return { browser, page }
}

export const createPage = async (page, url) => {
  await page.goto(url)
  await page.waitForTimeout(5000)
  await page.screenshot({ path: 'screenshot.png' })
  return page
}

export const checkPrice = async (page, callback) => {
  try {
    const text = await page.evaluate(callback)
    return text
  } catch (error) {
    console.log('*** Error finding element ***')
  }
}

export const closeBrowser = async (browser) => {
  await browser.close()
}
