const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    }
    else {
        console.log("DB connect");
        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(3030, () => {
            console.log("SERVIDOR INICIADO")
        })
        
    }
})



