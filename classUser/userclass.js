'use strict'


class User {
    constructor ( username, password, email){ 
        this.username = username;
       this.password = password;
        this.email = email;
    }
    login(username, password){
/*validar usuario y contraseña*/
        if (username ===this.username && this.password ===password) {

            alert ('welcome');
        }else{
                alert ('OOOps');
        }
        }

resetPassword (newPassword){
    this.password = newPassword;
}
updateInfo (newEmail){ 
this.email= newEmail;
}

    showInfo(){
        alert (` El usuario es: ${this.username}, la contraseña es: ${this.password} y el email es: ${this.email}` );
    }
}

// Instanciar

let user = new User ('ryan', '1994', 'ryan.barce@gmail.com');
user.login ('ryan', '1994');
user.resetPassword('admin');
user.login('ryan', 'admin');
user.updateInfo('ryan.barce@gmail.com');
user.login('ryan.barce@gmail.com');
user.showInfo();
