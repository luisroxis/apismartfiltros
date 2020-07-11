module.exports = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: '3306',
  username: 'root',
  password: '',
  database: 'smartlub',
  //storage: './src/database/db/smartlub.db',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
}