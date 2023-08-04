class Veterinario {

    constructor(nome,idade,email,telefone,crmv,consultorio,detalhes){
        this.nome  = nome
        this.idade  = idade
        this.email  = email
        this.telefone = telefone
        this.crmv = crmv
        this.consultorio = consultorio
        this.detalhes  = detalhes
    }

    verificandoIdadeValida(){
        if(typeof this.idade === 'number'){
            return true
        }else{
            return false
        }
    }
}

module.exports = Veterinario