/* eslint-disable camelcase */
import Client from '../models/Client'
import { Op } from 'sequelize'

class ClientController {
  async index (req, res) {
    var date = new Date()
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    try {
      const client = await Client.findAll({
        where: {
          created_at: {
            [Op.gte]: firstDay
          }
        }
      })

      return res.json(client)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: 'ERROR',
        message: `Erro na API: + ${error}`
      })
      /* return res.json({ msg: error }); */
    }
  }

  async query (req, res) {
    try {
      const {
        begin, end
      } = req.body
      console.log('query ', begin, end)
      const beginDate = new Date(begin)
      beginDate.setHours(0)
      //  beginDate.setHours(0, 0, 0, 1);
      const endDate = new Date(end)
      // endDate.setHours(23, 59, 59);
      endDate.setHours(23)

      const client = await Client.findAll({
        where: {
          created_at: {
            [Op.gte]: beginDate,
            [Op.lte]: endDate

          }
        }
      })

      return res.json(client)
    } catch (error) {
      console.log('erro ', error)
      return res.status(500).json({
        status: 'ERROR',
        message: 'Erro:  ' + error
      })
    }
  }

  async store (req, res) {
    try {
      const {
        id, name, email, telefone,
        qtde_equipamento, capacidade_oleo, custo_litro,
        custo_filtro, tipo_troca, intervalo_de_trocas, utilizacao_anual,
        custo_operacional, custo_de_descarte, economia_anual /* economia_perc, consumo_atual,
        consumo_com_filtro, economia_em_litros */
      } = await Client.create(req.body)

      console.log(economia_anual)

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
        custo_de_descarte,
        economia_anual
        /*
        economia_perc,
        consumo_atual,
        consumo_com_filtro,
        economia_em_litros
        */
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: 'ERROR',
        message: 'Erro:  ' + error
      })
    }
  }

  async update (req, res) {
    try {
      const id = req.params.id

      const client = await Client.findOne({
        where: { id }
      })

      const {
        name,
        checkin,
        qtde_equipamento,
        capacidade_oleo,
        custo_litro,
        custo_filtro,
        tipo_troca,
        intervalo_de_trocas,
        utilizacao_anual,
        custo_operacional,
        custo_de_descarte,
        economia_anual
        /*
        economia_perc,
        consumo_atual,
        consumo_com_filtro,
        economia_em_litros
      */ } = req.body

      const up = client.update(req.body)

      return res.json({
        id,
        name,
        checkin,
        qtde_equipamento,
        capacidade_oleo,
        custo_litro,
        custo_filtro,
        tipo_troca,
        intervalo_de_trocas,
        utilizacao_anual,
        custo_operacional,
        custo_de_descarte,
        economia_anual
        /*
        economia_perc,
        consumo_atual,
        consumo_com_filtro,
        economia_em_litros */
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: 'ERROR',
        message: 'Erro:  ' + error
      })
      /* return res.json({ msg: error }); */
    }
  }
}

export default new ClientController()
