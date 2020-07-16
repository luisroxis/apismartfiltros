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
  dialectOptions: {
    timezone: 'Etc/GMT-3',
  },
  host: 'localhost',
  port: '3306',
  username: 'rlpc',
  password: 'Smart@2020!',
  database: 'smartFiltros',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
}
