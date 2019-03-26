$(document).ready(function() {
	
	$('.main-slider').slick({
		slidesToScroll: 1,
		arrows:false,
		dots: true,
		autoplay: true,
		autoplaySpeed:4000,
		pauseOnHover:false,
		pauseOnFocus:false,
		customPaging : function(slider, i) {
			var slide_title = $(slider.$slides[i]).find('.main-slider-item').data('slide-name');
			var slide_dot = '<div class="slide_dot"><div class="indicator"></div><p><strong>0'+(i+1)+'</strong> '+slide_title+'</p></div>';
			return slide_dot;
		}
	})

});
$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
  $('#accordeon .acc-head').on('click', f_acc);
});

function f_acc(){
//скрываем все кроме того, что должны открыть
$('#accordeon .acc-body').not($(this).next()).slideUp(500);
// открываем или скрываем блок под заголовоком, по которому кликнули
$(this).next().slideToggle(1000);
}
$(document).ready(function() {
	
	$('.main-slider2').slick()
	

});
$(document).ready(function() {
	
	
	$('.main-slider3').slick()

});
$(document).ready(function() {
	$('.toogle-mobile-menu').click(function(e) {
		e.preventDefault();
		$('body').toggleClass('menu-opened');
	});
});
function stikyHeader(){
	if($(window).scrollTop() > 200){
		$('.header').addClass('fixed');
	}else{
		$('.header').removeClass('fixed');
	}
}
$(window).on('load scroll', stikyHeader);
