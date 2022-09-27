

const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-ul");

hamburger_menu.addEventListener( "click", () =>
{
  hamburger_menu.classList.toggle( "change" );
  navbar.classList.toggle( "new-ul" );
} );

document.querySelectorAll( ".nav-li a" ).forEach( a => a.addEventListener( "click", () =>
{
  hamburger_menu.classList.remove( "change" );
} ) );




//  count






// const credit = [
//   { name: 'payment history', value: 'paymentHistory' },
//   { name: 'credit card utilization', value: 'creditCardUtilization' },
//   { name: 'credit history', value: 'creditHistory' },
//   { name: 'total accounts', value: 'totalAccounts' },
//   { name: 'credit enquiries', value: 'creditEnquiries' },
// ]