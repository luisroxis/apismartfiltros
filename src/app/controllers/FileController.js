import File from '../models/File'

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } =  req.file
    const { description } = req.body

    const file = await File.create({
      name,
      path,
      description
    })

    return res.json(file)
  }
}

export default new FileController()