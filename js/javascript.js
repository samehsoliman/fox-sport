// navbar

var toggleBtn = document.querySelector('.toggle-btn');
var navbarList = document.querySelector('.navbar-list');

toggleBtn.onclick = ()=>{
    if(navbarList.style.height == '0px' || navbarList.style.height ==""){
        navbarList.style.height = "225px";
    } else {
        navbarList.style.height = '0px';
    }
}



// product details
$('.product-small-img').click(function(){
    $('.product-large-img').attr('src', $(this).attr('src'));
})


// account

$('.login-link').click(()=>{
    $('.login-link').addClass('active');
    $('.register-link').removeClass('active');

    $('.login-form').css('transform', 'translateX(0px)');
    $('.register-form').css('transform', 'translateX(0px)');

})

$('.register-link').click(()=>{
    $('.login-link').removeClass('active');
    $('.register-link').addClass('active');

    $('.login-form').css('transform', 'translateX(300px)');
    $('.register-form').css('transform', 'translateX(300px)');

})




