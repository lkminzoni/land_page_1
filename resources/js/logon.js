class LogonForm extends LogInForm{
    constructor(){
        super();
        this._firstName = document.querySelector('#fName');
        this._lastName = document.querySelector('#lName');
        this.enterEmail = document.querySelector('#email');
        this.rePass = document.querySelector('#rePassword');
        this.cancelBtn = document.querySelector('#btn-cancel');
        // Logon link
        this.newAccountLink = document.querySelector('#newAccount');
        // Forgot password
        this.oldAccountLink = document.querySelector('#oldAccount');
        this.startLogOn();
        // cancel button switch
        this.openFormSwitch = false;
        this.forgotPassSwitch = false;
    }
    startLogOn(){
        this.newAccountLink.addEventListener('click',this.openForm.bind(this));
        this.cancelBtn.addEventListener('click',this.cancelBtnHandler.bind(this));
        this.oldAccountLink.addEventListener('click',this.forgotPass.bind(this));
    }
    cancelBtnHandler(){
        if(this.openFormSwitch === true){
            this.openForm();
        }else if(this.forgotPassSwitch === true){
            this.forgotPass();
        }
        this.openFormSwitch = false;
        this.forgotPassSwitch = false;

    }

    openForm(){
        this.capturedFirstName.classList.toggle('hidden');
        this.capturedLastName.classList.toggle('hidden');
        this.enterEmail.classList.toggle('hidden');
        this.rePass.classList.toggle('hidden');
        this.cancelBtn.classList.toggle('hidden');
        this.newAccountLink.classList.toggle('hidden');
        this.oldAccountLink.classList.toggle('hidden');
        this.openFormSwitch = true;
    }
    
    forgotPass(){
        this.capturedUsername.classList.toggle('hidden')
        this.cancelBtn.classList.toggle('hidden');
        this.capturedPassword.classList.toggle('hidden');
        this.newAccountLink.classList.toggle('hidden');
        this.oldAccountLink.classList.toggle('hidden');
        this.enterEmail.classList.toggle('hidden');
        this.forgotPassSwitch = true;
    }

    get capturedFirstName(){
        return this._firstName;
    }

    set capturedFirstName(value){
        this._firstName = value;
    }

    get capturedLastName(){
        return this._lastName;
    }

    set capturedLastName(value){
        this._lastName = value;
    }
}

const newLogon = new LogonForm();