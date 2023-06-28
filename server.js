const http = require('http')
const PORT = process.env.PORT || 5000

const server = http.createServer((request,response)=>{
    response.writeHead(200,{
    "content-type":"plain/text"
    })
    response.end('Hello')
})

server.listen(PORT,()=>{
    console.log('Rhodas Server is ready and runnning on port',PORT)
})

server.on('error',(error)=>{
    if(error.code='EADRINUSE'){
        console.log('Port already in use')
    }
})