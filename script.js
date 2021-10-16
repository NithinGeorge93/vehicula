$(document).ready(function () {
    var slideIndex = 1;

    $('.dot').click((e) => {
        var $this = $(e.currentTarget);
        slideIndex = $this.data("silder");

        showSlides(slideIndex);
    });

    const showSlides = (n) => {
        var i;
        var slides = $(".slides");
        var dots = $(".dot");
        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    };

    showSlides(slideIndex);

    $(".open-signup").click(function () {
        $(".pop-two").fadeIn("slow");
    });
    $(".close").click(function () {
        $(".pop-two").fadeOut("slow");
    });

    $(".open-login").click(function () {
        $(".pop-one").fadeIn("slow");
    });
    $(".close").click(function () {
        $(".pop-one").fadeOut("slow");
    });


    $("#loginForm").validate({
        rules: {
            email: {
                email: true,
                required: true
            },
            password: {
                required: true,
            }
        },
        messages: {
            email: {
                required: "email is required"
            },
            password: {
                required: "password is required"
            }
        }
    });

    var signup = $("#sign-up").validate({
        rules: {
            create_email: {
                required: true,
                email: true,
            },
            new_password: {
                required: true,
            },
            confirm_password: {
                required: true,
            }
        },
        messages: {
            create_email: {
                required: "email is required"
            },
            new_password: {
                required: "password is required"
            },
            confirm_password: {
                required: "password is required"
            }
        }
    });

    $('#sign-up, #loginForm').on('submit', (e) => {
        e.preventDefault();

        var $this = $(e.currentTarget);

        if ($("#sign-up").length) {
            if (signup.errorList.length === 0) {
                if ($("#confirm-password").val() === $("#new-password").val()) {
                    $("#sign-up").hide();
                    $(".procees-c").show();
                    $(".error-pss").hide();
                }  else {
                    $(".error-pss").show();
                }
            }
        }
    });
    
    $('#new-password').focus(() => {
        $("#message").show();
    });

    $('#new-password').blur(() => {
        $("#message").hide();
    });
    
    $('#new-password').keyup((e) => {
        var $this = $(e.currentTarget);

        var lowerCaseLetters = /[a-z]/g;
        if ($this.val().match(lowerCaseLetters)) {
            $("#letter").removeClass("invalid");
            $("#letter").addClass("valid");
        } else {
            $("#letter").removeClass("valid");
            $("#letter").addClass("invalid");
        }

        var upperCaseLetters = /[A-Z]/g;
        if ($this.val().match(upperCaseLetters)) {
            $("#capital").removeClass("invalid");
            $("#capital").addClass("valid");
        } else {
            $("#capital").removeClass("valid");
            $("#capital").addClass("invalid");
        }

        var numbers = /[0-9]/g;
        if ($this.val().match(numbers)) {
            $("#number").removeClass("invalid");
            $("#number").addClass("valid");
        } else {
            $("#number").removeClass("valid");
            $("#number").addClass("invalid");
        }

        if ($this.val().length >= 8) {
            $("#length").removeClass("invalid");
            $("#length").addClass("valid");
        } else {
            $("#length").removeClass("valid");
            $("#length").addClass("invalid");
        }
    });
});