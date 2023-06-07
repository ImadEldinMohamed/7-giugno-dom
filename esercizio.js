const form=document.getElementById('form')
form.addEventListener('submit', function (e){
    e.preventDefault()
    console.log('aggiunta effettuata')
const lista=document.getElementById('list')

const listItem=lista.value
console.log(listItem)



let newdiv=document.createElement('div')
newdiv.classList.add('ritocchi-lista')
newdiv.innerHTML=`
<p>${ lista.value}<p>
<button>ELIMINA</button>
`

let parent=document.getElementById('aggiunte')
parent.appendChild(newdiv)


const paragrafo=document.querySelectorAll('.ritocchi-lista P')
paragrafo.forEach((p)=>{
    p.addEventListener('click',function(e){
        e.target.parentElement.style.textDecoration='line-through'

    })
})

const bottonelimina=document.querySelectorAll('.ritocchi-lista button')
bottonelimina.forEach((button)=>{
    button.addEventListener('click', function(e){
       e.target.parentElement.parentElement.remove()
    })
})

lista.value=' '

})