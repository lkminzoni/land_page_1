const nextBtn = document.querySelector('#btn');
nextBtn.addEventListener('click', getValue);

function getValue(){
    let captured = document.querySelector("#inp");
    let passwordInp = document.querySelector('#password');
    const paragraph = document.querySelector("#parag");paragraph.innerText = `Hello ${captured.value.toUpperCase()}`;
    captured.value = '';
    passwordInp.value = '';
    setTimeout(() => {
        paragraph.innerText = '';
    }, 2000);
}

