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
    a_available_fields.setAttribute('href','listAvailableFields.php');
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
