$(document).ready(function () {
    //Navugation
    $('.menu').on("click", 'a', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
        $('.display_in').removeClass('in');
    });
    $('#back_to_up').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
        return false;
    });
    $(function (f) {
        var element = f('#back_to_up');
        f(window).scroll(function () {
            element['fade' + (f(this).scrollTop() > 300 ? 'In' : 'Out')](500);
        });
    });
    //Form validations for registration
    $('input#name,input#email,input#password,input#password_repeat').unbind().blur(function () {
        var id = $(this).attr('id');
        var val = $(this).val();
        switch (id) {
            case 'name':
                var pattern_name = /^[A-Za-zА-Яа-яЁё]+$/;
                if (val.length > 2 & val != "" & pattern_name.test(val)) {
                    $(this).addClass('not_error');
                    $('.success_name').css('display', 'block')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('.error_name').css('display', 'none');
                    $('#name').css('border', '2px solid green');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $('.error_name').css('display', 'block')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('.success_name').css('display', 'none');
                    $('#name').css('border', '2px solid red');
                }
                break;
            case 'email':
                var pattern_email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                if (val != '' & pattern_email.test(val)) {
                    $(this).addClass('not_error');
                    $('.success_mail').css('display', 'block')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('.error_mail').css('display', 'none');
                    $('#email').css('border', '2px solid green');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $('.error_mail').css('display', 'block')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('.success_mail').css('display', 'none');
                    $('#email').css('border', '2px solid red');
                }
                break;
            case 'password':
                var pattern_password = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
                if (val != '' & pattern_password.test(val)) {
                    $(this).addClass('not_error');
                    $('.success_pass').css('display', 'block')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('.error_pass').css('display', 'none');
                    $('#password').css('border', '2px solid green');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $('.error_pass').css('display', 'block')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('.success_pass').css('display', 'none');
                    $('#password').css('border', '2px solid red');
                }
                break;
            case 'password_repeat':
                if (val != '' && val == $('#password').val()) {
                    $(this).addClass('not_error');
                    $('.success_repass').css('display', 'block')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('.error_repass').css('display', 'none');
                    $('#password_repeat').css('border', '2px solid green');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $('.error_repass').css('display', 'block')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('.success_repass').css('display', 'none');
                    $('#password_repeat').css('border', '2px solid red');
                }
                break;
        }
    });
    $('#modal_form').submit(function (e) {
        if ($('.not_error').length != 4) {
            e.preventDefault();
            $('.error_registration').css('display', 'block')
                .animate({ 'paddingLeft': '20px' }, 400)
                .animate({ 'paddingLeft': '5px' }, 400);
        }
    });
    $('input#name,input#email,input#password,input#password_repeat').focus(function () {
        $('.error_registration').css('display', 'none');
    });
    //Our works navigation
    $('.btn_video').click(function () {
        $('video').get(0).play()
    });    $('.tabs_ul li').click(function () {
        $('video').get(0).pause();
    });    $('.feedback,.btn_contact_us').on("click", function (e) {
        var top = $('#send_message').offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
    //Carousel
    $('#quote .carousel').carousel({
        pause: "hover",
        interval: 5000
    });
    $('#carousel_1').carousel({
        interval: 4000
    });
    $(".prev-slide").click(function () {
        $("#carousel_1").carousel('prev');
    });
    $(".next-slide").click(function () {
        $("#carousel_1").carousel('next');
    });
    //Form validations for feedback
    $('input#feedback_name,input#feedback_mail,input#feedback_subject,textarea#feedback_message').unbind().blur(function () {
        var id = $(this).attr('id');
        var val = $(this).val();
        switch (id) {
            case 'feedback_name':
                var pattern_name = /^[A-Za-zА-Яа-яЁё]+$/;
                if (val.length > 2 & val != "" & pattern_name.test(val)) {
                    $(this).addClass('not_error_feedback').removeClass('error_feedback');
                    $('.feedback_box_name').html('<img src="img/like.png" />')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#feedback_name').css('border', '2px solid #15ff00');
                }
                else {
                    $(this).removeClass('not_error_feedback').addClass('error_feedback');
                    $('.feedback_box_name').html('<img src="img/name_error.png" /> <span>invalid name format</span>')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#feedback_name').css('border', '2px solid red');
                }
                break;
            case 'feedback_mail':
                var pattern_mail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                if (val != '' & pattern_mail.test(val)) {
                    $(this).addClass('not_error_feedback').removeClass('error_feedback');;
                    $('.feedback_box_mail').html('<img src="img/like.png" />')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#feedback_mail').css('border', '2px solid #15ff00');
                }
                else {
                    $(this).removeClass('not_error_feedback').addClass('error_feedback');
                    $('.feedback_box_mail').html('<img src="img/mail_error.png" /> <span>invalid email format</span>')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#feedback_mail').css('border', '2px solid red');
                }
                break;
            case 'feedback_subject':
                var pattern_subject = /^[A-Za-zА-Яа-яЁё]+$/;
                if (val.length > 4 & val != "" & pattern_subject.test(val)) {
                    $(this).addClass('not_error_feedback').removeClass('error_feedback');;
                    $('.feedback_box_subject').html('<img src="img/like.png" />')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#feedback_subject').css('border', '2px solid #15ff00');
                }
                else {
                    $(this).removeClass('not_error_feedback').addClass('error_feedback');
                    $('.feedback_box_subject').html('<img src="img/subject_error.png" /> <span>invalid subject format</span>')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#feedback_subject').css('border', '2px solid red');
                }
                break;
            case 'feedback_message':
                if (val.length > 25 & val != "") {
                    $(this).addClass('not_error_feedback').removeClass('error_feedback');;
                    $('.feedback_box_message').html('<img src="img/like.png" />')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#feedback_message').css('border', '2px solid #15ff00');
                }
                else {
                    $(this).removeClass('not_error_feedback').addClass('error_feedback');
                    $('.feedback_box_message').html('<img src="img/chat_error.png" /> <span>invalid message format</span>')
                        .animate({ 'paddingLeft': '20px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#feedback_message').css('border', '2px solid red');
                }
                break;
        }
    });
    $('#message_to_us').submit(function (e) {
        if ($('.not_error_feedback').length != 4) {
            e.preventDefault();
            $('.error_feedback').animate({ 'paddingLeft': '40px' }, 400)
                .animate({ 'paddingLeft': '5px' }, 400);
            $('.error_submit_message').css('display', 'block')
                .animate({ 'paddingLeft': '40px' }, 400)
                .animate({ 'paddingLeft': '5px' }, 400);
        }
    });
    $('input#feedback_name,input#feedback_mail,input#feedback_subject,textarea#feedback_message').focus(function () {
        $('.error_submit_message').hide('500');
    });
})