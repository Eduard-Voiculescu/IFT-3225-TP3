
function cancelReservationHTML(login, field_number, reservation_date, reservation_hour) {
    // clear div element
    let main_div = clearMainDiv();

    //create form element
    let form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', '../php/delete_reservation.php');

    // create table element
    let table = createTableElement();

    // create thead element
    let thead = createTHeadCancelElement();

    // create tbody element
    let tbody = createTBodyCancelElement(login, field_number, reservation_date, reservation_hour);

    table.appendChild(thead);
    table.appendChild(tbody);
    form.appendChild(table);
    main_div.appendChild(form);

}

function createTHeadCancelElement() {
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

    // cancel option
    let th_cancel = createThElement("Cancel");

    tr.appendChild(th_login);
    tr.appendChild(th_field);
    tr.appendChild(th_date);
    tr.appendChild(th_hour);
    tr.appendChild(th_cancel);

    thead.appendChild(tr);

    return thead;

}

function createTBodyCancelElement(login, field_number, reservation_date, reservation_hour) {
    let tbody = document.createElement('tbody');

    let tr = document.createElement('tr');

    let th_login = document.createElement('th');
    th_login.setAttribute('scope', 'row');

    th_login.textContent = login;

    let td_field = document.createElement('td');
    td_field.textContent = field_number;

    let td_date = document.createElement('td');
    td_date.textContent = reservation_date;

    let td_hour = document.createElement('td');
    td_hour.textContent = reservation_hour;

    let div_cancel = document.createElement('div');
    div_cancel.setAttribute('class', 'form-check form-check-inline');

    // create submit button
    let cancel_button = document.createElement('button');
    cancel_button.setAttribute('type', 'submit');
    cancel_button.setAttribute('class', 'btn btn-primary');
    cancel_button.textContent = "Cancel";

    div_cancel.appendChild(cancel_button);

    // hidden inputs with information
    let input_login = createInputElement("inputLogin", "inputLogin", login);
    let input_field = createInputElement("inputField", "inputField", field_number);
    let input_reservation_date = createInputElement("inputReservationDate", "inputReservationDate", reservation_date);
    let input_reservation_hour = createInputElement("inputReservationHour", "inputReservationHour", reservation_hour);

    tr.appendChild(th_login);
    tr.appendChild(td_field);
    tr.appendChild(td_date);
    tr.appendChild(td_hour);
    tr.appendChild(div_cancel);

    tr.appendChild(input_login);
    tr.appendChild(input_field);
    tr.appendChild(input_reservation_date);
    tr.appendChild(input_reservation_hour);

    tbody.appendChild(tr);

    return tbody;

}

function createInputElement(id, name, value) {
    let input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('id', id);
    input.setAttribute('name', name);
    input.setAttribute('value', value);

    return input;
}
