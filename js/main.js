jQuery(document).ready(function() {
	if (jQuery('#submit').length > 0) {
		var $submit = jQuery('#submit'),
			$input = jQuery('#oneTimeCashInput'),
			form = document.oneTimeCash,
			payPalPriceInput = form.amount,
			payPalItemDescription = form.item_name,
			amount,
			descriptionBase = "Your contribution to William and Jessica of $",
			description,
			doForm = {
				updateContribution: function() {
					amount = $input.val();
					description = descriptionBase + amount;
					payPalPriceInput.value = amount;
					payPalItemDescription.value = description;
					this.errorHandle();
				},
				errorHandle: function() {
					if ( amount <= 0 || isNaN(amount) ) {
						amount = 0;
						$submit.addClass('noClick');
					} else {
						$submit.removeClass('noClick');
					}
				},
				submitHandle: function() {
					if ( amount !== 0 ) {
						form.submit();
					}
				}
			};
		$input.blur(function() {
			doForm.updateContribution();
		});
		$input.keypress(function() {
			doForm.updateContribution();
		});
		$submit.click(function() {
			doForm.updateContribution();
			doForm.submitHandle();
		});
		jQuery('#cashButton').click(function() {
			jQuery('#cashWrapID').slideToggle('slow');
		});
	}

});
