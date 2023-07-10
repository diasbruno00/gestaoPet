class Usuario {

    constructor(nome,sobrenome,email,telefone,identificador,idade,bio, login){
        this.primeiroNome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.telefone = telefone
        this.identificador = identificador
        this.idade = idade
        this.bio = bio
        this.login = login
    }
}

module.exports = Usuario