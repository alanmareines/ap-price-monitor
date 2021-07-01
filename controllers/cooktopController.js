import Cooktop from '../models/cooktop.js'
import { closeBrowser, launchBrowser } from '../utils/browser.js'
import { writeSheetData } from './googleController.js'
import { priceController } from './priceController.js'

export default class CooktopController {
  async run() {
    const { browser, page } = await launchBrowser()
    const today = new Date(Date.now())
    const cooktopValues = [['Cooktop'], [today.toDateString()]]

    for (const site of Cooktop.priceInfo) {
      const price = await priceController(
        page,
        `Preço cooktop na ${site.site}`,
        site.url,
        site.selector
      )

      cooktopValues.push([price])
    }

    await writeSheetData(cooktopValues)

    await closeBrowser(browser)
  }
}
