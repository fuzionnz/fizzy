(function ($, viewport) {
  Drupal.behaviors.fizzy = {
    attach: function (context, settings) {
      // https://github.com/maciej-gurban/responsive-bootstrap-toolkit/issues/19 ?
      if (!$('.responsive-bootstrap-toolkit').length) {
        $('body').append('<div class="responsive-bootstrap-toolkit"></div>');
      }

      setTimeout(Drupal.behaviors.fizzy.mobileSearchInitialState, 500);

      $(window).resize(
        viewport.changed(function() {
          Drupal.behaviors.fizzy.mobileSearchInitialState();
        })
      );
    },

    mobileSearchInitialState: function() {
      console.log(viewport.current());
      if(viewport.is('<=sm')) {
        $('.search-wrapper').removeClass('in');
      }
    }
  }
})(jQuery, ResponsiveBootstrapToolkit);
