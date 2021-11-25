class LogInForm{
    constructor(){
        this.nextBtn = document.querySelector('#btn');
        this._captured = document.querySelector("#inp");
        this.paragraph = document.querySelector('#parag');
        this._password = document.querySelector('#password');
        this.startLogIn();
    }
    startLogIn(){
        this.nextBtn.addEventListener('click', this.getUserValue.bind(this));
    }
    
    getUserValue(){
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




