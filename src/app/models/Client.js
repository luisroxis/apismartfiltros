import Sequelize, { Model } from 'sequelize'

class Client extends Model {
  static init (sequelize) {
    super.init({
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      cpf: Sequelize.STRING,
      qtde_equipamentos: Sequelize.NUMBER,
      capacidade_oleo: Sequelize.NUMBER,
      custo_litro: Sequelize.NUMBER,
      custo_filtro: Sequelize.NUMBER,
      intervalo_de_trocas: Sequelize.NUMBER,
      utilizacao_anual: Sequelize.NUMBER,
      custo_operacional: Sequelize.NUMBER,
      custo_de_descarte: Sequelize.NUMBER,
      economia_anual: Sequelize.NUMBER,
      economia_perc: Sequelize.NUMBER,
      consumo_atual: Sequelize.NUMBER,
      consumo_com_filtro: Sequelize.NUMBER,
      economia_em_litros: Sequelize.NUMBER
    },
    {
      sequelize
    })

    return this
  }
}

export default Client
