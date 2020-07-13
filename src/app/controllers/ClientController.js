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
        id, name,telefone, cpf,
        qtde_equipamento, capacidade_oleo, custo_litro,
        custo_filtro, tipo_troca, intervalo_de_trocas, utilizacao_anual,
        custo_operacional, custo_de_descarte
      } =   await Client.create(req.body)

      return res.json({
        id,
        name,
        cpf,
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

  async update (req, res) {
    try {      

      const client = await Client.findOne({
        where: Client.id === req.params.id
      })

      const {
       name,telefone, cpf,
        qtde_equipamento, capacidade_oleo, custo_litro,
        custo_filtro, tipo_troca, intervalo_de_trocas, utilizacao_anual,
        custo_operacional, custo_de_descarte
      } =   await Client.update(req.body)
      
      
      return res.json(client)


    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: 'ERROR',
        message: 'Erro:  ' + error
      })
      
    }
  }
}
module.exports =  new ClientController()
