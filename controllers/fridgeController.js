import Fridge from './models/fridge.js'
import { closeBrowser, launchBrowser } from '../utils/browser.js'
import { writeSheetData } from './googleController.js'
import { priceController } from './priceController.js'

export default class FridgeController {
  async run() {
    const { browser, page } = await launchBrowser()
    const today = new Date(Date.now())
    const fridgeValues = [['Geladeira'], [today.toDateString()]]

    for (const site of Fridge.priceInfo) {
      const price = await priceController(
        page,
        `Preço geladeira na ${site.site}`,
        site.url,
        site.selector
      )
      fridgeValues.push([price])
    }

    await writeSheetData(fridgeValues)

    await closeBrowser(browser)
  }
}
