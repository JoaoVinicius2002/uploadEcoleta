// importar dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()
 
//iniciar o objeto que ira fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// //utilizar o objeto de banco de dados para nossas operações

//  db.serialize(() => {
//     //com comando sql eu vou...


//     //1 criar tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address2 TEXT, 
//             state TEXT, 
//             city TEXT,
//             items TEXT
//         );
//     `)


//     //2 inserir dados na tabela 
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?);
// `
// const values = [
//     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     "Paperside",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"

// ]
//     function afterInsertData(err) { 
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)


//     }

//     db.run(query, values, afterInsertData)



//     //4 deletar dados da tabela


//     db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Registro deletado com sucesso")
//     })

//     //   //3 consultar dados na tabela
//     //   db.all(`SELECT * FROM places`, function(err, rows){
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros")
//     //     console.log(rows)
//     // })



// })