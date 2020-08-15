import express from 'express'
import cors from 'cors'

class App {
    express: express.Application

    constructor() {
        this.express = express()

        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        console.log('Missing database')
    }

    private routes(): void {
        this.express.get('/', (_, res) => res.json({ message: 'hello toyfy' }))
    }
}

export default new App().express
