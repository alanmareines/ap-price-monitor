import express from 'express'
import CooktopController from './controllers/cooktopController.js'
import FridgeController from './controllers/fridgeController.js'
import cron from 'node-cron'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  const cooktopController = new CooktopController()
  const fridgeController = new FridgeController()

  cron.schedule('0 4,12,20 * * *', cooktopController.run)
  cron.schedule('0 5,13,21 * * *', fridgeController.run)
})
