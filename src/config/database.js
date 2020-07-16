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
