class EnterForm{
    constructor(){
        this.nextBtn = document.querySelector('#btn');
        this._captured = document.querySelector("#inp");
        this.paragraph = document.querySelector('#parag');
        this._password = document.querySelector('#password');
        this.start();
    }
    start(){
        this.nextBtn.addEventListener('click', this.getUserValue.bind(this));
    }
    
    getUserValue(){
        let usernameInp = this.capturedUsername.value;
        this.paragraph.innerText = `Heloo! ${usernameInp.toUpperCase()}`;
        this.capturedUsername.value = '';
        this.capturedPassword.value = '';
        setInterval(() => {
            return this.paragraph.innerText = '';
        },2000);
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


const begining = new EnterForm();




