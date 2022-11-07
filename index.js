const express=require('express')
const port = 3000
const app = express()

app.get('/user', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port,()=>{
    console.log(`App is listening to port number ${port}`)
})

