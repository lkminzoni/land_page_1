class LogInForm{
    constructor(){
        
        this._captured = document.querySelector("#inp");
        this.paragraph = document.querySelector('#parag');
        this._password = document.querySelector('#password');
        this.capturedEmail = document.querySelector('#email');
        this.capturedUsername = document.querySelector('#inp')
    }
    
    
    getUserValue(e){
        let usernameInp = this.capturedUsername.value;
        if(usernameInp !== ''){
            if(this.capturedPassword.value === '' || this.capturedPassword.value.length < 6){
                this.msgErrorLogin('password',this.capturedPassword)
                this.capturedUsername.value = '';
                this.capturedPassword.value = '';
            }else{
                this.paragraph.innerText = `Heloo! ${usernameInp.toUpperCase()}`;
                this.capturedUsername.value = '';
                this.capturedPassword.value = '';
                setInterval(() => {
                    return this.paragraph.innerText = '';
                },2000);
            }
        }else{
            this.msgErrorLogin('login',this.capturedUsername);
            this.msgErrorLogin('password',this.capturedPassword);
            this.capturedUsername.value,
            this.capturedPassword.value = '';
        }
        
    }

    msgErrorLogin(itemToCheck,itemToAppend){
        const pError = document.createElement('p');
        pError.innerText = `Check your ${itemToCheck}`;
        pError.classList.add('errorMsg');
        itemToAppend.after(pError);
        setTimeout(() => {
            itemToAppend.nextElementSibling.remove()
        },3000);
    }

    oldUser(){
        if(this.capturedEmail.value.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
            this.capturedEmail.value = '';
        }else{
            this.msgErrorLogin('email',this.capturedEmail)
            this.capturedEmail.value = '';
        }
    }

    newAccount(){
        if(this.capturedUsername.value === ''){
            this.msgErrorLogin('Username',this.capturedUsername)
            // this.capturedFirstName()
        }
        if(this._firstName.value === ''){
            this.msgErrorLogin('First Name',this._firstName)
            // this.capturedFirstName()
        }
        if(this._lastName.value === ''){
            this.msgErrorLogin('Last Name',this._lastName)
            // this.capturedLastName()
        }
        if(!this.enterEmail.value.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
            this.msgErrorLogin('Email', this.enterEmail)
            // this.capturedLastName()
        }
        if(this.reEmail.value === '' || this.reEmail.value !== this.enterEmail.value){
            this.msgErrorLogin('Email',this.reEmail)
            // this.capturedLastName()
        }
        if(this.capturedPassword.value === ''){
            this.msgErrorLogin('Password',this.capturedPassword)
            // this.capturedLastName()
        }
        if(this.capturedPassword.value !== this.rePass.value || this.rePass.value === ''){
            this.msgErrorLogin('Password',this.rePass)
            // this.capturedLastName()
        }
    }

    set capturedUsername(value){
        this._captured = value;
    }

    get capturedUsername(){
        return this._captured;
    }

    set capturedPassword(value){
        this._password = value;
    }

    get capturedPassword(){
        return this._password;
    }

    
}

const newLogin = new LogInForm();




