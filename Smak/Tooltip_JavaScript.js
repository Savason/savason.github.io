$(document).ready(function () {
    //Team tooltips
    //MARK OTTO
    var first_count = 0;
    $('.tooltip_otto').click(function () {
        $('.tooltip_team_1').show(500);
        $('.tooltip_team_2, .tooltip_team_3,  .tooltip_team_4').hide();
        var top = $('.tooltip_team_1').offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
        if (first_count == 0) {
            $("#otto-circle").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 90,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#otto-circle_2").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 96,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#otto-circle_3").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 85,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#otto-circle_4").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 94,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
        }
        first_count++;
    });
    $('.close_tooltip').click(function () {
        $('.tooltip_team_1').hide(500);
        var back = $('#the_team').offset().top;
        $('body,html').animate({ scrollTop: back }, 500);
    });
    //JOHN DOE
    var second_count = 0;
    $('.tooltip_doe').click(function () {
        $('.tooltip_team_2').show(500);
        $('.tooltip_team_1, .tooltip_team_3,  .tooltip_team_4').hide();
        var top = $('.tooltip_team_2').offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
        if (second_count == 0) {
            $("#doe-circle").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 85,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#doe-circle_2").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 92,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#doe-circle_3").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 95,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#doe-circle_4").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 96,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
        }
        second_count++;
    });
    $('.close_tooltip').click(function () {
        $('.tooltip_team_2').hide(500);
        var back = $('#the_team').offset().top;
        $('body,html').animate({ scrollTop: back }, 500);
    });
    //JACOB THORNTON
    var third_count = 0;
    $('.tooltip_thornton').click(function () {
        $('.tooltip_team_3').show(500);
        $('.tooltip_team_1, .tooltip_team_2, .tooltip_team_4').hide();
        var top = $('.tooltip_team_3').offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
        if (third_count == 0) {
            $("#thornton-circle").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 80,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#thornton-circle_2").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 98,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#thornton-circle_3").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 89,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#thornton-circle_4").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 94,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
        }
        third_count++;
    });
    $('.close_tooltip').click(function () {
        $('.tooltip_team_3').hide(500);
        var back = $('#the_team').offset().top;
        $('body,html').animate({ scrollTop: back }, 500);
    });
    //MOLLY SHINE
    var fours_count = 0;
    $('.tooltip_molly').click(function () {
        $('.tooltip_team_4').show(500);
        $('.tooltip_team_1, .tooltip_team_2, .tooltip_team_3').hide();
        var top = $('.tooltip_team_4').offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
        if (fours_count == 0) {
            $("#molly-circle").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 95,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#molly-circle_2").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 96,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#molly-circle_3").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 91,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
            $("#molly-circle_4").circliful({
                animation: 1,
                animationStep: 3,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 5,
                percent: 86,
                textSize: 28,
                textStyle: 'font-size: 12px;',
            });
        }
        fours_count++;
    });
    $('.close_tooltip').click(function () {
        $('.tooltip_team_4').hide(500);
        var back = $('#the_team').offset().top;
        $('body,html').animate({ scrollTop: back }, 500);
    });
})