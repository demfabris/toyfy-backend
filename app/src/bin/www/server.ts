import app from 'app'
import 'dotenv/config'

const serverPort = process.env.PORT || 443

app.listen(serverPort, () => {
    console.log(`Listening on ${serverPort}`)
})
