const http = require('http')
const PORT = process.env.PORT || 5000
const todos = require('./todos')
const server = http.createServer((request,response)=>{
  if(request.url === '/api/v1/todos'&& request.method === 'GET'){
    response.writeHead(200,{
        'content-type':'application/json'
    })
    response.end(JSON.stringify(todos))
  }
})


server.listen(PORT,()=>{
    console.log('Rhodas Server is ready and runnning on port',PORT)
})

server.on('error',(error)=>{
    if(error.code='EADRINUSE'){
        console.log('Port already in use')
    }
})