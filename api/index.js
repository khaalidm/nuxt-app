import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('user_info')


db.exec('DROP TABLE IF EXISTS user')
console.log('Executing database stuff')
db.serialize(function () {
  db.run(
    'CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name text NOT NULL, last_name text NOT NULL, gender text NOT NULL );'
  )
  console.log('database created')
})
// db.close()

function saveToDB(data, db) {
    let sql = `INSERT INTO user (first_name, last_name, gender) VALUES("${data.firstName}", "${data.lastName}", "${data.gender}")`
    db.run(sql, function(err){
        if (err) {
            return console.log(err.message)
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    })
    console.log("data saved to data base")
    // db.close();
}

module.exports = function (req, res, next) {
  // req is the Node.js http request object
  console.log(req.url)

  // res is the Node.js http response object

  if (req.url === '/save') {
    // res.end(JSON.stringify("hello world"))
    // res.setHeader('Content-Type', 'application/json')
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

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
    // next()
}
