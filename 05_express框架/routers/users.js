/**
 * 舉格例子:
 *  請求所有用戶信息: get/ users
 *  請求其中某個用戶信息: get /users/:id body{username: password: }
 *  請求其中某個用戶信息: post /users/:id
 *  請求其中某個用戶信息: delete /users/:id
 *  請求其中某個用戶信息: patch /users/:id {nickname: }
 * 
 */

 const express = require('express')

 const router = express.Router();

 router.get('/', (req, res, next) => {
   res.json(["why", "louis", "renny"])
 })

 router.post('/:id', (req, res, next) => {
   res.json(`${req.params.id}用戶的信息`)
 })

 router.post('/', (req, res, next) => {
   res.json("create user success")
 })

 module.exports = router