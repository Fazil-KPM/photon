$(document).ready(function() {

    function headRoom() {
        var header = new Headroom(document.querySelector("#header"), {
            tolerance: {
                up: 8,
                down: 5
            },
            offset: 120,
        });
        header.init();
    }
    headRoom();

    function btnClick() {
        $(".btn-click").click(function() {
            $(this).addClass("btn-close");
            $(this).siblings(".form-text").addClass("open-form");
            console.log("button clicked");
        });
        $(".btn-submit").click(function() {
            $(this).parent(".form-text").removeClass("open-form");
            $(this).parent(".form-text").siblings(".btn-click").removeClass("btn-close");
            $(this).siblings('.input-style').val('');
        });
    }
    btnClick();

    function inputButton() {
        $('.btn-expand').click(function() {
            $(this).addClass("active");
            $(this).attr('placeholder', 'Email address');
            $('.btn-go').addClass("show");
            console.log("open input field");
        });
        $('.btn-go').click(function() {
            $(this).removeClass("show");
            $(this).siblings('.btn-expand').removeClass("active");
            $(this).siblings('.btn-expand').attr('placeholder', 'Get Notified');
            $(this).siblings('.btn-expand').val('');
            console.log("close input field");
        });
    }
    inputButton();


    // your functions go here
    // $('#email-field').click(function() {
    //     $(this).addClass("active");
    //     $(this).attr('placeholder', 'Email Address...');
    //     $('.btn-submit').addClass("show");
    // });


    function autoPlayYouTubeModal() {
        var trigger = $("body").find('[data-toggle="modal"]');
        trigger.click(function() {
            var theModal = $(this).data("target"),
                videoSRC = $('#videoModal iframe').attr('src'),
                videoSRCauto = videoSRC + "?autoplay=1";
            $(theModal + ' iframe').attr('src', videoSRCauto);
            $(theModal + ' button.close').on('click', function() {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
            $('.modal').on('click', function() {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
        });
    }
    autoPlayYouTubeModal();





    // resize
    $(window).resize(function() {});
});