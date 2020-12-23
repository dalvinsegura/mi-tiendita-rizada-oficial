
// $(document).ready(main);

// function main(){




var contador = 1;



  $('#btn-bar').click(function (){
    if(contador == 1){
      $('nav').toggle(600, function (){})
    }else{
      $('nav').toggle({
        left: '-100%'
      });
    }
  })

  if(contador == 1){
    console.log("funciona")
  }else{
    console.log("no funciona")
  }


  // boton = $('.btn-bar');
  // menu = $('nav');

  // boton.toggle(100, function (){
  //   menu.css({
  //     left: 0
  //   })
  // })













let productExclusive_1 = document.getElementById(`products-exclusive-1`),
    productExclusive_2 = document.getElementById(`products-exclusive-2`),
    productExclusive_3 = document.getElementById(`products-exclusive-3`),
    productExclusive_4 = document.getElementById(`products-exclusive-4`),
    productExclusive_5 = document.getElementById(`products-exclusive-5`),
    productExclusive_6 = document.getElementById(`products-exclusive-6`);
    btnOrdenNowContent = document.getElementById(`btn-ordenNow-content`);







function redireccionar1(){
    window.location="https://www.afroliterd.com/producto/cepillo-para-rizos/";
  } 
function redireccionar2(){
    window.location="https://www.afroliterd.com/producto/gorro-de-satin/";
}
function redireccionar3(){
    window.location="https://www.afroliterd.com/producto/perm-rods-1103/";
  } 
  function redireccionar4(){
    window.location="https://www.afroliterd.com/producto/bounce-curl-light-creme-gel/";
  } 
  function redireccionar5(){
    window.location="https://www.afroliterd.com/producto/manteca-karite-afroliterd/";
  }
  function redireccionar6(){
    window.location="https://www.afroliterd.com/producto/combo-kinky-curly/";
  }

  function ordenNowBtnRedire(){
    window.location="https://www.afroliterd.com/";
  }


  // btnOrdenNowContent.click(ordenNowBtnRedire())



// productExclusive_1.addEventListener(`click`, redireccionar1);
// productExclusive_2.addEventListener(`click`, redireccionar2);
// productExclusive_3.addEventListener(`click`, redireccionar3)
// productExclusive_4.addEventListener(`click`, redireccionar4)
// productExclusive_5.addEventListener(`click`, redireccionar5)
// productExclusive_6.addEventListener(`click`, redireccionar6)



