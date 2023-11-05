//(function(exports,require,module,__filename,__dirname){
// console.log(__filename)
// console.log(__dirname)

const EventEmiitter=require('events')
//const emitter=new EventEmiitter()

let url="http://mylogger.io/log"

class Logger extends EventEmiitter{
   log(message){
    console.log(message)
    //Raise a event
    this.emit('messageLogged',{id:1,url:"http://"})
  }
  
  
}

module.exports=Logger
//})