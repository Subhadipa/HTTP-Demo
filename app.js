//console.log(module)
// const logger=require("./logger")

//console.log(logger)

//logger.log("Hello Subhadipa!")

/*PATH Module */
// const path=require("path")

// let pathObj=path.parse(__filename)

// console.log(pathObj)

/*OS Module */

// const os =require("os")
// let totalMemory=os.totalmem()
// let freeMemory=os.freemem()
// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.platform())
// console.log(`Total Memory ${totalMemory/1024/1024/1024}`)
// console.log(`Free Memory ${freeMemory/1024/1024/1024}`)

/*fs Module */
//const fs=require("fs")
// const files=fs.readdirSync('./')//Synchronous
// console.log(files)

// fs.readdir("./",function(err,files){//Asynchronous
//  if (err) console.log("Error=>",err)
//  else console.log("Result=>",files)
// })
/*Events */
// const EventEmitter=require('events')
//const emitter=new EventEmitter()

//Register a listener
// emitter.on("messageLogged",(arg)=>{
//     console.log("Listener called",arg)
// })
 //Raise a event
 //emitter.emit('messageLogged',{id:1,url:"http://"})

//  const Logger=require("./logger")
//  const logger=new Logger()
//  logger.on("messageLogged",(arg)=>{
//         console.log("Listener called",arg)
//     })
// logger.log("message")

/*HTTP */


const http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Hello World")
        res.end()
    }
   if(req.url==="/api/demo"){
    res.write(JSON.stringify([1,2,3]))
    res.end()
   }
})

// server.on("connection",(socket)=>{
//     console.log("New Connection...")
// })

server.listen(3000)
console.log("Listening on port 3000")


