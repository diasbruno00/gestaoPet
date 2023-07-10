 class Login {


    constructor(email, senha){
        this._email = email
        this._senha  = senha

    }
    get email(){
        return this._email
    }
   
     get senha() {
        return this._senha
    }
    set senha(value) {
        this._senha = value
    }

    set email(value) {
        this._email = value
    }

}

module.exports = Login