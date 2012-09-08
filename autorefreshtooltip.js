   /*
	*	@name							Twitter Bootstrap Auto Refreshing Tooltip
	*	@descripton						
	*	@version						0.1
	*	@requires						Jquery 1.8.1
	*
	*	@author							Joseba Juániz
	*	@author-email					joseba@cyneek.com
	*	@author-website					http://cyneek.com
	*
	*	@licens							MIT License - http://www.opensource.org/licenses/mit-license.php
	*/


(function($){	
	
 /* AUTOREFRESHTOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var AutoRefreshTooltip = function ( element, options ) {
    this.init('autorefreshtooltip', element, options)
  }


  /* NOTE: AUTOREFRESHTOOLTIP EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  AutoRefreshTooltip.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {
    constructor: AutoRefreshTooltip,
    show_original	: $.fn.tooltip.Constructor.prototype.show,
    is_shown	: false,
	show	: function(){
		this.is_shown = true;
		this.show_original.apply(this);
	},
	hide_original	: $.fn.tooltip.Constructor.prototype.hide,
	hide	: function(){
		this.is_shown = false;
		this.hide_original.apply(this);		
	},
	autoRefresh	: function(){
		if(this.is_shown == true)
		{
			 var $tip = this.tip()
		        , title = this.getTitle()
			  if(!title)
			  {
			  	this.hide();
			  }
			  else
			  {
			  	$tip.find('.tooltip-inner')[this.isHTML(title) ? 'html' : 'text'](title);
			  }
		}
	}

  });

 /* AUTOREFRESHTOOLTIP PLUGIN DEFINITION
  * ======================= */

  $.fn.autorefreshtooltip = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('autorefreshtooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('autorefreshtooltip', (data = new AutoRefreshTooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.autorefreshtooltip.Constructor = AutoRefreshTooltip

  $.fn.autorefreshtooltip.defaults = $.extend({} , $.fn.tooltip.defaults, {  })

	
})(jQuery);