
let form = document.querySelector('#next1');

form.onclick = () => {
    let userSurname = document.querySelector('#surname');
    let userName = document.querySelector('#name');
    let userLastName = document.querySelector('#lastname');
    let userBirth = document.querySelector('#birth');
    let userAddress = document.querySelector('#address');
    let userSerialNumber = document.querySelector('#number');
    let userInn = document.querySelector('#inn');
    let userDate = document.querySelector('#date');
    let userContactNumber = document.querySelector('#contact-number');
    let userMail = document.querySelector('#e-mail');
    let userBankName = document.querySelector('#bank-name');
    let userFactAddress = document.querySelector('#fact-address');

    let object = {
        surname: userSurname.value,
        name: userName.value,
        lastname: userLastName.value,
        birth: userBirth.value,
        address: userAddress.value,
        serial_number: userSerialNumber.value,
        inn: userInn.value,
        date: userDate.value,
        contact_number: userContactNumber.value,
        e_mail: userMail.value,
        bank_name: userBankName.value,
        fact_address: userFactAddress.value
    }
    
    console.log(object);

}

