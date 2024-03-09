const express = require('express')

const app =  express()
const PORT = process.env.PORT || 3977

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.status(200).send({ 
        msg: "Hello world!"
    })
})

app.post('/welcome', (req, res) => {
    const { username } = req.body
    res.status(200).send({ 
        msg: `Hola ${username}`
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

