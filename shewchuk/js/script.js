let burger = document.querySelector('.header__burger')
console.log(burger);
let navigation = document.querySelector('.header__navigation')
burger.addEventListener('click',()=>{
   // burger.classList.toggle('active')
navigation.classList.toggle('active')



})
//=============================================

const anim = document.querySelectorAll('.anim')
console.log(anim);
window.addEventListener('scroll', anime)
anime()
    function anime() {
     const getBottom = window.innerHeight /5*4
     anim.forEach(el => {
       const animTop = el.getBoundingClientRect().top
       if(animTop < getBottom) {
el.classList.add('active')
       }else{
        el.classList.remove('active')  
       }
     });   
    }
    // ===================================select

const selectColumn = document.querySelector('.select__column')
const selectTitle = document.querySelector('.select__title')
const selectBlock = document.querySelector('.select__block')
const selectList = document.querySelectorAll('.select__list')



selectTitle.addEventListener('click', () =>{
selectBlock.classList.toggle('active')

})

selectList.forEach(el => {
  el.addEventListener('click', () =>{
let change = el.innerText
selectTitle.innerText = change
selectBlock.classList.remove('active')

  
});
})

// ======================form validation
// document.addEventListener('DOMContentLoaded', ()=>{

// const form = document.getElementById('form')
// form.addEventListener('submit', formSend)
// async function formSend(e) {
//   e.preventDefault()
//   let error = formValidation(form)
// }

// function formValidation(form) {
//   let error = 0
//   let formReq = document.querySelectorAll('.req')
//   for (let i = 0; i <formReq.length; i++) {
//     const input = formReq[i];
    
//     formRemoveEroor(input)
// if(input.classList.contains('.email')){
// if(testEmail(input)){
//   formAddEroor(input)
//   error++

// }
// else if
//   (input.value === ''){
//     formAddEroor(input)
//     error++
//     // let box = document.createElement('div')
//     // box.innerText = 'error'
//     // let getInput = document.querySelector
//   }
//   else{
//     if(testPhone(input)){
//       formAddEroor(input)
//       error++
//     }
//   }
// }
// }


//   }

// //==============================
// function formAddEroor(input) {
//   input.parentElement.classList.add('.error')
//   input.classList.add('.error')
// }
// function formRemoveEroor(input) {
//   input.parentElement.classList.remove('.error')
//   input.classList.remove('.error')
// }
// //chekd email=================
// function testEmail(input) {
//  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value) 
// }


// // function testPhone(input) {
// //   return /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
// // }
// })







