// const uuidv4 = require('uuid/v4')
for ( let i = 0; i<300;i = i + 3){
    
    let cardTemplate = document.getElementById("rowDiv").cloneNode(true);
    div1 = cardTemplate.querySelector('#carouselExampleControls1')
    div2 = cardTemplate.querySelector('#carouselExampleControls2')
    div3 = cardTemplate.querySelector('#carouselExampleControls3')
    a1 = div1.querySelector('.carousel-control-prev')
    a2 = div1.querySelector('.carousel-control-next')
    b1 = div2.querySelector('.carousel-control-prev')
    b2 = div2.querySelector('.carousel-control-next')
    c1 = div3.querySelector('.carousel-control-prev')
    c2 = div3.querySelector('.carousel-control-next')
    div1.setAttribute('id', `sss${i}`);
    div2.setAttribute('id', `sss${i+1}`);
    div3.setAttribute('id', `sss${i+2}`);
    a1.setAttribute('href',`#sss${i}`)
    a2.setAttribute('href',`#sss${i}`)
    b1.setAttribute('href',`#sss${i+1}`)
    b2.setAttribute('href',`#sss${i+1}`)
    c1.setAttribute('href',`#sss${i+2}`)
    c2.setAttribute('href',`#sss${i+2}`)

    cardTemplate.setAttribute('id','');    

    let mainDivv = document.getElementById("mainDiv");
    mainDivv.appendChild(cardTemplate);

}
    
    
// let x= uuidv4();
// console.log(x)
    



