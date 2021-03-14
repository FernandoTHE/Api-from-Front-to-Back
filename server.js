const express = require ('express')
const app = express ()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    return res.json([
        {name:'Fernando'},
        {name:'Fernando'}
    ])
})
app.listen('4567')