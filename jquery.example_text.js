(function($) {
  //
  // simple javascript plugin to add example text to input elements, which 
  // clears on focus and puts it back if no text is entered
  //
  $.fn.example_text = function(options) {
    // build main options
    var opts = $.extend({}, $.fn.example_text.defaults, options);
    // iterate and reformat each matched element
    return this.each(function() {
      $this = $(this);
      // build element specific options
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
     
     // do plugin stuff here
     $this.css({ color: o.example_text_colour }).attr({ value: o.example_text }).focus(function(){
       if($(this).val()==o.example_text){
         $(this).val("").css({ color: o.normal_text_colour });
       }
     }).blur(function(){
       if($(this).val()==""){
         $(this).css({ color: o.example_text_colour }).val(o.example_text);
       }
     });
    
    });
  };
  //
  // plugin defaults
  //
  $.fn.example_text.defaults = {
      example_text: 'Please enter a value',
      example_text_colour: '#b2adad',
      normal_text_colour: '#000'
  };
//
// end of closure
//
})(jQuery);