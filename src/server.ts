import app from './app'
import { AppDataSource } from './data-source'

(async () =>{

  await AppDataSource.initialize().then(() => {
    console.log("Data Source initialized")
  }).catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

  app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...')
  })

})()
