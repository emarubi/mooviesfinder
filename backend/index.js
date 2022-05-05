const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors')
const Redis = require('redis')

// const runApp = async () =>  {

    const PORT = process.env.PORT || 4000;

    // const DEFAULT_EXPIRATION = 86400
    // const client = Redis.createClient()
    // client.on('error', (err) => console.log('Redis Client Error', err));
    // await client.connect();
    // console.log('Redis connected!')

    const express = require('express')
    const app = express()
    const path = require('path')

    app.use(cors("*"))

    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const router = require('./app/router')
    app.use(router)

    app.set('views', path.join(__dirname, 'app/views'))
    app.set('view engine', 'ejs')


    app.listen(PORT, () => {
        console.log(`server started at port ${PORT}`)
    })
// }


// runApp()