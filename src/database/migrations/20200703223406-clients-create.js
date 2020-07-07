'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      qtde_equipamento: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      capacidade_oleo: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      custo_litro: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      custo_filtro: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      intervalo_de_trocas: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      utilizacao_anual: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      custo_operacional: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      custo_de_descarte: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      economia_anual: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      economia_perc: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      consumo_atual: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      consumo_com_filtro: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      economia_em_litros: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      checkin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('clients')
  }
}
