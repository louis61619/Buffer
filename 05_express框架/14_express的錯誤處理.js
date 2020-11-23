const express = require('express')

const app = express()

//定義常量
const USERNAME_DO_NOT_EXISTS = "USERNAME_DO_NOT_EXISTS";

const USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS";





app.post('/login', (req, res, next) => {
  const isLogin = false
  if(isLogin) {
    res.json("user login success")
  } else {
    // res.type(400);
    // res.json("username do not exist")
    // console.log(new Error(USERNAME_DO_NOT_EXISTS))
    next(new Error(USERNAME_DO_NOT_EXISTS))
  }
})

app.post('/register', (req, res, next) => {
  const isExists = true
  if(!isExists) {
    res.json("user register success")
  } else {
    // res.type(400);
    // res.json("username already exists")
    next(new Error(USERNAME_ALREADY_EXISTS))
  }
})

//錯誤中間件
app.use((err, req, res, next) => {
  let status = 400;
  let message = ""
  // console.log('-----')
  console.log(err.message)

  switch(err.message) {
    case USERNAME_DO_NOT_EXISTS:
      message = "useranme do not exists"
      break
    case USERNAME_ALREADY_EXISTS:
      message =  "useranme already exists"
      break
    default:
      message = "no found"
  }


  res.status = status
  res.json({
    errCode: status,
    errMessage: message
  })
})

app.listen(8000, () => {
  console.log("錯誤處理伺服器返回成功")
})