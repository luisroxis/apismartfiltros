import Client from '../models/Client'

class ClientController {
  async index (req, res) {
    const client = await Client.findAll({
      where: Client.chekin !== true
    })

    return res.json(client)
  }

  async store (req, res) {
    const {
      id, name, email, cpf,
      qtde_equipamento, capacidade_oleo,	custo_litro,
	    custo_filtro,	intervalo_de_trocas, utilizacao_anual,
	    custo_operacional, custo_de_descarte
    } =
     await Client.create(req.body)

    return res.json({
      id,
      name,
      email,
      cpf,
      qtde_equipamento,
      capacidade_oleo,
      custo_litro,
      custo_filtro,
      intervalo_de_trocas,
      utilizacao_anual,
      custo_operacional,
      custo_de_descarte
    })
  }

  async update (req, res) {

  }
}

export default new ClientController()
