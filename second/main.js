var element = document.getElementById('phonenumber');
var maskOptions = {
    mask: '+{38}(000)000-00-00'
};


function addClass(item,invalid){
    if(invalid===undefined){
        item.classList.add("visible")
    }else {
        item.classList.add("visible")
        invalid.classList.add("invalid")
    }
}
function removeClass(item,invalid){
    if (invalid===undefined){
        item.classList.remove("visible")
    }else {
        item.classList.remove("visible")
        invalid.classList.remove("invalid")
    }
}

function handleCompany(){
    let formCompany = document.querySelector('.form__company')
    let arrow = document.querySelector('.arrow');

    if(formCompany.value.length>0){
        arrow.classList.add('visible')
        formCompany.classList.remove('invalid')
    } else{
        arrow.classList.remove('visible')
        formCompany.classList.add('invalid')
    }

    validForm();
}
function handlePhone(){
    let formPhoneNumber = document.querySelector('.form__phonenumber')
    let arrow2 = document.querySelector(".arrow2");
    var mask = IMask(element, maskOptions);

    if(mask.unmaskedValue.length===12){
        arrow2.classList.add('visible')
        formPhoneNumber.classList.remove('invalid')
    } else{
        arrow2.classList.remove('visible')
        formPhoneNumber.classList.add('invalid')
    }

    validForm();
}
function handlePassword(){
    let formPassword = document.querySelector('.form__password')
    let arrow3 = document.querySelector(".arrow3");

    if(formPassword.value.length>0){
        arrow3.classList.add('visible')
        formPassword.classList.remove('invalid')
    } else{
        arrow3.classList.remove('visible')
        formPassword.classList.add('invalid')
    }

    validForm();
}
function handleCheckbox(){
    let checkbox = document.getElementById('checkbox')
    let error = document.querySelector(".error")

    checkbox.checked ? removeClass(error) : addClass(error)

    validForm();
}
function validForm(){
    let formCompany = document.querySelector('.form__company')
    let formPhoneNumber = document.querySelector('.form__phonenumber')
    let formPassword = document.querySelector('.form__password')
    let checkbox = document.getElementById('checkbox')
    let formBtn = document.querySelector(".form__btn")

    if(formCompany.value.length>0
        &&formPhoneNumber.value.length>0
        &&formPassword.value.length>0
        &&checkbox.checked){
        formBtn.removeAttribute('disabled')
        formBtn.classList.remove('disabled')
    } else if(formCompany.value.length>0
        ||formPhoneNumber.value.length>0
        ||formPassword.value.length>0){
        formBtn.classList.add('disabled')
        formBtn.setAttribute("disabled", "disabled")
    }
}

let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".modal__close")
let checkbox = document.getElementById("checkbox")
let links = document.querySelectorAll(".links")

links.forEach((item)=> {
    item.addEventListener("click", function (){
        modal.classList.add("visible")
        checkbox.checked=false;
    })
})

modal.addEventListener("click",function (event){
    if (event.target === modal){
        modal.classList.remove("visible")
    }
})

closeBtn.addEventListener("click", function (){
    modal.classList.remove("visible");
})






