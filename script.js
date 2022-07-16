let habilidadesPlink = document.getElementById('habiliti')
let linkOther = document.getElementById('other')
let linkInfo = document.getElementById('info-me')
let habilidadesP = document.querySelector('.habilidades-principais')
let infoMe = document.querySelector('.sobre-mim')
let otherH = document.querySelector('.outras')


const mostraArea1 = () => {
    for(let i of habilidadesP.children){
        i.style.textDecoration === 'underline'? i.style.textDecoration = 'none' : i.style.textDecoration = 'underline'
    }
}

const mostraArea2 = () => {
    for(let i of infoMe.children){
        i.style.textDecoration === 'underline'? i.style.textDecoration = 'none' : i.style.textDecoration = 'underline'
    }
}

const mostraArea3 = () => {
    for(let i of otherH.children){
        i.style.textDecoration === 'underline'? i.style.textDecoration = 'none' : i.style.textDecoration = 'underline'    }
}

habilidadesPlink.addEventListener('click',mostraArea1)
linkOther.addEventListener('click',mostraArea3)
linkInfo.addEventListener('click',mostraArea2) 