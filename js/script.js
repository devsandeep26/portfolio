/***********************************************************************************
   * I have used jquery library for having some navbar and animations functionality
   *********************************************************************************/
$(function() {
  /**************************************************************
   * I have use wow js library for revealing animations on scroll
   * Below line helps us to initialize wow js library
   ***************************************************************/
  new WOW().init();
  /********************************************************************
   * Below line helps us to toggle the navigation bar's hamburger menu
   *********************************************************************/
  let mainNav = $('#js-menu');
  let navBarToggle = $('#js-navbar-toggle');
  let navLinks = $('.nav-links');
  navBarToggle.click(() => {
    mainNav.toggleClass('active');
  });
  /********************************************************************
   * Below line helps us to toggle the navigation bar's menu list 
   *********************************************************************/
  navLinks.click(() => {
    mainNav.toggleClass('active');
  });
  /****************************************************************************
   * Below line helps us to make smooth scroll effect on clicking anchor links
   *****************************************************************************/
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
});