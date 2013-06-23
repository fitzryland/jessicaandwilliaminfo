jQuery(document).ready(function() {
	if (jQuery('#submit').length > 0) {
		var $submit = jQuery('#submit'),
			$input = jQuery('#oneTimeCashInput'),
			form = document.oneTimeCash,
			payPalPriceInput = form.amount,
			payPalItemDescription = form.item_name,
			amount,
			descriptionBase = "Your contribution to William and Jessica of $",
			description;
		function updateContribution() {
			amount = $input.val();
			description = descriptionBase + amount;
			payPalPriceInput.value = amount;
			payPalItemDescription.value = description;
			errorHandle();
		}
		function errorHandle() {
			if ( amount <= 0 || isNaN(amount) ) {
				amount = 0;
				$submit.addClass('noClick');
			} else {
				$submit.removeClass('noClick');
			}
		}
		function submitHandle() {
			if ( amount !== 0 ) {
				form.submit();
			}
		}
		$input.blur(function() {
			updateContribution();
		});
		$input.keypress(function() {
			updateContribution();
		});
		$submit.click(function() {
			updateContribution();
			submitHandle();
		});
		jQuery('#cashButton').click(function() {
			console.log('BOOM');
			jQuery('#cashWrapID').slideToggle('slow');
		});
	}
});
