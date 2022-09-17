

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




