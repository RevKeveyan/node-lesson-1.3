const http = require('http');
const {getUsers} = require('./controllers/UserController');
const { PORT,
        HOSTNAME 
        } = require('./constants');

const server = http.createServer((req, res) => {
    const {url} = req; // mer ulr-y /-ic heto xoski /sign-up

    switch(url){
        case '/users':
            
            // const data = JSON.stringify(USERS); // parzacnelu hamar
            // res.end(data)

            getUsers(req,res);
            break;
        default:
            res.end('URL NOT FOUND');
            break;
    }

});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
  console.log('new logger');
});
