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
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qtde_equipamento: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      capacidade_oleo: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      custo_litro: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      custo_filtro: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      intervalo_de_trocas: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      utilizacao_anual: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      custo_operacional: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      custo_de_descarte: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      economia_anual: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      economia_perc: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      capacidade_oleo: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      consumo_atual: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      consumo_com_filtro: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      economia_em_litros: {
        type: Sequelize.NUMBER,
        allowNull: false,
      }, 
      checkin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },     
      created_at: { 
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: { 
        type: Sequelize.DATE,
        allowNull: false
       }
    });
    
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('clients');
   
  }
};
