
function availabilityHTML() {
    // clear div element
    let main_div = clearMainDiv();

    // create div
    let div_row = createDivRow();

    // create form
    let form = createFormForAvailability();

    // create div form group
    let div_form_group = createDivFormGroup();

    // create h2
    let h2 = document.createElement('h2');
    h2.textContent = "Show Field Availabilities";

    // create date label
    let availability_date_label = createLabel("availabilityDateSelect", "Choose Date (YYYY-MM-DD");

    // create select date
    let availability_date_select = createSelectAvailabilityDate();

    // create hour label
    let availability_hour_label = createLabel("availabilityHourSelect", "Choose a specific hour");

    // create select hour
    let availability_hour_select = createSelectAvailabilityHour();

    // create submit button
    let button_submit = createButtonSubmit();

    // now append everything together
    div_form_group.appendChild(h2);
    div_form_group.appendChild(availability_date_label);
    div_form_group.appendChild(availability_date_select);
    div_form_group.appendChild(availability_hour_label);
    div_form_group.appendChild(availability_hour_select);
    form.appendChild(div_form_group);
    form.appendChild(button_submit);
    div_row.appendChild(form);
    main_div.appendChild(form);
}

function createFormForAvailability() {
    let form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', 'show_availability.php');
    return form;
}

function createSelectAvailabilityDate() {
    let select = document.createElement('select');
    select.setAttribute('class', 'form-control');
    select.setAttribute('name', 'availabilityDateSelect');

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

function createSelectAvailabilityHour() {
    let select = document.createElement('select');
    select.setAttribute('class', 'form-control');
    select.setAttribute('name', 'availabilityHourSelect');

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

function listAvailableFields(field1, field2, field3, field4, field5, date, hour) {

    // clear div element
    let main_div = clearMainDiv();

    // create table element
    let table = createTableElement();

    // create thead element
    let thead = createTHeadAvailableElement();

    let tbody = createTBodyAvailableElement(field1, field2, field3, field4, field5, date, hour);

    table.appendChild(thead);
    table.appendChild(tbody);
    main_div.appendChild(table);

}

function createTHeadAvailableElement() {
    let thead = document.createElement('thead');

    let tr = document.createElement('tr');

    // create the th field number element
    let th_field = createThElement("Field Number");

    // create th date element
    let th_date = createThElement("Reservation Date");

    // create th hour element
    let th_hour = createThElement("Reservation Hour");

    tr.appendChild(th_field);
    tr.appendChild(th_date);
    tr.appendChild(th_hour);

    thead.appendChild(tr);

    return thead;
}

function createTBodyAvailableElement(field1, field2, field3, field4, field5, date, hour) {
    let tbody = document.createElement('tbody');

    let tr1 = createTableThTdAvailabilityElement(field1, date, hour);
    let tr2 = createTableThTdAvailabilityElement(field2, date, hour);
    let tr3 = createTableThTdAvailabilityElement(field3, date, hour);
    let tr4 = createTableThTdAvailabilityElement(field4, date, hour);
    let tr5 = createTableThTdAvailabilityElement(field5, date, hour);

    if (tr1 != null) tbody.appendChild(tr1);
    if (tr2 != null) tbody.appendChild(tr2);
    if (tr3 != null) tbody.appendChild(tr3);
    if (tr4 != null) tbody.appendChild(tr4);
    if (tr5 != null) tbody.appendChild(tr5);

    return tbody;

}

function createTableThTdAvailabilityElement(field, date, hour) {
    if (field.toString() !== "") {
        let tr = document.createElement('tr');

        let th_field = document.createElement('th');
        th_field.setAttribute('scope', 'row');
        th_field.textContent = field.toString();

        let td_date = document.createElement('td');
        td_date.textContent = date;

        let td_hour = document.createElement('td');
        td_hour.textContent = hour;

        tr.appendChild(th_field);
        tr.appendChild(td_date);
        tr.appendChild(td_hour);

        return tr;
    }
    return null;
}
