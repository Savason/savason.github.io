window.onload = function () {
    function Calendar(id, year, month) {
        var Dlast = new Date(year, month + 1, 0).getDate(),
            D = new Date(year, month, Dlast),
            DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
            calendar = '<tr>',
            month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';
        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }
        for (var i = 1; i <= Dlast; i++) {
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
                calendar += '<td class="today">' + i;
            } else {
                calendar += '<td>' + i;
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr>';
            }
        }
        for (var i = DNlast; i < 7; i++);
        document.querySelector('#' + id + ' tbody').innerHTML = calendar;
        document.getElementsByClassName('today')[0].innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
        document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
    }
    Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
    document.getElementsByClassName('prev')[0].onclick = function () {
        Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
    }
    document.getElementsByClassName('next')[0].onclick = function () {
        Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
    }
    document.getElementById('calendar').onclick = function (event) {
        var target = event.target;

        var td = target.closest('td');
        if (!td) return;
        if (!document.getElementById('calendar').contains(td)) return;
        add_item_event(td);
        function add_item_event(td) {
            document.getElementsByClassName('close')[0].onclick = function () {
                document.getElementsByClassName('add_event')[0].style.display = 'none';
            };
            var form = document.getElementsByClassName('add_event')[0];
            form.style.display = 'block';
            td.style.border = '1px solid blue';
            td.style.background = '#c1e5ff';
            var event_text = document.getElementsByClassName('event_text')[0];
            var data_text = document.getElementsByClassName('data_text')[0];
            var parnter_name = document.getElementsByClassName('parnter_name')[0];
            var event_discription = document.getElementsByClassName('event_discription')[0];
            if (td.name == undefined || td.data == undefined || td.partner == undefined || td.discription == undefined) {
                event_text.value = "";
                data_text.value = "";
                parnter_name.value = "";
                event_discription.value = "";
            }
            else {
                document.getElementsByClassName('event_text')[0].value = td.name
                document.getElementsByClassName('data_text')[0].value = td.data
                document.getElementsByClassName('parnter_name')[0].value = td.partner
                document.getElementsByClassName('event_discription')[0].value = td.discription
            }
            document.getElementsByClassName('ready')[0].onclick = function () {
                td.name = event_text.value;
                td.data = data_text.value;
                td.partner = parnter_name.value;
                td.discription = event_discription.value;
                var zap = confirm("Очистить форму")
                if (zap) {
                    document.getElementsByClassName('event_text')[0].value = ""
                    document.getElementsByClassName('data_text')[0].value = ""
                    document.getElementsByClassName('parnter_name')[0].value = ""
                    document.getElementsByClassName('event_discription')[0].value = ""
                    form.style.display = 'none'
                }
            }

            document.getElementsByClassName('click_add')[0].onclick = function () {
                td.innerHTML += '<br/>' + td.name + '<br/>' + td.data + '<br/>' + td.partner + '<br/>' + td.discription;

            }
            document.getElementsByClassName('click_res')[0].onclick = function () {
                td.innerHTML = '<br/>' + td.name + '<br/>' + td.data + '<br/>' + td.partner + '<br/>' + td.discription;
            }
            document.getElementsByClassName('reset')[0].onclick = function () {
                document.getElementsByClassName('event_text')[0].value = ""
                document.getElementsByClassName('data_text')[0].value = ""
                document.getElementsByClassName('parnter_name')[0].value = ""
                document.getElementsByClassName('event_discription')[0].value = ""
            }
        }
    }
}