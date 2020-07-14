const  Client = require('../models/Client')

class ClientController {
  async index(req, res) {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
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
        message: 'Erro:  ' + error
      })
      /*return res.json({ msg: error });*/
    }
  }

  async query(req, res) {

    try {
      const {
        begin, end
      } = req.body
      console.log('query ', begin, end);
      let beginDate = new Date(begin)
    //  beginDate.setHours(0, 0, 0, 1);
      let endDate = new Date(end)+1;
      endDate.setHours(23, 59, 59);

      const client = await Client.findAll({
        where: {
          created_at: {
            [Op.gte]: beginDate,
            [Op.lte]: endDate,

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
  async store(req, res) {
    try {
      const {
        id, name, email, telefone,
        qtde_equipamento, capacidade_oleo, custo_litro,
        custo_filtro, tipo_troca, intervalo_de_trocas, utilizacao_anual,
        custo_operacional, custo_de_descarte
      } = await Client.create(req.body)

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

  async update (req, res) {
    try {      

      const client = await Client.findOne({
        where: Client.id === req.params.id
      })

      const {
       name,telefone, email,
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
