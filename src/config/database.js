/* Local conecction
module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: '',
  database: 'smartfiltros',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
}*/

module.exports = {
  dialect: 'mariadb',
  host: 'localhost',
  port: '3307',
  username: 'smartuser',
  password: 'Smart@2020!',
  database: 'smartFiltros',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
}
