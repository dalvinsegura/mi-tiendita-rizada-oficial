
// $(document).ready(main);

// function main(){







  // $('#btn-bar').click(function(){
  //   $('nav').toggle().slideRight(6000, function(){});
  // });

  var contador = 1;

 

  $('.menu-bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});













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




