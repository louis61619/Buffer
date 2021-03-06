const http = require('http');

const fs = require('fs')

const server = http.createServer((req, res) => {
  if(req.url === '/upload') {
    if(req.method === 'POST') {
      const fileWriter = fs.createWriteStream('./foo.png', {flags: 'a+'})

      req.on('data', (data) => {
        console.log(data)
        fileWriter.write(data)
      })

      req.on('end', () => {
        console.log('文件成功上傳')
        res.end("文件成功上傳")
      })
    }
  }
})

server.listen(8888, () => {
  console.log("服務器啟動成功")
})