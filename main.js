function addClass(item, invalid) {
    if (invalid === undefined) {
        item.classList.add("visible")
    } else {
        item.classList.add("visible")
        invalid.classList.add("invalid")
    }
}

function removeClass(item, invalid) {
    if (invalid === undefined) {
        item.classList.remove("visible")
    } else {
        item.classList.remove("visible")
        invalid.classList.remove("invalid")
    }
}
function handleFullName(){
    let formFullName = document.querySelector('.form__fullname')
    let arrow = document.querySelector('.arrow');

    formFullName.value.length > 0 ? addClass(arrow) : removeClass(arrow)
    validForm();
}
function handleFirstName(){
    let formFirstName = document.querySelector('.form__firstname')
    let arrow2 = document.querySelector('.arrow2');

    formFirstName.value.length > 0 ? addClass(arrow2) : removeClass(arrow2);
    validForm();
}
function handleEmail(){
    let formEmail = document.querySelector('.form__email')
    let error = document.querySelector(".error")
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    formEmail.value.length > 0 && reg.test(formEmail.value) ? removeClass(error, formEmail) : addClass(error, formEmail)
    validForm();
}
function validForm(){
    let formFullName = document.querySelector('.form__fullname')
    let formFirstName = document.querySelector('.form__firstname')
    let formEmail = document.querySelector('.form__email')
    let formBtn = document.querySelector(".form__btn")
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (formFullName.value.length > 0
        && formFirstName.value.length > 0
        && formEmail.value.length > 0
        && reg.test(formEmail.value)) {
        formBtn.removeAttribute('disabled')
        formBtn.classList.remove('disabled')
    } else if (formFullName.value.length > 0
        || formFirstName.value.length > 0
        || formEmail.value.length > 0
        || reg.test(formEmail.value)) {
        formBtn.classList.add('disabled')
        formBtn.setAttribute('disabled', 'disabled')
    }
}


