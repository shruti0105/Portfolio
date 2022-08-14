$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "M.L enthusiast", "Pianist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

  

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// function sendEmail()
// {
    // sendEmail.send({
    //     SecureToken:"3a2f0e1d-71be-4624-8ca4-d43ff267e450",
    //     To:"shrutideokar.19@gmail.com",
    //     From: document.getElementById("email").value,
    //     Subject: "Protfolio Website Form Enquiry",
    //     Body: "Name: "+document.getElementById("name").value
    //     +"<br> Email: "+document.getElementById("email").value
    //     +"<br> Subject: "+document.getElementById("subject").value
    //     +"<br> Message: "+document.getElementById("message").value
    // }).then(
    //     message=> alert("Message sent successfully")
    // );

//     Email.send({
//     Host : "smtp.yourisp.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );


function sendEmail(){
    Email.send({
        SecureToken:"3a2f0e1d-71be-4624-8ca4-d43ff267e450",
        
        To : 'shrutideokar.19@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body: "Name: "+document.getElementById("name").value
        +"<br> Email: "+document.getElementById("email").value
        +"<br> Subject: "+document.getElementById("subject").value
        +"<br> Message: "+document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully")
    );
}