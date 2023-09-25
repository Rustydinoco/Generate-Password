const passwordBox = document.querySelector('#PasswordBox');
const length = 12;
const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '1234567890';
const symbol = '`!@#$%^&*()_=+[{]}?><'
const AllChange = UpperCase+LowerCase+Number+Symbol;

function getPassword(){
    let password = "";
    password += UpperCase [Math.floor(Math.random()*UpperCase.length)]
    password += LowerCase [Math.floor(Math.random()*LowerCase.length)]
    password += number [Math.floor(Math.random()*number.length)]
    password += symbol [Math.floor(Math.random()*symbol.length)]

    while(length > password.length){
        password += AllChange [Math.floor(Math.random()*AllChange.length)]
    }
    passwordBox.value=password;
}

function CopyPassword(){
    passwordBox.select();
    document.execCommand('copy')
}
