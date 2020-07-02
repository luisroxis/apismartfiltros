'use strict';

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
      qtde_equipametos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      capacidade: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      custo_litro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      custo_filtro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      intervalo_troca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      utilizacao_anual: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      custo_operacional: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      custo_descarte: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      economia_anual: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      econimia_perc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      consumo_atual: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      consumo_filtro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      econimia_litros: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      checkin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
