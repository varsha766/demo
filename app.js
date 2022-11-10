const express = require('express')
const http = require('http');
const axios = require('axios')
const port = 4000;
const app = express();
const server = http.createServer(app);
const cors = require('cors');
app.use(express.static('public'));
app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
    try {
        const { data } = req.query
        return res.send(`Hi this is a get api ${data}` );   
    } catch (e) {
       return res.send(e)
    }
})

app.post('/test', (req, res) => {
    try {
        console.log(req.body)
        const data = req.body.id
        console.log(data)
    return res.send(`this is a post api request which take  ${data} in body`)
     
    } catch (e) {
       return res.send(e) 
    }
   
})
server.listen(port, () => {
    console.log('Server is running on port ', port)
})