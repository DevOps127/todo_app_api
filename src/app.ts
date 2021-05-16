import express from "express"

import dotenv from "dotenv"

// load env
dotenv.config()

// create server on port 3000
const app = express()
const port = process.env.PORT

app.get("/", (_req, res) => {
  res.send("The sedulous hyena ate the antelope!")
})

app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})
