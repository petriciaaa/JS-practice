const form__email= document.querySelector('#form__email')
const form__button= document.querySelector('#form__button')
const form__list= document.querySelector('#form__list')

let email__info=[]

function clearAllChilds(parent){
    while(parent.firstChild)
        parent.removeChild(parent.firstChild);

}


let emailRender = function (){
    let email__value = form__email.value
    form__email.value=''
    
    email__info.push(email__value)
    
    //Mb rerender function
    clearAllChilds(form__list)
    form__list.classList.remove('display-hide')
    
    let num =0
   

    for (let i =0; i<email__info.length;i++){
        num++

        let form__wrapper = document.createElement('div')
        let form__delete = document.createElement('button')
        let form__text = document.createElement('span')

        form__wrapper.classList.add('form__wrapper')
        form__delete.classList.add('form__button')
        form__delete.textContent = 'Delete'
        
        { form__text.textContent= `${num}  What you added: ${email__info[i]}`}
       

        form__wrapper.appendChild(form__text)
        form__wrapper.appendChild(form__delete)
        form__list.appendChild(form__wrapper )

        form__delete.addEventListener('click',function(){
            email__info.splice(i,1)
            
            
            emailRender()

        })
    
        if (email__info[i]==''){
            form__list.removeChild(form__wrapper)  
            num--
        }
    
    
    
    }
}


form__button.addEventListener('click',emailRender)


