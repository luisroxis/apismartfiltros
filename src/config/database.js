module.exports = {
  dialect: 'sqlite',//'mysql',
  host: '127.0.0.1',//''
  //port: 3306,
  //username: 'rplc',
  //password: 'UoBQvQ2qAoyG',
  //database: 'smartlub',
  storage: './src/database/db/smartlub.db',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
}