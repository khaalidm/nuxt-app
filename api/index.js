import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('user_info')
let list = ''

  console.log('Creating table')
  db.serialize(function () {
    db.run(
      'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name text NOT NULL, last_name text NOT NULL, gender text NOT NULL, phone_number text, email text NOT NULL, height text NOT NULL, weight text, is_sick text NOT NULL );'
    )
    console.log('database created')
  })


function saveToDB(data, db) {
  let sql = `INSERT INTO user (first_name, last_name, gender, phone_number, email, height, weight, is_sick) VALUES("${data.firstName}", "${data.lastName}", "${data.gender}", "${data.phoneNumber}", "${data.email}", "${data.height}", "${data.weight}", "${data.isSick}")`
  db.run(sql, [], function (err) {
    if (err) {
      return console.log(err.message)
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`)
  })
  console.log('data saved to data base')
  // db.close();
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


// End points
module.exports = function (req, res, next) {

  if (req.url === '/user/list') {
    console.log('hey im here you dope')
    listUsers(db, setUsers)
    console.log(list)
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify(list))
  }

  if (req.url === '/user') {
    req.on('data', (chunk) => {
      console.log(`Data chunk available: ${chunk}`)
      let data = ''
      data = JSON.parse(chunk)
      saveToDB(data, db)
    })
    req.on('end', () => {
      //end of data
    })
  }

}
