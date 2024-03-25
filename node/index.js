const express = require('express')
const mysql = require('mysql')
const fake = require('fakeit')

const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

app.get('/', (req, res) => {

  const connection = mysql.createConnection(config)
  const name = `${fake.person.name()} ${fake.person.surName()}` //
  const insertSql = `INSERT INTO people(name) values('${name}')`
  const selectSql = `SELECT * FROM people`

  const rows = connection.query(selectSql)

  connection.query(insertSql)
  connection.end()

  const header = `<h1>Full Cycle Rocks!</h1>`
  const items = rows.map(row => `<li>${row.id}: ${row.name}</li>`).join('')
  const peopleList = `<ul>${items}</ul>`
  const response = header + peopleList

  res.send(response)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})