import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.send("Hello World!")
})

const greetingsList = [
    'Hello World!',
    'Namaste!',
    'Bonjur Monde!',
    'Hallo Welt!'
]

router.get('/greetings' ,async (req, res)=>{
    res.json(greetingsList)
})

router.get('/visitors', async(req, res) => {
    const visitorCount = Math.floor(Math.random() * 1000)
    res.json(visitorCount)
})

export default router