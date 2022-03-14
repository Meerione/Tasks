let form2 = document.querySelector('#knopka2');

form2.onclick = () =>{

let userOrganName = document.querySelector('#organization');
let userPosition = document.querySelector('#position');
let userSalary = document.querySelector('#main-salary');
let userLastSalary = document.querySelector('#last-salary');
let userPhone = document.querySelector('#phone');
let userPrice = document.querySelector('#price');
let userQuantity = document.querySelector('#quantity');
let userTotalCredit = document.querySelector('#total-credit');
let userCreditType = document.querySelector('#credit-type');
let userCrediTime = document.querySelector('#credit-time');
let userPlace = document.querySelector('#receive');

let object ={
    org_name: userOrganName.value,
    position: userPosition.value,
    salary: userSalary.value,
    last_salary: userLastSalary.value,
    phone: userPhone.value,
    price: userPrice.value,
    quantity: userQuantity.value,
    total: userTotalCredit.value,
    credit_type: userCreditType.value,
    credit_term: userCrediTime.value,
    place: userPlace.value
}

console.log(object);
    
}