const users = []

const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].passwordHash)
        if (users[i].username === username && existing) {
          const objReturn = {...users[i]}
          delete objReturn.passwordHash;
          res.status(200).send(objReturn)
          console.log(objReturn)
          return;
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {username,email,firstName,lastName, password} = req.body
      let salt = bcrypt.genSaltSync(5)
      let passwordHash = bcrypt.hashSync(password, salt)
      let userObj = {
        username,
        email,
        firstName,
        lastName,
        passwordHash
      }
      users.push(userObj)
      console.log('Registering User')
      console.log(users)
      res.status(200).send(req.body)
    }
}