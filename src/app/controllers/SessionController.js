const  jwt = require('jsonwebtoken')
const  authConfig = require('../../config/auth')

const  User = require('../models/User')


class SessionController {
  async store(req, res) {
    try {
      console.log('password')
      const { username, password } = req.body

      const user = await User.findOne({ where: { username } })

      if (!user) {
        return res.status(400).json({ error: 'Usuario não encontrado' })
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Password não confere' })
      }

      const { id, name } = user

      return res.json({
        user: {
          id,
          name,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        })
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: 'ERROR',
        message: 'Erro:  ' + error
      })
      /*return res.json({ msg: error });*/
    }

  }
}

module.exports = new SessionController()