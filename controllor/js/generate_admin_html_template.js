function generate_admin_html_template() {

    // div for background image
    let div = createMainDiv();

    // nav
    let nav = createNav();

    // div in nav
    let div_nav = createDivInNav();

    // ul
    let ul = createUl();

    // li home
    let li_home = createListItemHome();

    // li my reservations
    let li_my_reservations = createListItemMyReservations();

    // li reservation
    let li_reservation = createListItemReservation();

    // li availability
    let li_availability = createAvailabilityElement();

    // li list players in the club
    let li_list_players = createListAllPlayersElement();

    // li list booked fields
    let li_booked_fields = createListBookedFieldsElement();

    // li list available fields
    let li_available_fields = createListAvailableFieldsElement();

    // form to log out
    let form_log_out = createFormToLogOut();

    // append everything to the body
    document.body.appendChild(div);

    div_nav.appendChild(ul);

    ul.appendChild(li_home);
    ul.appendChild(li_my_reservations);
    ul.appendChild(li_reservation);
    ul.appendChild(li_availability);
    ul.appendChild(li_list_players);
    ul.appendChild(li_booked_fields);
    ul.appendChild(li_available_fields);

    nav.appendChild(div_nav);
    nav.appendChild(form_log_out);

    document.body.appendChild(nav);

}

function createListAllPlayersElement() {
    /** Creates the list all players item */
    let li_list_all_players = document.createElement('li');
    li_list_all_players.setAttribute('class', 'nav-item');
    let a_list_all_players = document.createElement('a');
    a_list_all_players.setAttribute('class','nav-link');
    a_list_all_players.setAttribute('href','listAllPlayers.php');
    a_list_all_players.setAttribute('id','listAllPlayers');
    a_list_all_players.textContent = "List All Players";
    li_list_all_players.appendChild(a_list_all_players);
    return li_list_all_players;
}

function createListBookedFieldsElement() {
    /** Creates the list booked fields item */
    let li_booked_fields = document.createElement('li');
    li_booked_fields.setAttribute('class', 'nav-item');
    let a_booked_fields = document.createElement('a');
    a_booked_fields.setAttribute('class','nav-link');
    a_booked_fields.setAttribute('href','listBookedFields.php');
    a_booked_fields.setAttribute('id','listBookedFields');
    a_booked_fields.textContent = "List Booked Fields";
    li_booked_fields.appendChild(a_booked_fields);
    return li_booked_fields;
}

function createListAvailableFieldsElement() {
    /** Creates the list available fields item */
    let li_available_fields = document.createElement('li');
    li_available_fields.setAttribute('class', 'nav-item');
    let a_available_fields = document.createElement('a');
    a_available_fields.setAttribute('class','nav-link');
    a_available_fields.setAttribute('href','#');
    a_available_fields.setAttribute('id','listAvailableFields');
    a_available_fields.textContent = "List Available Fields";
    li_available_fields.appendChild(a_available_fields);
    return li_available_fields;

}

function listAllPlayers(array_name, array_last_name, array_login, array_password, array_isAdmin) {

    // clear div element
    let main_div = clearMainDiv();

    // create table element
    let table = createDarkTableElement();

    // create thead element
    let thead = createTHeadElementListAllPlayers();

    // create tbody element
    let tbody = createTBodyElementListAllPlayers(array_name, array_last_name, array_login, array_password, array_isAdmin);

    table.appendChild(thead);
    table.appendChild(tbody);

    main_div.appendChild(table);

}

function createDarkTableElement() {
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-dark');
    return table;
}

function createTHeadElementListAllPlayers() {
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    // create tr name element
    let tr_name = createThElement("Name");

    // create tr last name element
    let tr_last_name = createThElement("Last Name");

    // create tr login element
    let tr_login = createThElement("Last Name");

    // create tr password element
    let tr_password = createThElement("Password");

    // create tr is admin element
    let tr_isAdmin = createThElement("Is Admin");

    tr.appendChild(tr_name);
    tr.appendChild(tr_last_name);
    tr.appendChild(tr_login);
    tr.appendChild(tr_password);
    tr.appendChild(tr_isAdmin);

    thead.appendChild(tr);

    return thead;
}

function createTBodyElementListAllPlayers(array_name, array_last_name, array_login, array_password, array_isAdmin) {
    let tbody = document.createElement('tbody');

    for (let i = 0; i < array_name.length; i++) {
        let tr = document.createElement('tr');

        let td_name = document.createElement('td');
        td_name.textContent = array_name[i];

        let td_last_name = document.createElement('td');
        td_last_name.textContent = array_last_name[i];

        let td_login = document.createElement('td');
        td_login.textContent = array_login[i];

        let td_password = document.createElement('td');
        td_password.textContent = array_password[i];

        let td_isAdmin = document.createElement('td');
        if ( array_isAdmin[i] === "1") {
            td_isAdmin.textContent = "Yes";
        } else {
            td_isAdmin.textContent = "No";
        }


        tr.appendChild(td_name);
        tr.appendChild(td_last_name);
        tr.appendChild(td_login);
        tr.appendChild(td_password);
        tr.appendChild(td_isAdmin);

        tbody.appendChild(tr);
    }

    return tbody;
}

function listAllBookedFields(array_login, array_field_number, array_reservation_hour, array_reservation_date, array_name, array_last_name, array_password, array_isAdmin){
    let main_div = clearMainDiv();

    // create table element
    let table = createDarkTableElement();

    // create thead element
    let thead = createTHeadElementListAllBookedFields();

    // create tbody element
    let tbody = createTBodyElementListAllBookedFields (array_login, array_field_number, array_reservation_hour, array_reservation_date, array_name, array_last_name, array_password, array_isAdmin);

    table.appendChild(thead);
    table.appendChild(tbody);

    main_div.appendChild(table);

}

function createTHeadElementListAllBookedFields() {
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    // create tr login element
    let tr_login = createThElement("Login");

    // create tr field number element
    let tr_field_number = createThElement("Field Number");

    // create tr reservation hour element
    let tr_reservation_hour = createThElement("Reservation Hour");

    // create tr reservation hour element
    let tr_reservation_date = createThElement("Reservation Date");

    // create tr name element
    let tr_name = createThElement("Name");

    // create tr last name element
    let tr_last_name = createThElement("Last Name");

    // create tr password element
    let tr_password = createThElement("Password");

    // create tr is admin
    let tr_isAdmin = createThElement("Is Admin");

    tr.appendChild(tr_login);
    tr.appendChild(tr_field_number);
    tr.appendChild(tr_reservation_hour);
    tr.appendChild(tr_reservation_date);
    tr.appendChild(tr_name);
    tr.appendChild(tr_last_name);
    tr.appendChild(tr_password);
    tr.appendChild(tr_isAdmin);

    thead.appendChild(tr);

    return thead;
}

function createTBodyElementListAllBookedFields (array_login, array_field_number, array_reservation_hour, array_reservation_date, array_name, array_last_name, array_password, array_isAdmin) {
    let tbody = document.createElement('tbody');

    for (let i = 0; i < array_login.length; i++) {
        let tr = document.createElement('tr');

        let td_login = document.createElement('td');
        td_login.textContent = array_login[i];

        let td_field_number = document.createElement('td');
        td_field_number.textContent = array_field_number[i];

        let td_reservation_hour = document.createElement('td');
        td_reservation_hour.textContent = array_reservation_hour[i];

        let td_reservation_date = document.createElement('td');
        td_reservation_date.textContent = array_reservation_date[i];

        let td_name = document.createElement('td');
        td_name.textContent = array_name[i];

        let td_last_name = document.createElement('td');
        td_last_name.textContent = array_last_name[i];

        let td_password = document.createElement('td');
        td_password.textContent = array_password[i];

        let td_isAdmin = document.createElement('td');
        if (array_isAdmin[i] === "1") {
            td_isAdmin.textContent = "Yes";
        } else {
            td_isAdmin.textContent = "No";
        }

        tr.appendChild(td_login);
        tr.appendChild(td_field_number);
        tr.appendChild(td_reservation_hour);
        tr.appendChild(td_reservation_date);
        tr.appendChild(td_name);
        tr.appendChild(td_last_name);
        tr.appendChild(td_password);
        tr.appendChild(td_isAdmin);

        tbody.appendChild(tr);
    }

    return tbody;

}

function availabilityAdminFieldsHTML() {
    // clear div element
    let main_div = clearMainDiv();

    // create div
    let div_row = createDivRow();

    // create form
    let form = createFormForAdminAvailability();

    // create div form group
    let div_form_group = createDivFormGroup();

    // create h2
    let h2 = document.createElement('h2');
    h2.textContent = "List Available Fields";

    // create hour label
    let availability_hour_label_begin = createLabel("availabilityHourSelectBegin", "Choose a specific hour");

    // create select hour
    let availability_hour_select_begin = createSelectAvailabilityDateBegin();

    // create hour label
    let availability_hour_label_end = createLabel("availabilityHourSelectEnd", "Choose a specific hour");

    // create select hour
    let availability_hour_select_end = createSelectAvailabilityDateEnd();

    // create submit button
    let button_submit = createButtonSubmit();

    // now append everything together
    div_form_group.appendChild(h2);
    div_form_group.appendChild(availability_hour_label_begin);
    div_form_group.appendChild(availability_hour_select_begin);
    div_form_group.appendChild(availability_hour_label_end);
    div_form_group.appendChild(availability_hour_select_end);
    form.appendChild(div_form_group);
    form.appendChild(button_submit);
    div_row.appendChild(form);
    main_div.appendChild(form);

}

function createFormForAdminAvailability() {
    let form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', 'listAvailableFields.php');
    return form;
}

function createSelectAvailabilityDateBegin() {
    let select = document.createElement('select');
    select.setAttribute('class', 'form-control');
    select.setAttribute('name', 'availabilityHourSelectBegin');

    // options
    let option1 = createOption("option6hBegin", "6:00", "6:00");
    let option2 = createOption("option7hBegin", "7:00", "7:00");
    let option3 = createOption("option8hBegin", "8:00", "8:00");
    let option4 = createOption("option9hBegin", "9:00", "9:00");
    let option5 = createOption("option10hBegin", "10:00", "10:00");
    let option6 = createOption("option11hBegin", "11:00", "11:00");
    let option7 = createOption("option12hBegin", "12:00", "12:00");
    let option8 = createOption("option13hBegin", "13:00", "13:00");
    let option9 = createOption("option14hBegin", "14:00", "14:00");
    let option10 = createOption("option15hBegin", "15:00", "15:00");
    let option11 = createOption("option16hBegin", "16:00", "16:00");
    let option12 = createOption("option17hBegin", "17:00", "17:00");
    let option13 = createOption("option18hBegin", "18:00", "18:00");
    let option14 = createOption("option19hBegin", "19:00", "19:00");
    let option15 = createOption("option20hBegin", "20:00", "20:00");

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

function createSelectAvailabilityDateEnd() {
    let select = document.createElement('select');
    select.setAttribute('class', 'form-control');
    select.setAttribute('name', 'availabilityHourSelectEnd');

    // options
    let option1 = createOption("option6hEnd", "6:00", "6:00");
    let option2 = createOption("option7hEnd", "7:00", "7:00");
    let option3 = createOption("option8hEnd", "8:00", "8:00");
    let option4 = createOption("option9hEnd", "9:00", "9:00");
    let option5 = createOption("option10hEnd", "10:00", "10:00");
    let option6 = createOption("option11hEnd", "11:00", "11:00");
    let option7 = createOption("option12hEnd", "12:00", "12:00");
    let option8 = createOption("option13hEnd", "13:00", "13:00");
    let option9 = createOption("option14hEnd", "14:00", "14:00");
    let option10 = createOption("option15hEnd", "15:00", "15:00");
    let option11 = createOption("option16hEnd", "16:00", "16:00");
    let option12 = createOption("option17hEnd", "17:00", "17:00");
    let option13 = createOption("option18hEnd", "18:00", "18:00");
    let option14 = createOption("option19hEnd", "19:00", "19:00");
    let option15 = createOption("option20hEnd", "20:00", "20:00");

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

function listAvailableFieldsAdmin(array_availability, begin_hour, end_hour) {

    // clear div element
    let main_div = clearMainDiv();

    // create table element
    let table = createDarkTableElement();

    // create thead element
    let thead = createTHeadElementListAvailableFields();

    // create tbody
    let tbody = createTBodyElementListAvailableFields(array_availability, begin_hour, end_hour);

    table.appendChild(thead);
    table.appendChild(tbody);
    main_div.appendChild(table);

}

function createTHeadElementListAvailableFields() {
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    // create tr field number element
    let tr_field_number = createThElement("Field Number");

    // create tr available date element
    let tr_available_date = createThElement("Available Date");

    // create tr available hour element
    let tr_available_hour = createThElement("Available Hour");

    tr.appendChild(tr_field_number);
    tr.appendChild(tr_available_date);
    tr.appendChild(tr_available_hour);

    thead.appendChild(tr);

    return thead;

}

function createTBodyElementListAvailableFields(array_availability, begin_hour, end_hour) {

    let tbody = document.createElement('tbody');

    let avail_begin = convertHourToInt(begin_hour);
    let avail_end = convertHourToInt(end_hour);
    
    // array is always 15
    for (let i = 1; i <= 5; i++){
        for (let j = 0; j < 15; j++){
            if (array_availability[i][j] !== 0 && j >= avail_begin - 6 && j <= avail_end - 6) {
                let tr = document.createElement('tr');

                let td_field_number = document.createElement('td');
                td_field_number.textContent = i.toString();

                let td_available_date = document.createElement('td');
                td_available_date.textContent = getTodayDate(0).toString();

                let td_available_hour = document.createElement('td');
                td_available_hour.textContent = array_availability[i][j] + ":00";

                tr.appendChild(td_field_number);
                tr.appendChild(td_available_date);
                tr.appendChild(td_available_hour);

                tbody.appendChild(tr);
            }
        }

    }

    return tbody;
}

function convertHourToInt (hour){
    if (hour === "6:00")
        return 6;
    if (hour === "7:00")
        return 7;
    if (hour === "8:00")
        return 8;
    if (hour === "9:00")
        return 9;
    if (hour === "10:00")
        return 10;
    if (hour === "11:00")
        return 11;
    if (hour === "12:00")
        return 12;
    if (hour === "13:00")
        return 13;
    if (hour === "14:00")
        return 14;
    if (hour === "15:00")
        return 15;
    if (hour === "16:00")
        return 16;
    if (hour === "17:00")
        return 17;
    if (hour === "18:00")
        return 18;
    if (hour === "19:00")
        return 19;
    if (hour === "20:00")
        return 20;
    return null;
}



