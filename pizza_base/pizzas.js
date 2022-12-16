let pizzaJson = [
    {id:1, name:'Mussarela', img:'images/pizza.png', price:20.19, sizes:['100g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:2, name:'Calabresa', img:'images/pizza2.png', price:18.00, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:3, name:'Quatro Queijos', img:'images/pizza3.png', price:17.45, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:4, name:'Americana', img:'images/pizza4.png', price:19.77, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:5, name:'Sorvete', img:'images/pizza5.png', price:21.43, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:6, name:'Moda da Casa', img:'images/pizza6.png', price:18.55, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:7, name:'Chocolate', img:'images/pizza7.png', price:22.36, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'}
];

let modalKey = 0
let cart = []
let modalQt = 1
const c = (el)=>document.querySelector(el)

pizzaJson.map((item, index) => {
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)
    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault()
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQt = 1
        modalKey = key
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        c('.pizzaBig img').src = pizzaJson[key].img
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`
        c('.pizzaInfo--size.selected').classList.remove('selected')
        document.querySelectorAll('.pizzaInfo--size').forEach ((size, sizeIndex)=>{
            if(sizeIndex ==2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })

        c('.pizzaInfo--qt').innerHTML = modalQt
        c('.pizzaWindowArea').style.opacity = 0
        c('.pizzaWindowArea').style.display = 'flex'
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1
        },200)
        
    })
    document.querySelector('.pizza-area').append(pizzaItem)
})

function closeModal() {
    c('.pizzaWindowArea').style.opacity = 0
    setTimeout (()=>{
        c('.pizzaWindowArea').style.display = 'none'
    },500)
}

document.querySelectorAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal)
})

c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQt > 1) {
        modalQt--
    c('.pizzaInfo--qt').innerHTML = modalQt
    }
})
c('.pizzaInfo--qtmais').addEventListener('click',()=>{
    modalQt++
    c('.pizzaInfo--qt').innerHTML = modalQt
})

document.querySelectorAll('.pizzaInfo--size').forEach ((size, sizeIndex)=>{
    size.addEventListener('click', (e) => {
            c('.pizzaInfo--size.selected').classList.remove('selected');
            size.classList.add('selected');
        })
})

document.querySelector('.pizzaInfo--addButton').addEventListener('clcik', ()=>{
   let size = c('.pizzaInfo--size.selected').getAttribute('data-key')
   
    cart.push({
        id:pizzaJson[modalKey].id,
        size,
        qt:modalQt
    })
    closeModal()
})

