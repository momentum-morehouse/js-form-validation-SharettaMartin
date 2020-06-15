function valid() {
let name = document.querySelector('#name');
//console.log(name.value);
let car = document.querySelector('#car-year');
//console.log(car);
let form = document.querySelector('#parking-form');
let date = document.querySelector('#start-date');
let days = document.querySelector('#days');
let creditcard = document.querySelector('#credit-card');
let cvv = document.querySelector('#cvv');
let expiration = document.querySelector('#expiration');
form.addEventListener('submit', e => {
e.preventDefault()
console.log(e.target);
})
}

valid();

    console.log('Add validation!');

    function validate (){
    let name = document.getElementbyId('name');
    // (local let) name:  
    if (user name.value.trim() ==""  ||password.value.trim()=="")
    {
        //alert("Blank Name");
        name.style.border = "solid 3px red";
        document.getElementbyId("1b1user")
        .style.visibility="visible";
        // alert("no blank values allowed");
        return false;
    }
    else
    {
        true;
    }
