# server-deployment-practice

## Github PR
* Only worked on main as per instructor's directions therefore no pull requests are present

## Github Actions
* https://github.com/gerstej9/server-deployment-practice/actions

## Heroku URLs
* https://james-gerst-server-deploy-prod.herokuapp.com/foo
* https://james-gerst-server-deploy-prod.herokuapp.com/

## Class notes

npm init -y overrides need to hit enter

npm init
npm install express jest supertest dotenv
file called server.js
contain all server route definitions
const expresss = require('express');
const app = express();

app.get('/', function )

app.get('/foo', function(request, response, next)){
  let responseObject = {
    number: 10,
    string: 'hello world',
  }
  response.json(responseObject);
}


function start(port){
  app.listen(port, () => console.log('app is listening on port::', port));
}

module.xports(
  app: app,
  start: start,
)



index.js
start an express server

require('dotenv').config()

const PORT = process.env(PORT)
const server = require('./server.js);


server.start(Port) 
can hardcode port of use environment variable



__tests__ folder

server.text.js

const supertext = require
const server = require (../server.js)
const request = supertest(server.app)

describe ('testing our epxress server', () =>{
  it('should response to a get on /'), () => {
    request.get('/')
    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.text)toEqual('hello');
    });
  });

  it('should respond with json data on GET /foo', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(200);
    expect(response.body.number).toEqual(10);
  })
});



change scrip to jest --verbose'

run npm test

add new dimension to scripts in package 
start : "node index.js"

now npm start will look in index.js and get everything going