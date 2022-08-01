const habilidadesPlink = document.getElementById('habiliti')
const linkOther = document.getElementById('other')
const linkInfo = document.getElementById('info-me')
const habilidadesP = document.querySelector('.habilidades-principais')
const infoMe = document.querySelector('.sobre-mim')
const otherH = document.querySelector('.outras')
const img = document.getElementById('tryber')
const title = document.getElementById('title')
const header = document.getElementById('header')


const areasFunc = (path) => {
    for(let i of path.children){
       // i.style.textDecoration === 'underline'? i.style.textDecoration = 'none' : i.style.textDecoration = 'underline'
        i.style.fontWeight === '500'? i.style.fontWeight = '400' : i.style.fontWeight = '500'
        i.style.color !== 'maroon' ?  i.style.color = 'maroon' : i.style.color = '#3B6D54'
    }
}

const darkTheme = () => {
    if(header.style.backgroundColor !== 'black'){
        document.body.style.backgroundColor = 'black'
        title.style.color = '#3B6D54'
        header.style.backgroundColor = 'black'
    }else{
        document.body.style.backgroundColor = 'rgb(219, 216, 214)'
        title.style.color = 'white'
        header.style.backgroundColor = 'rgb(31, 31, 82)'
    }
}

habilidadesPlink.addEventListener('click',() => {
    areasFunc(habilidadesP)
    setTimeout(() => areasFunc(habilidadesP),3000)
})

linkOther.addEventListener('click',() => {
    areasFunc(otherH)
    setTimeout(() => areasFunc(otherH),3000)
})

linkInfo.addEventListener('click',() => {
    areasFunc(infoMe)
    setTimeout(() => areasFunc(infoMe),3000)
}) 

img.addEventListener('click',darkTheme)