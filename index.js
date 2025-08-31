const http = require('http')

const PORT = 5000

const toDoList = ["sushanth","web dev", "japan"]

http.createServer((req,res) => {
    const {method,url} = req;
    if(url.toLowerCase() === '/todos'){
        if(method === "GET"){
            res.writeHead(200, {"content-type":"text/html"})
            res.write(toDoList.toString())
        }else if(method === 'POST'){
            let body = '';
            req.on('error', (err) => {
                console.log('error:',err);
            }).on('data',(chunk) => {
                body +=chunk;
                console.log('chunk:',chunk)
            }).on('end',() => {
                body = JSON.parse(body)
                console.log('body:',body)
                let newToDo = toDoList
                newToDo.push(body.item)
            })
        }else if(method === 'DELETE'){
            let body = '';
            req.on('error', (err) => {
                console.log('error:',err);
            }).on('data',(chunk) => {
                body +=chunk;
                console.log('chunk:',chunk)
            }).on('end',() => {
                body = JSON.parse(body)
                const index = toDoList.indexOf(body.item)
                if(index > -1){
                    toDoList.splice(index,1)
                }
            })
        }
        else{
            res.writeHead(501)
        }
    }else{
        res.writeHead(404)
    }
    res.end()
}).listen(PORT , () => {
    console.log(`To Do List Server Got started on http://localhost:${PORT}`)
})
