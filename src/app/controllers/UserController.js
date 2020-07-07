import User from '../models/User'

class UserController {
  async store (req, res) {
    const userExists = await User.findOne({ where: { username: req.body.username } })
    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe' })
    }

    const { id, name, username } = await User.create(req.body)

    return res.json({
      id,
      name,
      username
    })
  }

  async update (req, res) {
    const { username, oldPassword } = req.body

    const user = await User.findByPk(req.userId)

    if (username !== user.username) {
      const userExists = await User.findOne({ where: { username } })

      if (userExists) {
        return res.status(400).json({ error: 'Usuario não Cadastrado' })
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password não confere' })
    }

    const { id, name } = await user.update(req.body)

    return res.json({
      id,
      name,
      username
    })
  }
}

export default new UserController()
