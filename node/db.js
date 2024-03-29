const mysql = require('mysql2/promise')

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

async function connect() {
  return await mysql.createConnection(config)
}

async function count() {
  const connection = await connect()
  try {
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM people')
    return rows[0].count
  } finally {
    connection.end()
  }
}

async function insert(name) {
  const connection = await connect()
  try {
    const insertSql = `INSERT INTO people(name) values('${name}')`
    await connection.query(insertSql)
  } finally {
    connection.end()
  }
}

async function findAll() {
  const connection = await connect()

  try {
    const selectSql = `SELECT * FROM people`
    const [results] = await connection.query(selectSql)
    return results;
  } catch (err) {
    console.log(err)
    throw err
  } finally {
    connection.end()
  }
}

module.exports = {
  count,
  insert,
  findAll
}