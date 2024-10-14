let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('password');
let inputConfirmPassword = document.getElementById('passwordConfirm');

let errorTextEmail = document.querySelector('.form-group.form-email .error');
let errorTextPassword = document.querySelector('.form-group.form-password .error');
let errorTextConfirmPassword = document.querySelector('.form-group.form-password-confirm .error');

//зміни які можливі в Email
let text = document.createElement('p');
errorTextEmail.appendChild(text);

inputEmail.addEventListener('blur', function(){
    const correctEmail = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;
if(correctEmail.test(inputEmail.value)){
    inputEmail.classList.remove('invalid');
    inputEmail.classList.add('valid');
    text.innerText = '';
}else if(inputEmail.value === ''){
    inputEmail.classList.add('invalid');
    text.innerText = 'Email is required';
}else{
    inputEmail.classList.add('invalid');
    text.innerText = 'Email is incorrect!';
}
})

//password
let textPass = document.createElement('p');
errorTextPassword.appendChild(textPass);

inputPassword.addEventListener('blur', function(){
    const correctPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(correctPassword.test(inputPassword.value)){
        inputPassword.classList.remove('invalid');
        inputPassword.classList.add('valid');
        textPass.innerText = '';
    }else if(inputPassword.value === ''){
        textPass.innerText = 'Password is required';
        inputPassword.classList.add('invalid');
    }else{
        textPass.innerText = 'Password must contain at least 8 symbol. one digit and one special character.';
        inputPassword.classList.add('invalid');
    }
})

//password confirm
let textConfPass = document.createElement('p');
errorTextConfirmPassword.appendChild(textConfPass);

inputConfirmPassword.addEventListener('blur', function(){
    if(inputConfirmPassword.value === ''){
        textConfPass.innerText = 'Password is required';
        inputConfirmPassword.classList.add('invalid');
        inputConfirmPassword.classList.remove('valid');
    }else if(inputConfirmPassword.value === inputPassword.value){
        inputConfirmPassword.classList.remove('invalid');
        inputConfirmPassword.classList.add('valid');
        textConfPass.innerText = '';
    }else{
        textConfPass.innerText = `Password doesn't match!`;
        inputConfirmPassword.classList.add('invalid');
        inputConfirmPassword.classList.remove('valid');
    }
})

//кнопка
const btn = document.querySelector('.btn-submit');

btn.addEventListener('click', function(event) {
    event.preventDefault();
    let fields = [
        document.getElementById('email'),
        document.getElementById('password'),
        document.getElementById('passwordConfirm')
    ];

    let hasEmptyField = false;

    for(field of fields){
        if(!field.value){
            field.classList.add('invalid');
            hasEmptyField = true;
            //alert('you need to fill empty fields!')
        }else{
            field.classList.remove('invalid')
        };
    }
    if (hasEmptyField) {
        alert('You need to fill empty fields!');
        field.classList.add('invalid');
    }
    
});