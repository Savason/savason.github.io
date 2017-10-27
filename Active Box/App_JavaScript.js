$(document).ready(function () {
    //Form validations
    $('input#name,input#email,input#password,input#password_same').unbind().blur(function () {
        var id = $(this).attr('id');
        var val = $(this).val();
        switch (id) {
            case 'name':
                var pattern_name = /[A-Za-zА-Яа-яЁё]+$/;
                if (val.length > 2 & val != "" & pattern_name.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error_message').text('Принято')
                        .css('color', 'green')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#name').css('border', '2px solid green');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error_message').html('поле "Имя" обязательно для заполнения<br>- длина имени должна составлять не менее 2 символов<br>- поле должно содержать только русские или латинские буквы')
                        .css('color', 'red')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#name').css('border', '2px solid red');
                }
                break;
            case 'email':
                var pattern_email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                if (val != '' & pattern_email.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error_message').text('Принято')
                        .css('color', 'green')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#email').css('border', '2px solid green');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error_message').html('поле "Email" обязательно для заполнения<br>- поле должно содержать правильный email-адрес<br>- например "example@gmail.com"')
                        .css('color', 'red')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#email').css('border', '2px solid red');
                }
                break;
            case 'password':
                var pattern_password = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
                if (val != '' & pattern_password.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error_message').text('Принято')
                        .css('color', 'green')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#password').css('border', '2px solid green');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error_message').html('неверный формат поля "Пароль"<br/>- длина пароля должна составлять не менее 8 символов<br>- поле должно содержать латинские буквы в верхнем, нижнем регистре и цифры')
                        .css('color', 'red')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#password').css('border', '2px solid red');
                }
                break;
            case 'password_same':
                if (val != '' && val == $('#password').val()) {
                    $(this).addClass('not_error');
                    $(this).next('.error_message').text('Принято')
                        .css('color', 'green')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#password_same').css('border', '2px solid green');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error_message').html('Пароли не совпадают')
                        .css('color', 'red')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#password_same').css('border', '2px solid red');
                }
                break;
        }
    });
    $('input#name,input#email,input#password,input#password_same').focus(function () {
        $('.error_submit').css('display', 'none');
    });
    $('#modal_form').submit(function (e) {
        if ($('.not_error').length != 4) {
            $('.error_submit').css('display', 'block');
            e.preventDefault();
        }
    });
    $('.error_submit').click(function () {
        $('.error_submit').css('display', 'none')
    });
    $('.error_submit_2').click(function () {
        $('.error_submit_2').css('display', 'none')
    });
    $('input#name2,input#email2,textarea#question').unbind().blur(function (e) {
        var id = $(this).attr('id');
        var val = $(this).val();
        switch (id) {
            case 'name2':
                var pattern_name2 = /[A-Za-zА-Яа-яЁё]+$/;
                if (val.length > 2 & val != "" & pattern_name2.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error_box').text('Принято')
                        .css('color', 'green')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#name2').css('border', '2px solid green');

                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error_box').html('поле "Имя" обязательно для заполнения<br>- длина имени должна составлять не менее 2 символов<br>- поле должно содержать только русские или латинские буквы')
                        .css('color', 'red')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#name2').css('border', '2px solid red');
                }
                break;
            case 'email2':
                var pattern_email2 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                if (val != '' & pattern_email2.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error_box').text('Принято')
                        .css('color', 'green')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#email2').css('border', '2px solid green');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error_box').html('поле "Email" обязательно для заполнения<br>- поле должно содержать правильный email-адрес<br>- например "example@gmail.com"')
                        .css('color', 'red')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#email2').css('border', '2px solid red');
                }
                break;
            case 'question':
                if (val != '' && val.length < 3000) {
                    $(this).addClass('not_error');
                    $(this).next('.error_box').text('Принято')
                        .css('color', 'green')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#question').css('border', '2px solid green');
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error_box').html('поле "Сообщение" обязательно для заполнения')
                        .css('color', 'red')
                        .animate({ 'paddingLeft': '10px' }, 400)
                        .animate({ 'paddingLeft': '5px' }, 400);
                    $('#question').css('border', '2px solid red');
                }
                break;
        }
    });
    //Ajax 
    $('#ask_us').submit(function (e) {
        e.preventDefault();
        if ($('.not_error').length == 3) {
            $.ajax({
                url: 'send.php',
                type: 'post',
                data: $(this).serialize(),

                beforeSend: function (xhr, textStatus) {
                    $('form#ask_us :input').attr('disabled', 'disabled');
                    alert('Ваше сообщения отправлено');
                },

                success: function (response) {
                    $('form#ask_us :input').removeAttr('disabled');
                    $('form#fask_us :text, textarea').val('').removeClass().next('.error-box').text('');
                    alert(response);
                }
            });
        }
        else {
            return false;
        }
    });
    $('input#name2,input#email2,input#password,textarea#question').focus(function () {
        $('.error_submit_2').css('display', 'none');
    });
    $('#ask_us').submit(function (e) {
        if ($('.not_error').length != 3) {
            $('.error_submit_2').css('display', 'block');
            e.preventDefault();
        }
    });
    //Navugation
    $('.menu').on("click", 'a', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
    $('#back-top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });
    $('.btn_inform_scrol').on("click", function (e) {
        e.preventDefault();
        var top = $('#more_information').offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
    $(function (f) {
        var element = f('#back-top');
        f(window).scroll(function () {
            element['fade' + (f(this).scrollTop() > 300 ? 'In' : 'Out')](500);
        });
    });
});