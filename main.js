function add(item,red){
    if(red===undefined){
        item.classList.add("visible")
    }else {
        item.classList.add("visible")
        red.classList.add("red")
    }
}
function remove(item,red){
    if (red===undefined){
        item.classList.remove("visible")
    }else {
        item.classList.remove("visible")
        red.classList.remove("red")
    }
}
function testFunction() {
    let formFullName = document.querySelector('.form__fullname')
    let formFirstName = document.querySelector('.form__firstname')
    let formEmail = document.querySelector('.form__email')
    let arrow = document.querySelector('.arrow');
    let arrow2 = document.querySelector('.arrow2');
    let error = document.querySelector(".error")
    let formBtn = document.querySelector(".form__btn")
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    formFullName.value.length>0 ? add(arrow) : remove(arrow)
    formFirstName.value.length>0 ? add(arrow2) : remove(arrow2)
    formEmail.value.length>0&&reg.test(formEmail.value) ? remove(error,formEmail) : add(error,formEmail)
    if(formFullName.value.length>0&&formFirstName.value.length>0&&formEmail.value.length>0&&reg.test(formEmail.value)){
        formBtn.removeAttribute('disabled','disabled')
        formBtn.classList.remove('disabled')
    } else if(formFullName.value.length>0||formFirstName.value.length>0||formEmail.value.length>0||reg.test(formEmail.value)){
        formBtn.classList.add('disabled')
        formBtn.setAttribute('disabled','disabled')
    }
}


