


for ( let i = 0; i<99;i++){
    
    var cardTemplate = document.getElementById("rowDiv").cloneNode(true);
    
    cardTemplate.childNodes[1].childNodes[3].setAttribute("id", `sss${i+1}`);
    cardTemplate.childNodes[3].childNodes[3].setAttribute("id", `sss${i+2}`);
    cardTemplate.childNodes[5].childNodes[3].setAttribute("id", `sss${i+3}`);


    cardTemplate.childNodes[1].childNodes[3].childNodes[5].setAttribute("href", `#sss${i+1}`)
    cardTemplate.childNodes[1].childNodes[3].childNodes[7].setAttribute("href", `#sss${i+1}`)
    cardTemplate.childNodes[3].childNodes[3].childNodes[5].setAttribute("href", `#sss${i+2}`)
    cardTemplate.childNodes[3].childNodes[3].childNodes[7].setAttribute("href", `#sss${i+2}`)
    cardTemplate.childNodes[5].childNodes[3].childNodes[5].setAttribute("href", `#sss${i+3}`)
    cardTemplate.childNodes[5].childNodes[3].childNodes[7].setAttribute("href", `#sss${i+3}`)
    

    var mainDivv = document.getElementById("mainDiv");
    mainDivv.appendChild(cardTemplate);

    
    // var mainDiv = cardTemplatee.childNodes;
    // var newDiv1 = mainDiv[1];
    // var newDiv2 = mainDiv[3];
    // var newDiv3 = mainDiv[5];


    // var carousel1 = newDiv1.childNodes
    // var carousel2 = newDiv2.childNodes
    // var carousel3 = newDiv3.childNodes

    

    // carousel1[3].setAttribute("id",`sss${i+1}`);
    // carousel2[3].setAttribute("id",`sss${i+2}`);
    // carousel3[3].setAttribute("id",`sss${i+3}`);


 

    // var a1 = carousel1[3].childNodes
    // var a2 = carousel2[3].childNodes
    // var a3 = carousel3[3].childNodes
    // console.log(a1)
    // console.log(a2)
    // console.log(a3)
    // var a11 = a1[5]
    // var a21 = a1[7]
    // var a12 = a2[5]
    // var a22 = a2[7]
    // var a13 = a3[5]
    // var a23 = a3[7]

    // a11.setAttribute("href",`#sss${i+1}`)
    // a12.setAttribute("href",`#sss${i+2}`)
    // a13.setAttribute("href",`#sss${i+3}`)
    // a21.setAttribute("href",`#sss${i+1}`)
    // a22.setAttribute("href",`#sss${i+2}`)
    // a23.setAttribute("href",`#sss${i+3}`)
    

    
}


