function foo(a, fun) {
  console.log(a)
  fun('22222222')
}

foo("111", (err) => {
  console.log(err)
})