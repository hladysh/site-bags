$(function(){

	$('.consultation').click(function(e) {
		e.preventDefault()
		$('.consultation-popup').fadeIn(300);
		$('.overlay').fadeIn(300);
	});

	$('.consultation-popup .close-popup, .overlay').click(function() {
		$('.overlay, .consultation-popup').fadeOut(300);
	});

	$('.btn-buy').click(function(e) {
		e.preventDefault()
		var tittle =  $(this).closest('.product-item').find('.product-title').text();
		$('#product-name').val(tittle);
		var productsize = $(this).prev().find(".tabs .tabs-list .active").text();
		if (productsize.length >= 1) {
			$('#product-size').val($(this).prev().find(".tabs .tabs-list .active").text());
		} else {
			$('#product-size').val('Стандартний розмір');
		}
		$('.buy-popup').fadeIn(300);
		$('.overlay').fadeIn(300);
	});

	$('.buy-popup .close-popup, .overlay').click(function() {
		$('.overlay, .buy-popup').fadeOut(300);
	});

	$('.btn-order').click(function(e) {
		e.preventDefault()
		$('.baner-popup').fadeIn(300);
		$('.overlay').fadeIn(300);
	});

	$('.baner-popup .close-popup, .overlay').click(function() {
		$('.overlay, .baner-popup').fadeOut(300);
	})

	$('.link-video').on('click', function(e) {
		e.preventDefault();
		$('.popup-video').fadeIn(300);
		$('.overlay').fadeIn(300);
		$('.popup-videoo-block').append('<iframe id="video" min-width="320px" min-height="360px" src="https://www.youtube.com/embed/PzgZx0_nQsk" frameborder="0" allowfullscreen></iframe>');
	});

	$('.close-popup, .overlay').click(function() {
		$("#video").remove();
		$('.overlay, .popup-video, close-popup').fadeOut(300);
	});

	$(window).resize(function(){
		$('.popup').css({
			left: ($(window).width() - $('.popup').outerWidth()) / 2 +'px',
			top: ($(window).height() - $('.popup').outerHeight()) / 2 +'px'
		});
		$('.popup-video').css({
			left: ($(window).width() - $('.popup-video').outerWidth()) / 2 +'px',
			top: ($(window).height() - $('.popup-video').outerHeight()) / 2 +'px'
		});
	});
	$(window).resize();



	var $inputItem = $(".input-label");
	$inputItem.length && $inputItem.each(function() {
		var $this = $(this),
		$input = $this.find(".input-item"),
		$inputphone = $("#phone"),
		placeholderTxt = $input.attr("placeholder"),
		$placeholder;
		$input.after('<span class="placeholder">' + placeholderTxt + "</span>"),
		$input.attr("placeholder", ""),
		$placeholder = $this.find(".placeholder"),
		$input.val().length ? $this.addClass("active") : $this.removeClass("active"),
		$input.on("focusout", function() {
			$input.val().length ? $this.addClass("active") : $this.removeClass("active");
		}).on("focus", function() {
			$this.addClass("active");
		});
	});

	$('.product-slider').slick({
		// autoplay: true,
		dots: false,
		infinite: true,
		arrows: true,
		prevArrow: '<button id="prev" type="button" class="btn-slider btn-prev"><i class="icon icon-left-arrow"></i></button>',
		nextArrow: '<button id="next" type="button" class="btn-slider btn-next"><i class="icon icon-right-arrow"></i></button>'
	});

	$(".catalog").on("click", function (event) {
		event.preventDefault();
		var top = $("#product").offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('ul.tabs-list').on('click', 'li:not(.active)', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active')
		.closest('.tabs-wrap').find('.tabs-price').removeClass('active').eq($(this).index()).addClass('active')	;
	});


	// $('form').submit(function(e) {
 //        // if ((typeof clickname_h == "undefined") ||
 //        //     (typeof clickname_h == "undefined"))

 //        // {
 //        //     clickname_h = $(this).find('.lnk h6').text().trim();
 //        //     clickname_a = $(this).find('.lnk a').text().trim();
 //        // }

 //        // var phone = $(this).find("input[name='phone']").val();
 //        // var name = $(this).find("input[name='name']").val();
 //        // var text = $(this).find("textarea").val();

 //        // var dataAttr = "phone=" + phone +
 //        //     "&name=" + name +
 //        //     "&text=" + text +
 //        //     "&clickname_a=" + clickname_a +
 //        //     "&clickname_h=" + clickname_h;
 //        $.ajax({
 //            // type: $(this).attr('method'),
 //            // url: $(this).attr('action'),
 //            // data: dataAttr,
 //        }).done(function() {            
 //            		location.href = "success.php"
 //        }).fail(function() {
 //            console.log('fail');
 //        });
 //        e.preventDefault();
 //        type = '';
 //    });
 	$('form').submit(function(event) {
    event.preventDefault(); // отменяем отправку формы

    // собираем данные
    // отправляем
    $.ajax({/* ... */}).done(function(result) {
        // переход
        window.location.href = "success.php";
    });
});
});






