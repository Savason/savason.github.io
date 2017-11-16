//If we change any value in the model,
//it dynamically changes to the html-view,
//after the page reloads
var model = {
    skills: [
        { name: "HTML5", level: 8 },
        { name: "CSS3", level: 5 },
        { name: "JavaScript", level: 10 },
        { name: "ReactJS", level: 8 },
        { name: "AngularJS", level: 8 },
    ]
};
angular.module("skillsApp", [])
    .controller("skillsCtrl", function ($scope) {

        $scope.data = model;
        var max_level = 10;
        for (var i = 0; i < max_level; i++) {
            if (i < model.skills[0].level) {
                document.getElementsByClassName('html_level')[0].innerHTML += '<img src="img/skills_level.png" />';
            }
            else {
                document.getElementsByClassName('html_level')[0].innerHTML += '<img src="img/skills_img.png" />';
            }
        }
        for (var i = 0; i < max_level; i++) {
            if (i < model.skills[1].level) {
                document.getElementsByClassName('css_level')[0].innerHTML += '<img src="img/skills_level.png" />';
            }
            else {
                document.getElementsByClassName('css_level')[0].innerHTML += '<img src="img/skills_img.png" />';
            }
        }
        for (var i = 0; i < max_level; i++) {
            if (i < model.skills[2].level) {
                document.getElementsByClassName('js_level')[0].innerHTML += '<img src="img/skills_level.png" />';
            }
            else {
                document.getElementsByClassName('js_level')[0].innerHTML += '<img src="img/skills_img.png" />';
            }
        }
        for (var i = 0; i < max_level; i++) {
            if (i < model.skills[3].level) {
                document.getElementsByClassName('react_level')[0].innerHTML += '<img src="img/skills_level.png" />';
            }
            else {
                document.getElementsByClassName('react_level')[0].innerHTML += '<img src="img/skills_img.png" />';
            }
        }
        for (var i = 0; i < max_level; i++) {
            if (i < model.skills[4].level) {
                document.getElementsByClassName('angular_level')[0].innerHTML += '<img src="img/skills_level.png" />';
            }
            else {
                document.getElementsByClassName('angular_level')[0].innerHTML += '<img src="img/skills_img.png" />';
            }
        }
    });