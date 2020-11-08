const http = require('http');
const qs = require('querystring')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if(req.url === '/upload') {
    if(req.method === 'POST') {

      req.setEncoding('binary')

      const totalBoundary = req.headers['content-type'].split(';')[1]
      const boundary = totalBoundary.split('=')[1]
      // console.log(boundary)

      let body = ""

      req.on('data', (data) => {
        body += data
      })

      //form/data 傳遞的資料都需要進行處理，之後可以借用框架
      req.on('end', () => {

        // console.log(body)

        //獲取img類型
        //透過qs.parse切割字串，轉為key對應value
        const payload = qs.parse(body, "\r\n", ": ")
        const type = payload["Content-Type"]
        console.log(payload["Content-Type"])

        //2.開始在image/png的位置進行擷取

        const typeIndex = body.indexOf(type)
        const typeLength = type.length

        //typeIndex + typeLength 為數據開始的地方

        let imageDate = body.substring(typeIndex + typeLength)

        //將前面的兩個空格去掉
        imageDate = imageDate.replace(/^\s\s*/, '')

        //將boundary刪除掉
        imageDate = imageDate.substring(0, imageDate.indexOf(`--${boundary}--`))

        fs.writeFile('./foo.png', imageDate, 'binary', (err) => {
          res.end("文件上傳成功")
          console.log(err)
        })

        console.log('文件成功上傳')
        res.end("文件成功上傳")
      })
    }
  }
})

server.listen(8888, () => {
  console.log("服務器啟動成功")
})