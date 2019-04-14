
function bookAReservationHTML () {
    // clear div element
    let main_div = clearMainDiv();

    // create div
    let div_row = createDivRow();

    // create form
    let form = createFromToBookReservation();

    // create div_form_group
    let div_form_group = createDivFormGroup();

    // create h2
    let h2 = document.createElement('h2');
    h2.innerHTML = "Book a Reservation";

    // create field number label
    let field_number_label = createLabel("fieldNumberSelect", "Field Number");

    // create select field number
    let field_number_select = createSelectFieldNumber();

    // create reservation date label
    let reservation_date_label = createLabel("reservationDateSelect", "Reservation date (YYYY-MM-DD)");

    // create select reservation date
    let reservation_date_select = createSelectReservationNumber();

    // create reservation hour label
    let reservation_hour_label = createLabel("reservationHourSelect", "Reservation hour");

    // create select reservation hour label
    let reservation_hour_select = createSelectReservationHour();

    // create button submit
    let button_submit = createButtonSubmit();

    // now append everything together
    div_form_group.appendChild(h2);
    div_form_group.appendChild(field_number_label);
    div_form_group.appendChild(field_number_select);
    div_form_group.appendChild(reservation_date_label);
    div_form_group.appendChild(reservation_date_select);
    div_form_group.appendChild(reservation_hour_label);
    div_form_group.appendChild(reservation_hour_select);
    form.appendChild(div_form_group);
    form.appendChild(button_submit);
    div_row.appendChild(form);
    main_div.appendChild(div_row);

}

function clearMainDiv () {
    let main_div = document.getElementById('main_div');
    main_div.innerHTML = "";
    return main_div;
}

function createDivRow() {
    let div = document.createElement('div');
    div.setAttribute('class', 'row justify-content-start');
    return div;
}

function createFromToBookReservation() {
    let form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', 'book_reservation.php');
    return form;
}

function createDivFormGroup() {
    let div = document.createElement('div');
    div.setAttribute('class', 'form-group');
    return div;
}

function createLabel(for_value, label_value) {
    let label = document.createElement('label');
    label.setAttribute('for', for_value);
    label.textContent = label_value;
    return label;
}

function labelFieldNumber() {
    let label = document.createElement('label');
    label.setAttribute('for', 'fieldNumberSelect');
    return label;
}

function createSelectFieldNumber() {
    let select = document.createElement('select');
    select.setAttribute('class', 'form-control');
    select.setAttribute('name', 'fieldNumberSelect');

    let option1 = createOption("option1", "1", "1");
    let option2 = createOption("option2", "2", "2");
    let option3 = createOption("option3", "3", "3");
    let option4 = createOption("option4", "4", "4");
    let option5 = createOption("option5", "5", "5");

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);

    return select;

}

function createOption (id, value, html_value) {
    let option = document.createElement('option');
    option.setAttribute('id', id);
    option.setAttribute('value', value);
    option.textContent = html_value;
    return option;
}

function createSelectReservationNumber() {
    let select = document.createElement('select');
    select.setAttribute('class', 'form-control');
    select.setAttribute('name', 'reservationDateSelect');

    let today = getTodayDate(0);
    let tomorrow = getTodayDate(1);

    let optionToday = document.createElement('option');
    optionToday.textContent = today.toString();
    let optionTomorrow = document.createElement('option');
    optionTomorrow.textContent = tomorrow.toString();

    select.appendChild(optionToday);
    select.appendChild(optionTomorrow);

    return select;
}

function createSelectReservationHour() {
    let select = document.createElement('select');
    select.setAttribute('class', 'form-control');
    select.setAttribute('name', 'reservationHourSelect');

    // options
    let option1 = createOption("option6h", "6:00", "6:00");
    let option2 = createOption("option7h", "7:00", "7:00");
    let option3 = createOption("option8h", "8:00", "8:00");
    let option4 = createOption("option9h", "9:00", "9:00");
    let option5 = createOption("option10h", "10:00", "10:00");
    let option6 = createOption("option11h", "11:00", "11:00");
    let option7 = createOption("option12h", "12:00", "12:00");
    let option8 = createOption("option13h", "13:00", "13:00");
    let option9 = createOption("option14h", "14:00", "14:00");
    let option10 = createOption("option15h", "15:00", "15:00");
    let option11 = createOption("option16h", "16:00", "16:00");
    let option12 = createOption("option17h", "17:00", "17:00");
    let option13 = createOption("option18h", "18:00", "18:00");
    let option14 = createOption("option19h", "19:00", "19:00");
    let option15 = createOption("option20h", "20:00", "20:00");

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    select.appendChild(option6);
    select.appendChild(option7);
    select.appendChild(option8);
    select.appendChild(option9);
    select.appendChild(option10);
    select.appendChild(option11);
    select.appendChild(option12);
    select.appendChild(option13);
    select.appendChild(option14);
    select.appendChild(option15);

    return select;
}

function createButtonSubmit() {
    let button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('class', 'btn btn-primary');
    button.textContent = "Submit";
    return button;
}