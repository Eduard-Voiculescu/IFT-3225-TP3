
function generate_user_html_template() {

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

    // form to log out
    let form_log_out = createFormToLogOut();

    // append everything to the body
    document.body.appendChild(div);
    div_nav.appendChild(ul);
    ul.appendChild(li_home);
    ul.appendChild(li_my_reservations);
    ul.appendChild(li_reservation);
    ul.appendChild(li_availability);
    nav.appendChild(div_nav);
    nav.appendChild(form_log_out);
    document.body.appendChild(nav);

}

function createMainDiv () {
    /** Creates the main div */
    let div = document.createElement('div');
    div.setAttribute('class', 'background_image');
    return div;
}

function createNav() {
    /** Creates navbar item */
    let nav = document.createElement('nav');
    nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light');
    return nav;
}

function createDivInNav () {
    /** Creates the div in the navbar item */
    let div_nav = document.createElement('div');
    div_nav.setAttribute('class', 'collapse navbar-collapse');
    div_nav.setAttribute('id', 'navbarSupportedContent');
    return div_nav;
}

function createUl () {
    /** Creates an unordered list to put nav bar items inside */
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'navbar-nav mr-auto');
    return ul;
}

function createListItemHome() {
    /** Creates the list home item */
    let li_home = document.createElement('li');
    li_home.setAttribute('class', 'nav-item');
    let a_home = document.createElement('a');
    a_home.setAttribute('class', 'nav-link');
    a_home.setAttribute('href', 'user.php');
    a_home.setAttribute('id', 'home');
    a_home.textContent = "Home";
    li_home.appendChild(a_home);
    return li_home;
}

function createListItemMyReservations () {
    /** Creates the list my reservations item */
    let li_my_reservations = document.createElement('li');
    li_my_reservations.setAttribute('class', 'nav-item');
    let a_my_reservations = document.createElement('a');
    a_my_reservations.setAttribute('class', 'nav-link');
    a_my_reservations.setAttribute('href', '#');
    a_my_reservations.setAttribute('id', 'myReservations');
    a_my_reservations.textContent = "My Reservations";
    li_my_reservations.appendChild(a_my_reservations);
    return li_my_reservations;
}

function createListItemReservation () {
    /** Creates the list reservation item */
    let li_reservation = document.createElement('li');
    li_reservation.setAttribute('class', 'nav-item dropdown');
    let a_reservation = document.createElement('a');
    a_reservation.setAttribute('class', 'nav-link dropdown-toggle');
    a_reservation.setAttribute('href', '#');
    a_reservation.setAttribute('id', 'navbarDropdown');
    a_reservation.setAttribute('role', 'button');
    a_reservation.setAttribute('data-toggle', 'dropdown');
    a_reservation.setAttribute('aria-haspopup', 'true');
    a_reservation.setAttribute('aria-expanded', 'false');
    a_reservation.textContent = "Reservation";
    li_reservation.appendChild(a_reservation);

    let div_reservation = document.createElement('div');
    div_reservation.setAttribute('class', 'dropdown-menu');
    div_reservation.setAttribute('aria-labelledby', 'navbarDropdown');
    let a_book = document.createElement('a');
    a_book.setAttribute('class', 'dropdown-item');
    a_book.setAttribute('href', '#');
    a_book.setAttribute('id', 'bookReservation');
    a_book.textContent = "Book";
    let a_cancel = document.createElement('a');
    a_cancel.setAttribute('class', 'dropdown-item');
    a_cancel.setAttribute('href', 'cancel_reservation.php');
    a_cancel.setAttribute('id', 'cancelReservation');
    a_cancel.textContent = "Cancel";
    div_reservation.appendChild(a_book);
    div_reservation.appendChild(a_cancel);
    li_reservation.appendChild(div_reservation);
    return li_reservation;
}

function createAvailabilityElement() {
    /** Creates the list availability item */
    let li_availability = document.createElement('li');
    li_availability.setAttribute('class', 'nav-item');
    let a_availability = document.createElement('a');
    a_availability.setAttribute('class','nav-link');
    a_availability.setAttribute('href','#');
    a_availability.setAttribute('id','availability');
    a_availability.textContent = "Availability";
    li_availability.appendChild(a_availability);
    return li_availability;

}

function createFormToLogOut () {
    let form_log_out = document.createElement('form');
    form_log_out.setAttribute('class', 'form-inline my-2 my-lg-0');
    form_log_out.setAttribute('action', 'logout.php');
    let button_log_out = document.createElement('button');
    button_log_out.setAttribute('class', 'btn btn-primary my-2 my-sm-0');
    button_log_out.setAttribute('type', 'submit');
    button_log_out.textContent = "Log Out";
    form_log_out.appendChild(button_log_out);
    return form_log_out;
}
