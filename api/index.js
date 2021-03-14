import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('user_info')
let list = ''

db.serialize(function () {
  db.run(
    'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name text NOT NULL, last_name text NOT NULL, gender text NOT NULL, phone_number text, email text NOT NULL, height text NOT NULL, weight text, is_sick text NOT NULL );'
  )
})

function saveToDB(data, db) {
  let sql = `INSERT INTO user (first_name, last_name, gender, phone_number, email, height, weight, is_sick) VALUES("${data.firstName}", "${data.lastName}", "${data.gender}", "${data.phoneNumber}", "${data.email}", "${data.height}", "${data.weight}", "${data.isSick}")`
  db.run(sql, [], function (err) {
    if (err) {
      return console.log(err.message)
    }
  })
  return
}

function setUsers(users) {
  list = users
}

function listUsers(db, callback) {
  let sql = `SELECT * FROM user`

  db.all(sql, [], (err, rows) => {
    if (err) {
      callback(err)
      return
    }
    callback(rows)
    return
  })
}

function deleteUser(db, id) {
  db.run(`DELETE FROM user WHERE rowid=?`, id, function (err) {
    if (err) {
      console.log(err.message)
    }
    return
  })
}

// End points
module.exports = function (req, res, next) {
  if (req.url === '/user/list') {
    listUsers(db, setUsers)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(list))
  }

  if (req.url === '/user') {
    res.setHeader('Content-Type', 'application/json')
    req.on('data', (chunk) => {
      let data = ''
      data = JSON.parse(chunk)
      saveToDB(data, db)
    })
    req.on('end', () => {})
    res.end('200')
  }

  if (req.url === '/user/delete') {
    res.setHeader('Content-Type', 'application/json')
    req.on('data', (chunk) => {
      let data = ''
      data = JSON.parse(chunk)
      deleteUser(db, data.userId)
    })
    req.on('end', () => {})
    res.end('200')
  }
}
