# Twitter Bootstrap Auto Refresh Tooltip

A simple plugin that changes the tooltip message on the fly while it's been shown calling to the "autoRefresh" function.



## Requirements

* [Twitter Bootstrap](http://twitter.github.com/bootstrap/index.html) 2.1.0 and the [Tooltip plugin](http://twitter.github.com/bootstrap/javascript.html#tooltips).
* [jQuery](http://jquery.com) 1.8.1.


## Usage

Add the JS file.

	<script src="autorefreshtooltip.js"></script>

Call the plugin instead of using the usual twitter bootstrap tooltip.

	$('#inputfield').autorefreshtooltip();
	
While the plugin shows the tooltip message, every time it's called "autoRefresh", the message will update with the
new title string.

	$('#inputfield').autorefreshtooltip("autoRefresh");	

Note that you can force the tooltip to show calling:

	$('#inputfield').autorefreshtooltip("show");	


## Change log

### 0.1
* First update