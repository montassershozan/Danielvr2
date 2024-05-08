/// <reference types="../@types/jquery" />

import { all, brand, graphic, design, allsec, layyer, col, nvbar, doc, nvlink, layerOnScreen, iMG, closeIc, rightIc, leftIc, landslider, test1, test2, btnCir } from "./varsModule.js";

export class Portifilo {
    constructor() { }
    getport() {
        brand.addEventListener('click', function () {
            $('#all-sec').fadeToggle(350, function () {
                brand.setAttribute('href', '#all-sec')
                for (let i = 0; i < layyer.length; i++) {
                    layyer[i].classList.add('d-none');
                    col[i].classList.remove('col-md-4');
                }
                allsec.classList.remove('row');
                allsec.classList.add('d-flex');
                col[3].classList.add('col-md-4');
                col[5].classList.add('col-md-4');
                layyer[3].classList.replace('d-none', 'd-block');
                layyer[3].classList.add('me-4');
                layyer[5].classList.replace('d-none', 'd-block');
                layyer[5].classList.add('me-4');
            });
        })
        all.addEventListener('click', function () {
            $('#all-sec').fadeIn(350, function () {
                allsec.classList.remove('d-flex');
                allsec.classList.add('row');
                for (let i = 0; i < layyer.length; i++) {
                    col[i].classList.add('col-md-4');
                    layyer[i].classList.replace('d-none', 'd-block');
                }
                layyer[3].classList.remove('me-4');
                layyer[5].classList.remove('me-4');
                layyer[1].classList.remove('me-4');
                layyer[4].classList.remove('me-4');
                layyer[0].classList.remove('me-4');
                layyer[2].classList.remove('me-4');
            })
        })
        design.addEventListener('click', function () {
            $('#all-sec').fadeToggle(350, function () {
                design.setAttribute('href', '#all-sec')
                for (let i = 0; i < layyer.length; i++) {
                    layyer[i].classList.add('d-none');
                    col[i].classList.remove('col-md-4');
                }
                allsec.classList.remove('row');
                allsec.classList.add('d-flex');
                col[1].classList.add('col-md-4');
                col[4].classList.add('col-md-4');
                layyer[1].classList.replace('d-none', 'd-block');
                layyer[1].classList.add('me-4');
                layyer[4].classList.replace('d-none', 'd-block');
                layyer[4].classList.add('me-4');
            })
        })
        graphic.addEventListener('click', function () {
            $('#all-sec').fadeToggle(350, function () {
                graphic.setAttribute('href', '#all-sec')
                for (let i = 0; i < layyer.length; i++) {
                    layyer[i].classList.add('d-none');
                    col[i].classList.remove('col-md-4');
                }
                allsec.classList.remove('row');
                allsec.classList.add('d-flex');
                col[0].classList.add('col-md-4');
                col[2].classList.add('col-md-4');
                col[4].classList.add('col-md-4');
                layyer[0].classList.replace('d-none', 'd-block');
                layyer[0].classList.add('me-4');
                layyer[2].classList.replace('d-none', 'd-block');
                layyer[2].classList.add('me-4');
                layyer[4].classList.replace('d-none', 'd-block');
                layyer[4].classList.add('me-4');
            })
        })
    }
    NavBar() {
        doc.on('scroll', function () {
            let elment = doc.scrollTop();
            let offst = $('#about-sec').offset().top - 20;
            if (elment > offst) {
                nvbar.style.backgroundColor = "white";
                nvbar.style.boxShadow = '10px 10px 100px #c1c1c1'
                nvlink.css({
                    color: 'black',
                    fontWeight: '500',
                })
                $('.bars').css({
                    color: 'black',
                    fontWeight: '500',
                })
            } else {
                nvbar.style.backgroundColor = "transparent";
                nvbar.style.boxShadow = 'none'
                nvlink.css({
                    color: 'white',
                    fontWeight: '500'
                })
                $('.bars').css({
                    color: 'white',
                    fontWeight: '500'
                })
            }
        })
    }
    Slider() {
        landslider.on('click', function (e) {
            let targetelment = $(e.target).parents()[3].children[0];
            let srcIm = targetelment.getAttribute('src');
            console.log();
            iMG.setAttribute('src', srcIm);
            layerOnScreen.classList.replace('d-none', 'd-block')
        })

        layerOnScreen.addEventListener('click', function (e) {
            e.stopPropagation();
            closeIc.on('click', function () {
                layerOnScreen.classList.replace('d-block', 'd-none')
            })
            //  rightIc.on('click',function (e) { 
            //     for(let i = 0 ; i < landslider.length ; i++){
            //         let targetelment = landslider.parents()[3].children.eq(i);
            //         console.log(targetelment);
            //         // let srcIm = targetelment.getAttribute('src');
            //         // iMG.setAttribute('src',srcIm);
            //     }
            //  })
        })
    }
    testomanials() {
        btnCir[0].addEventListener('click', function (e) {
            $('.test1').fadeToggle(700)
            test1.classList.replace('d-none', 'd-block')
            test2.classList.replace('d-block', 'd-none')
        })
        btnCir[1].addEventListener('click', function (e) {
            $('.test2').fadeToggle(700)
            test2.classList.replace('d-none', 'd-block')
            test1.classList.add('d-none');
        })
    }
    counTer() {
        $('.counter').countUp();
    }
    
}