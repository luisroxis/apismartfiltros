import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

import User from '../models/User'


class SessionController {
  async store(req, res) {
    
    const { username, password } = req.body

    const user = await User.findOne({ where: { username }})

    if(!user) {
      return res.status(400).json({ error: 'Usuario não encontrado'})
    }

    if(!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password não confere'})
    }

    const { id, name } = user

    return res.json({
      user: {
        id,
        name,
      },
      token: jwt.sign({ id },authConfig.secret,{
        expiresIn: authConfig.expiresIn, 
      })
    })

  }
}

export default new SessionController()