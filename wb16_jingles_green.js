   
   $(document).ready(function()
   {
      $('#headerMenu .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.headerMenu-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("#Carousel1").bootstrapcarousel({interval:3000, pause: false});
      $("#ThemeableButton1").button({ icon: 'ui-primary', iconPosition: 'beginning' });
      $("#ThemeableButton2").button({ icon: 'ui-primary', iconPosition: 'beginning' });
   });
