$(document).ready(function () {

    /* open sub-menu start */
    var timer = {};
    $(".mega-menu-level-one > li").hover(function () {
        var tag = $(this);
        var timerAttr = tag.attr('data-time');
        clearTimeout(timer[timerAttr]);
        timer[timerAttr] = setTimeout(function () {
            $('>ul', tag).fadeIn(0);
        }, 500);
    }, function () {
        var tag = $(this);
        var timerAttr = tag.attr('data-time');
        clearTimeout(timer[timerAttr]);
        timer[timerAttr] = setTimeout(function () {
            $('>ul', tag).fadeOut(0);
        }, 500);
    });
    /* open sub-menu end */

    /* open hamburger-menu start */
    $(".hamburger").click(function () {
        $('.overlay').show();
        $('nav').toggleClass("open");
    });

    $('.overlay').on('click', function () {
        if ($('nav').hasClass('open')) {
            $('nav').removeClass('open');
        }
        $(this).hide();
    });
    /* open hamburger-menu end */


    /* open submenu sidebare start */
    $(".category-level-2").click(function (e) {
        debugger;//remove
        e.preventDefault();
        var item = this;
        $(item).closest("li").find("ul").toggle("opensub");
    });
    /* open submenu sidebare end */

    /* open submenu for basket start */
    $(".collapsed").click(function (e) {
        e.preventDefault();
        var item = this;
        $(item).closest("li").find(".collapse").toggle("open")
    });
    /* open submenu for basket end */

    /* product filter at responsive page via niceSelect start */
    if ($('.custom-select-ui').length) {
        $('.custom-select-ui select').niceSelect();
    }
    /* product filter at responsive page via niceSelect end */

    /* scroll progress start */
    var offset = 50;
    var duration = 1500;
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    //console.log(pathLength);
    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $('.progress-wrap').addClass('active-progress');
        } else {
            $('.progress-wrap').removeClass('active-progress');
        }
    });
    $('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, duration);
        return false;
    });
    /* scroll progress end */

    /* slider product start */
$(".product-carousel").owlCarousel({
        rtl: true,
        loop: false,
        margin: 10,
        nav: true,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1
            },
            576: {
                items: 1,
                slideBy: 1
            },
            768: {
                items: 3,
                slideBy: 2
            },
            992: {
                items: 4,
                slideBy: 2
            },
            1400: {
                items: 4,
                slideBy: 3
            }
        }
    });
    /* slider product end*/
    
    /* slider brand start */
    $(".product-carousel-brand").owlCarousel({
        items: 4,
        rtl: true,
        loop: false,
        margin: 10,
        nav: true,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1
            },
            576: {
                items: 1,
                slideBy: 1
            },
            768: {
                items: 3,
                slideBy: 2
            },
            992: {
                items: 5,
                slideBy: 2
            },
            1400: {
                items: 5,
                slideBy: 3
            }
        }
    });
    /* slider brand end */

    /* slider license start */
$(".product-carousel-symbol").owlCarousel({
        items: 2,
        rtl: true,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
                autoplay: true
            },
            576: {
                items: 1,
                slideBy: 1,
                autoplay: true
            },
            768: {
                items: 1,
                slideBy: 1,
                autoplay: true
            },
            992: {
                items: 1,
                slideBy: 1,
                autoplay: true
            },
            1400: {
                items: 1,
                slideBy: 1,
                autoplay: true
            }
        }
    });
    /* slider license end */

    /* fix navbar start */
    $(document).scroll(function () {
        var item = $(".page");
        var x = $(window).scrollTop();
        if (x <= 100) {
            $('.header-main-row').removeClass("fixed-nav");
        } else {
            $('.header-main-row').addClass("fixed-nav");
        }
    });
    /* fix navbar end */

    /* login form validation start */
    $("#login , #signIn .btn-login").submit(function (e) {
        
        e.preventDefault();
        validateInputsLogin(this);
    });
    /* login form validation end */
});

/* windows loadding start */
window.onload = function () {
    setTimeout(function () {
        var preLoader = $(".container-loader");
        $(preLoader).hide();
        $(".page").css("opacity", "1");
    }, 3000)
}
/* windows loadding end */

/* Register form validation start */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs($(e.submitter).closest("form"));
});
function validateInputsLogin(form) {
    
    var hasError = false;
    const emailLogin = $(form).find('#email-login');
    const passwordLogin = $(form).find('#password-login');

    const emailLoginValue = $(emailLogin).val().trim();
    const passwordLoginValue = $(passwordLogin).val().trim();

    if (emailLoginValue === "") {
        setErrorMsg(emailLogin, "ایمیل نمی تواند خالی باشد");
        hasError = true;
    } else if (!isEmail(emailLoginValue)) {
        setErrorMsg(emailLogin, "ایمیل معتبر نیست!");
        hasError = true;
    } else {
        setSuccessMsg(emailLogin);
        hasError = false;
    }
    if (passwordLoginValue === "") {
        setErrorMsg(passwordLogin, "رمز عبور نمی تواند خالی باشد");
        hasError = true;
    } else {
        setSuccessMsg(passwordLogin);
    }
    if (!hasError) {
        $("#login-main").modal();
    }
}
function validateInputs(form) {
    
    var hasError = false;
    const username = $(form).find('#username');
    const email = $(form).find('#email');
    const phone = $(form).find('#phone');
    const password = $(form).find('#password');
    const passwordAgain = $(form).find('#password-again');
    
    const usernameValue = $(username).val().trim();
    const emailValue = $(email).val().trim();
    const phoneValue = $(phone).val().trim();
    const passwordValue = $(password).val().trim();
    const passwordAgainValue = $(passwordAgain).val().trim();

    if (usernameValue  === "") {
        setErrorMsg(username, "نام کاربر نمی تواند خالی باشد");
        hasError = true;
    } else if (usernameValue.length <= 2) {
        setErrorMsg(username, "نام کاربر باید حداقل 3 کاراکتر باشد");
        hasError = true;
    } else {
        setSuccessMsg(username);
        hasError = false;
    }
    if (emailValue === "") {
        setErrorMsg(email, "ایمیل نمی تواند خالی باشد");
        hasError = true;
    } else if (!isEmail(emailValue)) {
        setErrorMsg(email, "ایمیل معتبر نیست!");
        hasError = true;
    } else {
        setSuccessMsg(email);
        hasError = false;
    }
    if (phoneValue === "") {
        setErrorMsg(phone, "شماره نمی تواند خالی باشد");
        hasError = true;
    } else if ((phoneValue.length < 11) || (phoneValue.length > 11)) {
        setErrorMsg(phone, "شماره موبایل باید حداقل 11 شماره باشد!");
        hasError = true;
    } else {
        setSuccessMsg(phone);
        hasError = false;
    }
    if (passwordValue === "") {
        setErrorMsg(password, "رمز عبور نمی تواند خالی باشد!");
        hasError = true;
    } else if ((passwordValue.length < 5) || (passwordValue.length > 10)) {
        setErrorMsg(password, "رمز عبور باید بین 5 و 10 کاراکتر باشد!");
        hasError = true;
    } else {
        setSuccessMsg(password);
        hasError = false;
    }
    if (passwordAgainValue === "") {
        setErrorMsg(passwordAgain, "رمز عبور نمی تواند خالی باشد!");
        hasError = true;
    } else if (passwordValue != passwordAgainValue) {
        setErrorMsg(passwordAgain, "تکرار رمز صحیح نمی باشد!");
        hasError = true;
    } else {
        setSuccessMsg(passwordAgain);
        hasError = false;
    }
    if (!hasError) {
        $("#welcome").modal();
    }
}

function setErrorMsg(input, errormsgs) {
    
    const formAccount = input[0].parentElement;
    const small = formAccount.querySelector('small');
    formAccount.className = "form-account-title error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input) {
    formAccount = input[0].parentElement;
    formAccount.className = "form-account-title success";
}

function isEmail(emailValue) {
    var atSymble = emailValue.indexOf("@");
    if (atSymble < 1) return false;
    var dot = emailValue.lastIndexOf(".");
    if (dot <= atSymble + 2) return false;
    if (dot == emailValue.length - 1) return false;
    return true;
}
/* Register form validation end */

/* cart basket start */
var cart = [];
$(document).ready(function () {
    $(".add-basket-container a").click(function (e) {
        
        e.preventDefault();
        var item = $(this).closest(".product-with-basket");
        var name = $(item).find(".name-basket").text();
        var price = $(item).find(".price-basket").text().replace("تومان","").trim();
        var imagePath = $(item).find(".image-basket").attr("src");
        
        var objCart = { name: name, price: parseFloat(price.split(",").join("")), imagePath: imagePath }
        cart.push(objCart);
        addLayoutToCard(name, price, imagePath);
        initialCard();
    });
    $(document.body).on("click", ".mini-cart-item-close",function (e) {
        
        e.preventDefault();
        var item = this;
        var parentCountainer = $(item).closest(".mini-cart-item");
        var id = $(parentCountainer).find(".product-name-card").text();
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].name == id) {
                cart.splice(i, 1);
                break;
            }
        }
        $(parentCountainer).remove();
        initialCard();
    });
});
function initialCard(){
    var parentC = $(".header-cart-basket");
    var parentWidgetC = $(".widget-shopping-cart");
    var totalCntC = $(parentC).find(".count-cart");
    var totalpriceC = $(parentC).find(".price-cart-inner");
    var totalpriceWidgetC = $(parentWidgetC).find(".price-total-inner");
    var totalPrice = cart.reduce((a, b) => a + (b["price"] || 0), 0);
    var totalCnt = cart.length;
    $(totalpriceC).text(totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    $(totalpriceWidgetC).text(totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    $(totalCntC).text(totalCnt);
}
function addLayoutToCard(name, price, imagePath) {
   
    var itemLayout = '<li class="mini-cart-item">';
    itemLayout += '<div class="mini-cart-item-content">';
    itemLayout += '<a href="" class="mini-cart-item-close">';
    itemLayout += '<i class="fa fa-trash"></i>';
    itemLayout += '</a>';
    itemLayout += '<a href="" class="mini-cart-item-image d-block">';
    itemLayout += '<img src="' + imagePath + '" alt="">';
    itemLayout += '</a>';
    itemLayout += '<a href="detail.html">';
    itemLayout += '<span class="product-name-card">' + name + '</span>';
    itemLayout += '</a>';
    itemLayout += '<div class="variation">';
    itemLayout += '<span class="variation-n">فروشنده :</span>';
    itemLayout += '<p>لپ شاپ</p>';
    itemLayout += '</div>';
    itemLayout += '<div class="quantity">';
    itemLayout += '<span class="quantity-price-amount">' + price;
    itemLayout += '</span>';
    itemLayout += '</div>';
    itemLayout += '</div>';
    itemLayout += '</li>';
    $(".product-list-widget").append(itemLayout);
}
/* cart basket end */

/* gallery product start */
    var $customEvents = $('#custom-events');
    $customEvents.lightGallery();
    $("#img-product-zoom").ezPlus({
        zoomType: "inner",
        gallery: 'gallery-first',
        cursor: 'crosshair',
        galleryActiveClass: 'active',
        imageCrossfade: true,
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 500,
        containLensZoom: true
    });
    $("#gallery-slider").owlCarousel({
        rtl: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        dots: false,
        responsiveClass: true,
        response: {
            0: {
                items: 4,
                slideBy: 1
            }
        }
    })
    $("ul.gallery-actions li .add-product-wishes").on("click", function () {
        $(this).toggleClass("active");
    });
/* gallery product end */