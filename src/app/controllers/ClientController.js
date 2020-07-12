const  Client = require('../models/Client')

class ClientController {
  async index(req, res) {
    try {
      const client = await Client.findAll({
        where: Client.chekin !== true
      })

      return res.json(client)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: 'ERROR',
        message: 'Erro:  ' + error
      })
      /*return res.json({ msg: error });*/
    }
  }

  async store(req, res) {
    try {
      const {
        id, name, email, telefone,
        qtde_equipamento, capacidade_oleo, custo_litro,
        custo_filtro, tipo_troca, intervalo_de_trocas, utilizacao_anual,
        custo_operacional, custo_de_descarte
      } =   await Client.create(req.body)

      return res.json({
        id,
        name,
        email,
        telefone,
        qtde_equipamento,
        capacidade_oleo,
        custo_litro,
        custo_filtro,
        tipo_troca,
        intervalo_de_trocas,
        utilizacao_anual,
        custo_operacional,
        custo_de_descarte
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

  async update (req, res, params) {
    try {
      const id = 10 
    const client = await Client.findAll({
      where: Client.id = id
    })

    return res.json(client)
  
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
module.exports =  new ClientController()
