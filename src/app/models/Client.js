import Sequelize, { Model } from 'sequelize'

class Client extends Model {
  static init (sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      cpf: Sequelize.STRING,
      qtde_equipamento: Sequelize.NUMBER,
      capacidade_oleo: Sequelize.NUMBER,
      custo_litro: Sequelize.NUMBER,
      custo_filtro: Sequelize.NUMBER,
      intervalo_de_trocas: Sequelize.NUMBER,
      utilizacao_anual: Sequelize.NUMBER,
      custo_operacional: Sequelize.NUMBER,
      custo_de_descarte: Sequelize.NUMBER
    },
    {
      sequelize
    })

    return this
  }
}

export default Client
