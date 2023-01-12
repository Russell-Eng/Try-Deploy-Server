import {promises as fs} from 'fs'
import pluralize from 'pluralize'
import express from 'express'
const app = express()

app.get('/', async (req, res) => {
  res.type('html')
  let fileContents = await fs.readFile('index.html')
  res.send(fileContents)
})

app.get('/style.css', async (req, res) => {
  res.type('css')
  let fileContents = await fs.readFile('style.css')
  res.send(fileContents)
})

app.get('/index.js', async (req, res) => {
  res.type('js')
  let fileContents = await fs.readFile('index.js')
  res.send(fileContents)
})

app.get('/api/getTime', async (req, res) => {
  res.type('txt')
  let time = new Date()
  res.send(time)
})

app.get('/pluralize', async (req, res) => {
  res.type('txt')
  let inputWord = req.query.word
  res.send(pluralize(inputWord))
})

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000')
})