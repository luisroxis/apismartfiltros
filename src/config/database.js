

module.exports = {
  dialect: 'sqlite',
  host: '127.0.0.1',
  storage: 'src/db/smartlub.sqlite3',  
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
}