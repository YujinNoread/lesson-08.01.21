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
    let formCompany = document.querySelector('.form__company')
    let formPhoneNumber = document.querySelector('.form__phonenumber')
    let formPassword = document.querySelector('.form__password')
    let checkbox = document.getElementById('checkbox')
    let error = document.querySelector(".error")
    let arrow = document.querySelector(".arrow");
    let arrow2 = document.querySelector(".arrow2");
    let arrow3 = document.querySelector(".arrow3");
    let formBtn = document.querySelector(".form__btn")
    checkbox.checked ? remove(error) : add(error)
    if(formCompany.value.length>0){
        arrow.classList.add('visible')
        formCompany.classList.remove('red')
    } else{
        arrow.classList.remove('visible')
        formCompany.classList.add('red')
    }
    if(formPhoneNumber.value.length===13){
        arrow2.classList.add('visible')
        formPhoneNumber.classList.remove('red')
    } else{
        arrow2.classList.remove('visible')
        formPhoneNumber.classList.add('red')
    }
    if(formPassword.value.length>0){
        arrow3.classList.add('visible')
        formPassword.classList.remove('red')
    } else{
        arrow3.classList.remove('visible')
        formPassword.classList.add('red')
    }
    if(formCompany.value.length>0&&formPhoneNumber.value.length>0&&formPassword.value.length>0&&checkbox.checked){
        formBtn.removeAttribute('disabled')
        formBtn.classList.remove('disabled')
    } else if(formCompany.value.length>0||formPhoneNumber.value.length>0||formPassword.value.length>0){
        formBtn.classList.add('disabled')
        formBtn.setAttribute("disabled", "disabled")
    }
}


let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".modal__close")
let checkbox = document.getElementById("checkbox")
checkbox.onclick = function (){
    {if (checkbox.checked){
        modal.classList.add("visible")
    }}
}
modal.addEventListener("click",function (event){
    if (event.target === modal){
        modal.classList.remove("visible")
    }
})
closeBtn.addEventListener("click", function (){
    modal.classList.remove("visible");
})




