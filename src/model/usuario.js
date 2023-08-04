class Usuario {

    constructor(nome,sobrenome,email,telefone,identificador,idade,bio, login){
        this.primeiroNome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.telefone = telefone
        this.indentificador = identificador
        this.idade = idade
        this.bio = bio
        this.login = login
    }


    verificandoIdadeValida(){
        if(typeof this.idade === 'number'){
            return true
        }else{
            return false
        }
    }
}

module.exports = Usuario