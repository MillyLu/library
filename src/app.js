
const express = require('express');

const app = express();

const dotenv = require('dotenv');
const cors = require('./middlewares/cors');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const Router = require('./routes/route');
const logger = require('./middlewares/logger');

dotenv.config();

const { PORT = 3005, API_URL = 'http://127.0.0.1', MONGO_DB = 'mongodb://127.0.0.1:27017/library'} = process.env;

 mongoose.connect(`${MONGO_DB}`);



 app.get('/', (request, response) => {
    response.statusCode = 200;
    response.send("Hello, World");
}); 


//  app.use(cors);
app.use(bodyParser.json());
app.use(cors);
app.use(logger);
app.use(Router);

app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});









/* const server = http.createServer(function(request, response) {
    const url = new URL(request.url, 'http://127.0.0.1');
    const params = url.searchParams;
    const name = params.get("hello");
    
    if(name) {
        response.statusCode = 200;
        response.statusMessage = 'OK';
        response.setHeader("Content-Type", "text/html; charset=utf8");
        response.write(`<h1>Hello, ${name}</h1>`);
        response.end();

        return
    }
    else if(!name & params.has('hello')) {
    response.statusCode = 400;
    response.statusMessage = 'Bad Request';
    response.setHeader("Content-Type", "text/html; charset=utf8");
    response.write("<h1>Enter a name</h1>");
    response.end();

    return
    }
    else if( params.has('users')) {
    response.statusCode = 200;
    response.statusMessage = 'OK';
    response.setHeader("Content-Type", "application/json");
    response.write(getUsers());
    response.end();

    return
    }

    else if(![...params].length) {
        response.statusCode = 200;
        response.statusMessage = 'OK';
        response.setHeader("Content-Type", "text/html; charset=utf8");
        response.write("<h1>Hello, world!</h1>");
        response.end();
    
        return
    }

    else {
        response.statusCode = 500;
        response.statusMessage = 'Internal Server Error';
        response.setHeader("Content-Type", "text/html; charset=utf8");
        response.write(``);
        response.end();
    }
    
})

server.listen(port, hostname, () => {
    console.log(`Сервер запущен по адресу http://${hostname}:${port}/`)
}); */