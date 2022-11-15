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
        return res.send('yes' );   
    } catch (e) {
       return res.send(e)
    }
})

app.post('/', (req, res) => {
    try {
        const { data } = req.body
    return res.send('yes')
     
    } catch (e) {
        console.log(e)
     return res.status(500).send({ status: 500, message: 'Error occured', error: e });
    }
   
})
server.listen(port, () => {
    console.log('Server is running on port ', port)
})