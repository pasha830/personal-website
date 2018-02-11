$(document).ready(function() {

  $("#owl-demo").owlCarousel({

    navigation : true, // Show next and prev buttons
    navigationText:	["<",">"],
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });
 //
 //
 //  $("#owl-demo").owlCarousel({
 //
 //    navigation : true, // Show next and prev buttons
 //    slideSpeed : 300,
 //    paginationSpeed : 400,
 //    singleItem:true,
 //        navigationText : ["<i class='fa fa-arrow-left' aria-hidden=true'></i>","<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
 //
 //    // "singleItem:true" is a shortcut for:
 //    // items : 1,
 //    // itemsDesktop : false,
 //    // itemsDesktopSmall : false,
 //    // itemsTablet: false,
 //    // itemsMobile : false
 // });

});

