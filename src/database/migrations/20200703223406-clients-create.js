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
      telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      qtde_equipamento: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      capacidade_oleo: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      custo_litro: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      custo_filtro: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      tipo_troca:{
        type: Sequelize.STRING,
        allowNull: false
      },
      intervalo_de_trocas: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      utilizacao_anual: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      custo_operacional: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      custo_de_descarte: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      economia_anual: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      economia_perc: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      consumo_atual: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      consumo_com_filtro: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      economia_em_litros: {
        type: Sequelize.DECIMAL,
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
