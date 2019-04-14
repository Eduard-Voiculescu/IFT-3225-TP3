
function myReservationsHTML () {
    // clear div element
    let main_div = clearMainDiv();

    // create form to check my reservations
    let form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', '../php/my_reservations.php');

    // create div
    let div_row = createDivRow();

    // create div_form_group
    let div_form_group = createDivFormGroup();

    // create reservation date label
    let reservation_date_label = createLabel("reservationDateSelect", "Reservation date (YYYY-MM-DD)");

    // create select reservation date
    let reservation_date_select = createReservationDateSelect();

    // submit button
    let button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('class', 'btn btn-primary');
    button.textContent = "Check my reservations";

    div_form_group.appendChild(reservation_date_label);
    div_form_group.appendChild(reservation_date_select);
    form.appendChild(div_form_group);
    form.appendChild(button);
    div_row.appendChild(form);
    main_div.appendChild(div_row);

}

function createReservationDateSelect() {
    let select = document.createElement('select');
    select.setAttribute('class', 'form-control');
    select.setAttribute('name', 'reservationDateSelect');

    let today = getTodayDate(0);
    let tomorrow = getTodayDate(1);

    let optionToday = document.createElement('option');
    optionToday.setAttribute('value', today.toString());
    optionToday.textContent = today.toString();
    let optionTomorrow = document.createElement('option');
    optionTomorrow.setAttribute('value', tomorrow.toString());
    optionTomorrow.textContent = tomorrow.toString();

    select.appendChild(optionToday);
    select.appendChild(optionTomorrow);

    return select;
}

function getTodayDate (i) {
    let today = new Date();
    let dd = today.getDate() + i;
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + "-" + mm + "-" + dd;

    return today;
}

function listReservationsForADay(login, field, date, hour) {

    // clear div element
    let main_div = clearMainDiv();

    // create table element
    let table = createTableElement();

    // create thead element
    let thead = createTHeadElement();

    // create tbody element
    let tbody = createTBodyElement(login, field, date, hour);

    table.appendChild(thead);
    table.appendChild(tbody);
    main_div.appendChild(table);

}

function createTableElement() {
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-striped');
    return table;
}

function createTHeadElement() {
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    // create th login element
    let th_login = createThElement("Login");

    // create th field element
    let th_field = createThElement("Field Number");

    // create th date element
    let th_date = createThElement("Reservation Date");

    // create th hour element
    let th_hour = createThElement("Reservation Hour");

    tr.appendChild(th_login);
    tr.appendChild(th_field);
    tr.appendChild(th_date);
    tr.appendChild(th_hour);

    thead.appendChild(tr);

    return thead;
}

function createThElement (value) {
    let th = document.createElement('th');
    th.setAttribute('scope', 'col');
    th.textContent = value.toString();
    return th;
}

function createTBodyElement(login, field, date, hour){
    let tbody = document.createElement('tbody');

    let tr = document.createElement('tr');

    let th_login = document.createElement('th');
    th_login.setAttribute('scope', 'row');
    th_login.textContent = login;

    let td_field = document.createElement('td');
    td_field.textContent = field;

    let td_date = document.createElement('td');
    td_date.textContent = date;

    let td_hour = document.createElement('td');
    td_hour.textContent = hour;

    tr.appendChild(th_login);
    tr.appendChild(td_field);
    tr.appendChild(td_date);
    tr.appendChild(td_hour);

    tbody.appendChild(tr);

    return tbody;

}
