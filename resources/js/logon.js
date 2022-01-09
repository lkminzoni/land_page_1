class LogonForm extends LogInForm{
    constructor(){
        super();
        this._firstName = document.querySelector('#fName');
        this._lastName = document.querySelector('#lName');
        this.enterEmail = document.querySelector('#email');
        this.reEmail = document.querySelector('#reEmail');
        this.rePass = document.querySelector('#rePassword');
        this.nextBtn = document.querySelector('#btn');
        this.cancelBtn = document.querySelector('#btn-cancel');
        // Logon link
        this.newAccountLink = document.querySelector('#newAccount');
        this.newAccountBtn = document.querySelector('#btn-newAccount')
        // Forgot password
        this.btnEmail = document.querySelector('#btn-email');
        this.enterEmailBtn = document.querySelector('#btn-email');
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
        this.btnEmail.addEventListener('click', this.oldUser.bind(this))
        this.newAccountBtn.addEventListener('click', this.newAccount.bind(this))
        this.nextBtn.addEventListener('click', this.getUserValue.bind(this));
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
        this.nextBtn.classList.toggle('hidden')
        this.newAccountBtn.classList.toggle('hidden')
        this.capturedLastName.classList.toggle('hidden');
        this.enterEmail.classList.toggle('hidden');
        this.reEmail.classList.toggle('hidden');
        this.rePass.classList.toggle('hidden');
        this.cancelBtn.classList.toggle('hidden');
        this.newAccountLink.classList.toggle('hidden');
        this.oldAccountLink.classList.toggle('hidden');
        this.openFormSwitch = true;
    }
    
    forgotPass(){
        this.capturedUsername.classList.toggle('hidden')
        this.enterEmailBtn.classList.toggle('hidden')
        this.cancelBtn.classList.toggle('hidden');
        this.nextBtn.classList.toggle('hidden')
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