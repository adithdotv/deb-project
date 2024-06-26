import express from 'express'

import apiroutes from './api-routes.js'

const listen_port = 3005;

const app = express()

app.use('/', apiroutes)

app.listen(listen_port, ()=>{
    console.log(`App listening to port ${listen_port}`)
})