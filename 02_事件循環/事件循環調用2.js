setTimeout(() => {
  console.log('11111111')
}, 0)

setImmediate(() => {
  console.log('2222222222')
})

//執行順序不一定的原因可能是因為事件循環的初始化時間不一定